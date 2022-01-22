import { VeramoDatabase } from './veramo/database'

async function main() {
  const db = new VeramoDatabase();
  const hash = 'ea19d88b4c762b2b41f10a03c5c08d24a7c00dbfbc4e38d94c17ea7a45119078068e25a1d8372abcb7bb6a0c968e941ff485bfe4df9dea049f553aa876c13878'
  console.log(await db.deletePresentation(hash));  
}

main().catch(console.log)