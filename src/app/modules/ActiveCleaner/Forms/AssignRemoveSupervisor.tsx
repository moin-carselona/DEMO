import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { LocalBaseURL } from '../../../../BaseURLmanagement';
import { Create_BtnCss } from '../../../../Css';
import { AddNewTagsInterfaces } from '../../../consts/Inerfaces4az/AddNewTagsInterfaces';
import MultiSelectSearchDetailsDefault from '../../../consts/Select/MultiSelectSearchDetailsDefault';
import { assignMultipleCleanersWithSupervisior } from '../../../consts/Request2Server/_Request2Server';
import {  ContainerCssCus, PopCloseFormNotification, PopCloseFormNotificationPtag } from '../../../consts/Styles/CssCom';
import { getSupervisorList } from '../API';
interface Props {
    handleCloseForm: () => void
    ParentData: AddNewTagsInterfaces | null | any
}
const AssignRemoveSupervisor = ({ handleCloseForm, ParentData }: Props) => {
    // console.log('ParentData', ParentData);
    LocalBaseURL()
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
    const [Payloads, setPayloads] = useState<any>([])
    // console.log('Payloads', Payloads);
    const [SupervisorsListData, setSupervisorsListData] = useState<any>([])
    const handleChangeInputData = (event: any) => {
        // console.log('event', event);
        setPayloads(event)
    }
    useEffect(() => {
        async function invokedFilterAPI() {
            const getSupervisorListData = await getSupervisorList(localKeyCheck)
            setSupervisorsListData(getSupervisorListData?.data?.data)
        }
        invokedFilterAPI()
    }, [])
    // by this function we are creating new tags
    const handleAssign_remove_supervisor = async () => {
        const PostData = {
            supervisorids: JSON.stringify(Payloads),
            cleanerid: ParentData.id
        }
        if (Payloads?.length !== 0) {
            const result: any = await assignMultipleCleanersWithSupervisior(localKeyCheck, PostData)
            if (result?.data?.status == 200) {
                toast.success("Assigned/Removed Successfully")
            } else {
                toast.error(result?.data?.message)
            }
            setSupervisorsListData([])
        }
        else {
            toast.error("Ids is missing ")
        }
    }
    // by this we closeing form
    const handleClose = () => {
        handleCloseForm()
    }
    const updatedData = ParentData?.cleanerSupervisor?.map((ele: any, i: number) => {
        let number = ele.supervisorcleaner.first_name ? '(' + ele.supervisorcleaner.phone + ')' : "(NA)"
        if (ele.supervisorcleaner.first_name) {
            const newData = {
                label: ele.supervisorcleaner.first_name + ' ' + ele.supervisorcleaner.last_name + number,
                value: ele.supervisor_id,
            }
            return newData
        }
    })
    console.log('updatedData', updatedData);
    return (
        <div className="p-8" style={ContainerCssCus} >
            <div style={PopCloseFormNotification}><p style={PopCloseFormNotificationPtag} onClick={handleClose} >X</p></div>
            <div className="p-3 mr-auto">
                <div className='modal-content mb-12' >
                    <div className="row mb-5">
                        <div className="col-12  mb-3">
                            <h5>Select Supervisor</h5>
                            <MultiSelectSearchDetailsDefault
                                handleChangeInputData={handleChangeInputData}
                                HeaderTitle="Select Supervisor"
                                SelectData={SupervisorsListData}
                                DynamicKey={"first_name"}
                                DynamicKey2={"last_name"}
                                DynamicKey3={"phone"}
                                id={"id"}
                                name="supervisorIds"
                                defaultData={updatedData}
                            />
                        </div>
                    </div>
                </div>
                <button
                    style={Create_BtnCss}
                    type='submit'
                    className='btn btn-primary '
                    data-kt-users-modal-action='submit'
                >
                    <span className='indicator-label' onClick={handleAssign_remove_supervisor}>Assign/Remove</span>
                </button>
            </div>
        </div>
    )
}
export default AssignRemoveSupervisor
