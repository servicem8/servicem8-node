import { ServiceM8Core } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List all Assets
 *
 * @remarks
 *
 * #### Filtering
 * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
 *
 * #### OAuth Scope
 * This endpoint requires the following OAuth scope **read_assets**.
 */
export declare function assetsListAssets(client: ServiceM8Core, options?: RequestOptions): APIPromise<Result<operations.ListAssetsResponse, errors.ErrorT | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=assetsListAssets.d.ts.map