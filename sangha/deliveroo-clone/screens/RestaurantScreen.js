import { useNavigation, useRoute } from "@react-navigation/native"
import { useLayoutEffect } from "react"
import { SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity } from "react-native"
import { ArrowLeftIcon } from "react-native-heroicons/solid"
import {
    StarIcon,
    MapPinIcon,
    QuestionMarkCircleIcon,
    ChevronRightIcon
} from "react-native-heroicons/outline"

import DishRow from "../components/DishRow"
import { urlFor } from "../sanity"

const RestaurantScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()

    const { id, imageUrl, title, rating, genre, address, shortDescription, dishes, long, lat } =
        route.params

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false })
    }, [])

    console.log("Dishes", dishes)

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={css.container}>
                    <Image source={{ uri: urlFor(imageUrl).url() }} style={css.image} />
                    <TouchableOpacity onPress={navigation.goBack} style={css.arrowBack}>
                        <ArrowLeftIcon size={26} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={css.headerContainer}>
                    <View>
                        <Text style={css.title}>{title}</Text>
                    </View>

                    <View style={css.textContainer}>
                        <View style={css.starsContainer}>
                            <StarIcon color="green" opacity={0.5} size={22} />
                            <Text style={css.ratingGenre}>
                                {rating} . {genre}
                            </Text>
                        </View>

                        <View style={css.nearbyContainer}>
                            <MapPinIcon color="gray" opacity={0.4} size={22} />
                            <Text style={css.nearbyText}>Nearby . {address}</Text>
                        </View>
                    </View>

                    <Text style={css.descriptionContainer}>{shortDescription}</Text>

                    <TouchableOpacity style={css.alergyContainer}>
                        <QuestionMarkCircleIcon color="gray" size={22} opacity={0.6} />
                        <Text style={css.alergyText}>Have a food alergy</Text>
                        <ChevronRightIcon color="#00ccbb" />
                    </TouchableOpacity>
                </View>

                <View style={css.menuContainer}>
                    <Text style={css.menuTitle}>Menu</Text>

                    {/* Dishes */}
                    {dishes?.map((dish) => (
                        <DishRow
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.shortDescription}
                            price={dish.price}
                            image={dish.image}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const css = {
    container: {
        position: "relative"
    },
    image: {
        height: "14rem",
        width: "100%"
    },
    arrowBack: {
        position: "absolute",
        top: "1rem",
        left: "1rem",
        backgroundColor: "#333a",
        padding: "0.6rem",
        borderRadius: "50%",
        fontWeight: 700
    },
    headerContainer: {
        backgroundColor: "#fff",
        padding: "0.4rem"
    },
    title: {
        fontSize: "3rem",
        fontWeight: 700,
        marginBottom: "0.3rem"
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "1rem"
    },
    starsContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: "1rem"
    },
    ratingGenre: {
        color: "green",
        fontSize: "0.9rem",
        marginLeft: "0.3rem"
    },
    nearbyContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    nearbyText: {
        color: "#666",
        fontSize: "0.9rem",
        marginLeft: "0.3rem"
    },
    descriptionContainer: {
        color: "#666",
        paddingVertical: "0.3rem",
        paddingHorizontal: "0.3rem",
        marginBottom: "1rem"
    },
    alergyContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderTop: "2px solid #444",
        borderBottom: "2px solid #444",
        paddingHorizontal: "0.5rem",
        paddingVertical: "0.8rem"
    },
    alergyText: {
        flex: 1,
        color: "#666",
        marginLeft: "0.5rem"
    },
    menuContainer: {},
    menuTitle: {
        paddingHorizontal: "0.8rem",
        paddingVertical: "0.8rem",
        fontWeight: 700,
        fontSize: "2rem"
    }
}

export default RestaurantScreen
