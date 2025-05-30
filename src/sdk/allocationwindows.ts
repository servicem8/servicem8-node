/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { allocationWindowsCreateAllocationWindows } from "../funcs/allocationWindowsCreateAllocationWindows.js";
import { allocationWindowsDeleteAllocationWindows } from "../funcs/allocationWindowsDeleteAllocationWindows.js";
import { allocationWindowsGetAllocationWindows } from "../funcs/allocationWindowsGetAllocationWindows.js";
import { allocationWindowsListAllocationWindows } from "../funcs/allocationWindowsListAllocationWindows.js";
import { allocationWindowsUpdateAllocationWindows } from "../funcs/allocationWindowsUpdateAllocationWindows.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class AllocationWindows extends ClientSDK {
  /**
   * List all Allocation Windows
   *
   * @remarks
   *
   * #### Filtering
   * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
   */
  async listAllocationWindows(
    options?: RequestOptions,
  ): Promise<operations.ListAllocationWindowsResponse> {
    return unwrapAsync(allocationWindowsListAllocationWindows(
      this,
      options,
    ));
  }

  /**
   * Create a new Allocation Window
   *
   * @remarks
   *
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the `x-record-uuid` response header.
   */
  async createAllocationWindows(
    request: components.AllocationWindowInput,
    options?: RequestOptions,
  ): Promise<operations.CreateAllocationWindowsResponse> {
    return unwrapAsync(allocationWindowsCreateAllocationWindows(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve an Allocation Window
   */
  async getAllocationWindows(
    request: operations.GetAllocationWindowsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetAllocationWindowsResponse> {
    return unwrapAsync(allocationWindowsGetAllocationWindows(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an Allocation Window
   */
  async updateAllocationWindows(
    request: operations.UpdateAllocationWindowsRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateAllocationWindowsResponse> {
    return unwrapAsync(allocationWindowsUpdateAllocationWindows(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an Allocation Window
   *
   * @remarks
   *
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are still accessible on the API, but are hidden in the UI. Inactive records can be restored by setting their `active` field to `1`.
   */
  async deleteAllocationWindows(
    request: operations.DeleteAllocationWindowsRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteAllocationWindowsResponse> {
    return unwrapAsync(allocationWindowsDeleteAllocationWindows(
      this,
      request,
      options,
    ));
  }
}
