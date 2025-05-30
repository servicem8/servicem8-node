/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { notesGetNotes } from "../../funcs/notesGetNotes.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetNotesRequest$inboundSchema,
};

export const tool$notesGetNotes: ToolDefinition<typeof args> = {
  name: "notes-get-notes",
  description: `Retrieve a Note`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await notesGetNotes(
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
