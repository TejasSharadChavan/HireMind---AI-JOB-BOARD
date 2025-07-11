import { DeletedObjectJSON, OrganizationJSON, UserJSON } from "@clerk/nextjs/server";
import { EventSchemas, Inngest } from "inngest";

type Events = {
  "clerk/user.created": ClerkWebhookData<UserJSON>
  "clerk/user.deleted": ClerkWebhookData<DeletedObjectJSON>
  "clerk/user.updated": ClerkWebhookData<UserJSON>
  "clerk/organization.created": ClerkWebhookData<OrganizationJSON>
  "clerk/organization.deleted": ClerkWebhookData<DeletedObjectJSON>
  "clerk/organization.updated": ClerkWebhookData<OrganizationJSON>
  "app/jobListingApplication.created":{
    data:{
      jobListingId:string
      userId:string
    }
  }
  "app/resume.uploaded":{
    user:{
      id:string
    }
  }
};

type ClerkWebhookData<T> = {
    data:{
        data: T,
        raw:string,
        headers: Record<string,string>
    }
}

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "HireMind AI job board",
  schemas: new EventSchemas().fromRecord<Events>(),
});
