# ArchiveInboxMessageRequest

## Example Usage

```typescript
import { ArchiveInboxMessageRequest } from "servicem8/models/operations";

let value: ArchiveInboxMessageRequest = {
  uuid: "66f89e41-adb0-4e20-8729-b05abeb015bb",
  archiveRequest: {},
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the inbox message                                              |
| `archiveRequest`                                                       | [components.ArchiveRequest](../../models/components/archiverequest.md) | :heavy_check_mark:                                                     | N/A                                                                    |