// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/xplatTestLinuxPool/nodes/tvm-1695681911_1-20160908t182355z/users?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  location: 'https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestLinuxPool/nodes/tvm-1695681911_1-20160908t182355z/users/xplatUser',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a457a46d-b43b-491d-a8f5-e246484cbec7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '0108a56a-b263-4b2b-8608-b1093317169c',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestLinuxPool/nodes/tvm-1695681911_1-20160908t182355z/users/xplatUser',
  date: 'Mon, 12 Sep 2016 23:35:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/xplatTestLinuxPool/nodes/tvm-1695681911_1-20160908t182355z/users?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  location: 'https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestLinuxPool/nodes/tvm-1695681911_1-20160908t182355z/users/xplatUser',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a457a46d-b43b-491d-a8f5-e246484cbec7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '0108a56a-b263-4b2b-8608-b1093317169c',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestLinuxPool/nodes/tvm-1695681911_1-20160908t182355z/users/xplatUser',
  date: 'Mon, 12 Sep 2016 23:35:45 GMT',
  connection: 'close' });
 return result; }]];