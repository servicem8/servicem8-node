/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { categoriesDeleteCategories } from "../../funcs/categoriesDeleteCategories.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteCategoriesRequest$inboundSchema,
};

export const tool$categoriesDeleteCategories: ToolDefinition<typeof args> = {
  name: "categories-delete-categories",
  description: `Delete a Category


			
In ServiceM8, deleting a record sets its \`active\` field to \`0\`. Inactive records are still accessible on the API, but are hidden in the UI. Inactive records can be restored by setting their \`active\` field to \`1\`.

			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_job_categories**.

			`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await categoriesDeleteCategories(
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
