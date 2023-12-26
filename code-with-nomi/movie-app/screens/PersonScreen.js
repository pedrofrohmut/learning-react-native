import { useEffect, useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Dimensions, Image, ScrollView, View, Text } from "react-native"

import CustomSafeAreaView from "../components/shared/CustomSafeAreaView"
import CircleShapeWrapper from "../components/shared/CircleShapeWrapper"
import MovieList from "../components/home/MovieList"
import BackButton from "../components/shared/BackButton"
import FavoriteButton from "../components/shared/FavoriteButton"
import LongText from "../components/shared/LongText"
import LoadingScreen from "./LoadingScreen"

import {
    fallbackPersonImage,
    fetchPersonDetails,
    fetchPersonMovies,
    getStringFromGenderId,
    imageUri500
} from "../api/moviedb"

const dimensions = Dimensions.get("screen")

const PersonScreen = () => {
    const navigation = useNavigation()

    const [isFavorite, setIsFavorite] = useState(false)
    const [person, setPerson] = useState(null)
    const [personMovies, setPersonMovies] = useState([1, 2, 3, 4])
    const [isLoading, setIsLoading] = useState(true)

    const route = useRoute()
    const personId = route.params.id

    useEffect(() => {
        Promise.all([fetchPersonDetails(personId), fetchPersonMovies(personId)]).then((data) => {
            setPerson(data[0])
            setPersonMovies(data[1])
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <LoadingScreen navigation={navigation} />
    }

    return (
        <ScrollView className="bg-neutral-900">
            <CustomSafeAreaView>
                <View className="flex-row items-center justify-between px-4 py-3">
                    <BackButton navigation={navigation} />
                    <FavoriteButton isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
                </View>

                {/* Image Wrapper and Shadow */}
                <View
                    className="flex-row justify-center rounded-full"
                    style={{
                        elevation: 20,
                        backgroundColor: "#0000",
                        shadowColor: "gray",
                        shadowRadius: 40,
                        shadowOffset: { width: 5, height: 5 },
                        shadowOpacity: 1
                    }}
                >
                    <CircleShapeWrapper width={288} height={288}>
                        <Image
                            source={{
                                uri: imageUri500(person.profile_path) || fallbackPersonImage
                            }}
                            style={{
                                width: dimensions.width * 0.74,
                                height: dimensions.height * 0.43
                            }}
                        />
                    </CircleShapeWrapper>
                </View>

                {/* Name & Location */}
                <View className="mt-6">
                    <Text className="text-3xl text-white font-bold text-center mb-1">
                        {person.name}
                    </Text>
                    <Text className="text-base text-neutral-500 text-center">
                        {person.place_of_birth}
                    </Text>
                </View>

                {/* Highlights */}
                <View className="mx-3 py-4 px-6 mt-6 flex-row items-center justify-evenly bg-neutral-700 rounded-full">
                    <View className="border-r-2 border-r-neutral-400 px-2 flex-col items-center justify-center">
                        <Text className="text-white font-semibold">Gender</Text>
                        <Text className="text-neutral-300 text-sm">
                            {getStringFromGenderId(person.gender)}
                        </Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 flex-col items-center justify-center">
                        <Text className="text-white font-semibold">Birthday</Text>
                        <Text className="text-neutral-300 text-sm">{person.birthday}</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 flex-col items-center justify-center">
                        <Text className="text-white font-semibold">Know for</Text>
                        <Text className="text-neutral-300 text-sm">
                            {person.known_for_department}
                        </Text>
                    </View>
                    <View className="px-2 flex-col items-center justify-center">
                        <Text className="text-white font-semibold">Popularity</Text>
                        <Text className="text-neutral-300 text-sm">{person.popularity}</Text>
                    </View>
                </View>

                {/* Biography */}
                <View className="my-6 mx-4 space-y-2">
                    <Text className="text-white text-lg">Biography</Text>
                    <LongText text={person.biography} length={180} />
                </View>

                {/* Movies */}
                {personMovies && personMovies.length > 0 && (
                    <MovieList title="Movies" hideSeeAll data={personMovies} />
                )}
            </CustomSafeAreaView>
        </ScrollView>
    )
}

export default PersonScreen
