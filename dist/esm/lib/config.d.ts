import * as components from "../models/components/index.js";
import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.servicem8.com/api_1.0"];
export type SDKOptions = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: components.Security | (() => Promise<components.Security>) | undefined;
    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number | undefined;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string | undefined;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
    timeoutMs?: number;
    debugLogger?: Logger;
};
export declare function serverURLFromOptions(options: SDKOptions): URL | null;
export declare const SDK_METADATA: {
    readonly language: "typescript";
    readonly openapiDocVersion: "1.0.0";
    readonly sdkVersion: "0.3.5";
    readonly genVersion: "2.593.4";
    readonly userAgent: "speakeasy-sdk/typescript 0.3.5 2.593.4 1.0.0 servicem8";
};
//# sourceMappingURL=config.d.ts.map