import { Image, Text, TouchableOpacity } from "react-native"

const CategoryCard = ({ title, imageUrl }) => (
    <TouchableOpacity className="relative mr-3">
        <Image source={{ uri: imageUrl }} className="h-20 w-20" />
        <Text className="absolute bottom-1 text-center text-white bg-[#0009] w-full py-1">
            {title}
        </Text>
    </TouchableOpacity>
)

export default CategoryCard
