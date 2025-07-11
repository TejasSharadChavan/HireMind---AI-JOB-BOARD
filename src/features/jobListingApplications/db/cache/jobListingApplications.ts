import { getGlobaltag, getIdtag, getJobListingTag } from "@/lib/dataCache";
import { revalidateTag } from "next/cache";

export function getJobListingApplicationJobListingTag(jobListingId:string) {
    return getJobListingTag("jobListingApplications",jobListingId)
}

export function getJobListingApplicationGlobalTag() {
    return getGlobaltag("jobListingApplications")
}

export function getJobListingApplicationIdTag({
    jobListingId,
    userId
}:{
    jobListingId:string,
    userId:string
}) {
    return getIdtag("jobListingApplications",`${jobListingId}-${userId}`)
}

export function revalidateJobListingApplicationCache(id:{
    userId:string,
    jobListingId:string
}) {
    revalidateTag(getJobListingApplicationGlobalTag())
    revalidateTag(getJobListingApplicationJobListingTag(id.jobListingId))
    revalidateTag(getJobListingApplicationIdTag(id))

}