# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponseCreate: {
    formUuid: "123e4567-8155-4fca-bc81-23b2e760cb8b",
    staffUuid: "123e4567-4d91-4c02-88b2-23b2e860927b",
    regardingObjectUuid: "123e4567-1a53-451c-a876-23b2edf42dcb",
    timestamp: "2026-01-01 12:00:00",
    formByStaffUuid: "123e4567-581f-42df-b1d0-23b2ea40435b",
    documentAttachmentUuid: "123e4567-89c3-4428-9228-23b2e6c233cb",
    assetUuid: "123e4567-afae-4682-8542-23b2e71b51eb",
    uuid: "123e4567-7efe-43b7-b875-23b2ef8ca0bb",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Form Response                                                      |
| `formResponseCreate`                                                           | [components.FormResponseCreate](../../models/components/formresponsecreate.md) | :heavy_check_mark:                                                             | Form Response fields to update                                                 |