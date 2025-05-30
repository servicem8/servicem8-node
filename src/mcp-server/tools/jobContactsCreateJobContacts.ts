/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { jobContactsCreateJobContacts } from "../../funcs/jobContactsCreateJobContacts.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.JobContactInput$inboundSchema,
};

export const tool$jobContactsCreateJobContacts: ToolDefinition<typeof args> = {
  name: "job-contacts-create-job-contacts",
  description: `Create a new Job Contact


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_job_contacts**.

			
			
#### Record UUID
UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the \`x-record-uuid\` response header.

			`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await jobContactsCreateJobContacts(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value.result;

    return formatResult(value, apiCall);
  },
};
