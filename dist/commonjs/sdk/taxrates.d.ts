import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class TaxRates extends ClientSDK {
    /**
     * List all Tax Rates
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     */
    listTaxRates(options?: RequestOptions): Promise<operations.ListTaxRatesResponse>;
    /**
     * Create a new Tax Rate
     *
     * @remarks
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createTaxRates(request: components.TaxRateInput, options?: RequestOptions): Promise<operations.CreateTaxRatesResponse>;
    /**
     * Retrieve a Tax Rate
     */
    getTaxRates(request: operations.GetTaxRatesRequest, options?: RequestOptions): Promise<operations.GetTaxRatesResponse>;
    /**
     * Update a Tax Rate
     */
    updateTaxRates(request: operations.UpdateTaxRatesRequest, options?: RequestOptions): Promise<operations.UpdateTaxRatesResponse>;
    /**
     * Delete a Tax Rate
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteTaxRates(request: operations.DeleteTaxRatesRequest, options?: RequestOptions): Promise<operations.DeleteTaxRatesResponse>;
}
//# sourceMappingURL=taxrates.d.ts.map