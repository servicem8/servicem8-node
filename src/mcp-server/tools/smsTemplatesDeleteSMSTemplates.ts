/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { smsTemplatesDeleteSMSTemplates } from "../../funcs/smsTemplatesDeleteSMSTemplates.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteSMSTemplatesRequest$inboundSchema,
};

export const tool$smsTemplatesDeleteSMSTemplates: ToolDefinition<typeof args> =
  {
    name: "SMS-templates-delete-SMS-templates",
    description: `Delete a SMS Template


			
In ServiceM8, deleting a record sets its \`active\` field to \`0\`. Inactive records are still accessible on the API, but are hidden in the UI. Inactive records can be restored by setting their \`active\` field to \`1\`.

			`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await smsTemplatesDeleteSMSTemplates(
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
