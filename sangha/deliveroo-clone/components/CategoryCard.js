import { Image, Text, TouchableOpacity, View } from "react-native"

const CategoryCard = ({ imageUrl, title }) => {
    return (
        <TouchableOpacity style={css.cardContainer}>
            <Image source={{ uri: imageUrl }} style={css.image} />
            <Text style={css.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const css = {
    cardContainer: {
        position: "relative",
        marginHorizontal: "0.3rem"
    },
    image: {
        height: "5rem",
        width: "5rem",
        borderRadius: "0.3rem",
    },
    title: {
        position: "absolute",
        bottom: "0rem",
        paddingVertical: "0.15rem",
        textAlign: "center",
        color: "#fff",
        fontWeight: 700,
        backgroundColor: "#0004",
        width: "100%",
    }
}

export default CategoryCard
