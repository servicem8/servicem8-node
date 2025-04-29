import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateKnowledgeArticlesResponseResult = components.Result | components.ErrorT;
export type CreateKnowledgeArticlesResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateKnowledgeArticlesResponseResult$inboundSchema: z.ZodType<CreateKnowledgeArticlesResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateKnowledgeArticlesResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateKnowledgeArticlesResponseResult$outboundSchema: z.ZodType<CreateKnowledgeArticlesResponseResult$Outbound, z.ZodTypeDef, CreateKnowledgeArticlesResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateKnowledgeArticlesResponseResult$ {
    /** @deprecated use `CreateKnowledgeArticlesResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateKnowledgeArticlesResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateKnowledgeArticlesResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateKnowledgeArticlesResponseResult$Outbound, z.ZodTypeDef, CreateKnowledgeArticlesResponseResult>;
    /** @deprecated use `CreateKnowledgeArticlesResponseResult$Outbound` instead. */
    type Outbound = CreateKnowledgeArticlesResponseResult$Outbound;
}
export declare function createKnowledgeArticlesResponseResultToJSON(createKnowledgeArticlesResponseResult: CreateKnowledgeArticlesResponseResult): string;
export declare function createKnowledgeArticlesResponseResultFromJSON(jsonString: string): SafeParseResult<CreateKnowledgeArticlesResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateKnowledgeArticlesResponse$inboundSchema: z.ZodType<CreateKnowledgeArticlesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateKnowledgeArticlesResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateKnowledgeArticlesResponse$outboundSchema: z.ZodType<CreateKnowledgeArticlesResponse$Outbound, z.ZodTypeDef, CreateKnowledgeArticlesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateKnowledgeArticlesResponse$ {
    /** @deprecated use `CreateKnowledgeArticlesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateKnowledgeArticlesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateKnowledgeArticlesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateKnowledgeArticlesResponse$Outbound, z.ZodTypeDef, CreateKnowledgeArticlesResponse>;
    /** @deprecated use `CreateKnowledgeArticlesResponse$Outbound` instead. */
    type Outbound = CreateKnowledgeArticlesResponse$Outbound;
}
export declare function createKnowledgeArticlesResponseToJSON(createKnowledgeArticlesResponse: CreateKnowledgeArticlesResponse): string;
export declare function createKnowledgeArticlesResponseFromJSON(jsonString: string): SafeParseResult<CreateKnowledgeArticlesResponse, SDKValidationError>;
//# sourceMappingURL=createknowledgearticles.d.ts.map