# Feedback

## Example Usage

```typescript
import { Feedback } from "servicem8/models/components";

let value: Feedback = {
  uuid: "123e4567-6c90-4ed0-a2b9-22e6ecacd8cb",
  editDate: "2025-06-01 12:00:00",
  relatedObjectUuid: "123e4567-4f2f-4acc-a321-22e6e8c28a4b",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Unique identifier for this record                                      | 123e4567-6c90-4ed0-a2b9-22e6ecacd8cb                                   |
| `active`                                                               | [components.FeedbackActive](../../models/components/feedbackactive.md) | :heavy_minus_sign:                                                     | Record active/deleted flag.  Valid values are [0,1]                    |                                                                        |
| `editDate`                                                             | *any*                                                                  | :heavy_minus_sign:                                                     | Timestamp at which record was last modified                            | 2025-06-01 12:00:00                                                    |
| `timestamp`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `relatedObject`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `relatedObjectUuid`                                                    | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | 123e4567-4f2f-4acc-a321-22e6e8c28a4b                                   |
| `rating`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `comment`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |