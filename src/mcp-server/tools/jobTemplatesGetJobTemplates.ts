/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { jobTemplatesGetJobTemplates } from "../../funcs/jobTemplatesGetJobTemplates.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetJobTemplatesRequest$inboundSchema,
};

export const tool$jobTemplatesGetJobTemplates: ToolDefinition<typeof args> = {
  name: "job-templates-get-job-templates",
  description: `Retrieve a Job Template


			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_jobs**.

			`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await jobTemplatesGetJobTemplates(
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

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
