import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class Vendors extends ClientSDK {
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
    listVendors(options?: RequestOptions): Promise<operations.ListVendorsResponse>;
    /**
     * Retrieve a Vendor
     *
     * @remarks
     * Vendor account information
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **vendor**.
     */
    getVendors(request: operations.GetVendorsRequest, options?: RequestOptions): Promise<operations.GetVendorsResponse>;
    /**
     * Update a Vendor
     *
     * @remarks
     * Vendor account information
     */
    updateVendors(request: operations.UpdateVendorsRequest, options?: RequestOptions): Promise<operations.UpdateVendorsResponse>;
}
//# sourceMappingURL=vendors.d.ts.map