import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"

import CircleShapeWrapper from "../shared/CircleShapeWrapper"

const nameFmtd = (name) => (name.length > 10 ? name.slice(0, 10) + "..." : name)

const CastMembers = ({ cast, navigation }) => {
    const personName = "Keanu Reevs"
    const characterName = "John Wick"

    return (
        <View className="mb-12">
            <Text className="text-white text-lg px-4 mb-5">Top Cast</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {cast?.map((person, index) => (
                    <TouchableOpacity
                        key={index}
                        className="mr-4 items-center"
                        onPress={() => navigation.navigate("PersonScreen", person)}
                    >
                        <CircleShapeWrapper height={80} width={80}>
                            <Image
                                source={require("../../assets/images/castImage1.png")}
                                className="rounded-2xl h-24 w-20"
                            />
                        </CircleShapeWrapper>
                        <Text className="text-white text-xs my-1">{nameFmtd(characterName)}</Text>
                        <Text className="text-neutral-400 text-xs my-1">
                            {nameFmtd(personName)}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default CastMembers
