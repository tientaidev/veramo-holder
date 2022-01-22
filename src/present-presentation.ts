import { VerifiablePresentation } from '@veramo/core';
import { agent } from './veramo/setup'

async function main() {
  const id = '126';
  const presentationHash = 'ea19d88b4c762b2b41f10a03c5c08d24a7c00dbfbc4e38d94c17ea7a45119078068e25a1d8372abcb7bb6a0c968e941ff485bfe4df9dea049f553aa876c13878'

  const presentation: VerifiablePresentation = await agent.dataStoreGetVerifiablePresentation({
    hash: presentationHash
  });

  const message = {
    type: 'vp transfer',
    from: 'did:ethr:rinkeby:0x0268f813e88c0b46254a2737a6e9d1f4d84c07c58126e0e6bfdf7510c626b5743f',
    to: 'did:ethr:rinkeby:0x03862118a9f5a0d2e16b8570f070b2710983c14392d923efbcc158f96dc2221ea0',
    id: id,
    body: presentation
  };

  const packedMessage = await agent.packDIDCommMessage({
    message,
    packing: 'jws'
  });

  const result = await agent.sendDIDCommMessage({
    messageID: id,
    packedMessage,
    recipientDidUrl: 'did:ethr:rinkeby:0x03862118a9f5a0d2e16b8570f070b2710983c14392d923efbcc158f96dc2221ea0'
  })

  console.log(result);
}

main().catch(console.log)