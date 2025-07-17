import { inngest } from "@/services/inngest/client";
import {
  clerkCreateOrganization,
  clerkCreateOrgMembership,
  clerkCreateUser,
  clerkDeleteOrganization,
  clerkDeleteOrgMembership,
  clerkDeleteUser,
  clerkUpdateOrganization,
  clerkUpdateUser,
} from "@/services/inngest/function/clerk";
import { prepareDailyOrganizationUserApplicationNotifications, prepareDailyUserJobListingNotifications, sendDailyOrganizationUserApplicationEmail, sendDailyUserJobListingEmail } from "@/services/inngest/function/email";
import { rankApplication } from "@/services/inngest/function/jobListingApplication";
import { createAiSummaryOfUploadedResume } from "@/services/inngest/function/resume";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    clerkCreateUser,
    clerkUpdateUser,
    clerkDeleteUser,
    clerkCreateOrganization,
    clerkUpdateOrganization,
    clerkDeleteOrganization,
    clerkCreateOrgMembership,
    clerkDeleteOrgMembership,
    createAiSummaryOfUploadedResume,
    rankApplication,
    prepareDailyUserJobListingNotifications,
    sendDailyUserJobListingEmail,
    prepareDailyOrganizationUserApplicationNotifications,
    sendDailyOrganizationUserApplicationEmail
  ],
});
