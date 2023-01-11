// @ts-nocheck
import { Column } from 'react-table'
import { UserCustomHeader } from '../apps/user-management/users-list/table/columns/UserCustomHeader'
import { User } from '../apps/user-management/users-list/core/_models'
import { NotAssignedActionCells } from '../apps/user-management/users-list/table/columns/NotAssignedActionCells'
import { Link } from 'react-router-dom'
const notAssignedColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' />
    ),
    id: 'actions',
    // Cell: ({ ...props }) => <NotAssignedActionCells referece = "NotAssignCleaner" data={props.data} id={props.data[props.row.index].id} />,
    Cell: ({ ...props }) => {
      return <button className='btn btn-sm btn-primary text-white' style={{width : "80px", padding:"5px", paddingLeft:"0"}} >
        <Link  to={`/schedule/cleaner/un-assigned/${props.data[props.row.index].id}`}>
          <a className='menu-link px-3 text-white '
            href={`/schedule/cleaner/un-assigned/${props.data[props.row.index].id}`}
          // onClick={() => handleAssignCleanerOpen(props.data[props.row.index].id)}
          >
            Assign
          </a>
        </Link>
      </button   >
    },
  },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title='ID' className='min-w-125px' />,
  //   accessor: 'parent_order_id',
  // },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Order ID' />,
    accessor: 'id',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Package Name' />
    ),
    accessor: 'packageDetail.name',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Name' />
    ),
    accessor: 'name',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Start Date' className='min-w-125px' />
    ),
    accessor: 'startdate',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='End Date' className='min-w-125px' />
    ),
    accessor: 'enddate',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Phone' />
    ),
    accessor: 'phone',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Time Slot' />
    ),
    accessor: 'timeslotname',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Vehicle' />
    ),
    accessor: 'vehicleno',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Cleaner Name' />
    ),
    accessor: 'cleanername',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Frequency' />
    ),
    accessor: 'masterFrequency.name',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Full Day Cleaning' />
    ),
    accessor: 'fulldaycleaning',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Job Site' />
    ),
    accessor: 'jobsitename',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Email' />
    ),
    accessor: 'email',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='City' />
    ),
    accessor: 'cityname',
  },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Address' className='min-w-500px' />
  //   ),
  //   accessor: 'address',
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Flat No.' className='min-w-500px'  />
  //   ),
  //   accessor: 'flatno',
  // },
]
export { notAssignedColumns }
