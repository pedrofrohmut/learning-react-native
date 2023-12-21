import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import {
    Dimensions,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native"
import { XMarkIcon } from "react-native-heroicons/solid"

import { MOVIE_NAME } from "../shared/constants"
import { movieFmtd } from "../shared/utils"
import CustomSafeAreaView from "../components/shared/CustomSafeAreaView"
import BackButton from "../components/shared/BackButton"

const dimensions = Dimensions.get("screen")

const SearchScreen = () => {
    const navigation = useNavigation()

    const [text, setText] = useState("")
    const [results, setResults] = useState([1, 2, 3, 4])

    return (
        <View className="flex-1 bg-neutral-900">
            <CustomSafeAreaView>
                <View className="flex-row px-4 py-3">
                    <BackButton navigation={navigation} />
                </View>

                <View className="flex-row border border-neutral-500 rounded-full mx-3 mb-5">
                    {/* Search Input */}
                    <TextInput
                        placeholder="Search Movie"
                        placeholderTextColor="#888"
                        className="text-white rounded-full flex-1 pl-5 pb-1 text-lg"
                        value={text}
                        onChangeText={(x) => setText(x)}
                    />
                    {/* Clear Search Btn */}
                    <TouchableOpacity
                        className="rounded-full p-3 m-1 bg-neutral-500"
                        onPress={() => setText("")}
                    >
                        <XMarkIcon size={25} color="white" />
                    </TouchableOpacity>
                </View>

                {/* Search Results */}
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
                                className="mb-5"
                            >
                                <Image
                                    source={require("../assets/images/moviePoster2.png")}
                                    style={{
                                        width: dimensions.width * 0.44,
                                        height: dimensions.height * 0.3
                                    }}
                                />
                                <Text className="text-neutral-400 text-center">
                                    {movieFmtd(MOVIE_NAME)}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </CustomSafeAreaView>
        </View>
    )
}

export default SearchScreen
