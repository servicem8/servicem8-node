/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { assetTypesUpdateAssetTypes } from "../../funcs/assetTypesUpdateAssetTypes.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateAssetTypesRequest$inboundSchema,
};

export const tool$assetTypesUpdateAssetTypes: ToolDefinition<typeof args> = {
  name: "asset-types-update-asset-types",
  description: `Update an Asset Type


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_assets**.

			`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await assetTypesUpdateAssetTypes(
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
