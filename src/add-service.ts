import { agent } from './veramo/setup'

async function main() {
  try {
    await agent.didManagerAddService({
      "did": "did:ethr:rinkeby:0x0268f813e88c0b46254a2737a6e9d1f4d84c07c58126e0e6bfdf7510c626b5743f",
      "service": {
        "id": "message2",
        "type": "DIDCommMessaging",
        "serviceEndpoint": "http://localhost:3001/messaging",
        "description": "add service test"
      },
    })
  } catch (error) {
    console.log(error);
  }
}

main().catch(console.log)