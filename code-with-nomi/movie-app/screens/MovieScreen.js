import { useEffect, useState } from "react"
import { Dimensions, Image, ScrollView, Text, View } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"

import CustomSafeAreaView from "../components/shared/CustomSafeAreaView"
import CastMembers from "../components/movie-list/CastMembers"
import MovieList from "../components/home/MovieList"
import BackButton from "../components/shared/BackButton"
import LoadingScreen from "./LoadingScreen"
import { fetchMovieCast, fetchMovieDetails, fetchSimilarMovies, imageUri500 } from "../api/moviedb"
import { getYearFromDate } from "../shared/utils"
import FavoriteButton from "../components/shared/FavoriteButton"
import LongText from "../components/shared/LongText"

const dimensions = Dimensions.get("screen")

const MovieScreen = () => {
    const navigation = useNavigation()

    const route = useRoute()
    const movieId = route.params.id

    const [isLoading, setIsLoading] = useState(true)
    const [isFavorite, setIsFavorite] = useState(false)
    const [movie, setMovie] = useState(null)
    const [cast, setCast] = useState([])
    const [similarMovies, setSimilarMovies] = useState([])

    useEffect(() => {
        Promise.all([
            fetchMovieDetails(movieId),
            fetchMovieCast(movieId),
            fetchSimilarMovies(movieId)
        ]).then((data) => {
            setMovie(data[0])
            setCast(data[1])
            setSimilarMovies(data[2])
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <LoadingScreen navigation={navigation} />
    }

    return (
        <ScrollView className="flex-1 bg-neutral-900">
            {/* Image and buttons container */}
            <View className="relative">
                <Image
                    source={
                        movie.poster_path
                            ? { uri: imageUri500(movie.poster_path) }
                            : require("../assets/fallback-movie-poster.jpg")
                    }
                    style={{ width: dimensions.width, height: dimensions.height * 0.55 }}
                />

                <LinearGradient
                    colors={["transparent", "#000a", "#000"]}
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

            {/* Movie Details */}
            <View style={{ marginTop: -100 }} className="mb-8 bg-[#0007] py-3 px-1">
                {/* Title */}
                <Text className="text-white text-4xl text-center font-bold tracking-widest mb-3">
                    {movie.title}
                </Text>

                {/* Genres */}
                {movie.genres && movie.genres.length > 0 && (
                    <View className="flex-row items-center justify-center mb-2">
                        <Text className="text-neutral-400 text-base font-semibold text-center">
                            {movie.genres.map(({ name }) => name).join(" - ")}
                        </Text>
                    </View>
                )}

                {/* Status, release, runtime */}
                <Text className="text-neutral-400 text-sm text-center mb-4">
                    {`${movie.status} - ${getYearFromDate(movie.release_date)} - ${
                        movie.runtime
                    } min`}
                </Text>
            </View>

            {/* Description / Overview */}
            <View className="px-4 mb-5">
                <LongText text={movie.overview} length={120} />
            </View>

            {/* Cast Members */}
            {cast && cast.length > 0 && <CastMembers cast={cast} navigation={navigation} />}

            {/* Similar Movies */}
            {similarMovies && similarMovies.length > 0 && (
                <MovieList
                    title="Similar Movies"
                    hideSeeAll
                    data={similarMovies}
                    navigation={navigation}
                />
            )}
        </ScrollView>
    )
}

export default MovieScreen
