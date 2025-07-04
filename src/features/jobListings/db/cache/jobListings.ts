import { getGlobaltag, getIdtag, getOrganizationTag } from "@/lib/dataCache";
import { revalidateTag } from "next/cache";

export function getJobListingGlobalTag() {
    return getGlobaltag("jobListings")
}

export function getJobListingOrganizationTag(organization:string) {
    return getOrganizationTag("jobListings",organization)
}
export function getJobListingIdTag(id:string) {
    return getIdtag("jobListings",id)
}

export function revalidateJobListingCache({id,organizationId}:{id:string ,organizationId:string}) {
    revalidateTag(getJobListingGlobalTag())
    revalidateTag(getJobListingIdTag(id))
    revalidateTag(getJobListingOrganizationTag(organizationId))
}