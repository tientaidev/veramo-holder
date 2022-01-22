import sqlite3 from "sqlite3";
import { open } from "sqlite";

export interface VeramoDatabaseCredential {
  hash: string;
  raw: string;
  id: string;
  issuanceDate: string;
  expirationDate: string;
  context: string;
  type: string;
  issuerDid: string;
  subjectDid: string;
}

export interface VeramoDatabasePresentation {
  hash: string;
  raw: string,
  id: string,
  issuanceDate: string,
  expirationDate: string,
  context: string,
  type: string,
  holderDid: string
}

export class VeramoDatabase {
  private async openDb() {
    return open({
      filename: "/Users/phantientai/Desktop/Pre-thesis/veramo-holder/database.sqlite",
      driver: sqlite3.Database,
    });
  }

  async getAllCredentials(): Promise<[VeramoDatabaseCredential]> {
    let db;
    try {
      db = await this.openDb();
      const allCredentials: [VeramoDatabaseCredential] = await db.all("SELECT * FROM credential");
      return allCredentials;
    } catch (error) {
      console.log(error);
      throw new Error("Error");
    } finally {
      if (db !== undefined) await db.close();
    }
  }

  async getLastCredential(): Promise<VeramoDatabaseCredential> {
    let db;
    try {
      db = await this.openDb();
      const credential: VeramoDatabaseCredential = await db.all("SELECT * FROM credential ORDER BY id limit 1");
      return credential;
    } catch (error) {
      console.log(error);
      throw new Error("Error");
    } finally {
      if (db !== undefined) await db.close();
    }
  }

  async getLastCredentialTransferMessage() {
    let db;
    try {
      db = await this.openDb();
      const credential: VeramoDatabaseCredential = await db.all("SELECT data FROM message ORDER BY id limit 1");
      return credential;
    } catch (error) {
      console.log(error);
      throw new Error("Error");
    } finally {
      if (db !== undefined) await db.close();
    }
  }

  async getAllPresentations(): Promise<[VeramoDatabasePresentation]> {
    let db;
    try {
      db = await this.openDb();
      const allPresentations: [VeramoDatabasePresentation] = await db.all("SELECT * FROM presentation");
      return allPresentations;
    } catch (error) {
      console.log(error);
      throw new Error("Error");
    } finally {
      if (db !== undefined) await db.close();
    }
  }

  async deleteCredential(hash: string): Promise<boolean> {
    let db;
    try {
      db = await this.openDb();
      await db.exec(`DELETE FROM credential WHERE hash='${hash}'`);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      if (db !== undefined) await db.close();
    }
  }

  async deletePresentation(hash: string): Promise<boolean> {
    let db;
    try {
      db = await this.openDb();
      await db.exec(`DELETE FROM presentation WHERE hash='${hash}'`);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      if (db !== undefined) await db.close();
    }
  }
}
