# Feedback

## Example Usage

```typescript
import { Feedback } from "servicem8/models/components";

let value: Feedback = {
  uuid: "123e4567-3837-4571-a26a-22b701860a4b",
  editDate: "2025-05-01 12:00:00",
  relatedObjectUuid: "123e4567-449e-45de-8b41-22b70842fd8b",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Unique identifier for this record                                      | 123e4567-3837-4571-a26a-22b701860a4b                                   |
| `active`                                                               | [components.FeedbackActive](../../models/components/feedbackactive.md) | :heavy_minus_sign:                                                     | Record active/deleted flag.  Valid values are [0,1]                    |                                                                        |
| `editDate`                                                             | *any*                                                                  | :heavy_minus_sign:                                                     | Timestamp at which record was last modified                            | 2025-05-01 12:00:00                                                    |
| `timestamp`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `relatedObject`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `relatedObjectUuid`                                                    | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | 123e4567-449e-45de-8b41-22b70842fd8b                                   |
| `rating`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `comment`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |