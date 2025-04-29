# CategoryInput

## Example Usage

```typescript
import { CategoryInput } from "servicem8/models/components";

let value: CategoryInput = {
  uuid: "123e4567-19f6-4afb-a54c-22b4d49b4feb",
  name: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Record UUID key                                                        | 123e4567-19f6-4afb-a54c-22b4d49b4feb                                   |
| `active`                                                               | [components.CategoryActive](../../models/components/categoryactive.md) | :heavy_minus_sign:                                                     | Record active/deleted flag. <br/><br/>Valid values are [0,1]           |                                                                        |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `colour`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |