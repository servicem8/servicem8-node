/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { assetTypesGetAssetTypes } from "../../funcs/assetTypesGetAssetTypes.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetAssetTypesRequest$inboundSchema,
};

export const tool$assetTypesGetAssetTypes: ToolDefinition<typeof args> = {
  name: "asset-types-get-asset-types",
  description: `Retrieve an Asset Type


			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_assets**.

			`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await assetTypesGetAssetTypes(
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
