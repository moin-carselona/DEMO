import { Dialog } from "@mui/material";
import { AddNewTagsInterfaces } from "../Inerfaces4az/AddNewTagsInterfaces";
import ShowInformationTags from "../PopUp/ShowInformationTags";
interface Props {
    handleCloseForm: () => void
    PopUpPostFormOpen: boolean
    ParentData: AddNewTagsInterfaces | null
    invokedApi: any  | null
    reference: string
}
// ChatGlobal
const Dialogbox = ({ handleCloseForm, PopUpPostFormOpen, ParentData,invokedApi, reference }: Props) => {
    return (
        <>
            {
                PopUpPostFormOpen &&
                <Dialog
                    open={true}
                    onClose={handleCloseForm}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    {/* {
                        reference === "ActiveCleanerDropDownAddNewTag" ?
                            <AddNewTags handleCloseForm={handleCloseForm} ParentData={ParentData} />
                         :""
                                
                    } */}
                </Dialog>
            }
        </>
    )
}
export default Dialogbox
