import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { RequestHandlerExtra } from "@modelcontextprotocol/sdk/shared/protocol.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { objectOutputType, ZodRawShape, ZodTypeAny } from "zod";
import { ServiceM8Core } from "../core.js";
import { ConsoleLogger } from "./console-logger.js";
import { MCPScope } from "./scopes.js";
export type ToolDefinition<Args extends undefined | ZodRawShape = undefined> = Args extends ZodRawShape ? {
    name: string;
    description: string;
    scopes?: MCPScope[];
    args: Args;
    tool: (client: ServiceM8Core, args: objectOutputType<Args, ZodTypeAny>, extra: RequestHandlerExtra) => CallToolResult | Promise<CallToolResult>;
} : {
    name: string;
    description: string;
    scopes?: MCPScope[];
    args?: undefined;
    tool: (client: ServiceM8Core, extra: RequestHandlerExtra) => CallToolResult | Promise<CallToolResult>;
};
export declare function formatResult(value: unknown, init: {
    response?: Response | undefined;
}): Promise<CallToolResult>;
export declare function createRegisterTool(logger: ConsoleLogger, server: McpServer, sdk: ServiceM8Core, allowedScopes: Set<MCPScope>, allowedTools?: Set<string>): <A extends ZodRawShape | undefined>(tool: ToolDefinition<A>) => void;
//# sourceMappingURL=tools.d.ts.map