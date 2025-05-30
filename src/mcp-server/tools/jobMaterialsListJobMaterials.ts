/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { jobMaterialsListJobMaterials } from "../../funcs/jobMaterialsListJobMaterials.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$jobMaterialsListJobMaterials: ToolDefinition = {
  name: "job-materials-list-job-materials",
  description: `List all Job Materials


			
#### Filtering
This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_job_materials**.

			`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await jobMaterialsListJobMaterials(
      client,
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
