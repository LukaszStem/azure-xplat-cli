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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-ip\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/test-ip\",\r\n  \"etag\": \"W/\\\"054cf84e-f78f-478a-bcb2-3be8be5d110e\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"82c1b2fa-7f26-4ac8-b943-e5e7f1350cfd\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"bar-domain6869\",\r\n      \"fqdn\": \"bar-domain6869.westus.validation.cloudapp.azure.com\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '772',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"054cf84e-f78f-478a-bcb2-3be8be5d110e"',
  'x-ms-request-id': '5957702d-a379-48d2-82f2-418ab0cbc2ac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-correlation-request-id': '55e1c81f-8342-49bf-8b8c-794f13c9c498',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T182706Z:55e1c81f-8342-49bf-8b8c-794f13c9c498',
  date: 'Wed, 07 Dec 2016 18:27:05 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/67972770-2b31-40ee-b4ee-e8919774ec9e?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': '67972770-2b31-40ee-b4ee-e8919774ec9e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/67972770-2b31-40ee-b4ee-e8919774ec9e?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '514d0c7f-014f-4f0a-8b84-775ed63a3345',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T182708Z:514d0c7f-014f-4f0a-8b84-775ed63a3345',
  date: 'Wed, 07 Dec 2016 18:27:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/67972770-2b31-40ee-b4ee-e8919774ec9e?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd133408e-8dd3-47ad-9a37-bcf6b01ba8e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '87a29e30-61bd-42c6-9c2b-eff29fdc60b3',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T182740Z:87a29e30-61bd-42c6-9c2b-eff29fdc60b3',
  date: 'Wed, 07 Dec 2016 18:27:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/test-ip' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'abac9a6b-c963-4ff6-aaf0-e43f5ad103da',
  'x-ms-correlation-request-id': 'abac9a6b-c963-4ff6-aaf0-e43f5ad103da',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T182741Z:abac9a6b-c963-4ff6-aaf0-e43f5ad103da',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 18:27:40 GMT',
  'content-length': '167' });
 return result; }]];