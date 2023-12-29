import { useEffect, useState } from "react"
import { Dimensions, Image, ScrollView, Text, View } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"

import LoadingScreen from "./LoadingScreen"
import CustomSafeAreaView from "../components/shared/CustomSafeAreaView"
import BackButton from "../components/shared/BackButton"
import FavoriteButton from "../components/shared/FavoriteButton"
import LongText from "../components/shared/LongText"
import CastMembers from "../components/movie-list/CastMembers"
import TvShowList from "../components/shared/TvShowList"

import { getYearFromDate } from "../shared/utils"
import {
    fetchSimilarTvShows,
    fetchTvShowCast,
    fetchTvShowDetails,
    imageUri500
} from "../api/moviedb"

const dimensions = Dimensions.get("screen")

const TvShowScreen = () => {
    const navigation = useNavigation()

    const route = useRoute()
    const seriesId = route.params.id

    const [isLoading, setIsLoading] = useState(true)
    const [isFavorite, setIsFavorite] = useState(false)
    const [tvShow, setTvShow] = useState(null)
    const [cast, setCast] = useState([])
    const [similar, setSimilar] = useState([])

    useEffect(() => {
        Promise.all([
            fetchTvShowDetails(seriesId),
            fetchTvShowCast(seriesId),
            fetchSimilarTvShows(seriesId)
        ]).then((data) => {
            setTvShow(data[0])
            setCast(data[1])
            setSimilar(data[2])
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <LoadingScreen navigation={navigation} />
    }

    return (
        <ScrollView className="flex-1 bg-neutral-900">
            {/* Image and buttons container */}
            <View>
                <Image
                    source={
                        tvShow.poster_path
                            ? { uri: imageUri500(tvShow.poster_path) }
                            : require("../assets/fallback-movie-poster.jpg")
                    }
                    style={{ width: dimensions.width, height: dimensions.height * 0.55 }}
                />

                <LinearGradient
                    colors={["transparent", "#0008", "#000a", "#000e"]}
                    style={{ width: "100%", height: dimensions.height * 0.48 }}
                    className="absolute bottom-0"
                />

                {/* Container For Back and Favorite Buttons: Absolute here so the overflow of image can happen */}
                <CustomSafeAreaView style={{ position: "absolute", width: "100%" }}>
                    <View className="flex-row items-center justify-between px-4 py-3">
                        <BackButton navigation={navigation} />
                        <FavoriteButton isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
                    </View>
                </CustomSafeAreaView>
            </View>

            {/* Tv Show Details */}
            <View style={{ marginTop: -80 }} className="mb-8">
                {/* Name */}
                <Text className="text-white text-4xl text-center font-bold tracking-widest mb-3">
                    {tvShow.name}
                </Text>

                {/* Genres */}
                {tvShow.genres && tvShow.genres.length > 0 && (
                    <View className="flex-row items-center justify-center mb-2">
                        <Text className="text-neutral-400 text-lg font-semibold text-center">
                            {tvShow.genres.map(({ name }) => name).join(" - ")}
                        </Text>
                    </View>
                )}

                {/* Status, release, runtime */}
                <Text className="text-neutral-400 text-base text-center mb-4">
                    {`${tvShow.status} - ${
                        tvShow.seasons[0]?.air_date
                            ? getYearFromDate(tvShow.seasons[0].air_date)
                            : "Unknown"
                    } - ${
                        tvShow.last_air_date ? getYearFromDate(tvShow.last_air_date) : "Unknown"
                    }`}
                </Text>

                {/* Description / Overview */}
                <View className="px-4">
                    <LongText text={tvShow.overview || "Discription not provided"} length={120} />
                </View>
            </View>

            {/* Cast Members */}
            {cast && cast.length > 0 && <CastMembers cast={cast} navigation={navigation} />}

            {/* Similar Tv Shows */}
            {similar && similar.length > 0 && (
                <TvShowList
                    title="Similar Tv Shows"
                    hideSeeAll
                    data={similar}
                    navigation={navigation}
                />
            )}
        </ScrollView>
    )
}

export default TvShowScreen
