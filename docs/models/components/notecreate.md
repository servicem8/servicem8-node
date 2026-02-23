# NoteCreate

## Example Usage

```typescript
import { NoteCreate } from "servicem8/models/components";

let value: NoteCreate = {
  uuid: "123e4567-43d6-4adb-876f-23d5917a50eb",
  relatedObjectUuid: "123e4567-919b-4370-bca3-23d599f94bbb",
  actionCompletedByStaffUuid: "123e4567-f140-47a1-9795-23d594a9a4cb",
  createDate: "2026-02-01 12:00:00",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `uuid`                                      | *string*                                    | :heavy_minus_sign:                          | Unique identifier for this record           | 123e4567-43d6-4adb-876f-23d5917a50eb        |
| `relatedObject`                             | *string*                                    | :heavy_minus_sign:                          | N/A                                         |                                             |
| `relatedObjectUuid`                         | *string*                                    | :heavy_minus_sign:                          | N/A                                         | 123e4567-919b-4370-bca3-23d599f94bbb        |
| `note`                                      | *string*                                    | :heavy_minus_sign:                          | N/A                                         |                                             |
| `actionRequired`                            | *string*                                    | :heavy_minus_sign:                          | N/A                                         |                                             |
| `actionCompletedByStaffUuid`                | *string*                                    | :heavy_minus_sign:                          | N/A                                         | 123e4567-f140-47a1-9795-23d594a9a4cb        |
| `createDate`                                | *any*                                       | :heavy_minus_sign:                          | Timestamp at which record was last modified | 2026-02-01 12:00:00                         |