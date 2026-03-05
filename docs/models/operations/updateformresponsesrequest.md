# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponseCreate: {
    formUuid: "123e4567-99a6-4309-be6e-23e93b2af0db",
    staffUuid: "123e4567-3c0f-4e25-9198-23e93a3dcc4b",
    regardingObjectUuid: "123e4567-6727-488e-bbe0-23e93280628b",
    timestamp: "2026-03-01 12:00:00",
    formByStaffUuid: "123e4567-5555-45ff-b617-23e933782e3b",
    documentAttachmentUuid: "123e4567-b6cc-453a-9d96-23e93106a44b",
    assetUuid: "123e4567-401b-4b97-9e25-23e93600399b",
    uuid: "123e4567-2017-4d97-bead-23e93d2ebd9b",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Form Response                                                      |
| `formResponseCreate`                                                           | [components.FormResponseCreate](../../models/components/formresponsecreate.md) | :heavy_check_mark:                                                             | Form Response fields to update                                                 |