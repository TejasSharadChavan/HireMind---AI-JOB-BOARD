
import { getGlobaltag, getIdtag } from "@/lib/dataCache"
import { revalidateTag } from "next/cache"

export function getUserResumeGlobalTag() {
  return getGlobaltag("userResumes")
}

export function getUserResumeIdTag(userId: string) {
  return getIdtag("userResumes", userId)
}

export function revalidateUserResumeCache(userId: string) {
  revalidateTag(getUserResumeGlobalTag())
  revalidateTag(getUserResumeIdTag(userId))
}