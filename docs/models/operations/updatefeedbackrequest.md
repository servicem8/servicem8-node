# UpdateFeedbackRequest

## Example Usage

```typescript
import { UpdateFeedbackRequest } from "servicem8/models/operations";

let value: UpdateFeedbackRequest = {
  uuid: "92cb4782-9270-4ee2-afa8-785d4aa49a17",
  feedback: {
    uuid: "123e4567-eb9f-4f9f-819e-2302f76ee0fb",
    relatedObjectUuid: "123e4567-cace-4a88-b29c-2302f736e42b",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Feedback                                                 |
| `feedback`                                                           | [components.FeedbackInput](../../models/components/feedbackinput.md) | :heavy_check_mark:                                                   | Feedback fields to update                                            |