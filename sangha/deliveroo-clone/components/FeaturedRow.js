import { ScrollView, Text, View } from "react-native"
import { ArrowRightIcon } from "react-native-heroicons/solid"
import RestaurantCard from "./RestaurantCard"

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View style={css.container}>
            {/* Title */}
            <View style={css.titleContainer}>
                <Text style={css.titleText}>{title}</Text>
                <ArrowRightIcon color="#00ccbb" />
            </View>

            {/* Description */}
            <Text style={css.descriptionText}>{description}</Text>

            {/* Restaurant Cards */}
            <ScrollView
                horizontal
                contentContainerStyle={css.innerScrollView}
                style={css.outerScrollView}
                showsHorizontalScrollIndicator={true}
            >
                <RestaurantCard
                    id={123}
                    imageUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123, Main St."
                    shortDescription="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>
    )
}

const css = {
    titleContainer: {
        flexDirection: "row",
        marginTop: "1rem",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: "1rem"
    },
    titleText: {
        fontWeight: 700,
        fontSize: "1.2rem"
    },
    descriptionText: {
        fontSize: "1rem",
        color: "#666",
        paddingHorizontal: "1rem"
    },
    innerScrollView: {
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    outerScrollView: {
        paddingTop: "1rem"
    }
}

export default FeaturedRow
