import { Schema, model } from 'mongoose';

interface BankAccount {
  bank_account_type: 'checking' | 'savings'
}

export interface AccountInterface {
    account_number: string,
    account_type: string,
    bank_account_type: BankAccount,
    branch_number: number,
    connection_id: string,
    currency: string,
    id: string,
    inserted_at: Date | string,
    institution: {
        code: string,
        name: string,
        id: string
    },
    updated_at: Date | string,
    variation_code: string | null
}

const AccountSchema = new Schema({
  account_number: String,
  account_type: String,
  bank_account_type: String,
  branch_number: Number,
  connection_id: String,
  currency: String,
  id: String,
  inserted_at: String,
  institution: {
    code: String,
    name: String,
    id: String,
  },
  updated_at: String,
  variation_code: String,
}, {
  timestamps: true,
});

export const Account = model('Account', AccountSchema, 'accounts');
