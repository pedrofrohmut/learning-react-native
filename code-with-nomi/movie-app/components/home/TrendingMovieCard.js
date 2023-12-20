import { Image, TouchableWithoutFeedback } from "react-native"

const TrendingMovieCard = ({ item, handlePress, device }) => (
    <TouchableWithoutFeedback onPress={() => handlePress(item)}>
        <Image
            source={require("../../assets/images/moviePoster1.png")}
            style={{
                width: device.width * 0.6,
                height: device.height * 0.4
            }}
            className="rounded-3xl"
        />
    </TouchableWithoutFeedback>
)

export default TrendingMovieCard
