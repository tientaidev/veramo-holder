import { VeramoDatabase } from './veramo/database'

async function main() {
  const db = new VeramoDatabase();
  const presentations = await db.getAllPresentations();

  console.log(`There are ${presentations.length} presentations`)

  if (presentations.length > 0) {
    console.log(presentations);
  }
}

main().catch(console.log)