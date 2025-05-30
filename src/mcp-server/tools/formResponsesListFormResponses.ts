/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { formResponsesListFormResponses } from "../../funcs/formResponsesListFormResponses.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$formResponsesListFormResponses: ToolDefinition = {
  name: "form-responses-list-form-responses",
  description: `List all Form Responses


			
#### Filtering
This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
			`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await formResponsesListFormResponses(
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
