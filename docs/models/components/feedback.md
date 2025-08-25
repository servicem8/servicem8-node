# Feedback

## Example Usage

```typescript
import { Feedback } from "servicem8/models/components";

let value: Feedback = {
  uuid: "123e4567-8ac5-4f6d-9518-2329bac131eb",
  editDate: "2025-08-01 12:00:00",
  relatedObjectUuid: "123e4567-8099-4fdd-8e90-2329b76eab3b",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Unique identifier for this record                                      | 123e4567-8ac5-4f6d-9518-2329bac131eb                                   |
| `active`                                                               | [components.FeedbackActive](../../models/components/feedbackactive.md) | :heavy_minus_sign:                                                     | Record active/deleted flag.  Valid values are [0,1]                    |                                                                        |
| `editDate`                                                             | *any*                                                                  | :heavy_minus_sign:                                                     | Timestamp at which record was last modified                            | 2025-08-01 12:00:00                                                    |
| `timestamp`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `relatedObject`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `relatedObjectUuid`                                                    | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | 123e4567-8099-4fdd-8e90-2329b76eab3b                                   |
| `rating`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `comment`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |