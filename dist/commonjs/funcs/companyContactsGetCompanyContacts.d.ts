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
 * Retrieve a Company Contact
 *
 * @remarks
 *
 * #### OAuth Scope
 * This endpoint requires the following OAuth scope **read_customer_contacts**.
 */
export declare function companyContactsGetCompanyContacts(client: ServiceM8Core, request: operations.GetCompanyContactsRequest, options?: RequestOptions): APIPromise<Result<operations.GetCompanyContactsResponse, errors.ErrorT | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companyContactsGetCompanyContacts.d.ts.map