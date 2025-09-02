# UpdateBundlesRequest

## Example Usage

```typescript
import { UpdateBundlesRequest } from "servicem8/models/operations";

let value: UpdateBundlesRequest = {
  uuid: "d45c0120-3311-46fc-88a9-f516add2d3b1",
  materialBundle: {
    uuid: "123e4567-d51d-4c78-b09b-23312271410b",
    itemNumber: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Bundle                                                               |
| `materialBundle`                                                                 | [components.MaterialBundleInput](../../models/components/materialbundleinput.md) | :heavy_check_mark:                                                               | Bundle fields to update                                                          |