/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import dotenv from "dotenv";
dotenv.config();
/**
 * Example usage of the servicem8 SDK
 *
 * To run this example from the examples directory:
 * npm run build && npx tsx allocationWindowsListAllocationWindows.ts
 */

import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function main() {
  const result = await serviceM8.listAllocationWindows();

  console.log(result);
}

main().catch(console.error);
