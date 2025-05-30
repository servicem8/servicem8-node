/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { locationsListLocations } from "../../funcs/locationsListLocations.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$locationsListLocations: ToolDefinition = {
  name: "locations-list-locations",
  description: `List all Locations


			
#### Filtering
This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_locations**.

			`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await locationsListLocations(
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
