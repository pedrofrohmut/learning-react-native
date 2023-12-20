import { useEffect, useState } from "react"
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { ChevronLeftIcon, HeartIcon as EmptyHeartIcon } from "react-native-heroicons/outline"
import { HeartIcon as FullHeartIcon } from "react-native-heroicons/solid"
import { LinearGradient } from "expo-linear-gradient"

import { COLORS } from "../constants"
import CustomSafeAreaView from "../components/shared/CustomSafeAreaView"
import CastMembers from "../components/movie-list/CastMembers"
import MovieList from "../components/home/MovieList"

const dimensions = Dimensions.get("screen")

const MovieScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()

    const [isFavorite, setIsFavorite] = useState(false)
    const [cast, setCast] = useState([1, 2, 3, 4, 5])
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5])

    const movieName = route.params

    // useEffect(() => {}, [route.params])

    return (
        <ScrollView className="flex-1 bg-neutral-900">
            {/* Image and buttons container */}
            <View className="relative">
                <Image
                    source={require("../assets/images/moviePoster2.png")}
                    style={{ width: dimensions.width, height: dimensions.height * 0.55 }}
                />

                <LinearGradient
                    colors={["transparent", "#0008", "#000a", "#000e"]}
                    style={{ width: "100%", height: dimensions.height * 0.48 }}
                    className="absolute bottom-0"
                />

                {/* Container For Back and Favorite Buttons */}
                <CustomSafeAreaView style={{ position: "absolute", width: "100%" }}>
                    <View className="flex-row items-center justify-between px-4 py-3">
                        <TouchableOpacity
                            style={{ backgroundColor: COLORS.primary }}
                            className="rounded-xl p-1"
                            onPress={() => navigation.goBack()}
                        >
                            <ChevronLeftIcon size={28} strokeWidth={2} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
                            {isFavorite && <FullHeartIcon size={35} color={COLORS.primary} />}
                            {!isFavorite && <EmptyHeartIcon size={35} color={COLORS.primary} />}
                        </TouchableOpacity>
                    </View>
                </CustomSafeAreaView>
            </View>

            {/* Movie Details */}
            <View style={{ marginTop: -80 }} className="mb-8">
                {/* Title */}
                <Text className="text-white text-3xl text-center font-bold tracking-widest mb-3">
                    {movieName}
                </Text>

                {/* Status, release, runtime */}
                <Text className="text-neutral-400 text-base font-semibold text-center mb-2">
                    Realeased - 2020 - 170 min
                </Text>

                {/* Genres */}
                <View className="flex-row items-center justify-center mb-4">
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Action -{" "}
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Thrill -{" "}
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Comedy
                    </Text>
                </View>

                {/* Description */}
                <Text className="text-neutral-400 tracking-wide text-justify px-4">
                    Elit dicta doloremque accusamus repudiandae modi voluptate! Est explicabo veniam
                    magnam reiciendis assumenda. Eligendi saepe nam voluptatum ea suscipit. Corporis
                    dolores ipsum esse ea veniam. Deleniti similique nesciunt aperiam consectetur
                    quam eveniet? Quis expedita voluptatum ad optio ipsum Quae nemo.
                </Text>
            </View>

            {/* Cast Members */}
            <CastMembers cast={cast} navigation={navigation} />

            {/* Similar Movies */}
            <MovieList
                title="Similar Movies"
                hideSeeAll={true}
                data={similarMovies}
                navigation={navigation}
            />
        </ScrollView>
    )
}

export default MovieScreen
