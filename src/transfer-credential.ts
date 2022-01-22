import { agent } from './veramo/setup'
import { VerifiableCredential } from '@veramo/core';

async function main() {
  const id = '125';

  const credential: VerifiableCredential = await agent.dataStoreGetVerifiableCredential({
    hash: '0cc736b0e2391be476f213b5783c3a277b77f742643a8c96687828ac582682f72e6abeab2d59e51fd0a55de4f3a1ea192f3cd9916c5894f5a743bba2d6aea80d'
  });

  const message = {
    type: 'vc transfer',
    from: 'did:ethr:rinkeby:0x0268f813e88c0b46254a2737a6e9d1f4d84c07c58126e0e6bfdf7510c626b5743f',
    to: 'did:ethr:rinkeby:0x03862118a9f5a0d2e16b8570f070b2710983c14392d923efbcc158f96dc2221ea0',
    id: id,
    body: credential
  };

  const packedMessage = await agent.packDIDCommMessage({
    message,
    packing: 'jws'
  });

  const result = await agent.sendDIDCommMessage({
    messageID: 124,
    packedMessage,
    recipientDidUrl: 'did:ethr:rinkeby:0x03862118a9f5a0d2e16b8570f070b2710983c14392d923efbcc158f96dc2221ea0'
  })

  console.log(result);
} 

main().catch(console.log)