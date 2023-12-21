import { Image, TouchableOpacity, View } from "react-native"
import { ScrollView, Text } from "react-native"
import { strFmtBySize } from "../../shared/utils"
import { MOVIE_NAME } from "../../shared/constants"

const SearchResults = ({ results, dimensions, navigation }) => {
    if (results.length === 0) {
        return (
            <View className="flex-row justify-center">
                <Image
                    source={require("../../assets/images/movieTime.png")}
                    className="w-96 h-96"
                />
            </View>
        )
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15 }}
        >
            <Text className="text-white text-lg font-semibold mb-3">
                Results ({results.length})
            </Text>
            <View className="flex-row flex-wrap justify-between">
                {results?.map((movie, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigation.navigate("MovieScreen", movie)}
                        className="mb-6"
                    >
                        <Image
                            source={require("../../assets/images/moviePoster2.png")}
                            style={{
                                width: dimensions.width * 0.44,
                                height: dimensions.height * 0.3
                            }}
                            className="mb-1"
                        />
                        <Text className="text-neutral-400 text-center">
                            {strFmtBySize(MOVIE_NAME, 23)}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

export default SearchResults
