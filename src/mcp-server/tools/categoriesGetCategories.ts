/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { categoriesGetCategories } from "../../funcs/categoriesGetCategories.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetCategoriesRequest$inboundSchema,
};

export const tool$categoriesGetCategories: ToolDefinition<typeof args> = {
  name: "categories-get-categories",
  description: `Retrieve a Category


			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_job_categories**.

			`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await categoriesGetCategories(
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
