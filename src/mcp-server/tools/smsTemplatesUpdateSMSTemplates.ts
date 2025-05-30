/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { smsTemplatesUpdateSMSTemplates } from "../../funcs/smsTemplatesUpdateSMSTemplates.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateSMSTemplatesRequest$inboundSchema,
};

export const tool$smsTemplatesUpdateSMSTemplates: ToolDefinition<typeof args> =
  {
    name: "SMS-templates-update-SMS-templates",
    description: `Update a SMS Template`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await smsTemplatesUpdateSMSTemplates(
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
