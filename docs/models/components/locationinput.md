# LocationInput

## Example Usage

```typescript
import { LocationInput } from "servicem8/models/components";

let value: LocationInput = {
  uuid: "123e4567-050e-4e5a-a231-22b4d5a6f43b",
  name: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Record UUID key                                                        | 123e4567-050e-4e5a-a231-22b4d5a6f43b                                   |
| `active`                                                               | [components.LocationActive](../../models/components/locationactive.md) | :heavy_minus_sign:                                                     | Record active/deleted flag. <br/><br/>Valid values are [0,1]           |                                                                        |
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