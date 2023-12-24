import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"

import { nameFmtd } from "../../shared/utils"
import CircleShapeWrapper from "../shared/CircleShapeWrapper"

import { fallbackPersonImage, imageUri185 } from "../../api/moviedb"

const CastMembers = ({ cast, navigation }) => {
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
                                source={{
                                    uri: imageUri185(person.profile_path) || fallbackPersonImage
                                }}
                                className="rounded-2xl h-24 w-20"
                            />
                        </CircleShapeWrapper>

                        <Text className="text-white text-xs my-1">
                            {nameFmtd(person.character)}
                        </Text>

                        <Text className="text-neutral-400 text-xs my-1">
                            {nameFmtd(person.name)}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default CastMembers
