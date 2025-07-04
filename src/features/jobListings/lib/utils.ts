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