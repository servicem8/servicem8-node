# UpdateFeedbackRequest

## Example Usage

```typescript
import { UpdateFeedbackRequest } from "servicem8/models/operations";

let value: UpdateFeedbackRequest = {
  uuid: "92cb4782-9270-4ee2-afa8-785d4aa49a17",
  feedbackCreate: {
    relatedObjectUuid: "123e4567-7462-4cfd-b301-233c6bd6b8eb",
    uuid: "123e4567-0c08-4b6e-8d43-233c60c448fb",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Feedback                                                   |
| `feedbackCreate`                                                       | [components.FeedbackCreate](../../models/components/feedbackcreate.md) | :heavy_check_mark:                                                     | Feedback fields to update                                              |