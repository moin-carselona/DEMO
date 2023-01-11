import { Dialog } from "@mui/material";
import AddNewTicketsForm from "../AddNewTicketsForm/AddNewTicketsForm";
import Customer_Information from "../AddNewTicketsForm/Customer_Information";
import { AdminListDataApi, cleanerDataApi, CustomerDataApi, localCheckAPI, payloadsInterfaces, SuperVisorDataApi, CleanerAttendance, TicektSourcesDataApi, TicektSubCategoryDataApi, ticketCategoryDataApi } from '../../../../consts/Inerfaces4az/CleanerAttendance';
interface Props {
    handleTicketlistPopform: () => void
    PopUpPostFormOpen: boolean
    ParentData: {
        localKeyCheck: localCheckAPI,
        filterData: CleanerAttendance[],
        TicketsData: CleanerAttendance[],
        CleanerfilterData: cleanerDataApi[],
        CustomerfilterData: CustomerDataApi[],
        SelectedFilterTicketCateogryData: any,
        TicketCategoryData: ticketCategoryDataApi[],
        ticektSubCategoryData: TicektSubCategoryDataApi[],
        TicketSources: TicektSourcesDataApi[],
        AdminListData: AdminListDataApi[],
        SupervisorsListData: SuperVisorDataApi[],
        payloads: payloadsInterfaces,
    } | null
    reference: string
}
// ChatGlobal
const DialogBox = ({ handleTicketlistPopform, PopUpPostFormOpen, ParentData, reference }: Props) => {
    return (
        <>
            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={handleTicketlistPopform}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    {reference === "ticketParent" ? <AddNewTicketsForm handleTicketlistPopform={handleTicketlistPopform} ParentData={ParentData}></AddNewTicketsForm> : reference === "ChatGlobal" ? <Customer_Information></Customer_Information> : ""}
                </Dialog>
            }
        </>
    )
}
export default DialogBox
