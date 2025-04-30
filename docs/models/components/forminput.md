# FormInput

## Example Usage

```typescript
import { FormInput } from "servicem8/models/components";

let value: FormInput = {
  uuid: "123e4567-8e23-47c1-b831-22b56c9fce9b",
  documentTemplateUuid: "123e4567-675e-40fe-a95b-22b56017a07b",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Record UUID key                                                        | 123e4567-8e23-47c1-b831-22b56c9fce9b                                   |
| `active`                                                               | [components.FormActive](../../models/components/formactive.md)         | :heavy_minus_sign:                                                     | Record active/deleted flag. <br/><br/>Valid values are [0,1]           |                                                                        |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `documentTemplateUuid`                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | 123e4567-675e-40fe-a95b-22b56017a07b                                   |
| `canBeUsedIndependently`                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `badgeMandatoryState`                                                  | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `templateFields`                                                       | [components.TemplateField](../../models/components/templatefield.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |