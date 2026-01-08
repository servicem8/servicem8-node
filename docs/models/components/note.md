# Note

## Example Usage

```typescript
import { Note } from "servicem8/models/components";

let value: Note = {
  uuid: "123e4567-2185-40ec-adc1-23b2ec3785fb",
  editDate: "2026-01-01 12:00:00",
  relatedObjectUuid: "123e4567-d11d-422d-847a-23b2e017345b",
  actionCompletedByStaffUuid: "123e4567-4094-4aca-8168-23b2e548db0b",
  editByStaffUuid: "123e4567-46da-4602-9371-23b2e0e80deb",
  createDate: "2026-01-01 12:00:00",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Unique identifier for this record                              | 123e4567-2185-40ec-adc1-23b2ec3785fb                           |
| `active`                                                       | [components.NoteActive](../../models/components/noteactive.md) | :heavy_minus_sign:                                             | Record active/deleted flag.  Valid values are [0,1]            |                                                                |
| `editDate`                                                     | *any*                                                          | :heavy_minus_sign:                                             | Timestamp at which record was last modified                    | 2026-01-01 12:00:00                                            |
| `relatedObject`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `relatedObjectUuid`                                            | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-d11d-422d-847a-23b2e017345b                           |
| `note`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionRequired`                                               | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionCompletedByStaffUuid`                                   | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-4094-4aca-8168-23b2e548db0b                           |
| `editByStaffUuid`                                              | *any*                                                          | :heavy_minus_sign:                                             | UUID of Staff Member who last modified record                  | 123e4567-46da-4602-9371-23b2e0e80deb                           |
| `createDate`                                                   | *any*                                                          | :heavy_minus_sign:                                             | Timestamp at which record was last modified                    | 2026-01-01 12:00:00                                            |