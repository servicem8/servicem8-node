# Location

## Example Usage

```typescript
import { Location } from "servicem8/models/components";

let value: Location = {
  uuid: "123e4567-58eb-44a7-af94-22b4d35a770b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  name: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Record UUID key                                                        | 123e4567-58eb-44a7-af94-22b4d35a770b                                   |
| `active`                                                               | [components.LocationActive](../../models/components/locationactive.md) | :heavy_minus_sign:                                                     | Record active/deleted flag. <br/><br/>Valid values are [0,1]           |                                                                        |
| `editDate`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | Record last modified timestamp                                         | YYYY-MM-DD HH:MM:SS                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Location's name                                                        |                                                                        |
| `line1`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `line2`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `line3`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `city`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Email Address                                                          |                                                                        |
| `country`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | Email Address                                                          |                                                                        |
| `postCode`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | Email Address                                                          |                                                                        |
| `phone1`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `state`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | Address State                                                          |                                                                        |
| `lng`                                                                  | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `lat`                                                                  | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |