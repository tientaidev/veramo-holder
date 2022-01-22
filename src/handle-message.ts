import { VerifiableCredential } from '@veramo/core'
import { agent } from './veramo/setup'

async function main() {
  const credential: VerifiableCredential = {
    "credentialSubject": {
      "name": "Foobar",
      "major": "Computer Science",
      "id": "did:ethr:rinkeby:0x0268f813e88c0b46254a2737a6e9d1f4d84c07c58126e0e6bfdf7510c626b5743f"
    },
    "issuer": {
      "id": "did:ethr:rinkeby:0x038c511b7342b7bcc47e9a0c27a6146b7f6d2d59f4f4272cfa80114450c97cf019"
    },
    "id": "126",
    "type": ["VerifiableCredential", "Profile"],
    "credentialStatus": {
      "type": "EthrStatusRegistry2019",
      "id": "126"
    },
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    "issuanceDate": "2010-01-01T19:23:24.000Z",
    "proof": {
      "type": "JwtProof2020",
      "jwt": "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiUHJvZmlsZSJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJuYW1lIjoiRm9vYmFyIiwibWFqb3IiOiJDb21wdXRlciBTY2llbmNlIn0sImNyZWRlbnRpYWxTdGF0dXMiOnsidHlwZSI6IkV0aHJTdGF0dXNSZWdpc3RyeTIwMTkiLCJpZCI6IjEyNiJ9fSwic3ViIjoiZGlkOmV0aHI6cmlua2VieToweDAyNjhmODEzZTg4YzBiNDYyNTRhMjczN2E2ZTlkMWY0ZDg0YzA3YzU4MTI2ZTBlNmJmZGY3NTEwYzYyNmI1NzQzZiIsImp0aSI6IjEyNiIsIm5iZiI6MTI2MjM3MzgwNCwiaXNzIjoiZGlkOmV0aHI6cmlua2VieToweDAzOGM1MTFiNzM0MmI3YmNjNDdlOWEwYzI3YTYxNDZiN2Y2ZDJkNTlmNGY0MjcyY2ZhODAxMTQ0NTBjOTdjZjAxOSJ9._cVm_eEErN2zIIdvrelivM_lS4IXy9KHrEC5mIRx66GeUU12JBPT-d68EW05Dcf1cks22MRveCvjBsrojDxD4Q"
    }
  }

  const decodedJwt = await agent.handleMessage({
    raw: 'eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2cCI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVQcmVzZW50YXRpb24iXSwidmVyaWZpYWJsZUNyZWRlbnRpYWwiOlsiZXlKaGJHY2lPaUpGVXpJMU5rc2lMQ0owZVhBaU9pSktWMVFpZlEuZXlKMll5STZleUpBWTI5dWRHVjRkQ0k2V3lKb2RIUndjem92TDNkM2R5NTNNeTV2Y21jdk1qQXhPQzlqY21Wa1pXNTBhV0ZzY3k5Mk1TSmRMQ0owZVhCbElqcGJJbFpsY21sbWFXRmliR1ZEY21Wa1pXNTBhV0ZzSWl3aVVISnZabWxzWlNKZExDSmpjbVZrWlc1MGFXRnNVM1ZpYW1WamRDSTZleUp1WVcxbElqb2lSbTl2WW1GeUlpd2liV0ZxYjNJaU9pSkRiMjF3ZFhSbGNpQlRZMmxsYm1ObEluMHNJbU55WldSbGJuUnBZV3hUZEdGMGRYTWlPbnNpZEhsd1pTSTZJa1YwYUhKVGRHRjBkWE5TWldkcGMzUnllVEl3TVRraUxDSnBaQ0k2SWpFeU5pSjlmU3dpYzNWaUlqb2laR2xrT21WMGFISTZjbWx1YTJWaWVUb3dlREF5TmpobU9ERXpaVGc0WXpCaU5EWXlOVFJoTWpjek4yRTJaVGxrTVdZMFpEZzBZekEzWXpVNE1USTJaVEJsTm1KbVpHWTNOVEV3WXpZeU5tSTFOelF6WmlJc0ltcDBhU0k2SWpFeU5pSXNJbTVpWmlJNk1USTJNak0zTXpnd05Dd2lhWE56SWpvaVpHbGtPbVYwYUhJNmNtbHVhMlZpZVRvd2VEQXpPR00xTVRGaU56TTBNbUkzWW1Oak5EZGxPV0V3WXpJM1lUWXhORFppTjJZMlpESmtOVGxtTkdZME1qY3lZMlpoT0RBeE1UUTBOVEJqT1RkalpqQXhPU0o5Ll9jVm1fZUVFck4yeklJZHZyZWxpdk1fbFM0SVh5OUtIckVDNW1JUng2NkdlVVUxMkpCUFQtZDY4RVcwNURjZjFja3MyMk1SdmVDdmpCc3JvakR4RDRRIl19LCJuYmYiOjE2NDIxNDcxOTQsImlzcyI6ImRpZDpldGhyOnJpbmtlYnk6MHgwMjY4ZjgxM2U4OGMwYjQ2MjU0YTI3MzdhNmU5ZDFmNGQ4NGMwN2M1ODEyNmUwZTZiZmRmNzUxMGM2MjZiNTc0M2YifQ.z1ykcB5AZOP3_wKz1X1YZiKsc1Lr3MQefD1U5SWdKeyhDEAxfVNqnbMcgAVH23ZIz_Xp0fWJF38Bo5U9bG-Vmw'
  });

  console.log(await areCredentialParamsValid(credential, decodedJwt));
}

async function areCredentialParamsValid(credential: any, decodedJwt: any): Promise<boolean> {
  if (JSON.stringify(credential.credentialSubject) != JSON.stringify(decodedJwt.credentials[0].credentialSubject)) return false;

  console.log(JSON.stringify(credential["@context"]));
  console.log(JSON.stringify(decodedJwt.credentials[0].credentialSubject));

  // Check context
  if (JSON.stringify(credential["@context"]) != 
      JSON.stringify(decodedJwt.credentials[0].credentialSubject["@context"])) 
  return false;

  // Check issuer
  // if (credential.issuer.id != decodedJwt.data.iss) return false;
  // Check type
  // if (JSON.stringify(credential.type.toString()) != 
  //   JSON.stringify(decodedJwt.data.credentials[0].type)) 
  //   return false;
  // All good
  return true;
}

main().catch(console.log)