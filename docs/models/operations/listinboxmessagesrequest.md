# ListInboxMessagesRequest

## Example Usage

```typescript
import { ListInboxMessagesRequest } from "servicem8/models/operations";

let value: ListInboxMessagesRequest = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | Maximum number of messages to return (1-500)           |
| `offset`                                               | *number*                                               | :heavy_minus_sign:                                     | Number of messages to skip for pagination              |
| `filter`                                               | [operations.Filter](../../models/operations/filter.md) | :heavy_minus_sign:                                     | Filter messages by status                              |
| `search`                                               | *string*                                               | :heavy_minus_sign:                                     | Search messages by subject, from name, or from email   |