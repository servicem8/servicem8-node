# NoteCreate

## Example Usage

```typescript
import { NoteCreate } from "servicem8/models/components";

let value: NoteCreate = {
  uuid: "123e4567-72ca-42a2-9003-2348261850ab",
  relatedObjectUuid: "123e4567-4975-417e-b66a-234823f8f1bb",
  actionCompletedByStaffUuid: "123e4567-0b9c-4433-bec1-23482ad44b5b",
  createDate: "2025-09-01 12:00:00",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `uuid`                                      | *string*                                    | :heavy_minus_sign:                          | Unique identifier for this record           | 123e4567-72ca-42a2-9003-2348261850ab        |
| `relatedObject`                             | *string*                                    | :heavy_minus_sign:                          | N/A                                         |                                             |
| `relatedObjectUuid`                         | *string*                                    | :heavy_minus_sign:                          | N/A                                         | 123e4567-4975-417e-b66a-234823f8f1bb        |
| `note`                                      | *string*                                    | :heavy_minus_sign:                          | N/A                                         |                                             |
| `actionRequired`                            | *string*                                    | :heavy_minus_sign:                          | N/A                                         |                                             |
| `actionCompletedByStaffUuid`                | *string*                                    | :heavy_minus_sign:                          | N/A                                         | 123e4567-0b9c-4433-bec1-23482ad44b5b        |
| `createDate`                                | *any*                                       | :heavy_minus_sign:                          | Timestamp at which record was last modified | 2025-09-01 12:00:00                         |