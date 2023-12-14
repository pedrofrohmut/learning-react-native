import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { Icon } from "@rneui/themed"

import { EATS_SCREEN_ICON, MAP_SCREEN_ICON } from "../constants"
import { useNavigation } from "@react-navigation/native"

const data = [
    {
        id: "1",
        title: "Get a ride",
        image: MAP_SCREEN_ICON,
        screen: "MapScreen"
    },
    {
        id: "2",
        title: "Order food",
        image: EATS_SCREEN_ICON,
        screen: "EatsScreen"
    }
]

const NavOptions = () => {
    const navigation = useNavigation()

    return (
        <FlatList
            data={data}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity
                    key={item.id}
                    className="px-5 py-5 items-center bg-gray-200 mr-2"
                    onPress={() => navigation.navigate(item.screen)}
                >
                    <Image
                        source={{ uri: item.image }}
                        style={{
                            height: 120,
                            width: 120,
                            resizeMode: "contain",
                            marginBottom: "0.75rem"
                        }}
                    />
                    <Text className="mb-3 text-lg">{item.title}</Text>
                    <View className="bg-gray-600 rounded-full p-1">
                        <Icon name="arrowright" color="white" type="antdesign" />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions
