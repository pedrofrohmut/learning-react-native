import { View } from "react-native"

const CircleShapeWrapper = ({ children, height, width }) => (
    <View
        className="rounded-full border-2 border-neutral-700 overflow-hidden items-center"
        style={{ height, width }}
    >
        {children}
    </View>
)

export default CircleShapeWrapper
