# UpdateFeedbackRequest

## Example Usage

```typescript
import { UpdateFeedbackRequest } from "servicem8/models/operations";

let value: UpdateFeedbackRequest = {
  uuid: "92cb4782-9270-4ee2-afa8-785d4aa49a17",
  feedbackCreate: {
    relatedObjectUuid: "123e4567-86af-4c9c-82f5-234d55bb587b",
    uuid: "123e4567-5d6d-49e4-b9b7-234d5298645b",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Feedback                                                   |
| `feedbackCreate`                                                       | [components.FeedbackCreate](../../models/components/feedbackcreate.md) | :heavy_check_mark:                                                     | Feedback fields to update                                              |