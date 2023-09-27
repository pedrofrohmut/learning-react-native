import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    RefreshControl
} from "react-native"
import { Stack, useGlobalSearchParams, useRouter } from "expo-router"
import { useCallback, useState } from "react"

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from "../../components"
import { COLORS, icons, SIZES } from "../../constants"
import useFetch from "../../hooks/useFetch"

const tabs = ["About", "Qualifications", "Resposibilities"]

const displayTabContent = (activeTab, data) => {
    switch (activeTab) {
        case "About":
            return <JobAbout info={data[0].job_description ?? "No data provided"} />
        case "Qualifications":
            return (
                <Specifics
                    title="Qualifications"
                    points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
                />
            )
        case "Resposibilities":
            return (
                <Specifics
                    title="Resposibilities"
                    points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
                />
            )
    }
}

const JobDetails = () => {
    const router = useRouter()

    // URL Params
    const urlParams = useGlobalSearchParams()

    // Fetching data
    const { data, isLoading, error, refetch } = useFetch("job-details", { job_id: urlParams.id })

    // State
    const [refreshing, setRefreshing] = useState(false)
    const [activeTab, setActiveTab] = useState(tabs[0])

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        refetch()
        setRefreshing(false)
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()}
                        />
                    ),
                    headerRight: () => <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />,
                    headerTitle: ""
                }}
            />

            <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                >
                    {isLoading && <ActivityIndicator size="large" color={COLORS.primary} />}

                    {!isLoading && error && <Text>Something went wrong</Text>}

                    {!isLoading && !error && data.length === 0 && <Text>No data</Text>}

                    {!isLoading && !error && data.length > 0 && (
                        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                            <Company
                                companyLogo={data[0].employer_logo}
                                jobTitle={data[0].job_title}
                                companyName={data[0].employer_name}
                                location={data[0].job_country}
                            />

                            <JobTabs
                                tabs={tabs}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />

                            {displayTabContent(activeTab, data)}
                        </View>
                    )}
                </ScrollView>

                <JobFooter
                    url={data[0]?.job_google_link ?? "https://careers.google.com/jobs/results"}
                />
            </>
        </SafeAreaView>
    )
}

export default JobDetails
