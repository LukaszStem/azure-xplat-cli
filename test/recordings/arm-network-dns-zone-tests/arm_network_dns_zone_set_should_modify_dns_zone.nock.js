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
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-1d27-98894e6ad201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-08.azure-dns.com.\",\"ns2-08.azure-dns.net.\",\"ns3-08.azure-dns.org.\",\"ns4-08.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '497',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-1d27-98894e6ad201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'ad027ad1-9802-45ac-96ec-ddfd5459cd72',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11996',
  'x-ms-correlation-request-id': 'bc2afbdc-159e-474c-956c-2866ebd07e7e',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080113Z:bc2afbdc-159e-474c-956c-2866ebd07e7e',
  date: 'Mon, 09 Jan 2017 08:01:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-1d27-98894e6ad201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-08.azure-dns.com.\",\"ns2-08.azure-dns.net.\",\"ns3-08.azure-dns.org.\",\"ns4-08.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '497',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-1d27-98894e6ad201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'ad027ad1-9802-45ac-96ec-ddfd5459cd72',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11996',
  'x-ms-correlation-request-id': 'bc2afbdc-159e-474c-956c-2866ebd07e7e',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080113Z:bc2afbdc-159e-474c-956c-2866ebd07e7e',
  date: 'Mon, 09 Jan 2017 08:01:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000003-0000-0000-1d27-98894e6ad201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-08.azure-dns.com.\",\"ns2-08.azure-dns.net.\",\"ns3-08.azure-dns.org.\",\"ns4-08.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '510',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000003-0000-0000-1d27-98894e6ad201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8f4b7880-dcc6-4034-8ff4-e9544793e2c5',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '04b3aacd-ea3a-43d5-8554-b6e0839472c2',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080118Z:04b3aacd-ea3a-43d5-8554-b6e0839472c2',
  date: 'Mon, 09 Jan 2017 08:01:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000003-0000-0000-1d27-98894e6ad201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-08.azure-dns.com.\",\"ns2-08.azure-dns.net.\",\"ns3-08.azure-dns.org.\",\"ns4-08.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '510',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000003-0000-0000-1d27-98894e6ad201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8f4b7880-dcc6-4034-8ff4-e9544793e2c5',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '04b3aacd-ea3a-43d5-8554-b6e0839472c2',
  'x-ms-routing-request-id': 'CANADAEAST:20170109T080118Z:04b3aacd-ea3a-43d5-8554-b6e0839472c2',
  date: 'Mon, 09 Jan 2017 08:01:18 GMT',
  connection: 'close' });
 return result; }]];