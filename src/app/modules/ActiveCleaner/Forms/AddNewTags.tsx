import { useState } from 'react';
import { TagsInput } from 'react-tag-input-component';
import { toast } from 'react-toastify';
import { LocalBaseURL } from '../../../../BaseURLmanagement';
import { AddNewTagsInterfaces } from '../../../consts/Inerfaces4az/AddNewTagsInterfaces';
import { createCleanerTag } from '../../../consts/Request2Server/_Request2Server';
import { ContainerCss, PopCloseFormNotification, PopCloseFormNotificationPtag } from '../../../consts/Styles/CssCom';
interface Props {
    handleCloseForm: () => void
    ParentData: AddNewTagsInterfaces | null | any
}
const AddNewTags = ({ handleCloseForm, ParentData }: Props) => {
    LocalBaseURL()
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")   // by this we checking enviroment it is live tor test
    const [isPrivate, setIsPrivate] = useState("")
    const [PayloadsTags, setPayloadsTags] = useState<any>()
    // by this we are storign value from input to   payloads state
    const handleChangeInputData = (event: any) => {
        setPayloadsTags(event)
    }
    const Togglling = (event: any) => {
        setIsPrivate(event)
        if (event === "private") {
            const privateData = ParentData?.private_tag ? ParentData?.private_tag?.split(",") : []
            setPayloadsTags(privateData)
        }
        else {
            let publicData = ParentData?.public_tag ? ParentData?.public_tag?.split(",") : []
            setPayloadsTags(publicData)
        }
    }
    // by this function we are creating new tags
    const handleCreateTags = async (refs: string) => {
        let endpoint = refs === "private" ? "private" : refs === "public" ? "public" : ""
        if (PayloadsTags?.length !== 0) {
            const result = await createCleanerTag(localKeyCheck, PayloadsTags, endpoint, ParentData?.id, null)
            if (result?.data?.status == 200) {
                toast.success(`${endpoint} tags are Added Successfully`)
            } else {
                toast.error(result?.data?.message)
            }
            handleChangeInputData([])
        }
        else {
            toast.error("Tag is missing ")
        }
        window.location.reload()
    }
    // by this we closeing form
    const handleClose = () => {
        handleCloseForm()
    }
    return (
        <div className="p-8" style={ContainerCss}>
            <div style={PopCloseFormNotification}><p style={PopCloseFormNotificationPtag} onClick={handleClose} >X</p></div>
            <div className="p-5 mr-auto">
                <div className='modal-content ' >
                    <div className="row mb-5">
                        <div className="col-12  mb-3">
                            {/* <h5>Select Tag Type</h5> */}
                            <select
                                className='form-select form-select-solid me-2'
                                // data-kt-select2='true'
                                // data-placeholder='Select option'
                                // data-allow-clear='true'
                                onChange={(e) => Togglling(e.target.value)}
                            >
                                <option>Select Tag Type</option>
                                <option value={"private"}>Private Tags</option>
                                <option value={"public"}>Public Tags</option>
                            </select>
                        </div>
                        <hr />
                        {
                            isPrivate === "private" ?
                                <>
                                    <div className="col-12  mb-3">
                                        <h5>{isPrivate} </h5>
                                        <TagsInput
                                            value={PayloadsTags}
                                            onChange={(event: any) => handleChangeInputData(event)}
                                            name="tagname"
                                            placeHolder="enter tags"
                                        />
                                    </div>
                                    <div className="col-12  mb-3 d-flex justify-content-end">
                                        <button
                                            type='submit'
                                            className='btn btn-danger  '
                                            data-kt-users-modal-action='submit'
                                        >
                                            <span className='indicator-label' onClick={() => handleCreateTags("private")}>Add Private</span>
                                        </button>
                                    </div>
                                </>
                                :
                                isPrivate === "public" ? <>
                                    <div className="col-12  mb-3">
                                        <h5>{isPrivate} </h5>
                                        <TagsInput
                                            value={PayloadsTags}
                                            onChange={(event: any) => handleChangeInputData(event)}
                                            name="tagname"
                                            placeHolder="enter tags"
                                        />
                                    </div>
                                    <div className="col-12  mb-3 d-flex justify-content-end">
                                        <button
                                            type='submit'
                                            className='btn btn-success  '
                                            data-kt-users-modal-action='submit'
                                        >
                                            <span className='indicator-label' onClick={() => handleCreateTags("public")}>Add Public</span>
                                        </button>
                                    </div>
                                </> : <h2 className='text-center'>Select Tag Types</h2>
                        }
                    </div>
                    {/* ==================================================================================================== */}
                </div>
            </div>
        </div>
    )
}
export default AddNewTags
