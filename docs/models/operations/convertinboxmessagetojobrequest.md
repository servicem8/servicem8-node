# ConvertInboxMessageToJobRequest

## Example Usage

```typescript
import { ConvertInboxMessageToJobRequest } from "servicem8/models/operations";

let value: ConvertInboxMessageToJobRequest = {
  uuid: "917e6d3c-0df3-4234-8e18-d5fb55dba4c7",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the inbox message                                                        |
| `convertToJobRequest`                                                            | [components.ConvertToJobRequest](../../models/components/converttojobrequest.md) | :heavy_minus_sign:                                                               | N/A                                                                              |