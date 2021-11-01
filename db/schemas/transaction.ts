import { Schema, model } from 'mongoose';

export interface TransactionInterface {
  'account': {
    'account_number': string,
    'account_type': string,
    'bank_account_type': string,
    'branch_number': string,
    'currency': string,
    'id': string,
    'institution': {
      'code': string,
      'name': string,
      'id': string
    },
  'variation_code': string | null
  },
  'amount': {
    'amount': number,
    'currency': string
  },
  'id': string,
  'inserted_at': string,
  'description': string,
  'type': string,
  'timestamp': Date | string,
  'updated_at': Date | string
}

const TransactionSchema = new Schema({
  account: {
    account_number: String,
    account_type: String,
    bank_account_type: String,
    branch_number: String,
    currency: String,
    id: String,
    institution: {
      code: String,
      name: String,
      id: String,
    },
    variation_code: String,
  },
  amount: {
    amount: Number,
    currency: String,
  },
  id: String,
  inserted_at: String,
  description: String,
  type: String,
  timestamp: String,
  updated_at: String,
}, {
  timestamps: true,
});

export const Transaction = model('Transaction', TransactionSchema, 'transactions');
