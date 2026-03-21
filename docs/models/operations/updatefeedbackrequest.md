# UpdateFeedbackRequest

## Example Usage

```typescript
import { UpdateFeedbackRequest } from "servicem8/models/operations";

let value: UpdateFeedbackRequest = {
  uuid: "92cb4782-9270-4ee2-afa8-785d4aa49a17",
  feedbackCreate: {
    relatedObjectUuid: "123e4567-6c6e-4c0e-aa59-23f9417e4cdb",
    uuid: "123e4567-edbc-4eb4-bc22-23f942892c9b",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Feedback                                                   |
| `feedbackCreate`                                                       | [components.FeedbackCreate](../../models/components/feedbackcreate.md) | :heavy_check_mark:                                                     | Feedback fields to update                                              |