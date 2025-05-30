/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { jobChecklistsDeleteJobChecklists } from "../../funcs/jobChecklistsDeleteJobChecklists.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteJobChecklistsRequest$inboundSchema,
};

export const tool$jobChecklistsDeleteJobChecklists: ToolDefinition<
  typeof args
> = {
  name: "job-checklists-delete-job-checklists",
  description: `Delete a Job Checklist


			
In ServiceM8, deleting a record sets its \`active\` field to \`0\`. Inactive records are still accessible on the API, but are hidden in the UI. Inactive records can be restored by setting their \`active\` field to \`1\`.

			`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await jobChecklistsDeleteJobChecklists(
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
