import React from "react"
import { ActivityIndicator, View, Text, TouchableOpacity } from "react-native"
import { useRouter } from "expo-router"

import styles from "./nearbyjobs.style"
import { COLORS } from "../../../constants"
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard"
import useFetch from "../../../hooks/useFetch"

const NearbyJobs = () => {
    const router = useRouter()

    const { data, isLoading, error } = useFetch("search", {
        query: "React developer",
        num_pages: 1
    })

    console.log("Nearby", data)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Nearby Jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading && <ActivityIndicator size="large" color={COLORS.primary} />}

                {!isLoading && error && <Text>Something went wrong</Text>}

                {!isLoading &&
                    !error &&
                    data?.map((job) => (
                        <NearbyJobCard
                            job={job}
                            key={`nearby-job-${job?.job_id}`}
                            handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
                        />
                    ))}
            </View>
        </View>
    )
}

export default NearbyJobs
