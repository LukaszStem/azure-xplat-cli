// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e605a3bc-ee4e-4c7a-9709-1868a28b1d4d',
    name: 'CPT Dev Test Labs R and D',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'Southeast Asia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/33855c90-c8cf-44a0-a266-9b548fb8e7b0/resourceGroups/KeepIntegrationTestResources/providers/Microsoft.DevTestLab/labs/LabForIntegration/policysets/default/policies/MaxVmsAllowedPerUser?api-version=2015-05-21-preview', '*')
  .reply(201, "{\"properties\":{\"description\":\"\",\"status\":\"Enabled\",\"factName\":\"LabVmCount\",\"threshold\":\"10000\",\"evaluatorType\":\"MaxValuePolicy\",\"uniqueIdentifier\":\"2fa3de1a-d854-4829-9336-f7d4a52fbba5\"},\"id\":\"/subscriptions/33855c90-c8cf-44a0-a266-9b548fb8e7b0/resourcegroups/keepintegrationtestresources/providers/microsoft.devtestlab/labs/labforintegration/policysets/default/policies/maxvmsallowedperuser\",\"name\":\"MaxVmsAllowedPerUser\",\"type\":\"Microsoft.DevTestLab/labs/policySets/policies\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '478',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-rp-requesturi': 'https://dtl-dev-rp.azurewebsites.net/subscriptions/33855c90-c8cf-44a0-a266-9b548fb8e7b0/resourceGroups/KeepIntegrationTestResources/providers/Microsoft.DevTestLab/labs/LabForIntegration/policysets/default/policies/MaxVmsAllowedPerUser?api-version=2015-05-21-preview',
  'x-dtl-processedby': 'dtl-dev-rp.azurewebsites.net',
  'set-cookie': 
   [ 'ARRAffinity=aa7a076a03f0cc68ff10821062cd9951acb337c68ed7becf8367b21e1910d41c;Path=/;Domain=dev.rp1.vsdth.visualstudio.com',
     'ARRAffinity=2892eb122969bb1f3024dd9fea9a68afca18700f3b0b7fb304a40d427e67ea2f;Path=/;Domain=dev.rp1.vsdth.visualstudio.com' ],
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1173',
  'x-ms-request-id': '8b639186-5a92-494d-a740-c950824f8617',
  'x-ms-correlation-request-id': '8b639186-5a92-494d-a740-c950824f8617',
  'x-ms-routing-request-id': 'WESTUS:20160524T225913Z:8b639186-5a92-494d-a740-c950824f8617',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 24 May 2016 22:59:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/33855c90-c8cf-44a0-a266-9b548fb8e7b0/resourceGroups/KeepIntegrationTestResources/providers/Microsoft.DevTestLab/labs/LabForIntegration/policysets/default/policies/MaxVmsAllowedPerUser?api-version=2015-05-21-preview', '*')
  .reply(201, "{\"properties\":{\"description\":\"\",\"status\":\"Enabled\",\"factName\":\"LabVmCount\",\"threshold\":\"10000\",\"evaluatorType\":\"MaxValuePolicy\",\"uniqueIdentifier\":\"2fa3de1a-d854-4829-9336-f7d4a52fbba5\"},\"id\":\"/subscriptions/33855c90-c8cf-44a0-a266-9b548fb8e7b0/resourcegroups/keepintegrationtestresources/providers/microsoft.devtestlab/labs/labforintegration/policysets/default/policies/maxvmsallowedperuser\",\"name\":\"MaxVmsAllowedPerUser\",\"type\":\"Microsoft.DevTestLab/labs/policySets/policies\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '478',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-rp-requesturi': 'https://dtl-dev-rp.azurewebsites.net/subscriptions/33855c90-c8cf-44a0-a266-9b548fb8e7b0/resourceGroups/KeepIntegrationTestResources/providers/Microsoft.DevTestLab/labs/LabForIntegration/policysets/default/policies/MaxVmsAllowedPerUser?api-version=2015-05-21-preview',
  'x-dtl-processedby': 'dtl-dev-rp.azurewebsites.net',
  'set-cookie': 
   [ 'ARRAffinity=aa7a076a03f0cc68ff10821062cd9951acb337c68ed7becf8367b21e1910d41c;Path=/;Domain=dev.rp1.vsdth.visualstudio.com',
     'ARRAffinity=2892eb122969bb1f3024dd9fea9a68afca18700f3b0b7fb304a40d427e67ea2f;Path=/;Domain=dev.rp1.vsdth.visualstudio.com' ],
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET, ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1173',
  'x-ms-request-id': '8b639186-5a92-494d-a740-c950824f8617',
  'x-ms-correlation-request-id': '8b639186-5a92-494d-a740-c950824f8617',
  'x-ms-routing-request-id': 'WESTUS:20160524T225913Z:8b639186-5a92-494d-a740-c950824f8617',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 24 May 2016 22:59:13 GMT',
  connection: 'close' });
 return result; }]];