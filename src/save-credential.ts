import { VerifiableCredential } from '@veramo/core'
import { agent } from './veramo/setup'

async function main() {
  const credential: VerifiableCredential = {"credentialSubject":{"name":"Foobar","major":"Computer Science","id":"did:ethr:rinkeby:0x0268f813e88c0b46254a2737a6e9d1f4d84c07c58126e0e6bfdf7510c626b5743f"},"issuer":{"id":"did:ethr:rinkeby:0x038c511b7342b7bcc47e9a0c27a6146b7f6d2d59f4f4272cfa80114450c97cf019"},"id":"126","type":["VerifiableCredential","Profile"],"credentialStatus":{"type":"EthrStatusRegistry2019","id":"126"},"@context":["https://www.w3.org/2018/credentials/v1"],"issuanceDate":"2010-01-01T19:23:24.000Z","proof":{"type":"JwtProof2020","jwt":"eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiUHJvZmlsZSJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJuYW1lIjoiRm9vYmFyIiwibWFqb3IiOiJDb21wdXRlciBTY2llbmNlIn0sImNyZWRlbnRpYWxTdGF0dXMiOnsidHlwZSI6IkV0aHJTdGF0dXNSZWdpc3RyeTIwMTkiLCJpZCI6IjEyNiJ9fSwic3ViIjoiZGlkOmV0aHI6cmlua2VieToweDAyNjhmODEzZTg4YzBiNDYyNTRhMjczN2E2ZTlkMWY0ZDg0YzA3YzU4MTI2ZTBlNmJmZGY3NTEwYzYyNmI1NzQzZiIsImp0aSI6IjEyNiIsIm5iZiI6MTI2MjM3MzgwNCwiaXNzIjoiZGlkOmV0aHI6cmlua2VieToweDAzOGM1MTFiNzM0MmI3YmNjNDdlOWEwYzI3YTYxNDZiN2Y2ZDJkNTlmNGY0MjcyY2ZhODAxMTQ0NTBjOTdjZjAxOSJ9._cVm_eEErN2zIIdvrelivM_lS4IXy9KHrEC5mIRx66GeUU12JBPT-d68EW05Dcf1cks22MRveCvjBsrojDxD4Q"}}

  const result = await agent.dataStoreSaveVerifiableCredential({
    verifiableCredential: credential
  });

  console.log(result);
}

main().catch(console.log)