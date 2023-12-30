import { ScrollView, Text, TouchableOpacity, View } from "react-native"

const SearchKeywords = ({ keywords, handleKeywordSelect }) => {
    return (
        <View>
            <ScrollView
                style={{ height: 280 }}
                className="border-2 border-neutral-500 mx-3 rounded-2xl"
            >
                {keywords?.map((keyword) => (
                    <TouchableOpacity
                        key={keyword.id}
                        className="my-1 mx-2 p-1"
                        onPress={() => handleKeywordSelect(keyword.name)}
                    >
                        <Text className="text-base text-neutral-300">{keyword.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default SearchKeywords
