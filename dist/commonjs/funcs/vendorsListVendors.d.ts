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
 * List all Vendors
 *
 * @remarks
 * Vendor account information
 *
 * #### Filtering
 * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
 *
 * #### OAuth Scope
 * This endpoint requires the following OAuth scope **vendor**.
 */
export declare function vendorsListVendors(client: ServiceM8Core, options?: RequestOptions): APIPromise<Result<operations.ListVendorsResponse, errors.ErrorT | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=vendorsListVendors.d.ts.map