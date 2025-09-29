# NoteCreate

## Example Usage

```typescript
import { NoteCreate } from "servicem8/models/components";

let value: NoteCreate = {
  uuid: "123e4567-25c9-4aed-86f1-234971f641bb",
  relatedObjectUuid: "123e4567-a678-4695-9fdb-23497e404b8b",
  actionCompletedByStaffUuid: "123e4567-4c50-46a6-8868-23497503992b",
  createDate: "2025-09-01 12:00:00",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `uuid`                                      | *string*                                    | :heavy_minus_sign:                          | Unique identifier for this record           | 123e4567-25c9-4aed-86f1-234971f641bb        |
| `relatedObject`                             | *string*                                    | :heavy_minus_sign:                          | N/A                                         |                                             |
| `relatedObjectUuid`                         | *string*                                    | :heavy_minus_sign:                          | N/A                                         | 123e4567-a678-4695-9fdb-23497e404b8b        |
| `note`                                      | *string*                                    | :heavy_minus_sign:                          | N/A                                         |                                             |
| `actionRequired`                            | *string*                                    | :heavy_minus_sign:                          | N/A                                         |                                             |
| `actionCompletedByStaffUuid`                | *string*                                    | :heavy_minus_sign:                          | N/A                                         | 123e4567-4c50-46a6-8868-23497503992b        |
| `createDate`                                | *any*                                       | :heavy_minus_sign:                          | Timestamp at which record was last modified | 2025-09-01 12:00:00                         |