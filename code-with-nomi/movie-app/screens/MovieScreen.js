import { useEffect, useState } from "react"
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { HeartIcon as EmptyHeartIcon } from "react-native-heroicons/outline"
import { HeartIcon as FullHeartIcon } from "react-native-heroicons/solid"
import { LinearGradient } from "expo-linear-gradient"

import { COLORS } from "../shared/constants"
import CustomSafeAreaView from "../components/shared/CustomSafeAreaView"
import CastMembers from "../components/movie-list/CastMembers"
import MovieList from "../components/home/MovieList"
import BackButton from "../components/shared/BackButton"
import LoadingScreen from "./LoadingScreen"
import {
    fetchMovieCast,
    fetchMovieCredits,
    fetchMovieDetails,
    fetchSimilarMovies,
    imageUri500
} from "../api/moviedb"

const dimensions = Dimensions.get("screen")

const MovieScreen = () => {
    const navigation = useNavigation()

    const route = useRoute()

    const movieId = route.params.id

    const [isFavorite, setIsFavorite] = useState(false)
    const [cast, setCast] = useState([1, 2, 3, 4, 5])
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5])
    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

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
                    source={{ uri: imageUri500(movie.poster_path) }}
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
                    {movie.original_title}
                </Text>

                {/* Status, release, runtime */}
                <Text className="text-neutral-400 text-base font-semibold text-center mb-2">
                    {movie.status} - {movie.release_date} - {movie.runtime}
                </Text>

                {/* Genres */}
                {movie.genres && movie.genres.length > 0 && (
                    <View className="flex-row items-center justify-center mb-4">
                        <Text className="text-neutral-400 text-base text-center">
                            {movie.genres.map(({ name }) => name).join(" - ")}
                        </Text>
                    </View>
                )}

                {/* Description */}
                <Text className="text-neutral-400 tracking-wide text-justify px-4">
                    {movie.overview}
                </Text>
            </View>

            {/* Cast Members */}
            {cast && cast.length > 0 && <CastMembers cast={cast} navigation={navigation} />}

            {/* Similar Movies */}
            {similarMovies && similarMovies.length > 0 && (
                <MovieList
                    title="Similar Movies"
                    hideSeeAll={true}
                    data={similarMovies}
                    navigation={navigation}
                />
            )}
        </ScrollView>
    )
}

export default MovieScreen
