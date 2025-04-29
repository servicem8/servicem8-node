# Form

## Example Usage

```typescript
import { Form } from "servicem8/models/components";

let value: Form = {
  uuid: "123e4567-69b3-4b0b-adbe-22b4db9d4c8b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  documentTemplateUuid: "123e4567-ad99-4818-9f16-22b4de3ff6fb",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Record UUID key                                                        | 123e4567-69b3-4b0b-adbe-22b4db9d4c8b                                   |
| `active`                                                               | [components.FormActive](../../models/components/formactive.md)         | :heavy_minus_sign:                                                     | Record active/deleted flag. <br/><br/>Valid values are [0,1]           |                                                                        |
| `editDate`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | Record last modified timestamp                                         | YYYY-MM-DD HH:MM:SS                                                    |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `documentTemplateUuid`                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | 123e4567-ad99-4818-9f16-22b4de3ff6fb                                   |
| `canBeUsedIndependently`                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `badgeMandatoryState`                                                  | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `templateFields`                                                       | [components.TemplateField](../../models/components/templatefield.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |