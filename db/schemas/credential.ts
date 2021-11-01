import { Schema, model } from 'mongoose';

export interface CredentialInterface {
  company: {
    id: string,
    name: string,
  },
  id: string,
  inserted_at: String,
  institution: {
    id: string,
    name: string,
    code: string,
  },
  updated_at: Date | string
}

const CredentialSchema = new Schema({
  company: {
    id: String,
    name: String,
  },
  id: String,
  inserted_at: String,
  institution: {
    id: String,
    name: String,
    code: String,
  },
  updated_at: String,
}, {
  timestamps: true,
});

export const Credential = model('Credential', CredentialSchema, 'credentials');
