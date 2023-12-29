import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from "react-native-heroicons/solid"

const hideLongText = (text, length) => `${text.slice(0, length)}...`

const LongText = ({ text, length }) => {
    const [isFull, setIsFull] = useState(false)

    if (!text || text.length < length) {
        return (
            <View>
                <Text className="text-neutral-400 tracking-wide mb-3 text-justify">
                    {text ? text : "Text not provided"}
                </Text>
            </View>
        )
    }

    return (
        <View>
            <Text className="text-neutral-400 tracking-wide mb-3 text-justify">
                {isFull ? text : hideLongText(text, length)}
            </Text>

            <TouchableOpacity
                className="mx-auto p-1 bg-transparent border-2 border-neutral-500 rounded-3xl"
                onPress={() => setIsFull(!isFull)}
            >
                {isFull ? (
                    <ChevronDoubleUpIcon size={25} color="#a3a3a3" />
                ) : (
                    <ChevronDoubleDownIcon size={25} color="#a3a3a3" />
                )}
            </TouchableOpacity>
        </View>
    )
}

export default LongText
