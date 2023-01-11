import { TableColumn } from 'react-data-table-component';
import ChipsInfos from '../../../consts/Chips/ChipsInfos';
import { cleanerAttendaceInterfaces } from '../../../consts/Inerfaces4az/CleanerAttendance';
import HandleDropDown from './DropBox/HandleDropDown';
export const columns: TableColumn<cleanerAttendaceInterfaces>[] = [
    {
        name: 'ID',
        selector: (row ) => row.cleaner.id
        ,
        sortable: true,
        minWidth: "150px"
    },
    {
        name: '	ATTENDANCE STATUS',
        cell: (row) => (
            <HandleDropDown props={row}></HandleDropDown>
          ),
       
        sortable: true,
        minWidth: "200px"
    },
    {
        name: 'CLEAENER NAME',
        // selector: (row) => row.customer.first_name,
        cell: (row: any) => {
            return (
                <div className='text-left'>
                    <span className='badge badge-light-success fs-8 fw-bold'>{row.cleaner.first_name + ' ' + row.cleaner.last_name}</span>
                    <br />
                    <span className='badge badge-light-danger fs-8 fw-bold'>
                        {row?.cleaner?.phone ? row?.cleaner?.phone : "NA"}
                    </span>
                </div>
            )
        },
        grow: 1.5,
        sortable: true,
        minWidth: "200px"
    },
    // {
    //     name: 'CHAT',
    //     cell: (row) => (<GChatBTN ticketDataParent={row}></GChatBTN>),
    //     // id: "director"
    //     minWidth: "150px"
    // },
    {
        name: 'ATTENDANCE DATE',
        // cell: (row: any) => (
        //     <ChipsInfos  />
        // ),
        selector: (row : {attendance_date : any}) => row.attendance_date ? row.attendance_date : "NA",
        sortable: true,
        minWidth: "150px"
    },
    {
        name: 'LEAVE DATE',
        // cell: (row: any) => (
        //     <ChipsInfos  />
        // ),
        selector: (row : {leave_date : any}) => row.leave_date ? row.leave_date : "NA",
        sortable: true,
        minWidth: "200px"
    },
    {
        name: '	MARK ATTENDANCE DATE',
        selector: (row : {mark_attendance_datetime : any}) => row.mark_attendance_datetime ? row.mark_attendance_datetime : "NA",
       
        sortable: true,
        minWidth: "200px"
    },


    {
        name: '	TOTAL JOB DONE',
        cell: (row: any) => (
            <ChipsInfos SelectedString={row?.total_jobs_done} classes={"primary"}></ChipsInfos>
        ),
        sortable: true,
        minWidth: "150px"
    },
    {
        name: '	TOTAL POINTS EARNED',
        cell: (row) => (
            <ChipsInfos SelectedString={row?.total_points_earned} classes={"primary"}></ChipsInfos>
        ),
        sortable: true,
        minWidth: "200px"

    },
   
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
}
