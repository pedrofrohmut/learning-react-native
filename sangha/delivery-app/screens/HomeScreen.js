import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native"
import {
    AdjustmentsVerticalIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    UserIcon
} from "react-native-heroicons/outline"

import { DELIVERY_BIKE_IMAGE } from "../contants"
import MySafeAreaView from "../components/MySafeAreaView"
import Categories from "../components/Categories"
import FeaturedRow from "../components/FeaturedRow"

const HomeScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <MySafeAreaView>
            <View className="flex-1 bg-gray-200">
                {/* Header */}
                <View className="bg-white px-3 pt-5 pb-7 mb-3">
                    <View className="flex-row items-center space-x-4 mb-4">
                        <Image
                            source={{ uri: DELIVERY_BIKE_IMAGE }}
                            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                        />

                        <View className="flex-1">
                            <Text className="text-gray-500 text-base">Delivery Now</Text>
                            <View className="flex-row items-center">
                                <Text className="font-bold text-gray-700 text-xl mr-2">
                                    Current location
                                </Text>
                                <TouchableOpacity className="p-1 bg-[#0cb]">
                                    <ChevronDownIcon size={25} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <UserIcon size={35} color="#0cb" />
                    </View>

                    {/* Search */}
                    <View className="flex-row items-center space-x-4">
                        <View className="flex-1 flex-row space-x-2 rounded-md px-3 py-2 text-white bg-gray-700">
                            <MagnifyingGlassIcon size={30} color="#0cb" />
                            <TextInput className="text-white" keyboardType="default" />
                        </View>

                        <AdjustmentsVerticalIcon size={35} color="#0cb" />
                    </View>
                </View>

                {/* Body */}
                <ScrollView className="bg-gray-200 px-3">
                    {/* Categories */}
                    <Categories />

                    {/* Featured Rows */}
                    <FeaturedRow
                        id="1"
                        title="Featured"
                        description="Paid placements from our partners"
                        featuredCategory="featured"
                    />

                    {/* Tasty Discounts */}
                    <FeaturedRow
                        id="2"
                        title="Tasty Discounts"
                        description="Everyone's been enjoying these juicy discounts"
                        featuredCategory="discounts"
                    />

                    {/* Offers near you */}
                    <FeaturedRow
                        id="3"
                        title="Offers near you"
                        description="Why not support your local restaurants tonight"
                        featuredCategory="offers"
                    />
                </ScrollView>
            </View>
        </MySafeAreaView>
    )
}

export default HomeScreen
