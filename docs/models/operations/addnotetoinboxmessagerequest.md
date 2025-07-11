# AddNoteToInboxMessageRequest

## Example Usage

```typescript
import { AddNoteToInboxMessageRequest } from "servicem8/models/operations";

let value: AddNoteToInboxMessageRequest = {
  uuid: "7a2ab994-4ffa-45b2-a83b-62f8c307f8e6",
  addNoteRequest: {
    note: "<value>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the inbox message                                              |
| `addNoteRequest`                                                       | [components.AddNoteRequest](../../models/components/addnoterequest.md) | :heavy_check_mark:                                                     | N/A                                                                    |