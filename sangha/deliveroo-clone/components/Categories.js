import { ScrollView, Text, View } from "react-native"
import CategoryCard from "./CategoryCard"

const Categories = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={css.categoriesScrollView}
        >
            <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing 1" />
            <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing 2" />
            <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing 3" />
            <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing 4" />
            <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing 5" />
            <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing 6" />
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
