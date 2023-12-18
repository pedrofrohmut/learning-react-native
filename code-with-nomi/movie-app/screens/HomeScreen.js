import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"

import CustomSafeAreaView from "../components/CustomSafeAreaView"
import TrendingMoviesCarousel from "../components/TrendingMoviesCarousel"
import { COLORS } from "../constants"

const HomeScreen = () => {
    const [trending, setTrending] = useState([1, 2, 3])

    return (
        <View className="flex-1 bg-neutral-800">
            <CustomSafeAreaView>
                {/* Search Bar and Logo */}
                <View className="flex-row justify-between items-center px-4">
                    <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
                    <Text className="text-white text-3xl font-bold">
                        <Text style={{ color: COLORS.primary }}>M</Text>
                        ovie
                    </Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 10 }}
                >
                    {/* Trending Movies Carousel */}
                    <TrendingMoviesCarousel data={trending} />
                </ScrollView>
            </CustomSafeAreaView>
        </View>
    )
}

export default HomeScreen
