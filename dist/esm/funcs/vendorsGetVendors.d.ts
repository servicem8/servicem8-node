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
 * Retrieve a Vendor
 *
 * @remarks
 * Vendor account information
 *
 * #### OAuth Scope
 * This endpoint requires the following OAuth scope **vendor**.
 */
export declare function vendorsGetVendors(client: ServiceM8Core, request: operations.GetVendorsRequest, options?: RequestOptions): APIPromise<Result<operations.GetVendorsResponse, errors.ErrorT | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=vendorsGetVendors.d.ts.map