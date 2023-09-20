import React, { useState } from "react"
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native"
import { useRouter } from "expo-router"

import { COLORS, SIZES } from "../../../constants"
import PopularJobCard from "../../common/cards/popular/PopularJobCard"

import styles from "./popularjobs.style"

const PopularJobs = () => {
    const router = useRouter()

    const isLoading = false
    const hasError = false

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular Jobs</Text>
                <TouchableOpacity style={styles.headerBtn}>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading && <ActivityIndicator size="large" colors={COLORS.primary} />}

                {!isLoading && hasError && <Text>Something went wrong</Text>}

                {!isLoading && !hasError && (
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        renderItem={({ item }) => <PopularJobCard item={item} />}
                        keyExtractor={(item) => item?.job_id}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        horizontal
                    />
                )}
            </View>
        </View>
    )
}

export default PopularJobs
