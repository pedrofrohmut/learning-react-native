import { Image, TouchableOpacity, View } from "react-native"
import { ScrollView, Text } from "react-native"
import { strFmtBySize } from "../../shared/utils"
import { imageUri185 } from "../../api/moviedb"

const SearchResults = ({ results, dimensions, navigation }) => {
    if (results.length === 0) {
        return (
            <View className="flex-row justify-center">
                <Image
                    source={require("../../assets/images/movieTime.png")}
                    className="w-96 h-96"
                />
            </View>
        )
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15 }}
        >
            <Text className="text-white text-lg font-semibold mb-3">
                Results ({results.length})
            </Text>

            <View className="flex-row flex-wrap justify-between">
                {results?.map((result) => (
                    <View key={result.id}>
                        {result.media_type === "movie" && (
                            <MovieCard
                                movie={result}
                                navigation={navigation}
                                dimensions={dimensions}
                            />
                        )}

                        {result.media_type === "person" && (
                            <PersonCard
                                person={result}
                                navigation={navigation}
                                dimensions={dimensions}
                            />
                        )}

                        {result.media_type === "tv" && (
                            <TvCard tv={result} navigation={navigation} dimensions={dimensions} />
                        )}
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

const MovieCard = ({ movie, navigation, dimensions }) => (
    <TouchableOpacity
        key={movie.id}
        onPress={() => navigation.navigate("MovieScreen", movie)}
        className="mb-6"
    >
        <Image
            source={
                movie.poster_path
                    ? { uri: imageUri185(movie.poster_path) }
                    : require("../../assets/fallback-movie-poster.jpg")
            }
            style={{
                width: dimensions.width * 0.42,
                height: dimensions.height * 0.3
            }}
            className="mb-2"
        />
        <Text className="text-neutral-400 text-center" style={{ width: dimensions.width * 0.42 }}>
            Movie: {movie.title ? strFmtBySize(movie.title, 23) : "NO TITLE"}
        </Text>
    </TouchableOpacity>
)

const PersonCard = ({ person, navigation, dimensions }) => (
    <TouchableOpacity
        key={person.id}
        onPress={() => navigation.navigate("PersonScreen", person)}
        className="mb-6"
    >
        <Image
            source={
                person.profile_path
                    ? { uri: imageUri185(person.profile_path) }
                    : require("../../assets/fallback-person-profile.png")
            }
            style={{
                width: dimensions.width * 0.42,
                height: dimensions.height * 0.3
            }}
            className="mb-1"
        />
        <Text className="text-neutral-400 text-center" style={{ width: dimensions.width * 0.42 }}>
            Person: {person.name ? strFmtBySize(person.name, 23) : "NO NAME"}
        </Text>
    </TouchableOpacity>
)

const TvCard = ({ tv, navigation, dimensions }) => (
    <TouchableOpacity
        key={tv.id}
        onPress={() => navigation.navigate("TvScreen", tv)}
        className="mb-6"
    >
        <Image
            source={
                tv.poster_path
                    ? { uri: imageUri185(tv.poster_path) }
                    : require("../../assets/fallback-movie-poster.jpg")
            }
            style={{
                width: dimensions.width * 0.42,
                height: dimensions.height * 0.3
            }}
            className="mb-1"
        />
        <Text className="text-neutral-400 text-center" style={{ width: dimensions.width * 0.42 }}>
            TVShow: {tv.name ? strFmtBySize(tv.name, 23) : "NO NAME"}
        </Text>
    </TouchableOpacity>
)

export default SearchResults
