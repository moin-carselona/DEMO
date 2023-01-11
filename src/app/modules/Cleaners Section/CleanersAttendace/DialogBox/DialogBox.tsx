import { Dialog } from "@mui/material";
import AddNewFormAttendance from "../AddNewFormAttendance/AddNewFormAttendance";
import Customer_Information from "../AddNewFormAttendance/Customer_Information";
import { AdminListDataApi, cleanerDataApi, CustomerDataApi, localCheckAPI, payloadsInterfaces, SuperVisorDataApi, CleanerAttendance, TicektSourcesDataApi, TicektSubCategoryDataApi, ticketCategoryDataApi, cleanerAttendaceInterfaces } from '../../../../consts/Inerfaces4az/CleanerAttendance';
interface Props {
    handlecleanerAttendanceform: () => void
    PopUpPostFormOpen: boolean
    ParentData: {
        localKeyCheck: localCheckAPI,
        filterData: cleanerAttendaceInterfaces[],
        CleanerAttendanceData: any[],
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
const DialogBox = ({ handlecleanerAttendanceform, PopUpPostFormOpen, ParentData, reference }: Props) => {
    return (
        <>
            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={handlecleanerAttendanceform}   
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    {reference === "ticketParent" ? <AddNewFormAttendance handlecleanerAttendanceform={handlecleanerAttendanceform} ParentData={ParentData}></AddNewFormAttendance> : ""}
                </Dialog>
            }
        </>
    )
}
export default DialogBox
