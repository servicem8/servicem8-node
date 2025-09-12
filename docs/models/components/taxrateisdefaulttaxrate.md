# TaxRateIsDefaultTaxRate

Boolean flag indicating whether this tax rate is the system default (true) or not (false). Only one tax rate can be marked as default at any time. The default tax rate is automatically applied to new line items when no specific tax rate is selected..  Valid values are [0,1]

## Example Usage

```typescript
import { TaxRateIsDefaultTaxRate } from "servicem8/models/components";

let value: TaxRateIsDefaultTaxRate = 1;
```

## Values

```typescript
0 | 1
```