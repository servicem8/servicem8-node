# FeedbackInput

## Example Usage

```typescript
import { FeedbackInput } from "servicem8/models/components";

let value: FeedbackInput = {
  uuid: "123e4567-51c7-4689-9ca2-231b2303103b",
  relatedObjectUuid: "123e4567-8f7c-4319-a884-231b220c07eb",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Unique identifier for this record                                      | 123e4567-51c7-4689-9ca2-231b2303103b                                   |
| `active`                                                               | [components.FeedbackActive](../../models/components/feedbackactive.md) | :heavy_minus_sign:                                                     | Record active/deleted flag.  Valid values are [0,1]                    |                                                                        |
| `timestamp`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `relatedObject`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `relatedObjectUuid`                                                    | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | 123e4567-8f7c-4319-a884-231b220c07eb                                   |
| `rating`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `comment`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |