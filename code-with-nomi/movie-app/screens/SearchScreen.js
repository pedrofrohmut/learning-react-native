import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { Dimensions, Keyboard, TextInput, TouchableOpacity, View } from "react-native"
import { XMarkIcon } from "react-native-heroicons/solid"

import CustomSafeAreaView from "../components/shared/CustomSafeAreaView"
import BackButton from "../components/shared/BackButton"
import SearchResults from "../components/search/SearchResults"
import Loading from "../components/shared/Loading"
import SearchKeywords from "../components/search/SearchKeywords"

import { fetchSearchKeywords, fetchSearchMulti } from "../api/moviedb"

const dimensions = Dimensions.get("screen")

const SearchScreen = () => {
    const navigation = useNavigation()

    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])
    const [keywords, setKeywords] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    const clearAndGoHome = () => {
        setQuery("")
        setResults([])
        setKeywords([])
        Keyboard.dismiss()
        setIsLoading(false)
        navigation.navigate("HomeScreen")
    }

    const performSearch = () => {
        if (!query || query.length <= 2) return
        setIsLoading(true)
        Keyboard.dismiss()
        fetchSearchMulti(query).then((searchResults) => {
            setResults(searchResults)
            setIsLoading(false)
        })
    }

    const handleKeywordSelect = (term) => {
        setQuery(term)
        performSearch()
    }

    useEffect(() => {
        if (query.length > 2) {
            fetchSearchKeywords(query).then((searchKeywords) => {
                setKeywords(searchKeywords)
            })
        } else {
            setKeywords([])
        }
    }, [query])

    return (
        <View className="flex-1 bg-neutral-900">
            <CustomSafeAreaView>
                <View className="flex-row border border-neutral-500 rounded-2xl mx-3 mt-3 mb-2">
                    {/* Search Input */}
                    <TextInput
                        placeholder="Search Movie"
                        placeholderTextColor="#888"
                        className="flex-1 text-white rounded-full pl-5 pb-1 text-lg"
                        value={query}
                        onChangeText={(x) => setQuery(x)}
                        onSubmitEditing={() => performSearch()}
                    />

                    {/* Clear Search Btn */}
                    <TouchableOpacity
                        className="rounded-full p-3 m-1"
                        onPress={() => clearAndGoHome()}
                    >
                        <XMarkIcon size={32} color="white" />
                    </TouchableOpacity>
                </View>

                {isLoading && <Loading />}

                {!isLoading && results?.length === 0 && keywords.length > 0 && (
                    <SearchKeywords keywords={keywords} handleKeywordSelect={handleKeywordSelect} />
                )}

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
