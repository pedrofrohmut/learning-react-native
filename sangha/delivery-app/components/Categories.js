import { ScrollView } from "react-native"

import CategoryCard from "./CategoryCard"
import { useEffect, useState } from "react"
import { fetchCategories, urlFor } from "../sanity"

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategories().then((data) => {
            setCategories(data)
        })
    }, [])

    // console.log("Categories", categories)

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: "1rem",
                paddingTop: "0.75rem",
                paddingBottom: "1.5rem"
            }}
            className="py-2 mb-3"
            horizontal
            showsHorizontalScrollIndicator
        >
            {categories?.map((category) => (
                <CategoryCard
                    key={category._id}
                    imageUrl={urlFor(category.image).width(200).url()}
                    title={category.name}
                />
            ))}
        </ScrollView>
    )
}

export default Categories
