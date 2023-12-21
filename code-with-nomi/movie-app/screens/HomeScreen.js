import { useState } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"

import { COLORS } from "../shared/constants"
import CustomSafeAreaView from "../components/shared/CustomSafeAreaView"
import TrendingMoviesCarousel from "../components/home/TrendingMoviesCarousel"
import MovieList from "../components/home/MovieList"
import { useNavigation } from "@react-navigation/native"

const HomeScreen = () => {
    const navigation = useNavigation()

    const [trending, setTrending] = useState([1, 2, 3])
    const [upcoming, setUpcoming] = useState([1, 2, 3])
    const [topRated, setTopRated] = useState([1, 2, 3])

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

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 10 }}
                >
                    {/* Trending Movies Carousel */}
                    <TrendingMoviesCarousel data={trending} navigation={navigation} />

                    {/* Upcoming Movies */}
                    <MovieList title="Upcoming" data={upcoming} navigation={navigation} />

                    {/* Top Rated Movies */}
                    <MovieList title="Top Rated" data={topRated} navigation={navigation} />
                </ScrollView>
            </CustomSafeAreaView>
        </View>
    )
}

export default HomeScreen
