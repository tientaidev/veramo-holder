import { agent } from './veramo/setup'
import { VerifiablePresentation } from '@veramo/core';

async function main() {
  const id = '126';
  const presentationHash = 'ada2e2aadd2f0e4a927ed03b8e5259fafe593a95958b76c0bbf880261ef37bddea986c7d0b6efbd602e5e56172d8c51f77c75718f725d9f2258a6b3b76cad835'

  const presentation: VerifiablePresentation = await agent.dataStoreGetVerifiablePresentation({
    hash: presentationHash
  });

  const jwt = presentation.proof.jwt;
  const decodedJwt = await agent.handleMessage({
    raw: jwt
  })

  console.log(JSON.stringify(decodedJwt));
}

main().catch(console.log)