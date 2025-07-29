# UpdateFeedbackRequest

## Example Usage

```typescript
import { UpdateFeedbackRequest } from "servicem8/models/operations";

let value: UpdateFeedbackRequest = {
  uuid: "92cb4782-9270-4ee2-afa8-785d4aa49a17",
  feedback: {
    uuid: "123e4567-f66d-467e-b3f5-230fee32ed2b",
    relatedObjectUuid: "123e4567-8a9d-4be6-85f6-230fec198b9b",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Feedback                                                 |
| `feedback`                                                           | [components.FeedbackInput](../../models/components/feedbackinput.md) | :heavy_check_mark:                                                   | Feedback fields to update                                            |