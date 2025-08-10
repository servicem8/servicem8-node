# UpdateFeedbackRequest

## Example Usage

```typescript
import { UpdateFeedbackRequest } from "servicem8/models/operations";

let value: UpdateFeedbackRequest = {
  uuid: "92cb4782-9270-4ee2-afa8-785d4aa49a17",
  feedback: {
    uuid: "123e4567-fa33-40e5-9c4b-231840368dab",
    relatedObjectUuid: "123e4567-8608-48fb-8cad-231842b2a10b",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Feedback                                                 |
| `feedback`                                                           | [components.FeedbackInput](../../models/components/feedbackinput.md) | :heavy_check_mark:                                                   | Feedback fields to update                                            |