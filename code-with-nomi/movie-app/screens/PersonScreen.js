import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { Dimensions, Image, ScrollView, TouchableOpacity, View, Text } from "react-native"
import { HeartIcon as EmptyHeartIcon } from "react-native-heroicons/outline"
import { HeartIcon as FullHeartIcon } from "react-native-heroicons/solid"

import { COLORS } from "../shared/constants"
import CustomSafeAreaView from "../components/shared/CustomSafeAreaView"
import CircleShapeWrapper from "../components/shared/CircleShapeWrapper"
import MovieList from "../components/home/MovieList"
import BackButton from "../components/shared/BackButton"

const dimensions = Dimensions.get("screen")

const PersonScreen = () => {
    const navigation = useNavigation()

    const [isFavorite, setIsFavorite] = useState(false)
    const [personMovies, setPersonMovies] = useState([1, 2, 3, 4])

    return (
        <ScrollView className="bg-neutral-900">
            <CustomSafeAreaView>
                <View className="flex-row items-center justify-between px-4 py-3">
                    <BackButton navigation={navigation} />

                    {/* Favorite Btn */}
                    <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
                        {isFavorite && <FullHeartIcon size={35} color={COLORS.primary} />}
                        {!isFavorite && <EmptyHeartIcon size={35} color={COLORS.primary} />}
                    </TouchableOpacity>
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
                            source={require("../assets/images/castImage2.png")}
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
                        Keanu Reeves
                    </Text>
                    <Text className="text-base text-neutral-500 text-center">
                        London, United Kingdom
                    </Text>
                </View>

                {/* Highlights */}
                <View className="mx-3 py-4 px-6 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Gender</Text>
                        <Text className="text-neutral-300 text-sm">Male</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Birthday</Text>
                        <Text className="text-neutral-300 text-sm">1965-03-01</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Know for</Text>
                        <Text className="text-neutral-300 text-sm">Acting</Text>
                    </View>
                    <View className="px-2 items-center">
                        <Text className="text-white font-semibold">Popularity</Text>
                        <Text className="text-neutral-300 text-sm">65.33</Text>
                    </View>
                </View>

                {/* Biography */}
                <View className="my-6 mx-4 space-y-2">
                    <Text className="text-white text-lg">Biography</Text>
                    <Text className="text-neutral-400 tracking-wide">
                        Adipisicing quasi magni omnis dolorem tempora Eveniet iure qui quasi at
                        recusandae ex, nihil culpa. Similique ullam ex saepe totam voluptas. Nostrum
                        suscipit non voluptatibus ex aut dignissimos ducimus Consequuntur eius autem
                        fuga distinctio voluptatibus. Nostrum exercitationem totam accusantium
                        explicabo nam nemo illo Laboriosam facere perferendis vel sapiente ipsa?
                        Quae consectetur ea nulla ullam amet Corporis aut corporis illo qui cumque
                        quas totam nemo rerum obcaecati? Tempore sed voluptatem repellendus animi
                        culpa accusamus Laudantium praesentium optio unde et eum Veniam alias dolor
                        tempore nostrum consequatur Illum eligendi repellendus dolorem nam minima?
                        Aut ducimus autem magni officia unde veritatis aspernatur officia. Fuga enim
                        fuga ex blanditiis necessitatibus? Nulla atque dolorem asperiores odit esse
                        unde. Ipsam maxime a inventore reiciendis voluptas reprehenderit?
                    </Text>
                </View>

                {/* Movies */}
                <View>
                    <MovieList title="Movies" hideSeeAll data={personMovies} />
                </View>
            </CustomSafeAreaView>
        </ScrollView>
    )
}

export default PersonScreen
