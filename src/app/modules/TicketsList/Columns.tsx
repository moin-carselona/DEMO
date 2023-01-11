import { TableColumn } from 'react-data-table-component';
import GChatBTN from '../../consts/Chats/GChatBTN';
import ChipsInfos from '../../consts/Chips/ChipsInfos';
import { ticektInterfaces } from './TicketInterface';
export const columns: TableColumn<ticektInterfaces>[] = [
    {
        name: 'TICKET NO',
        selector: (row) => row.ticketno
        ,
        sortable: true,
    },
    {
        name: 'CUSTOMER NAME',
        // selector: (row) => row.customer.first_name,
        cell: (row: any) => {
            return (
                <div className='text-left'>
                    <span className='badge badge-light-success fs-8 fw-bold'>{row.customer.first_name + ' ' + row.customer.last_name}</span>
                    <span className='badge badge-light-danger fs-8 fw-bold'>
                        {row?.customer?.phone}
                    </span>
                </div>
            )
        },
        grow:1.5,
        sortable: true,
    },
    {
        name: 'CHAT',
        cell: (row) => (<GChatBTN ticketDataParent={row}></GChatBTN>),
        // id: "director"
    },
    {
        name: 'STATUS',
        cell: (row: any) => (
            <ChipsInfos SelectedString={row?.ticketstatus?.name} classes={row?.ticketstatus?.id == 0 ? "warning" : row?.ticketstatus?.id == 1 ? "danger" : row?.ticketstatus?.id == 2 ? "warning" : row?.ticketstatus?.id == 3 ? "success" : row?.ticketstatus?.id == 4 ? "dark" : row?.ticketstatus?.id == 5 ? "secondary" : row?.ticketstatus?.id == 6 ? "primary" : "primary"} />
        ),
        sortable: true,
    },
    {
        name: 'CREATED AT',
        selector: (row) => row.createdAt,
        sortable: true,
    },
    {
        name: 'UPDATED AT',
        selector: (row) => row.updatedAt,
        sortable: true,
    },
    {
        name: 'CATEGORY',
        cell: (row: any) => (
            <ChipsInfos SelectedString={row?.ticketcategory?.category_name} classes={"primary"}></ChipsInfos>
        ),
        sortable: true,
    },
    {
        name: 'SOURCE',
        cell: (row) => (
            <ChipsInfos SelectedString={row?.ticketsource?.name} classes={"primary"}></ChipsInfos>
        ),
        sortable: true,
    },
    {
        name: 'CLEANER',
        // cell: (row :any) => {
        //     console.log('row', row);
        //     return (
        //         <div className='text-left'>
        //             <span className='badge badge-light-success fs-8 fw-bold'>{row.SubscriptionData.first_name + ' ' + row.SubscriptionData.last_name}</span>
        //         </div>
        //     )
        // },
        sortable: true,
    },
    {
        name: 'SUPERVISOR',
        // cell: (row :any) => {
        //     console.log('row', row);
        //     return (
        //         <div className='text-left'>
        //             <span className='badge badge-light-success fs-8 fw-bold'>{row.supervisors?.supervisorcleaner.first_name + ' ' + row.SubscriptionData.last_name}</span>
        //         </div>
        //     )
        // },
        sortable: true,
    },
    {
        name: 'ASSIGNED',
        // selector: (row: any) => row.row.SubscriptionData.first_name,
        sortable: true,
    }
];
const handleEditeBTN = (id: number) => {
    console.log('id', id);
}
