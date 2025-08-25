# servicem8

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *servicem8* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=servicem8&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<!-- Start Summary [summary] -->
## Summary

ServiceM8 API: Move your app forward with the ServiceM8 API



## Limits and Throttling
To ensure continuous quality of service, API usage can be subject to throttling. The throttle will be applied once an API consumer reaches a certain 
threshold in terms of a maximum number of requests per minute. Most clients will never hit this threshold, but those that do, will get met by a 
HTTP 429 Too Many Requests response code. 
 
There is a limit of 180 requests per minute, if you reach this you will receive a HTTP 429 with a text body of "Number of allowed API requests per minute exceeded".
There is a limit of 20000 requests per day, if you reach this you will receive a HTTP 429 with a text body of "Number of allowed API requests per day exceeded".

We encourage all API developers to anticipate this error, and take appropriate measures like e.g. using a cached value from a previous call, or passing on a message to the end user that gets subjected to this behaviour (if any).

Limits are per Addon per account.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [servicem8](#servicem8)
  * [Limits and Throttling](#limits-and-throttling)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add servicem8
```

### PNPM

```bash
pnpm add servicem8
```

### Bun

```bash
bun add servicem8
```

### Yarn

```bash
yarn add servicem8 zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "ServiceM8": {
      "command": "npx",
      "args": [
        "-y", "--package", "servicem8",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--oauth2", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "ServiceM8": {
      "command": "npx",
      "args": [
        "-y", "--package", "servicem8",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--oauth2", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package servicem8 -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.allocationWindows.listAllocationWindows();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name     | Type   | Scheme       | Environment Variable |
| -------- | ------ | ------------ | -------------------- |
| `apiKey` | apiKey | API key      | `SERVICEM8_API_KEY`  |
| `oauth2` | oauth2 | OAuth2 token | `SERVICEM8_OAUTH2`   |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.allocationWindows.listAllocationWindows();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [allocationWindows](docs/sdks/allocationwindows/README.md)

* [listAllocationWindows](docs/sdks/allocationwindows/README.md#listallocationwindows) - List all Allocation Windows
* [createAllocationWindows](docs/sdks/allocationwindows/README.md#createallocationwindows) - Create a new Allocation Window
* [getAllocationWindows](docs/sdks/allocationwindows/README.md#getallocationwindows) - Retrieve an Allocation Window
* [updateAllocationWindows](docs/sdks/allocationwindows/README.md#updateallocationwindows) - Update an Allocation Window
* [deleteAllocationWindows](docs/sdks/allocationwindows/README.md#deleteallocationwindows) - Delete an Allocation Window

### [assets](docs/sdks/assets/README.md)

* [listAssets](docs/sdks/assets/README.md#listassets) - List all Assets
* [getAssets](docs/sdks/assets/README.md#getassets) - Retrieve an Asset
* [updateAssets](docs/sdks/assets/README.md#updateassets) - Update an Asset
* [deleteAssets](docs/sdks/assets/README.md#deleteassets) - Delete an Asset

### [assetTypeFields](docs/sdks/assettypefields/README.md)

* [listAssetTypeFields](docs/sdks/assettypefields/README.md#listassettypefields) - List all Asset Type Fields
* [createAssetTypeFields](docs/sdks/assettypefields/README.md#createassettypefields) - Create a new Asset Type Field
* [getAssetTypeFields](docs/sdks/assettypefields/README.md#getassettypefields) - Retrieve an Asset Type Field
* [updateAssetTypeFields](docs/sdks/assettypefields/README.md#updateassettypefields) - Update an Asset Type Field
* [deleteAssetTypeFields](docs/sdks/assettypefields/README.md#deleteassettypefields) - Delete an Asset Type Field

### [assetTypes](docs/sdks/assettypes/README.md)

* [listAssetTypes](docs/sdks/assettypes/README.md#listassettypes) - List all Asset Types
* [createAssetTypes](docs/sdks/assettypes/README.md#createassettypes) - Create a new Asset Type
* [getAssetTypes](docs/sdks/assettypes/README.md#getassettypes) - Retrieve an Asset Type
* [updateAssetTypes](docs/sdks/assettypes/README.md#updateassettypes) - Update an Asset Type
* [deleteAssetTypes](docs/sdks/assettypes/README.md#deleteassettypes) - Delete an Asset Type

### [badges](docs/sdks/badges/README.md)

* [listBadges](docs/sdks/badges/README.md#listbadges) - List all Badges
* [createBadges](docs/sdks/badges/README.md#createbadges) - Create a new Badge
* [getBadges](docs/sdks/badges/README.md#getbadges) - Retrieve a Badge
* [updateBadges](docs/sdks/badges/README.md#updatebadges) - Update a Badge
* [deleteBadges](docs/sdks/badges/README.md#deletebadges) - Delete a Badge

### [bundles](docs/sdks/bundles/README.md)

* [listBundles](docs/sdks/bundles/README.md#listbundles) - List all Bundles
* [createBundles](docs/sdks/bundles/README.md#createbundles) - Create a new Bundle
* [getBundles](docs/sdks/bundles/README.md#getbundles) - Retrieve a Bundle
* [updateBundles](docs/sdks/bundles/README.md#updatebundles) - Update a Bundle
* [deleteBundles](docs/sdks/bundles/README.md#deletebundles) - Delete a Bundle

### [categories](docs/sdks/categories/README.md)

* [listCategories](docs/sdks/categories/README.md#listcategories) - List all Categories
* [createCategories](docs/sdks/categories/README.md#createcategories) - Create a new Category
* [getCategories](docs/sdks/categories/README.md#getcategories) - Retrieve a Category
* [updateCategories](docs/sdks/categories/README.md#updatecategories) - Update a Category
* [deleteCategories](docs/sdks/categories/README.md#deletecategories) - Delete a Category

### [clients](docs/sdks/clients/README.md)

* [listClients](docs/sdks/clients/README.md#listclients) - List all Clients
* [createClients](docs/sdks/clients/README.md#createclients) - Create a new Client
* [getClients](docs/sdks/clients/README.md#getclients) - Retrieve a Client
* [updateClients](docs/sdks/clients/README.md#updateclients) - Update a Client
* [deleteClients](docs/sdks/clients/README.md#deleteclients) - Delete a Client

### [companyContacts](docs/sdks/companycontacts/README.md)

* [listCompanyContacts](docs/sdks/companycontacts/README.md#listcompanycontacts) - List all Company Contacts
* [createCompanyContacts](docs/sdks/companycontacts/README.md#createcompanycontacts) - Create a new Company Contact
* [getCompanyContacts](docs/sdks/companycontacts/README.md#getcompanycontacts) - Retrieve a Company Contact
* [updateCompanyContacts](docs/sdks/companycontacts/README.md#updatecompanycontacts) - Update a Company Contact
* [deleteCompanyContacts](docs/sdks/companycontacts/README.md#deletecompanycontacts) - Delete a Company Contact

### [documentTemplates](docs/sdks/documenttemplates/README.md)

* [listDocumentTemplates](docs/sdks/documenttemplates/README.md#listdocumenttemplates) - List all Document Templates
* [createDocumentTemplates](docs/sdks/documenttemplates/README.md#createdocumenttemplates) - Create a new Document Template
* [getDocumentTemplates](docs/sdks/documenttemplates/README.md#getdocumenttemplates) - Retrieve a Document Template
* [updateDocumentTemplates](docs/sdks/documenttemplates/README.md#updatedocumenttemplates) - Update a Document Template
* [deleteDocumentTemplates](docs/sdks/documenttemplates/README.md#deletedocumenttemplates) - Delete a Document Template

### [emailTemplates](docs/sdks/emailtemplates/README.md)

* [listEmailTemplates](docs/sdks/emailtemplates/README.md#listemailtemplates) - List all Email Templates
* [createEmailTemplates](docs/sdks/emailtemplates/README.md#createemailtemplates) - Create a new Email Template
* [getEmailTemplates](docs/sdks/emailtemplates/README.md#getemailtemplates) - Retrieve an Email Template
* [updateEmailTemplates](docs/sdks/emailtemplates/README.md#updateemailtemplates) - Update an Email Template
* [deleteEmailTemplates](docs/sdks/emailtemplates/README.md#deleteemailtemplates) - Delete an Email Template

### [feedback](docs/sdks/feedback/README.md)

* [listFeedback](docs/sdks/feedback/README.md#listfeedback) - List all Feedback
* [createFeedback](docs/sdks/feedback/README.md#createfeedback) - Create a new Feedback
* [getFeedback](docs/sdks/feedback/README.md#getfeedback) - Retrieve a Feedback
* [updateFeedback](docs/sdks/feedback/README.md#updatefeedback) - Update a Feedback
* [deleteFeedback](docs/sdks/feedback/README.md#deletefeedback) - Delete a Feedback

### [formFields](docs/sdks/formfields/README.md)

* [listFormFields](docs/sdks/formfields/README.md#listformfields) - List all Form Fields
* [createFormFields](docs/sdks/formfields/README.md#createformfields) - Create a new Form Field
* [getFormFields](docs/sdks/formfields/README.md#getformfields) - Retrieve a Form Field
* [updateFormFields](docs/sdks/formfields/README.md#updateformfields) - Update a Form Field
* [deleteFormFields](docs/sdks/formfields/README.md#deleteformfields) - Delete a Form Field

### [formResponses](docs/sdks/formresponses/README.md)

* [listFormResponses](docs/sdks/formresponses/README.md#listformresponses) - List all Form Responses
* [createFormResponses](docs/sdks/formresponses/README.md#createformresponses) - Create a new Form Response
* [getFormResponses](docs/sdks/formresponses/README.md#getformresponses) - Retrieve a Form Response
* [updateFormResponses](docs/sdks/formresponses/README.md#updateformresponses) - Update a Form Response
* [deleteFormResponses](docs/sdks/formresponses/README.md#deleteformresponses) - Delete a Form Response

### [forms](docs/sdks/forms/README.md)

* [listForms](docs/sdks/forms/README.md#listforms) - List all Forms
* [createForms](docs/sdks/forms/README.md#createforms) - Create a new Form
* [getForms](docs/sdks/forms/README.md#getforms) - Retrieve a Form
* [updateForms](docs/sdks/forms/README.md#updateforms) - Update a Form
* [deleteForms](docs/sdks/forms/README.md#deleteforms) - Delete a Form

### [inbox](docs/sdks/inbox/README.md)

* [listInboxMessages](docs/sdks/inbox/README.md#listinboxmessages) - List inbox messages
* [createInboxMessage](docs/sdks/inbox/README.md#createinboxmessage) - Create a new inbox message
* [getInboxMessage](docs/sdks/inbox/README.md#getinboxmessage) - Get inbox message details
* [markInboxMessageAsRead](docs/sdks/inbox/README.md#markinboxmessageasread) - Mark message as read
* [archiveInboxMessage](docs/sdks/inbox/README.md#archiveinboxmessage) - Archive or unarchive message
* [snoozeInboxMessage](docs/sdks/inbox/README.md#snoozeinboxmessage) - Snooze or unsnooze message
* [convertInboxMessageToJob](docs/sdks/inbox/README.md#convertinboxmessagetojob) - Convert message to job
* [attachInboxMessageToJob](docs/sdks/inbox/README.md#attachinboxmessagetojob) - Attach message to existing job
* [addNoteToInboxMessage](docs/sdks/inbox/README.md#addnotetoinboxmessage) - Add note to message

### [jobActivities](docs/sdks/jobactivities/README.md)

* [listJobActivities](docs/sdks/jobactivities/README.md#listjobactivities) - List all Job Activities
* [createJobActivities](docs/sdks/jobactivities/README.md#createjobactivities) - Create a new Job Activity
* [getJobActivities](docs/sdks/jobactivities/README.md#getjobactivities) - Retrieve a Job Activity
* [updateJobActivities](docs/sdks/jobactivities/README.md#updatejobactivities) - Update a Job Activity
* [deleteJobActivities](docs/sdks/jobactivities/README.md#deletejobactivities) - Delete a Job Activity

### [jobAllocations](docs/sdks/joballocations/README.md)

* [listJobAllocations](docs/sdks/joballocations/README.md#listjoballocations) - List all Job Allocations
* [createJobAllocations](docs/sdks/joballocations/README.md#createjoballocations) - Create a new Job Allocation
* [getJobAllocations](docs/sdks/joballocations/README.md#getjoballocations) - Retrieve a Job Allocation
* [updateJobAllocations](docs/sdks/joballocations/README.md#updatejoballocations) - Update a Job Allocation
* [deleteJobAllocations](docs/sdks/joballocations/README.md#deletejoballocations) - Delete a Job Allocation

### [jobChecklists](docs/sdks/jobchecklists/README.md)

* [listJobChecklists](docs/sdks/jobchecklists/README.md#listjobchecklists) - List all Job Checklists
* [createJobChecklists](docs/sdks/jobchecklists/README.md#createjobchecklists) - Create a new Job Checklist
* [getJobChecklists](docs/sdks/jobchecklists/README.md#getjobchecklists) - Retrieve a Job Checklist
* [updateJobChecklists](docs/sdks/jobchecklists/README.md#updatejobchecklists) - Update a Job Checklist
* [deleteJobChecklists](docs/sdks/jobchecklists/README.md#deletejobchecklists) - Delete a Job Checklist

### [jobContacts](docs/sdks/jobcontacts/README.md)

* [listJobContacts](docs/sdks/jobcontacts/README.md#listjobcontacts) - List all Job Contacts
* [createJobContacts](docs/sdks/jobcontacts/README.md#createjobcontacts) - Create a new Job Contact
* [getJobContacts](docs/sdks/jobcontacts/README.md#getjobcontacts) - Retrieve a Job Contact
* [updateJobContacts](docs/sdks/jobcontacts/README.md#updatejobcontacts) - Update a Job Contact
* [deleteJobContacts](docs/sdks/jobcontacts/README.md#deletejobcontacts) - Delete a Job Contact

### [jobMaterialBundles](docs/sdks/jobmaterialbundles/README.md)

* [listJobMaterialBundles](docs/sdks/jobmaterialbundles/README.md#listjobmaterialbundles) - List all Job Material Bundles
* [createJobMaterialBundles](docs/sdks/jobmaterialbundles/README.md#createjobmaterialbundles) - Create a new Job Material Bundle
* [getJobMaterialBundles](docs/sdks/jobmaterialbundles/README.md#getjobmaterialbundles) - Retrieve a Job Material Bundle
* [updateJobMaterialBundles](docs/sdks/jobmaterialbundles/README.md#updatejobmaterialbundles) - Update a Job Material Bundle
* [deleteJobMaterialBundles](docs/sdks/jobmaterialbundles/README.md#deletejobmaterialbundles) - Delete a Job Material Bundle

### [jobMaterials](docs/sdks/jobmaterials/README.md)

* [listJobMaterials](docs/sdks/jobmaterials/README.md#listjobmaterials) - List all Job Materials
* [createJobMaterials](docs/sdks/jobmaterials/README.md#createjobmaterials) - Create a new Job Material
* [getJobMaterials](docs/sdks/jobmaterials/README.md#getjobmaterials) - Retrieve a Job Material
* [updateJobMaterials](docs/sdks/jobmaterials/README.md#updatejobmaterials) - Update a Job Material
* [deleteJobMaterials](docs/sdks/jobmaterials/README.md#deletejobmaterials) - Delete a Job Material

### [jobPayments](docs/sdks/jobpayments/README.md)

* [listJobPayments](docs/sdks/jobpayments/README.md#listjobpayments) - List all Job Payments
* [createJobPayments](docs/sdks/jobpayments/README.md#createjobpayments) - Create a new Job Payment
* [getJobPayments](docs/sdks/jobpayments/README.md#getjobpayments) - Retrieve a Job Payment
* [updateJobPayments](docs/sdks/jobpayments/README.md#updatejobpayments) - Update a Job Payment
* [deleteJobPayments](docs/sdks/jobpayments/README.md#deletejobpayments) - Delete a Job Payment

### [jobQueues](docs/sdks/jobqueues/README.md)

* [listJobQueues](docs/sdks/jobqueues/README.md#listjobqueues) - List all Job Queues
* [createJobQueues](docs/sdks/jobqueues/README.md#createjobqueues) - Create a new Job Queue
* [getJobQueues](docs/sdks/jobqueues/README.md#getjobqueues) - Retrieve a Job Queue
* [updateJobQueues](docs/sdks/jobqueues/README.md#updatejobqueues) - Update a Job Queue
* [deleteJobQueues](docs/sdks/jobqueues/README.md#deletejobqueues) - Delete a Job Queue

### [jobs](docs/sdks/jobs/README.md)

* [listJobs](docs/sdks/jobs/README.md#listjobs) - List all Jobs
* [createJobs](docs/sdks/jobs/README.md#createjobs) - Create a new Job
* [getJobs](docs/sdks/jobs/README.md#getjobs) - Retrieve a Job
* [updateJobs](docs/sdks/jobs/README.md#updatejobs) - Update a Job
* [deleteJobs](docs/sdks/jobs/README.md#deletejobs) - Delete a Job

### [jobTemplates](docs/sdks/jobtemplates/README.md)

* [listJobTemplates](docs/sdks/jobtemplates/README.md#listjobtemplates) - List all Job Templates
* [getJobTemplates](docs/sdks/jobtemplates/README.md#getjobtemplates) - Retrieve a Job Template
* [createJobFromTemplate](docs/sdks/jobtemplates/README.md#createjobfromtemplate) - Create a job from a template

### [knowledgeArticles](docs/sdks/knowledgearticles/README.md)

* [listKnowledgeArticles](docs/sdks/knowledgearticles/README.md#listknowledgearticles) - List all Knowledge Articles
* [createKnowledgeArticles](docs/sdks/knowledgearticles/README.md#createknowledgearticles) - Create a new Knowledge Article
* [getKnowledgeArticles](docs/sdks/knowledgearticles/README.md#getknowledgearticles) - Retrieve a Knowledge Article
* [updateKnowledgeArticles](docs/sdks/knowledgearticles/README.md#updateknowledgearticles) - Update a Knowledge Article
* [deleteKnowledgeArticles](docs/sdks/knowledgearticles/README.md#deleteknowledgearticles) - Delete a Knowledge Article

### [locations](docs/sdks/locations/README.md)

* [listLocations](docs/sdks/locations/README.md#listlocations) - List all Locations
* [createLocations](docs/sdks/locations/README.md#createlocations) - Create a new Location
* [getLocations](docs/sdks/locations/README.md#getlocations) - Retrieve a Location
* [updateLocations](docs/sdks/locations/README.md#updatelocations) - Update a Location
* [deleteLocations](docs/sdks/locations/README.md#deletelocations) - Delete a Location

### [materials](docs/sdks/materials/README.md)

* [listMaterials](docs/sdks/materials/README.md#listmaterials) - List all Materials
* [createMaterials](docs/sdks/materials/README.md#creatematerials) - Create a new Material
* [getMaterials](docs/sdks/materials/README.md#getmaterials) - Retrieve a Material
* [updateMaterials](docs/sdks/materials/README.md#updatematerials) - Update a Material
* [deleteMaterials](docs/sdks/materials/README.md#deletematerials) - Delete a Material

### [search](docs/sdks/search/README.md)

* [generalSearch](docs/sdks/search/README.md#generalsearch) - Search across multiple object types
* [objectSearch](docs/sdks/search/README.md#objectsearch) - Search within a specific object type
* [jobEmbeddingSearch](docs/sdks/search/README.md#jobembeddingsearch) - Semantic search for jobs

### [securityRoles](docs/sdks/securityroles/README.md)

* [listSecurityRoles](docs/sdks/securityroles/README.md#listsecurityroles) - List all Security Roles
* [getSecurityRoles](docs/sdks/securityroles/README.md#getsecurityroles) - Retrieve a Security Role


### [smsTemplates](docs/sdks/smstemplates/README.md)

* [listSMSTemplates](docs/sdks/smstemplates/README.md#listsmstemplates) - List all SMS Templates
* [createSMSTemplates](docs/sdks/smstemplates/README.md#createsmstemplates) - Create a new SMS Template
* [getSMSTemplates](docs/sdks/smstemplates/README.md#getsmstemplates) - Retrieve a SMS Template
* [updateSMSTemplates](docs/sdks/smstemplates/README.md#updatesmstemplates) - Update a SMS Template
* [deleteSMSTemplates](docs/sdks/smstemplates/README.md#deletesmstemplates) - Delete a SMS Template

### [staffMembers](docs/sdks/staffmembers/README.md)

* [listStaffMembers](docs/sdks/staffmembers/README.md#liststaffmembers) - List all Staff Members
* [createStaffMembers](docs/sdks/staffmembers/README.md#createstaffmembers) - Create a new Staff Member
* [getStaffMembers](docs/sdks/staffmembers/README.md#getstaffmembers) - Retrieve a Staff Member
* [updateStaffMembers](docs/sdks/staffmembers/README.md#updatestaffmembers) - Update a Staff Member
* [deleteStaffMembers](docs/sdks/staffmembers/README.md#deletestaffmembers) - Delete a Staff Member

### [staffMessages](docs/sdks/staffmessages/README.md)

* [listStaffMessages](docs/sdks/staffmessages/README.md#liststaffmessages) - List all Staff Messages
* [createStaffMessages](docs/sdks/staffmessages/README.md#createstaffmessages) - Create a new Staff Message
* [getStaffMessages](docs/sdks/staffmessages/README.md#getstaffmessages) - Retrieve a Staff Message
* [updateStaffMessages](docs/sdks/staffmessages/README.md#updatestaffmessages) - Update a Staff Message
* [deleteStaffMessages](docs/sdks/staffmessages/README.md#deletestaffmessages) - Delete a Staff Message

### [tasks](docs/sdks/tasks/README.md)

* [listTasks](docs/sdks/tasks/README.md#listtasks) - List all Tasks
* [createTasks](docs/sdks/tasks/README.md#createtasks) - Create a new Task
* [getTasks](docs/sdks/tasks/README.md#gettasks) - Retrieve a Task
* [updateTasks](docs/sdks/tasks/README.md#updatetasks) - Update a Task
* [deleteTasks](docs/sdks/tasks/README.md#deletetasks) - Delete a Task

### [taxRates](docs/sdks/taxrates/README.md)

* [listTaxRates](docs/sdks/taxrates/README.md#listtaxrates) - List all Tax Rates
* [createTaxRates](docs/sdks/taxrates/README.md#createtaxrates) - Create a new Tax Rate
* [getTaxRates](docs/sdks/taxrates/README.md#gettaxrates) - Retrieve a Tax Rate
* [updateTaxRates](docs/sdks/taxrates/README.md#updatetaxrates) - Update a Tax Rate
* [deleteTaxRates](docs/sdks/taxrates/README.md#deletetaxrates) - Delete a Tax Rate

### [vendors](docs/sdks/vendors/README.md)

* [listVendors](docs/sdks/vendors/README.md#listvendors) - List all Vendors
* [getVendors](docs/sdks/vendors/README.md#getvendors) - Retrieve a Vendor

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`allocationWindowsCreateAllocationWindows`](docs/sdks/allocationwindows/README.md#createallocationwindows) - Create a new Allocation Window
- [`allocationWindowsDeleteAllocationWindows`](docs/sdks/allocationwindows/README.md#deleteallocationwindows) - Delete an Allocation Window
- [`allocationWindowsGetAllocationWindows`](docs/sdks/allocationwindows/README.md#getallocationwindows) - Retrieve an Allocation Window
- [`allocationWindowsListAllocationWindows`](docs/sdks/allocationwindows/README.md#listallocationwindows) - List all Allocation Windows
- [`allocationWindowsUpdateAllocationWindows`](docs/sdks/allocationwindows/README.md#updateallocationwindows) - Update an Allocation Window
- [`assetsDeleteAssets`](docs/sdks/assets/README.md#deleteassets) - Delete an Asset
- [`assetsGetAssets`](docs/sdks/assets/README.md#getassets) - Retrieve an Asset
- [`assetsListAssets`](docs/sdks/assets/README.md#listassets) - List all Assets
- [`assetsUpdateAssets`](docs/sdks/assets/README.md#updateassets) - Update an Asset
- [`assetTypeFieldsCreateAssetTypeFields`](docs/sdks/assettypefields/README.md#createassettypefields) - Create a new Asset Type Field
- [`assetTypeFieldsDeleteAssetTypeFields`](docs/sdks/assettypefields/README.md#deleteassettypefields) - Delete an Asset Type Field
- [`assetTypeFieldsGetAssetTypeFields`](docs/sdks/assettypefields/README.md#getassettypefields) - Retrieve an Asset Type Field
- [`assetTypeFieldsListAssetTypeFields`](docs/sdks/assettypefields/README.md#listassettypefields) - List all Asset Type Fields
- [`assetTypeFieldsUpdateAssetTypeFields`](docs/sdks/assettypefields/README.md#updateassettypefields) - Update an Asset Type Field
- [`assetTypesCreateAssetTypes`](docs/sdks/assettypes/README.md#createassettypes) - Create a new Asset Type
- [`assetTypesDeleteAssetTypes`](docs/sdks/assettypes/README.md#deleteassettypes) - Delete an Asset Type
- [`assetTypesGetAssetTypes`](docs/sdks/assettypes/README.md#getassettypes) - Retrieve an Asset Type
- [`assetTypesListAssetTypes`](docs/sdks/assettypes/README.md#listassettypes) - List all Asset Types
- [`assetTypesUpdateAssetTypes`](docs/sdks/assettypes/README.md#updateassettypes) - Update an Asset Type
- [`badgesCreateBadges`](docs/sdks/badges/README.md#createbadges) - Create a new Badge
- [`badgesDeleteBadges`](docs/sdks/badges/README.md#deletebadges) - Delete a Badge
- [`badgesGetBadges`](docs/sdks/badges/README.md#getbadges) - Retrieve a Badge
- [`badgesListBadges`](docs/sdks/badges/README.md#listbadges) - List all Badges
- [`badgesUpdateBadges`](docs/sdks/badges/README.md#updatebadges) - Update a Badge
- [`bundlesCreateBundles`](docs/sdks/bundles/README.md#createbundles) - Create a new Bundle
- [`bundlesDeleteBundles`](docs/sdks/bundles/README.md#deletebundles) - Delete a Bundle
- [`bundlesGetBundles`](docs/sdks/bundles/README.md#getbundles) - Retrieve a Bundle
- [`bundlesListBundles`](docs/sdks/bundles/README.md#listbundles) - List all Bundles
- [`bundlesUpdateBundles`](docs/sdks/bundles/README.md#updatebundles) - Update a Bundle
- [`categoriesCreateCategories`](docs/sdks/categories/README.md#createcategories) - Create a new Category
- [`categoriesDeleteCategories`](docs/sdks/categories/README.md#deletecategories) - Delete a Category
- [`categoriesGetCategories`](docs/sdks/categories/README.md#getcategories) - Retrieve a Category
- [`categoriesListCategories`](docs/sdks/categories/README.md#listcategories) - List all Categories
- [`categoriesUpdateCategories`](docs/sdks/categories/README.md#updatecategories) - Update a Category
- [`clientsCreateClients`](docs/sdks/clients/README.md#createclients) - Create a new Client
- [`clientsDeleteClients`](docs/sdks/clients/README.md#deleteclients) - Delete a Client
- [`clientsGetClients`](docs/sdks/clients/README.md#getclients) - Retrieve a Client
- [`clientsListClients`](docs/sdks/clients/README.md#listclients) - List all Clients
- [`clientsUpdateClients`](docs/sdks/clients/README.md#updateclients) - Update a Client
- [`companyContactsCreateCompanyContacts`](docs/sdks/companycontacts/README.md#createcompanycontacts) - Create a new Company Contact
- [`companyContactsDeleteCompanyContacts`](docs/sdks/companycontacts/README.md#deletecompanycontacts) - Delete a Company Contact
- [`companyContactsGetCompanyContacts`](docs/sdks/companycontacts/README.md#getcompanycontacts) - Retrieve a Company Contact
- [`companyContactsListCompanyContacts`](docs/sdks/companycontacts/README.md#listcompanycontacts) - List all Company Contacts
- [`companyContactsUpdateCompanyContacts`](docs/sdks/companycontacts/README.md#updatecompanycontacts) - Update a Company Contact
- [`documentTemplatesCreateDocumentTemplates`](docs/sdks/documenttemplates/README.md#createdocumenttemplates) - Create a new Document Template
- [`documentTemplatesDeleteDocumentTemplates`](docs/sdks/documenttemplates/README.md#deletedocumenttemplates) - Delete a Document Template
- [`documentTemplatesGetDocumentTemplates`](docs/sdks/documenttemplates/README.md#getdocumenttemplates) - Retrieve a Document Template
- [`documentTemplatesListDocumentTemplates`](docs/sdks/documenttemplates/README.md#listdocumenttemplates) - List all Document Templates
- [`documentTemplatesUpdateDocumentTemplates`](docs/sdks/documenttemplates/README.md#updatedocumenttemplates) - Update a Document Template
- [`emailTemplatesCreateEmailTemplates`](docs/sdks/emailtemplates/README.md#createemailtemplates) - Create a new Email Template
- [`emailTemplatesDeleteEmailTemplates`](docs/sdks/emailtemplates/README.md#deleteemailtemplates) - Delete an Email Template
- [`emailTemplatesGetEmailTemplates`](docs/sdks/emailtemplates/README.md#getemailtemplates) - Retrieve an Email Template
- [`emailTemplatesListEmailTemplates`](docs/sdks/emailtemplates/README.md#listemailtemplates) - List all Email Templates
- [`emailTemplatesUpdateEmailTemplates`](docs/sdks/emailtemplates/README.md#updateemailtemplates) - Update an Email Template
- [`feedbackCreateFeedback`](docs/sdks/feedback/README.md#createfeedback) - Create a new Feedback
- [`feedbackDeleteFeedback`](docs/sdks/feedback/README.md#deletefeedback) - Delete a Feedback
- [`feedbackGetFeedback`](docs/sdks/feedback/README.md#getfeedback) - Retrieve a Feedback
- [`feedbackListFeedback`](docs/sdks/feedback/README.md#listfeedback) - List all Feedback
- [`feedbackUpdateFeedback`](docs/sdks/feedback/README.md#updatefeedback) - Update a Feedback
- [`formFieldsCreateFormFields`](docs/sdks/formfields/README.md#createformfields) - Create a new Form Field
- [`formFieldsDeleteFormFields`](docs/sdks/formfields/README.md#deleteformfields) - Delete a Form Field
- [`formFieldsGetFormFields`](docs/sdks/formfields/README.md#getformfields) - Retrieve a Form Field
- [`formFieldsListFormFields`](docs/sdks/formfields/README.md#listformfields) - List all Form Fields
- [`formFieldsUpdateFormFields`](docs/sdks/formfields/README.md#updateformfields) - Update a Form Field
- [`formResponsesCreateFormResponses`](docs/sdks/formresponses/README.md#createformresponses) - Create a new Form Response
- [`formResponsesDeleteFormResponses`](docs/sdks/formresponses/README.md#deleteformresponses) - Delete a Form Response
- [`formResponsesGetFormResponses`](docs/sdks/formresponses/README.md#getformresponses) - Retrieve a Form Response
- [`formResponsesListFormResponses`](docs/sdks/formresponses/README.md#listformresponses) - List all Form Responses
- [`formResponsesUpdateFormResponses`](docs/sdks/formresponses/README.md#updateformresponses) - Update a Form Response
- [`formsCreateForms`](docs/sdks/forms/README.md#createforms) - Create a new Form
- [`formsDeleteForms`](docs/sdks/forms/README.md#deleteforms) - Delete a Form
- [`formsGetForms`](docs/sdks/forms/README.md#getforms) - Retrieve a Form
- [`formsListForms`](docs/sdks/forms/README.md#listforms) - List all Forms
- [`formsUpdateForms`](docs/sdks/forms/README.md#updateforms) - Update a Form
- [`inboxAddNoteToInboxMessage`](docs/sdks/inbox/README.md#addnotetoinboxmessage) - Add note to message
- [`inboxArchiveInboxMessage`](docs/sdks/inbox/README.md#archiveinboxmessage) - Archive or unarchive message
- [`inboxAttachInboxMessageToJob`](docs/sdks/inbox/README.md#attachinboxmessagetojob) - Attach message to existing job
- [`inboxConvertInboxMessageToJob`](docs/sdks/inbox/README.md#convertinboxmessagetojob) - Convert message to job
- [`inboxCreateInboxMessage`](docs/sdks/inbox/README.md#createinboxmessage) - Create a new inbox message
- [`inboxGetInboxMessage`](docs/sdks/inbox/README.md#getinboxmessage) - Get inbox message details
- [`inboxListInboxMessages`](docs/sdks/inbox/README.md#listinboxmessages) - List inbox messages
- [`inboxMarkInboxMessageAsRead`](docs/sdks/inbox/README.md#markinboxmessageasread) - Mark message as read
- [`inboxSnoozeInboxMessage`](docs/sdks/inbox/README.md#snoozeinboxmessage) - Snooze or unsnooze message
- [`jobActivitiesCreateJobActivities`](docs/sdks/jobactivities/README.md#createjobactivities) - Create a new Job Activity
- [`jobActivitiesDeleteJobActivities`](docs/sdks/jobactivities/README.md#deletejobactivities) - Delete a Job Activity
- [`jobActivitiesGetJobActivities`](docs/sdks/jobactivities/README.md#getjobactivities) - Retrieve a Job Activity
- [`jobActivitiesListJobActivities`](docs/sdks/jobactivities/README.md#listjobactivities) - List all Job Activities
- [`jobActivitiesUpdateJobActivities`](docs/sdks/jobactivities/README.md#updatejobactivities) - Update a Job Activity
- [`jobAllocationsCreateJobAllocations`](docs/sdks/joballocations/README.md#createjoballocations) - Create a new Job Allocation
- [`jobAllocationsDeleteJobAllocations`](docs/sdks/joballocations/README.md#deletejoballocations) - Delete a Job Allocation
- [`jobAllocationsGetJobAllocations`](docs/sdks/joballocations/README.md#getjoballocations) - Retrieve a Job Allocation
- [`jobAllocationsListJobAllocations`](docs/sdks/joballocations/README.md#listjoballocations) - List all Job Allocations
- [`jobAllocationsUpdateJobAllocations`](docs/sdks/joballocations/README.md#updatejoballocations) - Update a Job Allocation
- [`jobChecklistsCreateJobChecklists`](docs/sdks/jobchecklists/README.md#createjobchecklists) - Create a new Job Checklist
- [`jobChecklistsDeleteJobChecklists`](docs/sdks/jobchecklists/README.md#deletejobchecklists) - Delete a Job Checklist
- [`jobChecklistsGetJobChecklists`](docs/sdks/jobchecklists/README.md#getjobchecklists) - Retrieve a Job Checklist
- [`jobChecklistsListJobChecklists`](docs/sdks/jobchecklists/README.md#listjobchecklists) - List all Job Checklists
- [`jobChecklistsUpdateJobChecklists`](docs/sdks/jobchecklists/README.md#updatejobchecklists) - Update a Job Checklist
- [`jobContactsCreateJobContacts`](docs/sdks/jobcontacts/README.md#createjobcontacts) - Create a new Job Contact
- [`jobContactsDeleteJobContacts`](docs/sdks/jobcontacts/README.md#deletejobcontacts) - Delete a Job Contact
- [`jobContactsGetJobContacts`](docs/sdks/jobcontacts/README.md#getjobcontacts) - Retrieve a Job Contact
- [`jobContactsListJobContacts`](docs/sdks/jobcontacts/README.md#listjobcontacts) - List all Job Contacts
- [`jobContactsUpdateJobContacts`](docs/sdks/jobcontacts/README.md#updatejobcontacts) - Update a Job Contact
- [`jobMaterialBundlesCreateJobMaterialBundles`](docs/sdks/jobmaterialbundles/README.md#createjobmaterialbundles) - Create a new Job Material Bundle
- [`jobMaterialBundlesDeleteJobMaterialBundles`](docs/sdks/jobmaterialbundles/README.md#deletejobmaterialbundles) - Delete a Job Material Bundle
- [`jobMaterialBundlesGetJobMaterialBundles`](docs/sdks/jobmaterialbundles/README.md#getjobmaterialbundles) - Retrieve a Job Material Bundle
- [`jobMaterialBundlesListJobMaterialBundles`](docs/sdks/jobmaterialbundles/README.md#listjobmaterialbundles) - List all Job Material Bundles
- [`jobMaterialBundlesUpdateJobMaterialBundles`](docs/sdks/jobmaterialbundles/README.md#updatejobmaterialbundles) - Update a Job Material Bundle
- [`jobMaterialsCreateJobMaterials`](docs/sdks/jobmaterials/README.md#createjobmaterials) - Create a new Job Material
- [`jobMaterialsDeleteJobMaterials`](docs/sdks/jobmaterials/README.md#deletejobmaterials) - Delete a Job Material
- [`jobMaterialsGetJobMaterials`](docs/sdks/jobmaterials/README.md#getjobmaterials) - Retrieve a Job Material
- [`jobMaterialsListJobMaterials`](docs/sdks/jobmaterials/README.md#listjobmaterials) - List all Job Materials
- [`jobMaterialsUpdateJobMaterials`](docs/sdks/jobmaterials/README.md#updatejobmaterials) - Update a Job Material
- [`jobPaymentsCreateJobPayments`](docs/sdks/jobpayments/README.md#createjobpayments) - Create a new Job Payment
- [`jobPaymentsDeleteJobPayments`](docs/sdks/jobpayments/README.md#deletejobpayments) - Delete a Job Payment
- [`jobPaymentsGetJobPayments`](docs/sdks/jobpayments/README.md#getjobpayments) - Retrieve a Job Payment
- [`jobPaymentsListJobPayments`](docs/sdks/jobpayments/README.md#listjobpayments) - List all Job Payments
- [`jobPaymentsUpdateJobPayments`](docs/sdks/jobpayments/README.md#updatejobpayments) - Update a Job Payment
- [`jobQueuesCreateJobQueues`](docs/sdks/jobqueues/README.md#createjobqueues) - Create a new Job Queue
- [`jobQueuesDeleteJobQueues`](docs/sdks/jobqueues/README.md#deletejobqueues) - Delete a Job Queue
- [`jobQueuesGetJobQueues`](docs/sdks/jobqueues/README.md#getjobqueues) - Retrieve a Job Queue
- [`jobQueuesListJobQueues`](docs/sdks/jobqueues/README.md#listjobqueues) - List all Job Queues
- [`jobQueuesUpdateJobQueues`](docs/sdks/jobqueues/README.md#updatejobqueues) - Update a Job Queue
- [`jobsCreateJobs`](docs/sdks/jobs/README.md#createjobs) - Create a new Job
- [`jobsDeleteJobs`](docs/sdks/jobs/README.md#deletejobs) - Delete a Job
- [`jobsGetJobs`](docs/sdks/jobs/README.md#getjobs) - Retrieve a Job
- [`jobsListJobs`](docs/sdks/jobs/README.md#listjobs) - List all Jobs
- [`jobsUpdateJobs`](docs/sdks/jobs/README.md#updatejobs) - Update a Job
- [`jobTemplatesCreateJobFromTemplate`](docs/sdks/jobtemplates/README.md#createjobfromtemplate) - Create a job from a template
- [`jobTemplatesGetJobTemplates`](docs/sdks/jobtemplates/README.md#getjobtemplates) - Retrieve a Job Template
- [`jobTemplatesListJobTemplates`](docs/sdks/jobtemplates/README.md#listjobtemplates) - List all Job Templates
- [`knowledgeArticlesCreateKnowledgeArticles`](docs/sdks/knowledgearticles/README.md#createknowledgearticles) - Create a new Knowledge Article
- [`knowledgeArticlesDeleteKnowledgeArticles`](docs/sdks/knowledgearticles/README.md#deleteknowledgearticles) - Delete a Knowledge Article
- [`knowledgeArticlesGetKnowledgeArticles`](docs/sdks/knowledgearticles/README.md#getknowledgearticles) - Retrieve a Knowledge Article
- [`knowledgeArticlesListKnowledgeArticles`](docs/sdks/knowledgearticles/README.md#listknowledgearticles) - List all Knowledge Articles
- [`knowledgeArticlesUpdateKnowledgeArticles`](docs/sdks/knowledgearticles/README.md#updateknowledgearticles) - Update a Knowledge Article
- [`locationsCreateLocations`](docs/sdks/locations/README.md#createlocations) - Create a new Location
- [`locationsDeleteLocations`](docs/sdks/locations/README.md#deletelocations) - Delete a Location
- [`locationsGetLocations`](docs/sdks/locations/README.md#getlocations) - Retrieve a Location
- [`locationsListLocations`](docs/sdks/locations/README.md#listlocations) - List all Locations
- [`locationsUpdateLocations`](docs/sdks/locations/README.md#updatelocations) - Update a Location
- [`materialsCreateMaterials`](docs/sdks/materials/README.md#creatematerials) - Create a new Material
- [`materialsDeleteMaterials`](docs/sdks/materials/README.md#deletematerials) - Delete a Material
- [`materialsGetMaterials`](docs/sdks/materials/README.md#getmaterials) - Retrieve a Material
- [`materialsListMaterials`](docs/sdks/materials/README.md#listmaterials) - List all Materials
- [`materialsUpdateMaterials`](docs/sdks/materials/README.md#updatematerials) - Update a Material
- [`searchGeneralSearch`](docs/sdks/search/README.md#generalsearch) - Search across multiple object types
- [`searchJobEmbeddingSearch`](docs/sdks/search/README.md#jobembeddingsearch) - Semantic search for jobs
- [`searchObjectSearch`](docs/sdks/search/README.md#objectsearch) - Search within a specific object type
- [`securityRolesGetSecurityRoles`](docs/sdks/securityroles/README.md#getsecurityroles) - Retrieve a Security Role
- [`securityRolesListSecurityRoles`](docs/sdks/securityroles/README.md#listsecurityroles) - List all Security Roles
- [`smsTemplatesCreateSMSTemplates`](docs/sdks/smstemplates/README.md#createsmstemplates) - Create a new SMS Template
- [`smsTemplatesDeleteSMSTemplates`](docs/sdks/smstemplates/README.md#deletesmstemplates) - Delete a SMS Template
- [`smsTemplatesGetSMSTemplates`](docs/sdks/smstemplates/README.md#getsmstemplates) - Retrieve a SMS Template
- [`smsTemplatesListSMSTemplates`](docs/sdks/smstemplates/README.md#listsmstemplates) - List all SMS Templates
- [`smsTemplatesUpdateSMSTemplates`](docs/sdks/smstemplates/README.md#updatesmstemplates) - Update a SMS Template
- [`staffMembersCreateStaffMembers`](docs/sdks/staffmembers/README.md#createstaffmembers) - Create a new Staff Member
- [`staffMembersDeleteStaffMembers`](docs/sdks/staffmembers/README.md#deletestaffmembers) - Delete a Staff Member
- [`staffMembersGetStaffMembers`](docs/sdks/staffmembers/README.md#getstaffmembers) - Retrieve a Staff Member
- [`staffMembersListStaffMembers`](docs/sdks/staffmembers/README.md#liststaffmembers) - List all Staff Members
- [`staffMembersUpdateStaffMembers`](docs/sdks/staffmembers/README.md#updatestaffmembers) - Update a Staff Member
- [`staffMessagesCreateStaffMessages`](docs/sdks/staffmessages/README.md#createstaffmessages) - Create a new Staff Message
- [`staffMessagesDeleteStaffMessages`](docs/sdks/staffmessages/README.md#deletestaffmessages) - Delete a Staff Message
- [`staffMessagesGetStaffMessages`](docs/sdks/staffmessages/README.md#getstaffmessages) - Retrieve a Staff Message
- [`staffMessagesListStaffMessages`](docs/sdks/staffmessages/README.md#liststaffmessages) - List all Staff Messages
- [`staffMessagesUpdateStaffMessages`](docs/sdks/staffmessages/README.md#updatestaffmessages) - Update a Staff Message
- [`tasksCreateTasks`](docs/sdks/tasks/README.md#createtasks) - Create a new Task
- [`tasksDeleteTasks`](docs/sdks/tasks/README.md#deletetasks) - Delete a Task
- [`tasksGetTasks`](docs/sdks/tasks/README.md#gettasks) - Retrieve a Task
- [`tasksListTasks`](docs/sdks/tasks/README.md#listtasks) - List all Tasks
- [`tasksUpdateTasks`](docs/sdks/tasks/README.md#updatetasks) - Update a Task
- [`taxRatesCreateTaxRates`](docs/sdks/taxrates/README.md#createtaxrates) - Create a new Tax Rate
- [`taxRatesDeleteTaxRates`](docs/sdks/taxrates/README.md#deletetaxrates) - Delete a Tax Rate
- [`taxRatesGetTaxRates`](docs/sdks/taxrates/README.md#gettaxrates) - Retrieve a Tax Rate
- [`taxRatesListTaxRates`](docs/sdks/taxrates/README.md#listtaxrates) - List all Tax Rates
- [`taxRatesUpdateTaxRates`](docs/sdks/taxrates/README.md#updatetaxrates) - Update a Tax Rate
- [`vendorsGetVendors`](docs/sdks/vendors/README.md#getvendors) - Retrieve a Vendor
- [`vendorsListVendors`](docs/sdks/vendors/README.md#listvendors) - List all Vendors

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.allocationWindows.listAllocationWindows({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.allocationWindows.listAllocationWindows();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`ServiceM8Error`](./src/models/errors/servicem8error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { ServiceM8 } from "servicem8";
import * as errors from "servicem8/models/errors";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  try {
    const result = await serviceM8.allocationWindows.listAllocationWindows();

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.ServiceM8Error) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorT) {
        console.log(error.data$.errorCode); // number
        console.log(error.data$.message); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`ServiceM8Error`](./src/models/errors/servicem8error.ts): The base class for HTTP error responses.
  * [`ErrorT`](./src/models/errors/errort.ts): *
  * [`AuthenticationError`](./src/models/errors/authenticationerror.ts): Unauthorized - Authentication credentials are missing or invalid. Status code `401`. *
  * [`ForbiddenError`](./src/models/errors/forbiddenerror.ts): Status code `403`. *
  * [`RateLimitError`](./src/models/errors/ratelimiterror.ts): Too Many Requests - You have exceeded the rate limit. Status code `429`. *

<details><summary>Less common errors (7)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`ServiceM8Error`](./src/models/errors/servicem8error.ts)**:
* [`NotFoundError`](./src/models/errors/notfounderror.ts): Status code `404`. Applicable to 99 of 178 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  serverURL: "https://api.servicem8.com/api_1.0",
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.allocationWindows.listAllocationWindows();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { ServiceM8 } from "servicem8";
import { HTTPClient } from "servicem8/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new ServiceM8({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { ServiceM8 } from "servicem8";

const sdk = new ServiceM8({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `SERVICEM8_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=servicem8&utm_campaign=typescript)
