# NoteInput

## Example Usage

```typescript
import { NoteInput } from "servicem8/models/components";

let value: NoteInput = {
  uuid: "123e4567-9ac8-42aa-8774-22e6eb61865b",
  relatedObjectUuid: "123e4567-184e-4502-84fa-22e6ead60dfb",
  actionCompletedByStaffUuid: "123e4567-39f0-4102-a968-22e6e96a5cab",
  createDate: "2025-06-01 12:00:00",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Unique identifier for this record                              | 123e4567-9ac8-42aa-8774-22e6eb61865b                           |
| `active`                                                       | [components.NoteActive](../../models/components/noteactive.md) | :heavy_minus_sign:                                             | Record active/deleted flag.  Valid values are [0,1]            |                                                                |
| `relatedObject`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `relatedObjectUuid`                                            | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-184e-4502-84fa-22e6ead60dfb                           |
| `note`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionRequired`                                               | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionCompletedByStaffUuid`                                   | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-39f0-4102-a968-22e6e96a5cab                           |
| `createDate`                                                   | *any*                                                          | :heavy_minus_sign:                                             | Timestamp at which record was last modified                    | 2025-06-01 12:00:00                                            |