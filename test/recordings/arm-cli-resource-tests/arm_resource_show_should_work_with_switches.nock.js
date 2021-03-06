// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '623d50f1-4fa8-4e46-a967-a9214aed43ab',
    name: 'CSM Test Environment Services',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_SQL_RESOURCE_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_WEBSITES_RESOURCE_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource6275?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource6275' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14948',
  'x-ms-request-id': 'a66f9412-fe39-4ab8-84cc-2b6b9b072176',
  'x-ms-correlation-request-id': 'a66f9412-fe39-4ab8-84cc-2b6b9b072176',
  'x-ms-routing-request-id': 'WESTUS:20161207T034800Z:a66f9412-fe39-4ab8-84cc-2b6b9b072176',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:48:00 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource6275?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource6275' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14948',
  'x-ms-request-id': 'a66f9412-fe39-4ab8-84cc-2b6b9b072176',
  'x-ms-correlation-request-id': 'a66f9412-fe39-4ab8-84cc-2b6b9b072176',
  'x-ms-routing-request-id': 'WESTUS:20161207T034800Z:a66f9412-fe39-4ab8-84cc-2b6b9b072176',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:48:00 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource6275?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourceGroups/xTestResource6275\",\"name\":\"xTestResource6275\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': '12d8d9ab-f28f-43e2-82ff-e1337dabec7f',
  'x-ms-correlation-request-id': '12d8d9ab-f28f-43e2-82ff-e1337dabec7f',
  'x-ms-routing-request-id': 'WESTUS:20161207T034800Z:12d8d9ab-f28f-43e2-82ff-e1337dabec7f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:48:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource6275?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourceGroups/xTestResource6275\",\"name\":\"xTestResource6275\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': '12d8d9ab-f28f-43e2-82ff-e1337dabec7f',
  'x-ms-correlation-request-id': '12d8d9ab-f28f-43e2-82ff-e1337dabec7f',
  'x-ms-routing-request-id': 'WESTUS:20161207T034800Z:12d8d9ab-f28f-43e2-82ff-e1337dabec7f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:48:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource6275?api-version=2016-09-01')
  .reply(200, "{\"id\":\"/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourceGroups/xTestResource6275\",\"name\":\"xTestResource6275\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-request-id': '80cf57c0-56e3-4011-860a-0bf17c59b328',
  'x-ms-correlation-request-id': '80cf57c0-56e3-4011-860a-0bf17c59b328',
  'x-ms-routing-request-id': 'WESTUS:20161207T034801Z:80cf57c0-56e3-4011-860a-0bf17c59b328',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:48:00 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource6275?api-version=2016-09-01')
  .reply(200, "{\"id\":\"/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourceGroups/xTestResource6275\",\"name\":\"xTestResource6275\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-request-id': '80cf57c0-56e3-4011-860a-0bf17c59b328',
  'x-ms-correlation-request-id': '80cf57c0-56e3-4011-860a-0bf17c59b328',
  'x-ms-routing-request-id': 'WESTUS:20161207T034801Z:80cf57c0-56e3-4011-860a-0bf17c59b328',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:48:00 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource6275/providers/Microsoft.Web//sites/xTestGrpRes1423?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourceGroups/xTestResource6275/providers/Microsoft.Web/sites/xTestGrpRes1423\",\"name\":\"xTestGrpRes1423\",\"type\":\"Microsoft.Web/sites\",\"kind\":\"app\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes1423\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres1423.azurewebsites.net\"],\"webSpace\":\"xTestResource6275-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-071.api.azurewebsites.windows.net:454/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/webspaces/xTestResource6275-WestUSwebspace/sites/xTestGrpRes1423\",\"repositorySiteName\":\"xTestGrpRes1423\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres1423.azurewebsites.net\",\"xtestgrpres1423.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres1423.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres1423.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-12-07T03:48:04.3966667\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes1423\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":\"app\",\"outboundIpAddresses\":\"23.101.199.30,23.101.196.70,23.101.201.119,23.101.197.194\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-071\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource6275\",\"defaultHostName\":\"xtestgrpres1423.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2389',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '25675c10-b3dd-4050-b7b4-4af1fa884da3',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'c2dca0fe-f445-40c5-bee2-42c069a831ad',
  'x-ms-routing-request-id': 'WESTUS:20161207T034807Z:c2dca0fe-f445-40c5-bee2-42c069a831ad',
  date: 'Wed, 07 Dec 2016 03:48:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource6275/providers/Microsoft.Web//sites/xTestGrpRes1423?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourceGroups/xTestResource6275/providers/Microsoft.Web/sites/xTestGrpRes1423\",\"name\":\"xTestGrpRes1423\",\"type\":\"Microsoft.Web/sites\",\"kind\":\"app\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes1423\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres1423.azurewebsites.net\"],\"webSpace\":\"xTestResource6275-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-071.api.azurewebsites.windows.net:454/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/webspaces/xTestResource6275-WestUSwebspace/sites/xTestGrpRes1423\",\"repositorySiteName\":\"xTestGrpRes1423\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres1423.azurewebsites.net\",\"xtestgrpres1423.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres1423.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres1423.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-12-07T03:48:04.3966667\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes1423\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":\"app\",\"outboundIpAddresses\":\"23.101.199.30,23.101.196.70,23.101.201.119,23.101.197.194\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-071\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource6275\",\"defaultHostName\":\"xtestgrpres1423.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2389',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '25675c10-b3dd-4050-b7b4-4af1fa884da3',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'c2dca0fe-f445-40c5-bee2-42c069a831ad',
  'x-ms-routing-request-id': 'WESTUS:20161207T034807Z:c2dca0fe-f445-40c5-bee2-42c069a831ad',
  date: 'Wed, 07 Dec 2016 03:48:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource6275/providers/Microsoft.Web//sites/xTestGrpRes1423?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourceGroups/xTestResource6275/providers/Microsoft.Web/sites/xTestGrpRes1423\",\"name\":\"xTestGrpRes1423\",\"type\":\"Microsoft.Web/sites\",\"kind\":\"app\",\"location\":\"West US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes1423\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres1423.azurewebsites.net\"],\"webSpace\":\"xTestResource6275-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-071.api.azurewebsites.windows.net:454/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/webspaces/xTestResource6275-WestUSwebspace/sites/xTestGrpRes1423\",\"repositorySiteName\":\"xTestGrpRes1423\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres1423.azurewebsites.net\",\"xtestgrpres1423.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres1423.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres1423.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-12-07T03:48:04.4766667\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes1423\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":\"app\",\"outboundIpAddresses\":\"23.101.199.30,23.101.196.70,23.101.201.119,23.101.197.194\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-071\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource6275\",\"defaultHostName\":\"xtestgrpres1423.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2390',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D2503CB6F26DCB"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'ce67ebda-66b7-4b6c-8f9e-e9b62db086c3',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14954',
  'x-ms-correlation-request-id': '6bdb0d0c-3238-4659-a904-9337c27abc0b',
  'x-ms-routing-request-id': 'WESTUS:20161207T034807Z:6bdb0d0c-3238-4659-a904-9337c27abc0b',
  date: 'Wed, 07 Dec 2016 03:48:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource6275/providers/Microsoft.Web//sites/xTestGrpRes1423?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourceGroups/xTestResource6275/providers/Microsoft.Web/sites/xTestGrpRes1423\",\"name\":\"xTestGrpRes1423\",\"type\":\"Microsoft.Web/sites\",\"kind\":\"app\",\"location\":\"West US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes1423\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres1423.azurewebsites.net\"],\"webSpace\":\"xTestResource6275-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-071.api.azurewebsites.windows.net:454/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/webspaces/xTestResource6275-WestUSwebspace/sites/xTestGrpRes1423\",\"repositorySiteName\":\"xTestGrpRes1423\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres1423.azurewebsites.net\",\"xtestgrpres1423.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres1423.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres1423.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"serverFarmId\":null,\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-12-07T03:48:04.4766667\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes1423\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":\"app\",\"outboundIpAddresses\":\"23.101.199.30,23.101.196.70,23.101.201.119,23.101.197.194\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-071\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":{},\"resourceGroup\":\"xTestResource6275\",\"defaultHostName\":\"xtestgrpres1423.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2390',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D2503CB6F26DCB"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'ce67ebda-66b7-4b6c-8f9e-e9b62db086c3',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14954',
  'x-ms-correlation-request-id': '6bdb0d0c-3238-4659-a904-9337c27abc0b',
  'x-ms-routing-request-id': 'WESTUS:20161207T034807Z:6bdb0d0c-3238-4659-a904-9337c27abc0b',
  date: 'Wed, 07 Dec 2016 03:48:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource6275/providers/Microsoft.Web//sites/xTestGrpRes1423/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '326ed9c1-f4c7-4eb9-b6ca-0edf3a2aa143',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14943',
  'x-ms-correlation-request-id': 'c5cc3c51-647d-41f7-bbea-ff77f8a5b928',
  'x-ms-routing-request-id': 'WESTUS:20161207T034808Z:c5cc3c51-647d-41f7-bbea-ff77f8a5b928',
  date: 'Wed, 07 Dec 2016 03:48:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource6275/providers/Microsoft.Web//sites/xTestGrpRes1423/providers/Microsoft.Authorization/permissions?api-version=2015-07-01')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '326ed9c1-f4c7-4eb9-b6ca-0edf3a2aa143',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14943',
  'x-ms-correlation-request-id': 'c5cc3c51-647d-41f7-bbea-ff77f8a5b928',
  'x-ms-routing-request-id': 'WESTUS:20161207T034808Z:c5cc3c51-647d-41f7-bbea-ff77f8a5b928',
  date: 'Wed, 07 Dec 2016 03:48:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource6275?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNjI3NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-request-id': 'e8e0f56b-f78c-4cb1-a04e-e95124d50ec4',
  'x-ms-correlation-request-id': 'e8e0f56b-f78c-4cb1-a04e-e95124d50ec4',
  'x-ms-routing-request-id': 'WESTUS:20161207T034808Z:e8e0f56b-f78c-4cb1-a04e-e95124d50ec4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:48:08 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/resourcegroups/xTestResource6275?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNjI3NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-request-id': 'e8e0f56b-f78c-4cb1-a04e-e95124d50ec4',
  'x-ms-correlation-request-id': 'e8e0f56b-f78c-4cb1-a04e-e95124d50ec4',
  'x-ms-routing-request-id': 'WESTUS:20161207T034808Z:e8e0f56b-f78c-4cb1-a04e-e95124d50ec4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:48:08 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNjI3NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNjI3NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14953',
  'x-ms-request-id': '86f143fd-41b8-40db-990c-cf16f85d5003',
  'x-ms-correlation-request-id': '86f143fd-41b8-40db-990c-cf16f85d5003',
  'x-ms-routing-request-id': 'WESTUS:20161207T034839Z:86f143fd-41b8-40db-990c-cf16f85d5003',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:48:38 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNjI3NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNjI3NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14953',
  'x-ms-request-id': '86f143fd-41b8-40db-990c-cf16f85d5003',
  'x-ms-correlation-request-id': '86f143fd-41b8-40db-990c-cf16f85d5003',
  'x-ms-routing-request-id': 'WESTUS:20161207T034839Z:86f143fd-41b8-40db-990c-cf16f85d5003',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:48:38 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNjI3NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNjI3NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14961',
  'x-ms-request-id': '4cbee778-16eb-4136-a7e1-fada075abae8',
  'x-ms-correlation-request-id': '4cbee778-16eb-4136-a7e1-fada075abae8',
  'x-ms-routing-request-id': 'WESTUS:20161207T034909Z:4cbee778-16eb-4136-a7e1-fada075abae8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:49:09 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNjI3NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNjI3NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14961',
  'x-ms-request-id': '4cbee778-16eb-4136-a7e1-fada075abae8',
  'x-ms-correlation-request-id': '4cbee778-16eb-4136-a7e1-fada075abae8',
  'x-ms-routing-request-id': 'WESTUS:20161207T034909Z:4cbee778-16eb-4136-a7e1-fada075abae8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:49:09 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNjI3NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNjI3NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-request-id': 'c0c3d3f2-7bb7-4989-af4e-5ac7ce890c6e',
  'x-ms-correlation-request-id': 'c0c3d3f2-7bb7-4989-af4e-5ac7ce890c6e',
  'x-ms-routing-request-id': 'WESTUS:20161207T034939Z:c0c3d3f2-7bb7-4989-af4e-5ac7ce890c6e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:49:38 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNjI3NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNjI3NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-request-id': 'c0c3d3f2-7bb7-4989-af4e-5ac7ce890c6e',
  'x-ms-correlation-request-id': 'c0c3d3f2-7bb7-4989-af4e-5ac7ce890c6e',
  'x-ms-routing-request-id': 'WESTUS:20161207T034939Z:c0c3d3f2-7bb7-4989-af4e-5ac7ce890c6e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:49:38 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNjI3NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14962',
  'x-ms-request-id': 'a9636021-25ef-4cbe-8dcc-1916161cf85e',
  'x-ms-correlation-request-id': 'a9636021-25ef-4cbe-8dcc-1916161cf85e',
  'x-ms-routing-request-id': 'WESTUS:20161207T035009Z:a9636021-25ef-4cbe-8dcc-1916161cf85e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:50:08 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/623d50f1-4fa8-4e46-a967-a9214aed43ab/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNjI3NS1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2016-09-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14962',
  'x-ms-request-id': 'a9636021-25ef-4cbe-8dcc-1916161cf85e',
  'x-ms-correlation-request-id': 'a9636021-25ef-4cbe-8dcc-1916161cf85e',
  'x-ms-routing-request-id': 'WESTUS:20161207T035009Z:a9636021-25ef-4cbe-8dcc-1916161cf85e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 03:50:08 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xTestResource6275','xTestGrpRes1423'];};