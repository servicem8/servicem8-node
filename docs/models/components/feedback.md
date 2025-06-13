# Feedback

## Example Usage

```typescript
import { Feedback } from "servicem8/models/components";

let value: Feedback = {
  uuid: "123e4567-f3ad-4b25-8f8d-22e078635f3b",
  editDate: "2025-06-01 12:00:00",
  relatedObjectUuid: "123e4567-405e-4ec0-bbc3-22e075fe625b",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Unique identifier for this record                                      | 123e4567-f3ad-4b25-8f8d-22e078635f3b                                   |
| `active`                                                               | [components.FeedbackActive](../../models/components/feedbackactive.md) | :heavy_minus_sign:                                                     | Record active/deleted flag.  Valid values are [0,1]                    |                                                                        |
| `editDate`                                                             | *any*                                                                  | :heavy_minus_sign:                                                     | Timestamp at which record was last modified                            | 2025-06-01 12:00:00                                                    |
| `timestamp`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `relatedObject`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `relatedObjectUuid`                                                    | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | 123e4567-405e-4ec0-bbc3-22e075fe625b                                   |
| `rating`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `comment`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |