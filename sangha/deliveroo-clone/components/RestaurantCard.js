import { Image, Text, TouchableOpacity, View } from "react-native"
import { MapPinIcon } from "react-native-heroicons/outline"
import { StarIcon } from "react-native-heroicons/solid"

const RestaurantCard = ({ id, imageUrl, title, rating, genre, address, shortDescription, dishes, long, lat }) => {
    return (
        <TouchableOpacity style={css.cardContainer}>
            <Image
                source={{ uri: imageUrl }}
                style={css.image}
            />

            <View style={css.textContainer}>
                <Text style={css.title}>{title}</Text>

                <View style={css.starsContainer}>
                    <StarIcon color="green" opacity={0.5} size={20} />
                    <StarIcon color="green" opacity={0.5} size={20} />
                    <StarIcon color="green" opacity={0.5} size={20} />
                    <StarIcon color="green" opacity={0.5} size={20} />
                    <Text style={css.ratingText}>{rating} . {genre}</Text>
                </View>

                <View style={css.nearbyContainer}>
                    <MapPinIcon color="#888" opacity={0.8} size={24} />
                    <Text style={css.nearbyText}>Nearby . {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const css = {
    cardContainer: {
        backgroundColor: "#fff",
        marginRight: "0.5rem",
        boxShadow: "5px 5px 5px #0002",
    },
    image: {
        height: "9rem",
        width: "16rem",
        marginBottom: "0.2rem"
    },
    textContainer: {
        padding: "0.4rem",
    },
    title: {
        fontWeight: 700,
        fontSize: "1.3rem",
        marginBottom: "0.15rem"
    },
    starsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: "0.3rem",
        marginBottom: "0.15rem"
    },
    ratingText: {
        fontSize: "1rem",
        top: "0.2rem",
        color: "#666"
    },
    nearbyContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    nearbyText: {
        color: "#666",
        fontSize: "0.9rem",
        marginLeft: "0.3rem"
    }
}

export default RestaurantCard
