# Note

## Example Usage

```typescript
import { Note } from "servicem8/models/components";

let value: Note = {
  uuid: "123e4567-731a-459b-8e04-23d5996a360b",
  editDate: "2026-02-01 12:00:00",
  relatedObjectUuid: "123e4567-deb2-432f-ae8d-23d59e5442eb",
  actionCompletedByStaffUuid: "123e4567-980d-49cb-a055-23d5991f4e9b",
  editByStaffUuid: "123e4567-ce6e-40dc-8801-23d59c3c119b",
  createDate: "2026-02-01 12:00:00",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Unique identifier for this record                              | 123e4567-731a-459b-8e04-23d5996a360b                           |
| `active`                                                       | [components.NoteActive](../../models/components/noteactive.md) | :heavy_minus_sign:                                             | Record active/deleted flag.  Valid values are [0,1]            |                                                                |
| `editDate`                                                     | *any*                                                          | :heavy_minus_sign:                                             | Timestamp at which record was last modified                    | 2026-02-01 12:00:00                                            |
| `relatedObject`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `relatedObjectUuid`                                            | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-deb2-432f-ae8d-23d59e5442eb                           |
| `note`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionRequired`                                               | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionCompletedByStaffUuid`                                   | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-980d-49cb-a055-23d5991f4e9b                           |
| `editByStaffUuid`                                              | *any*                                                          | :heavy_minus_sign:                                             | UUID of Staff Member who last modified record                  | 123e4567-ce6e-40dc-8801-23d59c3c119b                           |
| `createDate`                                                   | *any*                                                          | :heavy_minus_sign:                                             | Timestamp at which record was last modified                    | 2026-02-01 12:00:00                                            |