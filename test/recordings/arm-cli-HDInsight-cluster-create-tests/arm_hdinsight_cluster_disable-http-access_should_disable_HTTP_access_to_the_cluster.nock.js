// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'd66b1168-d835-4066-8c45-7d2ed713c082',
    name: 'BDHadoopTeamPMTestDemo',
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
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/operationresults/69f989c8-1add-4521-be8e-83b11cd3a731-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/69f989c8-1add-4521-be8e-83b11cd3a731-0?api-version=2015-03-01-preview',
  'x-ms-request-id': 'da42f36a-5557-4897-a735-ae55a7d6da4b',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '77dc370d-cfa1-49c3-8e23-9d98fcdcab36',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T002344Z:77dc370d-cfa1-49c3-8e23-9d98fcdcab36',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:23:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/operationresults/69f989c8-1add-4521-be8e-83b11cd3a731-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/69f989c8-1add-4521-be8e-83b11cd3a731-0?api-version=2015-03-01-preview',
  'x-ms-request-id': 'da42f36a-5557-4897-a735-ae55a7d6da4b',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '77dc370d-cfa1-49c3-8e23-9d98fcdcab36',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T002344Z:77dc370d-cfa1-49c3-8e23-9d98fcdcab36',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:23:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/69f989c8-1add-4521-be8e-83b11cd3a731-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fbe68d93-e089-428e-a56e-a1b93fa88c8e',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '13903',
  'x-ms-correlation-request-id': '4e891ddf-e13d-496f-b8bc-7c43daf61276',
  'x-ms-routing-request-id': 'WESTUS:20160322T002445Z:4e891ddf-e13d-496f-b8bc-7c43daf61276',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:24:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/69f989c8-1add-4521-be8e-83b11cd3a731-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fbe68d93-e089-428e-a56e-a1b93fa88c8e',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '13903',
  'x-ms-correlation-request-id': '4e891ddf-e13d-496f-b8bc-7c43daf61276',
  'x-ms-routing-request-id': 'WESTUS:20160322T002445Z:4e891ddf-e13d-496f-b8bc-7c43daf61276',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:24:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/69f989c8-1add-4521-be8e-83b11cd3a731-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'af9ec1fc-ff6e-415f-aece-621812df2323',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14884',
  'x-ms-correlation-request-id': 'cd8fc72b-e84e-4d54-a236-c2202e89961a',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T002545Z:cd8fc72b-e84e-4d54-a236-c2202e89961a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:25:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/69f989c8-1add-4521-be8e-83b11cd3a731-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'af9ec1fc-ff6e-415f-aece-621812df2323',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14884',
  'x-ms-correlation-request-id': 'cd8fc72b-e84e-4d54-a236-c2202e89961a',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T002545Z:cd8fc72b-e84e-4d54-a236-c2202e89961a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:25:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/69f989c8-1add-4521-be8e-83b11cd3a731-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6e97015e-a1e0-4603-8944-1acca91f6092',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14155',
  'x-ms-correlation-request-id': 'b291af39-b4dc-4c0c-a272-b9341dea48c3',
  'x-ms-routing-request-id': 'WESTUS:20160322T002645Z:b291af39-b4dc-4c0c-a272-b9341dea48c3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:26:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/69f989c8-1add-4521-be8e-83b11cd3a731-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6e97015e-a1e0-4603-8944-1acca91f6092',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14155',
  'x-ms-correlation-request-id': 'b291af39-b4dc-4c0c-a272-b9341dea48c3',
  'x-ms-routing-request-id': 'WESTUS:20160322T002645Z:b291af39-b4dc-4c0c-a272-b9341dea48c3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:26:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/69f989c8-1add-4521-be8e-83b11cd3a731-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f3fca579-e7d3-4c2a-b53a-eb13b24ea3fa',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14221',
  'x-ms-correlation-request-id': 'a857509d-8a03-48c6-bffd-eef1a46f8303',
  'x-ms-routing-request-id': 'WESTUS:20160322T002746Z:a857509d-8a03-48c6-bffd-eef1a46f8303',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:27:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/69f989c8-1add-4521-be8e-83b11cd3a731-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f3fca579-e7d3-4c2a-b53a-eb13b24ea3fa',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14221',
  'x-ms-correlation-request-id': 'a857509d-8a03-48c6-bffd-eef1a46f8303',
  'x-ms-routing-request-id': 'WESTUS:20160322T002746Z:a857509d-8a03-48c6-bffd-eef1a46f8303',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:27:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/69f989c8-1add-4521-be8e-83b11cd3a731-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'baae12b7-ea97-4434-81ea-1a344a598f98',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14288',
  'x-ms-correlation-request-id': 'a0577aa7-be13-439a-999a-85ad5a122078',
  'x-ms-routing-request-id': 'WESTUS:20160322T002846Z:a0577aa7-be13-439a-999a-85ad5a122078',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:28:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/69f989c8-1add-4521-be8e-83b11cd3a731-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'baae12b7-ea97-4434-81ea-1a344a598f98',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14288',
  'x-ms-correlation-request-id': 'a0577aa7-be13-439a-999a-85ad5a122078',
  'x-ms-routing-request-id': 'WESTUS:20160322T002846Z:a0577aa7-be13-439a-999a-85ad5a122078',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:28:46 GMT',
  connection: 'close' });
 return result; }]];