import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { BankAccountInterface } from './Interfaces'
export const columns: TableColumn<BankAccountInterface>[] = [
  // id:           number;
  // cleaner_id:   number;
  // account_type: string;
  // upi_id:       string;
  // holder_name:  null;
  // account_no:   null;
  // ifsc:         null;
  // status:       number;
  // createdAt:    number;
  // updatedAt:    number;
  {
    name: 'Account Type',
    selector: (row: any) => row.account_type ? row.account_type : "NA",
    sortable: true,
    id: 'css',
  },
  {
    name: 'Account Holder Name',
    selector: (row: any) => row.holder_name ? row.holder_name : "NA",
    sortable: true,
    id: 'css',
  },
  {
    name: 'Account Number',
    selector: (row: any) => row.account_no ? row.account_no :"NA",
    sortable: true,
  },
  {
    name: 'IFSC Code',
    selector: (row: any) => row.ifsc ? row.ifsc : "NA",
    sortable: true,
  },
  {
    name: 'UPI ID',
    selector: (row: any) => row.upi_id ? row.upi_id : "NA",
    sortable: true,
  },
 
]
