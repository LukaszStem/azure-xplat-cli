// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Storage/storageAccounts/armclibatch8498?api-version=2015-06-15', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/providers/Microsoft.Storage/operations/66ffd511-e0fc-4a74-9d34-ac01f9a69e09?monitor=true&api-version=2015-06-15',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '110e09a7-8333-48d6-8350-3a03d363ea9c',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '110e09a7-8333-48d6-8350-3a03d363ea9c',
  'x-ms-routing-request-id': 'WESTUS:20160315T164631Z:110e09a7-8333-48d6-8350-3a03d363ea9c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 16:46:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Storage/storageAccounts/armclibatch8498?api-version=2015-06-15', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/providers/Microsoft.Storage/operations/66ffd511-e0fc-4a74-9d34-ac01f9a69e09?monitor=true&api-version=2015-06-15',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '110e09a7-8333-48d6-8350-3a03d363ea9c',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '110e09a7-8333-48d6-8350-3a03d363ea9c',
  'x-ms-routing-request-id': 'WESTUS:20160315T164631Z:110e09a7-8333-48d6-8350-3a03d363ea9c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 16:46:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/providers/Microsoft.Storage/operations/66ffd511-e0fc-4a74-9d34-ac01f9a69e09?monitor=true&api-version=2015-06-15')
  .reply(200, "{\"location\":\"westus\",\"properties\":{\"accountType\":\"Standard_LRS\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '65',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'e8badcf3-a904-4fa2-b769-2acde180e61c',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'e8badcf3-a904-4fa2-b769-2acde180e61c',
  'x-ms-routing-request-id': 'WESTUS:20160315T164701Z:e8badcf3-a904-4fa2-b769-2acde180e61c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 16:47:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/providers/Microsoft.Storage/operations/66ffd511-e0fc-4a74-9d34-ac01f9a69e09?monitor=true&api-version=2015-06-15')
  .reply(200, "{\"location\":\"westus\",\"properties\":{\"accountType\":\"Standard_LRS\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '65',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'e8badcf3-a904-4fa2-b769-2acde180e61c',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'e8badcf3-a904-4fa2-b769-2acde180e61c',
  'x-ms-routing-request-id': 'WESTUS:20160315T164701Z:e8badcf3-a904-4fa2-b769-2acde180e61c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 16:47:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Storage/storageAccounts/armclibatch8498?api-version=2015-06-15')
  .reply(200, "{\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Storage/storageAccounts/armclibatch8498\",\"location\":\"westus\",\"name\":\"armclibatch8498\",\"properties\":{\"accountType\":\"Standard_LRS\",\"creationTime\":\"2016-03-15T16:46:30.7543495Z\",\"primaryEndpoints\":{\"blob\":\"https://armclibatch8498.blob.core.windows.net/\",\"file\":\"https://armclibatch8498.file.core.windows.net/\",\"queue\":\"https://armclibatch8498.queue.core.windows.net/\",\"table\":\"https://armclibatch8498.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '683',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '87281fac-8971-4e67-aa78-a56cf2c70cb2',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '87281fac-8971-4e67-aa78-a56cf2c70cb2',
  'x-ms-routing-request-id': 'WESTUS:20160315T164702Z:87281fac-8971-4e67-aa78-a56cf2c70cb2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 16:47:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Storage/storageAccounts/armclibatch8498?api-version=2015-06-15')
  .reply(200, "{\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Storage/storageAccounts/armclibatch8498\",\"location\":\"westus\",\"name\":\"armclibatch8498\",\"properties\":{\"accountType\":\"Standard_LRS\",\"creationTime\":\"2016-03-15T16:46:30.7543495Z\",\"primaryEndpoints\":{\"blob\":\"https://armclibatch8498.blob.core.windows.net/\",\"file\":\"https://armclibatch8498.file.core.windows.net/\",\"queue\":\"https://armclibatch8498.queue.core.windows.net/\",\"table\":\"https://armclibatch8498.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '683',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '87281fac-8971-4e67-aa78-a56cf2c70cb2',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '87281fac-8971-4e67-aa78-a56cf2c70cb2',
  'x-ms-routing-request-id': 'WESTUS:20160315T164702Z:87281fac-8971-4e67-aa78-a56cf2c70cb2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 15 Mar 2016 16:47:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511?api-version=2015-12-01', '*')
  .reply(200, "{\"name\":\"armclibatch9511\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch9511.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Storage/storageAccounts/armclibatch8498\",\"lastKeySync\":\"2016-03-15T16:47:03.557704Z\"}},\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '635',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Tue, 15 Mar 2016 16:47:03 GMT',
  etag: '0x8D34CF16FD3D982',
  'request-id': '656407b5-2a7f-4020-ae9f-adb73a069102',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': 'fdc5b8cb-64d5-4a2e-a6f0-4ec0d6a86edc',
  'x-ms-correlation-request-id': 'fdc5b8cb-64d5-4a2e-a6f0-4ec0d6a86edc',
  'x-ms-routing-request-id': 'WESTUS:20160315T164702Z:fdc5b8cb-64d5-4a2e-a6f0-4ec0d6a86edc',
  date: 'Tue, 15 Mar 2016 16:47:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511?api-version=2015-12-01', '*')
  .reply(200, "{\"name\":\"armclibatch9511\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch9511.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Storage/storageAccounts/armclibatch8498\",\"lastKeySync\":\"2016-03-15T16:47:03.557704Z\"}},\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '635',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Tue, 15 Mar 2016 16:47:03 GMT',
  etag: '0x8D34CF16FD3D982',
  'request-id': '656407b5-2a7f-4020-ae9f-adb73a069102',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': 'fdc5b8cb-64d5-4a2e-a6f0-4ec0d6a86edc',
  'x-ms-correlation-request-id': 'fdc5b8cb-64d5-4a2e-a6f0-4ec0d6a86edc',
  'x-ms-routing-request-id': 'WESTUS:20160315T164702Z:fdc5b8cb-64d5-4a2e-a6f0-4ec0d6a86edc',
  date: 'Tue, 15 Mar 2016 16:47:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511?api-version=2015-12-01')
  .reply(200, "{\"name\":\"armclibatch9511\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch9511.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Storage/storageAccounts/armclibatch8498\",\"lastKeySync\":\"2016-03-15T16:47:03.557704Z\"}},\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '635',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Tue, 15 Mar 2016 16:47:03 GMT',
  etag: '0x8D34CF16F89E938',
  'request-id': 'a4e81423-4cdf-46b2-8181-b4944d8ea2ff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': 'fcc700cc-b87f-41ef-bab7-48a5ed0a8883',
  'x-ms-correlation-request-id': 'fcc700cc-b87f-41ef-bab7-48a5ed0a8883',
  'x-ms-routing-request-id': 'WESTUS:20160315T164703Z:fcc700cc-b87f-41ef-bab7-48a5ed0a8883',
  date: 'Tue, 15 Mar 2016 16:47:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511?api-version=2015-12-01')
  .reply(200, "{\"name\":\"armclibatch9511\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch9511.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Storage/storageAccounts/armclibatch8498\",\"lastKeySync\":\"2016-03-15T16:47:03.557704Z\"}},\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '635',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Tue, 15 Mar 2016 16:47:03 GMT',
  etag: '0x8D34CF16F89E938',
  'request-id': 'a4e81423-4cdf-46b2-8181-b4944d8ea2ff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': 'fcc700cc-b87f-41ef-bab7-48a5ed0a8883',
  'x-ms-correlation-request-id': 'fcc700cc-b87f-41ef-bab7-48a5ed0a8883',
  'x-ms-routing-request-id': 'WESTUS:20160315T164703Z:fcc700cc-b87f-41ef-bab7-48a5ed0a8883',
  date: 'Tue, 15 Mar 2016 16:47:03 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armclibatch8498'];};