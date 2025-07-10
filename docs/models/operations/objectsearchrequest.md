# ObjectSearchRequest

## Example Usage

```typescript
import { ObjectSearchRequest } from "servicem8/models/operations";

let value: ObjectSearchRequest = {
  objectType: "formresponse",
  q: "emergency repair",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `objectType`                                                   | [operations.ObjectType](../../models/operations/objecttype.md) | :heavy_check_mark:                                             | Type of object to search                                       |                                                                |
| `q`                                                            | *string*                                                       | :heavy_check_mark:                                             | Search query string                                            | emergency repair                                               |
| `limit`                                                        | *number*                                                       | :heavy_minus_sign:                                             | Maximum number of results to return (max 100)                  |                                                                |