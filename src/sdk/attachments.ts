/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { attachmentsCreateAttachments } from "../funcs/attachmentsCreateAttachments.js";
import { attachmentsDeleteAttachments } from "../funcs/attachmentsDeleteAttachments.js";
import { attachmentsGetAttachments } from "../funcs/attachmentsGetAttachments.js";
import { attachmentsListAttachments } from "../funcs/attachmentsListAttachments.js";
import { attachmentsUpdateAttachments } from "../funcs/attachmentsUpdateAttachments.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Attachments extends ClientSDK {
  /**
   * List all Attachments
   *
   * @remarks
   *
   * #### Filtering
   * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
   */
  async listAttachments(
    options?: RequestOptions,
  ): Promise<operations.ListAttachmentsResponse> {
    return unwrapAsync(attachmentsListAttachments(
      this,
      options,
    ));
  }

  /**
   * Create a new Attachment
   *
   * @remarks
   *
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the `x-record-uuid` response header.
   */
  async createAttachments(
    request: components.AttachmentInput,
    options?: RequestOptions,
  ): Promise<operations.CreateAttachmentsResponse> {
    return unwrapAsync(attachmentsCreateAttachments(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve an Attachment
   */
  async getAttachments(
    request: operations.GetAttachmentsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetAttachmentsResponse> {
    return unwrapAsync(attachmentsGetAttachments(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an Attachment
   */
  async updateAttachments(
    request: operations.UpdateAttachmentsRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateAttachmentsResponse> {
    return unwrapAsync(attachmentsUpdateAttachments(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an Attachment
   *
   * @remarks
   *
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are still accessible on the API, but are hidden in the UI. Inactive records can be restored by setting their `active` field to `1`.
   */
  async deleteAttachments(
    request: operations.DeleteAttachmentsRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteAttachmentsResponse> {
    return unwrapAsync(attachmentsDeleteAttachments(
      this,
      request,
      options,
    ));
  }
}
