# NoteCreate

## Example Usage

```typescript
import { NoteCreate } from "servicem8/models/components";

let value: NoteCreate = {
  uuid: "123e4567-0759-4095-9b29-23e93202b56b",
  relatedObjectUuid: "123e4567-3127-4c2a-a7d3-23e93cf8efab",
  actionCompletedByStaffUuid: "123e4567-8fc3-4bae-9188-23e939678d9b",
  createDate: "2026-03-01 12:00:00",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `uuid`                                      | *string*                                    | :heavy_minus_sign:                          | Unique identifier for this record           | 123e4567-0759-4095-9b29-23e93202b56b        |
| `relatedObject`                             | *string*                                    | :heavy_minus_sign:                          | N/A                                         |                                             |
| `relatedObjectUuid`                         | *string*                                    | :heavy_minus_sign:                          | N/A                                         | 123e4567-3127-4c2a-a7d3-23e93cf8efab        |
| `note`                                      | *string*                                    | :heavy_minus_sign:                          | N/A                                         |                                             |
| `actionRequired`                            | *string*                                    | :heavy_minus_sign:                          | N/A                                         |                                             |
| `actionCompletedByStaffUuid`                | *string*                                    | :heavy_minus_sign:                          | N/A                                         | 123e4567-8fc3-4bae-9188-23e939678d9b        |
| `createDate`                                | *any*                                       | :heavy_minus_sign:                          | Timestamp at which record was last modified | 2026-03-01 12:00:00                         |