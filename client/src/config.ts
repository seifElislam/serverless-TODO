// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'jfqyzrayu1'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-cksu441t.auth0.com',            // Auth0 domain
  clientId: 'tDnb471Er6lQj94ok2EYqO1I1PFh3pCt',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
