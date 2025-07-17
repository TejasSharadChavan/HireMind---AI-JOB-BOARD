import { getGlobaltag, getIdtag } from "@/lib/dataCache"
import { revalidateTag } from "next/cache"

export function getOrganizationUserSettingsGlobalTag() {
  return getGlobaltag("organizationUserSettings")
}

export function getOrganizationUserSettingsIdTag({
  userId,
  organizationId,
}: {
  userId: string
  organizationId: string
}) {
  return getIdtag("organizationUserSettings", `${organizationId}-${userId}`)
}

export function revalidateOrganizationUserSettingsCache(id: {
  organizationId: string
  userId: string
}) {
  revalidateTag(getOrganizationUserSettingsGlobalTag())
  revalidateTag(getOrganizationUserSettingsIdTag(id))
}