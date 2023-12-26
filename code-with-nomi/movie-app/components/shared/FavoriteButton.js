import { TouchableOpacity } from "react-native"
import { HeartIcon as EmptyHeartIcon } from "react-native-heroicons/outline"
import { HeartIcon as FullHeartIcon } from "react-native-heroicons/solid"

import { COLORS } from "../../shared/constants"

const FavoriteButton = ({ isFavorite, setIsFavorite }) => (
    <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
        {isFavorite && <FullHeartIcon size={35} color={COLORS.primary} />}
        {!isFavorite && <EmptyHeartIcon size={35} color={COLORS.primary} />}
    </TouchableOpacity>
)

export default FavoriteButton
