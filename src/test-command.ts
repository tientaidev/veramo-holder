import { Identifier } from '@veramo/data-store'
import { agent } from './veramo/setup'

async function main() {
  const id = '124';

  const message = await agent.dataStoreGetMessage({
    id: id
  });

  console.log(message);
}

main().catch(console.log)