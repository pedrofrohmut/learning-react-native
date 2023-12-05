import { ScrollView, Text, View } from "react-native"
import { ArrowRightIcon } from "react-native-heroicons/outline"
import RestaurantCard from "./RestaurantCard"
import { SUSHI_IMAGE } from "../contants"

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View className="mb-3">
            <View className="flex-row items-center justify-between">
                <View>
                    <Text className="font-bold text-2xl text-black">{title}</Text>
                    <Text className="text-sm text-gray-700 mb-3">{description}</Text>
                </View>
                <ArrowRightIcon size={35} color="#0cb" />
            </View>

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: "1rem",
                    paddingTop: "0.75rem",
                    paddingBottom: "1.5rem"
                }}
                horizontal
                className="pb-2"
                showsHorizontalScrollIndicator
            >
                <RestaurantCard
                    id="1"
                    imageUrl={SUSHI_IMAGE}
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="Main St, 123"
                    shortDescription="This is a test description"
                    dishes={[]}
                    long={20}
                    lat={10}
                />
            </ScrollView>
        </View>
    )
}

export default FeaturedRow
