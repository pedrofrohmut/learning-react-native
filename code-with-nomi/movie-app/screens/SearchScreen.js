import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { Dimensions, TextInput, TouchableOpacity, View } from "react-native"
import { XMarkIcon } from "react-native-heroicons/solid"

import CustomSafeAreaView from "../components/shared/CustomSafeAreaView"
import BackButton from "../components/shared/BackButton"
import SearchResults from "../components/search/SearchResults"
import Loading from "../components/shared/Loading"

const dimensions = Dimensions.get("screen")

const SearchScreen = () => {
    const navigation = useNavigation()

    const [text, setText] = useState("")
    const [results, setResults] = useState([1, 2, 3, 4])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

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

                {isLoading && <Loading />}

                {!isLoading && (
                    <SearchResults
                        results={results}
                        dimensions={dimensions}
                        navigation={navigation}
                    />
                )}
            </CustomSafeAreaView>
        </View>
    )
}

export default SearchScreen
