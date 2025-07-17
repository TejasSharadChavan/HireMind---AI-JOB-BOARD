import { getGlobaltag, getIdtag } from "@/lib/dataCache";
import { revalidateTag } from "next/cache";

export function getOrganizationGlobalTag() {
    return getGlobaltag("organizations")
}

export function getOrganizationIdTag(id:string) {
    return getIdtag("organizations",id)
}

export function revalidateOrganizationCache(id:string) {
    revalidateTag(getOrganizationGlobalTag())
    revalidateTag(getOrganizationIdTag(id))
}