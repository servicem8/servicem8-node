# NoteInput

## Example Usage

```typescript
import { NoteInput } from "servicem8/models/components";

let value: NoteInput = {
  uuid: "123e4567-8ef7-4349-a650-22bcb44005fb",
  relatedObjectUuid: "123e4567-5626-4c35-9909-22bcb21108fb",
  actionCompletedByStaffUuid: "123e4567-1b2f-42f8-a69d-22bcb62a4fab",
  createDate: "2025-05-01 12:00:00",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Unique identifier for this record                              | 123e4567-8ef7-4349-a650-22bcb44005fb                           |
| `active`                                                       | [components.NoteActive](../../models/components/noteactive.md) | :heavy_minus_sign:                                             | Record active/deleted flag.  Valid values are [0,1]            |                                                                |
| `relatedObject`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `relatedObjectUuid`                                            | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-5626-4c35-9909-22bcb21108fb                           |
| `note`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionRequired`                                               | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionCompletedByStaffUuid`                                   | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-1b2f-42f8-a69d-22bcb62a4fab                           |
| `createDate`                                                   | *any*                                                          | :heavy_minus_sign:                                             | Timestamp at which record was last modified                    | 2025-05-01 12:00:00                                            |