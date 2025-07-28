# UpdateFeedbackRequest

## Example Usage

```typescript
import { UpdateFeedbackRequest } from "servicem8/models/operations";

let value: UpdateFeedbackRequest = {
  uuid: "92cb4782-9270-4ee2-afa8-785d4aa49a17",
  feedback: {
    uuid: "123e4567-7469-4afe-b1e5-230c4369104b",
    relatedObjectUuid: "123e4567-9eff-46df-8cef-230c4da0c4ab",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Feedback                                                 |
| `feedback`                                                           | [components.FeedbackInput](../../models/components/feedbackinput.md) | :heavy_check_mark:                                                   | Feedback fields to update                                            |