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
  location: 'https://management.azure.com/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/operationresults/0398b704-090a-4c7f-9069-f94de4c9da9e-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/0398b704-090a-4c7f-9069-f94de4c9da9e-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '6c73c17b-e5cc-470c-98f5-23d28be462d7',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '0374d4e3-73a8-49bf-9e81-a6d38ef06efe',
  'x-ms-routing-request-id': 'WESTUS:20160322T002847Z:0374d4e3-73a8-49bf-9e81-a6d38ef06efe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:28:47 GMT',
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
  location: 'https://management.azure.com/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/operationresults/0398b704-090a-4c7f-9069-f94de4c9da9e-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/0398b704-090a-4c7f-9069-f94de4c9da9e-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '6c73c17b-e5cc-470c-98f5-23d28be462d7',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '0374d4e3-73a8-49bf-9e81-a6d38ef06efe',
  'x-ms-routing-request-id': 'WESTUS:20160322T002847Z:0374d4e3-73a8-49bf-9e81-a6d38ef06efe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:28:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/0398b704-090a-4c7f-9069-f94de4c9da9e-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '72b2f8a1-5dae-4dde-8f56-1e75f8b07240',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14892',
  'x-ms-correlation-request-id': 'c4ced500-b6f0-4aef-a2c3-589cb367a5b5',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T002948Z:c4ced500-b6f0-4aef-a2c3-589cb367a5b5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:29:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/0398b704-090a-4c7f-9069-f94de4c9da9e-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '72b2f8a1-5dae-4dde-8f56-1e75f8b07240',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14892',
  'x-ms-correlation-request-id': 'c4ced500-b6f0-4aef-a2c3-589cb367a5b5',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T002948Z:c4ced500-b6f0-4aef-a2c3-589cb367a5b5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:29:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/0398b704-090a-4c7f-9069-f94de4c9da9e-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bfb6c2d6-bfc0-40a6-987d-536721df264e',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14879',
  'x-ms-correlation-request-id': '44ee6329-5990-4dd4-ae9b-3757292b839d',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T003049Z:44ee6329-5990-4dd4-ae9b-3757292b839d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:30:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/0398b704-090a-4c7f-9069-f94de4c9da9e-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bfb6c2d6-bfc0-40a6-987d-536721df264e',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14879',
  'x-ms-correlation-request-id': '44ee6329-5990-4dd4-ae9b-3757292b839d',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T003049Z:44ee6329-5990-4dd4-ae9b-3757292b839d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:30:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/0398b704-090a-4c7f-9069-f94de4c9da9e-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f0c78e07-c6f8-43b2-b6b3-7cafd63e7f9d',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14934',
  'x-ms-correlation-request-id': 'a6f3a5e3-7c06-4bfe-9e40-07a24a97e33f',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T003150Z:a6f3a5e3-7c06-4bfe-9e40-07a24a97e33f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:31:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/0398b704-090a-4c7f-9069-f94de4c9da9e-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f0c78e07-c6f8-43b2-b6b3-7cafd63e7f9d',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14934',
  'x-ms-correlation-request-id': 'a6f3a5e3-7c06-4bfe-9e40-07a24a97e33f',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T003150Z:a6f3a5e3-7c06-4bfe-9e40-07a24a97e33f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:31:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/0398b704-090a-4c7f-9069-f94de4c9da9e-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c605b599-0d34-4918-ad97-82222d0ddb8b',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': '9a3d4090-6fc3-4c17-87b8-459c80e232b2',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T003250Z:9a3d4090-6fc3-4c17-87b8-459c80e232b2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:32:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/0398b704-090a-4c7f-9069-f94de4c9da9e-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c605b599-0d34-4918-ad97-82222d0ddb8b',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': '9a3d4090-6fc3-4c17-87b8-459c80e232b2',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T003250Z:9a3d4090-6fc3-4c17-87b8-459c80e232b2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:32:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/0398b704-090a-4c7f-9069-f94de4c9da9e-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '640d14d3-0506-48f5-a205-100ec9928f99',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '13726',
  'x-ms-correlation-request-id': 'c3f3cf87-c0fa-49e9-a4ce-0e9bf9a76ef2',
  'x-ms-routing-request-id': 'WESTUS:20160322T003351Z:c3f3cf87-c0fa-49e9-a4ce-0e9bf9a76ef2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:33:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d66b1168-d835-4066-8c45-7d2ed713c082/resourceGroups/xplatTestRgHDInsightClusterCreate4179/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate2519/configurations/gateway/azureasyncoperations/0398b704-090a-4c7f-9069-f94de4c9da9e-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '640d14d3-0506-48f5-a205-100ec9928f99',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '13726',
  'x-ms-correlation-request-id': 'c3f3cf87-c0fa-49e9-a4ce-0e9bf9a76ef2',
  'x-ms-routing-request-id': 'WESTUS:20160322T003351Z:c3f3cf87-c0fa-49e9-a4ce-0e9bf9a76ef2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 22 Mar 2016 00:33:50 GMT',
  connection: 'close' });
 return result; }]];