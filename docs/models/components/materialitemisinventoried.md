# MaterialItemIsInventoried

Boolean flag indicating whether inventory tracking is enabled for this material (1/true) or disabled (0/false). When enabled, the quantity_in_stock is tracked and updated automatically when the material is used in jobs. Only physical products typically have this enabled..  Valid values are [0,1]

## Example Usage

```typescript
import { MaterialItemIsInventoried } from "servicem8/models/components";

let value: MaterialItemIsInventoried = 0;
```

## Values

```typescript
0 | 1
```