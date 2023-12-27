import { Text, TouchableOpacity, View } from "react-native"

const SearchKeywords = ({ keywords, handleKeywordSelect }) => {
    return (
        <View>
            {keywords?.map((keyword) => (
                <TouchableOpacity
                    key={keyword.id}
                    className="my-1 mx-2 p-1"
                    onPress={() => handleKeywordSelect(keyword.name)}
                >
                    <Text className="text-base text-neutral-300">{keyword.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default SearchKeywords
