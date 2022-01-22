import { agent } from './veramo/setup'

async function main() {
  const didDocument = await agent.resolveDid({
    didUrl: "did:ethr:rinkeby:0x03862118a9f5a0d2e16b8570f070b2710983c14392d923efbcc158f96dc2221ea0",
  });
  console.log(JSON.stringify(didDocument));
}

main().catch(console.log)