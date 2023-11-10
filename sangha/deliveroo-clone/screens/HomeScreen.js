import { ScrollView, View, Text, SafeAreaView, Image, TextInput } from "react-native"
import { useEffect, useLayoutEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import {
    AdjustmentsVerticalIcon,
    ChevronDownIcon,
    UserIcon,
    MagnifyingGlassIcon
} from "react-native-heroicons/outline"

import Categories from "../components/Categories"
import FeaturedRow from "../components/FeaturedRow"
import sanityClient from "../sanity"

const featuredCategoriesQuery = `
    * [_type == "featured"] {
        ...,
        restaurants[] -> {
            ...,
            dishes[] ->
        }
    }
`

const HomeScreen = () => {
    const navigation = useNavigation()
    const [featuredCategories, setFeaturedCategories] = useState([])

    // When the UI loads
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    // When the functional component loads
    useEffect(() => {
        sanityClient.fetch(featuredCategoriesQuery).then((data) => {
            setFeaturedCategories(data)
        })
    }, [])

    console.log("Featured Categories", featuredCategories)

    return (
        <SafeAreaView style={css.safeArea}>
            {/* Header */}
            <View style={css.headerContainer}>
                <Image source={{ uri: "https://links.papareact.com/wru" }} style={css.image} />
                <View style={css.midContainer}>
                    <Text style={css.deliveryText}>Deliver Now!</Text>
                    <Text style={css.locationText}>
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>

            {/* Search */}
            <View style={css.searchContainer}>
                <View style={css.searchInputContainer}>
                    <MagnifyingGlassIcon color="gray" size={22} style={css.searchIcon} />
                    <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
                </View>
                <AdjustmentsVerticalIcon color="#00ccbb" />
            </View>

            {/* Body */}
            <ScrollView style={css.bodyScrollView}>
                {/* Categories */}
                <Categories />

                {/* Featured Categories */}
                {featuredCategories?.map((category) => (
                    <FeaturedRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const css = {
    safeArea: {
        backgroundColor: "#fff"
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        border: "2px dashed #faa",
        padding: "0.5rem"
    },
    image: {
        height: "70px",
        width: "70px",
        marginRight: "0.9rem",
        borderRadius: "50%",
        backgroundColor: "#d5d5d5"
    },
    midContainer: {
        flex: 1
    },
    deliveryText: {
        fontWeight: 700,
        color: "#aaa",
        fontSize: "0.9rem"
    },
    locationText: {
        fontWeight: 700,
        fontSize: "1.3rem"
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: "0.6rem"
    },
    searchInputContainer: {
        flexDirection: "row",
        backgroundColor: "#e4e4e4",
        padding: "0.6rem",
        flex: 1,
        marginRight: "0.5rem"
    },
    searchIcon: {
        marginRight: "1rem"
    },
    bodyScrollView: {
        backgroundColor: "#f1f1f1"
    }
}

export default HomeScreen
