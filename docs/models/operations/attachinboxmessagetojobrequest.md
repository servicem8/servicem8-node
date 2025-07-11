# AttachInboxMessageToJobRequest

## Example Usage

```typescript
import { AttachInboxMessageToJobRequest } from "servicem8/models/operations";

let value: AttachInboxMessageToJobRequest = {
  uuid: "06a2fa51-3061-4d08-aaad-f72cd4a15c11",
  attachToJobRequest: {
    jobUuid: "81b60b97-8730-4ac5-ab74-237b3c3ba0ba",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the inbox message                                                      |
| `attachToJobRequest`                                                           | [components.AttachToJobRequest](../../models/components/attachtojobrequest.md) | :heavy_check_mark:                                                             | N/A                                                                            |