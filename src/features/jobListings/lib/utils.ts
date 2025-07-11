import { JobListingsStatus } from "@/drizzle/schema";

export function getNextJobListingStatus(status:JobListingsStatus) {
    switch(status){
        case "draft":
        case "delisted":
            return "published"
        case "published":
            return "delisted"
        default:
            throw new Error(
                `Unknown job Listing status:${status satisfies never}`
            )
    }
}

export function sortJobListingsByStatus(a:JobListingsStatus, b:JobListingsStatus) {
    return JOB_LISTING_STATUS_SORT_ORDER[a] - JOB_LISTING_STATUS_SORT_ORDER[b]
}

const JOB_LISTING_STATUS_SORT_ORDER: Record<JobListingsStatus, number> = {
    published:0,
    draft:1,
    delisted:2
}