// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'py82o5rq6e'
export const apiEndpoint = `https://${apiId}.execute-api.eu-west-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-ca-rtp87.auth0.com',            // Auth0 domain
  clientId: 'LGFV1CqveQTSIzmbxaIsSs7ca6ckIZ7T',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
