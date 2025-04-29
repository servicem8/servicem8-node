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
 * Retrieve a Job Material
 *
 * @remarks
 *
 * #### OAuth Scope
 * This endpoint requires the following OAuth scope **read_job_materials**.
 */
export declare function jobMaterialsGetJobMaterials(client: ServiceM8Core, request: operations.GetJobMaterialsRequest, options?: RequestOptions): APIPromise<Result<operations.GetJobMaterialsResponse, errors.ErrorT | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=jobMaterialsGetJobMaterials.d.ts.map