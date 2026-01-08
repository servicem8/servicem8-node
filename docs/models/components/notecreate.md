# NoteCreate

## Example Usage

```typescript
import { NoteCreate } from "servicem8/models/components";

let value: NoteCreate = {
  uuid: "123e4567-d2c1-4f18-88d4-23b2e5ec24bb",
  relatedObjectUuid: "123e4567-9e6a-43b5-8f90-23b2e897685b",
  actionCompletedByStaffUuid: "123e4567-8ca3-4f41-bc87-23b2ecc578eb",
  createDate: "2026-01-01 12:00:00",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `uuid`                                      | *string*                                    | :heavy_minus_sign:                          | Unique identifier for this record           | 123e4567-d2c1-4f18-88d4-23b2e5ec24bb        |
| `relatedObject`                             | *string*                                    | :heavy_minus_sign:                          | N/A                                         |                                             |
| `relatedObjectUuid`                         | *string*                                    | :heavy_minus_sign:                          | N/A                                         | 123e4567-9e6a-43b5-8f90-23b2e897685b        |
| `note`                                      | *string*                                    | :heavy_minus_sign:                          | N/A                                         |                                             |
| `actionRequired`                            | *string*                                    | :heavy_minus_sign:                          | N/A                                         |                                             |
| `actionCompletedByStaffUuid`                | *string*                                    | :heavy_minus_sign:                          | N/A                                         | 123e4567-8ca3-4f41-bc87-23b2ecc578eb        |
| `createDate`                                | *any*                                       | :heavy_minus_sign:                          | Timestamp at which record was last modified | 2026-01-01 12:00:00                         |