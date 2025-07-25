/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { jobTemplatesCreateJobTemplates } from "../../funcs/jobTemplatesCreateJobTemplates.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.JobTemplateInput$inboundSchema,
};

export const tool$jobTemplatesCreateJobTemplates: ToolDefinition<typeof args> =
  {
    name: "job-templates-create-job-templates",
    description: `Create a new Job Template


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_jobs**.

			
			
#### Record UUID
UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the \`x-record-uuid\` response header.

			`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await jobTemplatesCreateJobTemplates(
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
