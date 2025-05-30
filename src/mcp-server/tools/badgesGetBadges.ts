/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { badgesGetBadges } from "../../funcs/badgesGetBadges.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetBadgesRequest$inboundSchema,
};

export const tool$badgesGetBadges: ToolDefinition<typeof args> = {
  name: "badges-get-badges",
  description: `Retrieve a Badge


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_badges**.

			`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await badgesGetBadges(
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
