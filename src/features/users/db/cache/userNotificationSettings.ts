import { getGlobaltag, getIdtag } from "@/lib/dataCache";
import { revalidateTag } from "next/cache";

export function getUserNotificationSettingsGlobalTag() {
    return getGlobaltag("userNotificationSettings")
}

export function getUserNotificationSettingsIdTag(userId:string) {
    return getIdtag("userNotificationSettings", userId)
}

export function revalidateUserNotificationSettingsCache(userId:string) {
    revalidateTag(getUserNotificationSettingsGlobalTag())
    revalidateTag(getUserNotificationSettingsIdTag(userId))
}