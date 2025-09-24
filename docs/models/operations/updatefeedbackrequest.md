# UpdateFeedbackRequest

## Example Usage

```typescript
import { UpdateFeedbackRequest } from "servicem8/models/operations";

let value: UpdateFeedbackRequest = {
  uuid: "92cb4782-9270-4ee2-afa8-785d4aa49a17",
  feedbackCreate: {
    relatedObjectUuid: "123e4567-30f4-48cb-bc89-23482baa3d2b",
    uuid: "123e4567-1b69-413b-82a4-234820dec5fb",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Feedback                                                   |
| `feedbackCreate`                                                       | [components.FeedbackCreate](../../models/components/feedbackcreate.md) | :heavy_check_mark:                                                     | Feedback fields to update                                              |