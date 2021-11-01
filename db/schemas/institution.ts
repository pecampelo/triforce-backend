import { Schema, model } from 'mongoose';

interface Status {
  status: 'active' | 'inactive';
}

export interface InstitutionInterface {
  code: string,
  estimated_sla: number,
  id: string,
  mfa_code_needed: Boolean,
  name: string,
  status: Status,
  type: string,
  website: string,
}

const InstitutionSchema = new Schema({
  code: String,
  estimated_sla: Number,
  id: String,
  mfa_code_needed: Boolean,
  name: String,
  status: String,
  type: String,
  website: String,
}, {
  timestamps: true,
});

export const Institution = model('InstitutionModel', InstitutionSchema, 'institutions');
