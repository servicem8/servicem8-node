# PriceIncludesTaxes

Boolean flag indicating whether the price and cost values include tax (1/true) or exclude tax (0/false). Controls tax calculations when determining final pricing. New materials inherit this setting from the account's default tax display preference..  Valid values are [0,1]

## Example Usage

```typescript
import { PriceIncludesTaxes } from "servicem8/models/components";

let value: PriceIncludesTaxes = 0;
```

## Values

```typescript
0 | 1
```