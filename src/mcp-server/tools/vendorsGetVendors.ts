/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { vendorsGetVendors } from "../../funcs/vendorsGetVendors.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetVendorsRequest$inboundSchema,
};

export const tool$vendorsGetVendors: ToolDefinition<typeof args> = {
  name: "vendors-get-vendors",
  description: `Retrieve a Vendor

Vendor account information


			
#### OAuth Scope
This endpoint requires the following OAuth scope **vendor**.

			`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await vendorsGetVendors(
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
