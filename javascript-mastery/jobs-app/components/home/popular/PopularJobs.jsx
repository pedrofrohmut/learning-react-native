import React, { useState } from "react"
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native"
import { useRouter } from "expo-router"

import { COLORS, SIZES } from "../../../constants"
import PopularJobCard from "../../common/cards/popular/PopularJobCard"

import styles from "./popularjobs.style"
import useFetch from "../../../hooks/useFetch"

const endpoint = "search"
const query = { query: "React developer", num_pages: 1 }

const PopularJobs = () => {
    const router = useRouter()

    const { data, isLoading, error } = useFetch(endpoint, query)

    const [selectedJob, setSelectedJob] = useState()

    const handleCardPress = (item) => {
        router.push(`/job-details/${item.job_id}`)
        setSelectedJob(item.job_id)
    }

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

                {!isLoading && error && (
                    <Text style={{ color: "red", padding: 6 }}>Something went wrong</Text>
                )}

                {!isLoading && !error && (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <PopularJobCard
                                item={item}
                                selectedJob={selectedJob}
                                handleCardPress={() => handleCardPress(item)}
                            />
                        )}
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
