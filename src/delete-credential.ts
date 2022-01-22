import { VeramoDatabase } from './veramo/database'

async function main() {
  const db = new VeramoDatabase();
  const hash = '0cc736b0e2391be476f213b5783c3a277b77f742643a8c96687828ac582682f72e6abeab2d59e51fd0a55de4f3a1ea192f3cd9916c5894f5a743bba2d6aea80d'
  console.log(await db.deleteCredential(hash));  
}

main().catch(console.log)