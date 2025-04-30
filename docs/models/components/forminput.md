# FormInput

## Example Usage

```typescript
import { FormInput } from "servicem8/models/components";

let value: FormInput = {
  uuid: "123e4567-b766-4e8d-945a-22b56eea858b",
  documentTemplateUuid: "123e4567-4b79-40f3-b592-22b56b97f03b",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Record UUID key                                                        | 123e4567-b766-4e8d-945a-22b56eea858b                                   |
| `active`                                                               | [components.FormActive](../../models/components/formactive.md)         | :heavy_minus_sign:                                                     | Record active/deleted flag. <br/><br/>Valid values are [0,1]           |                                                                        |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `documentTemplateUuid`                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | 123e4567-4b79-40f3-b592-22b56b97f03b                                   |
| `canBeUsedIndependently`                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `badgeMandatoryState`                                                  | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `templateFields`                                                       | [components.TemplateField](../../models/components/templatefield.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |