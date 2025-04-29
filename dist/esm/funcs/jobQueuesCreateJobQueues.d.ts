import { ServiceM8Core } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create a new Job Queue
 *
 * @remarks
 *
 * #### OAuth Scope
 * This endpoint requires the following OAuth scope **manage_job_queues**.
 *
 * #### Record UUID
 * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
 */
export declare function jobQueuesCreateJobQueues(client: ServiceM8Core, request: components.QueueInput, options?: RequestOptions): APIPromise<Result<operations.CreateJobQueuesResponse, errors.ErrorT | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=jobQueuesCreateJobQueues.d.ts.map