/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { locationsUpdateLocations } from "../../funcs/locationsUpdateLocations.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateLocationsRequest$inboundSchema,
};

export const tool$locationsUpdateLocations: ToolDefinition<typeof args> = {
  name: "locations-update-locations",
  description: `Update a Location


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_locations**.

			`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await locationsUpdateLocations(
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
