// @ts-nocheck
import moment from 'moment'
import { FC } from 'react'
import { Row } from 'react-table'
import ChipCard from '../../consts/Chips/ChipCard'
import { User } from '../../core/_models'

import ChipCardActive from './Chips/ChipCardActive'
import ChipCardInactive from './Chips/ChipCardInactive'
import ChipDebitFailed from './Chips/ChipDebitFailed'
import ChipDeductNow from './Chips/ChipDeductNow'

type Props = {
  row: Row<User>
}

const AciveCustomRow: FC<Props> = ({ row }) => (
  <tr {...row.getRowProps()} className={`${
    row?.original?.startdate === moment().add(0, "days").format("YYYY-MM-DD") ?"bg-danger text-white px-3" :  
    row?.original?.startdate === moment().add(1, "days").format("YYYY-MM-DD") ?"bg-warning text-white px-3" :   row?.original?.startdate === moment().add(2, "days").format("YYYY-MM-DD")  ?"bg-success text-white px-3" : 
    ""}`}>
    {row.cells.map((cell) => {
      // console.log('cell', cell);
      return (
        <td key={cell.column.id} className="min-w-125px me-5"  >
          {cell.column.id == "is_autopay" && cell.row.original.is_autopay == 1 ? <><ChipCard Titles={"Active"} classes={"primary"}/></>

            : cell.column.id == "is_autopay" && cell.row.original.is_autopay == 0 ? <><ChipCard Titles={"Inactive"} classes={"dark"}/></>

              : cell.column.id == "razorpay_status" && cell.row.original.is_autopay == 1 && cell.row.original.razorpay_token && !cell.row.original.razorpay_status && !cell.row.original.transactionid ? <><ChipCard Titles={"Deduct Now "} classes={"success"}/></>

                : cell.column.id == "razorpay_status" && cell.row.original.razorpay_status == "failed" ? <><ChipCard Titles={"Failed"} classes={"danger"}/></>
                  : cell.render('Cell')}
        </td>
      )
      // &&  cell.row.original.razorpay_token && !cell.row.original.razorpay_status && !cell.row.original.transactionid 
    })}
  </tr>
)
export { AciveCustomRow }
