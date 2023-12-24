import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"

import { COLORS } from "../shared/constants"

import CustomSafeAreaView from "../components/shared/CustomSafeAreaView"
import TrendingMoviesCarousel from "../components/home/TrendingMoviesCarousel"
import MovieList from "../components/home/MovieList"
import Loading from "../components/shared/Loading"

import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from "../api/moviedb"

const HomeScreen = () => {
    const navigation = useNavigation()

    const [trending, setTrending] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [topRated, setTopRated] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        Promise.all([fetchTrendingMovies(), fetchUpcomingMovies(), fetchTopRatedMovies()]).then(
            (data) => {
                const [trendingMovies, upcomingMovies, topRatedMovies] = data
                setTrending(trendingMovies)
                setUpcoming(upcomingMovies)
                setTopRated(topRatedMovies)
                setIsLoading(false)
            }
        )
    }, [])

    return (
        <View className="flex-1 bg-neutral-900">
            <CustomSafeAreaView>
                {/* Search Bar and Logo */}
                <View className="flex-row justify-between items-center px-4">
                    <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
                    <Text className="text-white text-3xl font-bold">
                        <Text style={{ color: COLORS.primary }}>M</Text>
                        ovie
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
                        <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>

                {isLoading && <Loading />}

                {!isLoading && (
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 10 }}
                    >
                        {/* Trending Movies Carousel */}
                        <TrendingMoviesCarousel movies={trending} navigation={navigation} />

                        {/* Upcoming Movies */}
                        <MovieList title="Upcoming" data={upcoming} navigation={navigation} />

                        {/* Top Rated Movies */}
                        <MovieList title="Top Rated" data={topRated} navigation={navigation} />
                    </ScrollView>
                )}
            </CustomSafeAreaView>
        </View>
    )
}

export default HomeScreen
