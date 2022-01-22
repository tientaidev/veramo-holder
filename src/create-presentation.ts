import { VerifiableCredential } from '@veramo/core'
import { agent } from './veramo/setup'

async function main() {
  const id = '125';

  const credential: VerifiableCredential = await agent.dataStoreGetVerifiableCredential({
    hash: '0cc736b0e2391be476f213b5783c3a277b77f742643a8c96687828ac582682f72e6abeab2d59e51fd0a55de4f3a1ea192f3cd9916c5894f5a743bba2d6aea80d'
  });
  
  const presentation = await agent.createVerifiablePresentation({
    presentation: {
      holder: 'did:ethr:rinkeby:0x0268f813e88c0b46254a2737a6e9d1f4d84c07c58126e0e6bfdf7510c626b5743f',
      type: 'VerifiablePresentation',
      verifiableCredential: [credential],
    },
    proofFormat: 'jwt',
    save: true
  });

  console.log(JSON.stringify(presentation));
}

main().catch(console.log)