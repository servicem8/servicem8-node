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
 * Update a Job Contact
 *
 * @remarks
 *
 * #### OAuth Scope
 * This endpoint requires the following OAuth scope **manage_job_contacts**.
 */
export declare function jobContactsUpdateJobContacts(client: ServiceM8Core, request: operations.UpdateJobContactsRequest, options?: RequestOptions): APIPromise<Result<operations.UpdateJobContactsResponse, errors.ErrorT | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=jobContactsUpdateJobContacts.d.ts.map