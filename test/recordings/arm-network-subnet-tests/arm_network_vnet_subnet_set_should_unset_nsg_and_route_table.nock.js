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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"1eef5315-111b-4d11-a9ab-dbd842ef2708\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5aa8e640-b8bb-46fa-a5d6-389d20f15058\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": []\r\n    },\r\n    \"subnets\": [\r\n      {\r\n        \"name\": \"test-subnet\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\",\r\n        \"etag\": \"W/\\\"1eef5315-111b-4d11-a9ab-dbd842ef2708\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"addressPrefix\": \"10.0.0.0/25\",\r\n          \"networkSecurityGroup\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/test-nsg\"\r\n          },\r\n          \"routeTable\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/test-route-table\"\r\n          },\r\n          \"serviceTunnels\": []\r\n        }\r\n      }\r\n    ],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1503',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1eef5315-111b-4d11-a9ab-dbd842ef2708"',
  'x-ms-request-id': '9eaca9f2-9ee8-422b-b4ad-5fc42052aeef',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '1d9675f8-6308-4a4e-909c-47a5fab177c8',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T134416Z:1d9675f8-6308-4a4e-909c-47a5fab177c8',
  date: 'Wed, 07 Dec 2016 13:44:16 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-subnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\",\r\n  \"etag\": \"W/\\\"1eef5315-111b-4d11-a9ab-dbd842ef2708\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/25\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/test-nsg\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/test-route-table\"\r\n    },\r\n    \"serviceTunnels\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '768',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1eef5315-111b-4d11-a9ab-dbd842ef2708"',
  'x-ms-request-id': '210a17d6-c737-407a-ad61-44a9edcdc86e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '521c46ee-7f6f-43c6-807b-c35efe5f0e8c',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T134417Z:521c46ee-7f6f-43c6-807b-c35efe5f0e8c',
  date: 'Wed, 07 Dec 2016 13:44:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet?api-version=2016-09-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-subnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\",\r\n  \"etag\": \"W/\\\"cf41d2d0-9147-4b05-8156-b1d6b2b74a87\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/25\",\r\n    \"serviceTunnels\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '383',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '0db6e128-770d-43f3-82cf-6751188ff3d5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/0db6e128-770d-43f3-82cf-6751188ff3d5?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'b0ded1ad-3164-41f3-bf4a-4b5ab2d88972',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T134418Z:b0ded1ad-3164-41f3-bf4a-4b5ab2d88972',
  date: 'Wed, 07 Dec 2016 13:44:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/0db6e128-770d-43f3-82cf-6751188ff3d5?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1a94cb69-65eb-4a56-8419-f41f9475e9b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14936',
  'x-ms-correlation-request-id': 'fb1cfa2e-edee-4bdd-8865-74089ba06fb1',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T134449Z:fb1cfa2e-edee-4bdd-8865-74089ba06fb1',
  date: 'Wed, 07 Dec 2016 13:44:48 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-subnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\",\r\n  \"etag\": \"W/\\\"7b080cf3-cd82-411a-b310-8ae8153313b7\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/25\",\r\n    \"serviceTunnels\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '384',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7b080cf3-cd82-411a-b310-8ae8153313b7"',
  'x-ms-request-id': '8e4e4eb2-d1b7-48b8-b089-97731e95372c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-correlation-request-id': '756fcd2c-2ffb-4485-9e92-d82d4110ab3d',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T134449Z:756fcd2c-2ffb-4485-9e92-d82d4110ab3d',
  date: 'Wed, 07 Dec 2016 13:44:48 GMT' });
 return result; }]];