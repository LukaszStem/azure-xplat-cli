// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"d3a6ba0f-e168-45fe-8db4-0d7072b44353\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"117e77e1-b503-4f9c-8278-4e0e99edd059\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '520',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d3a6ba0f-e168-45fe-8db4-0d7072b44353"',
  'x-ms-request-id': 'ed449c7a-d9e8-4aaa-8670-ffbb2c094d3e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14954',
  'x-ms-correlation-request-id': 'bbce2f82-aecf-427b-a649-1059872e5d1b',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T140017Z:bbce2f82-aecf-427b-a649-1059872e5d1b',
  date: 'Wed, 07 Dec 2016 14:00:16 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-09-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"5bee792d-16ca-46e7-9197-74dfd277788b\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"117e77e1-b503-4f9c-8278-4e0e99edd059\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '540',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '12833df6-e40f-4df6-985a-58d72508f7da',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/12833df6-e40f-4df6-985a-58d72508f7da?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-correlation-request-id': '75dd02d2-4311-4223-bb9a-05749c269cad',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T140019Z:75dd02d2-4311-4223-bb9a-05749c269cad',
  date: 'Wed, 07 Dec 2016 14:00:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"5bee792d-16ca-46e7-9197-74dfd277788b\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"117e77e1-b503-4f9c-8278-4e0e99edd059\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '540',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5bee792d-16ca-46e7-9197-74dfd277788b"',
  'x-ms-request-id': 'f6af76a2-843f-4f39-b82e-24c67b78e8b9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': '6bb6ab88-0140-4212-a9d4-9a94fa252342',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T140020Z:6bb6ab88-0140-4212-a9d4-9a94fa252342',
  date: 'Wed, 07 Dec 2016 14:00:19 GMT' });
 return result; }]];