# UpdateFeedbackRequest

## Example Usage

```typescript
import { UpdateFeedbackRequest } from "servicem8/models/operations";

let value: UpdateFeedbackRequest = {
  uuid: "92cb4782-9270-4ee2-afa8-785d4aa49a17",
  feedbackCreate: {
    relatedObjectUuid: "123e4567-700a-4700-8058-233c655ae0cb",
    uuid: "123e4567-47fe-4112-b0b1-233c6bcaab2b",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Feedback                                                   |
| `feedbackCreate`                                                       | [components.FeedbackCreate](../../models/components/feedbackcreate.md) | :heavy_check_mark:                                                     | Feedback fields to update                                              |