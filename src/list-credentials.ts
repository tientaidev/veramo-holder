import { VeramoDatabase } from './veramo/database'

async function main() {
  const db = new VeramoDatabase();
  const credentials = await db.getAllCredentials();

  console.log(`There are ${credentials.length} credentials`)

  if (credentials.length > 0) {
    console.log(credentials);
  }
}

main().catch(console.log)