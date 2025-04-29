# UpdateFeedbackRequest

## Example Usage

```typescript
import { UpdateFeedbackRequest } from "servicem8/models/operations";

let value: UpdateFeedbackRequest = {
  uuid: "92cb4782-9270-4ee2-afa8-785d4aa49a17",
  feedback: {
    uuid: "123e4567-f9cb-45dc-959f-22b4dbb5d5fb",
    relatedObjectUuid: "123e4567-f879-45db-bedd-22b4d31594ab",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Feedback                                                 |
| `feedback`                                                           | [components.FeedbackInput](../../models/components/feedbackinput.md) | :heavy_check_mark:                                                   | Feedback fields to update                                            |