import { ScrollView } from "react-native"

import { SUSHI_IMAGE } from "../contants"
import CategoryCard from "./CategoryCard"

const Categories = () => {
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
            <CategoryCard imageUrl={SUSHI_IMAGE} title="Category 1" />
            <CategoryCard imageUrl={SUSHI_IMAGE} title="Category 2" />
            <CategoryCard imageUrl={SUSHI_IMAGE} title="Category 3" />
            <CategoryCard imageUrl={SUSHI_IMAGE} title="Category 4" />
            <CategoryCard imageUrl={SUSHI_IMAGE} title="Category 5" />
            <CategoryCard imageUrl={SUSHI_IMAGE} title="Category 6" />
        </ScrollView>
    )
}

export default Categories
