import { ScrollView, Text, View } from "react-native"
import CategoryCard from "./CategoryCard"
import { useEffect, useState } from "react"
import sanityClient, { urlFor } from "../sanity"

const query = `
    * [_type == "category"] {
        _id,
        name,
        ...
    }
`

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        sanityClient.fetch(query).then((data) => {
            setCategories(data)
        })
    }, [])

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={css.categoriesScrollView}
        >
            {categories?.map((category) => (
                <CategoryCard
                    key={category._id}
                    imageUrl={
                        category.image
                            ? urlFor(category.image).url()
                            : "https://links.papareact.com/gn7"
                    }
                    title={category.name}
                />
            ))}
        </ScrollView>
    )
}

const css = {
    categoriesScrollView: {
        paddingTop: "0.6rem",
        paddingRight: "0.6rem",
        paddingLeft: "0.6rem",
        paddingBottom: "1.0rem"
    }
}

export default Categories
