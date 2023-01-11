
import React, { useState } from 'react'
import { LocalBaseURL } from '../../../../../BaseURLmanagement'
import { ContainerCss, PopCloseFormNotification, PopCloseFormNotificationPtag, Create_BtnCss, } from '../../../../consts/Styles/CssCom';
interface Props {
    PopUpJobSiteBTN: () => void
}
const AddNewFormData = ({ PopUpJobSiteBTN }: Props) => {
    LocalBaseURL()
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
    const handleCreateNewData = async () => {
    }
    // to close pop up form
    const handleClose = () => {
        PopUpJobSiteBTN()
    }
    React.useEffect(() => {
        // async function xxxxxxxxxxxxxxxxx() {
        //     const { data } = await xxxxxxxxxxxxxxxxxxxxxxxxx(localKeyCheck)
        //     setCity(data.data)
        // }
        // xxxxxxxxxxxxxxxxx()
    }, [])
    return (
        <div className="p-8" style={ContainerCss}>
            <div style={PopCloseFormNotification}><p style={PopCloseFormNotificationPtag} onClick={handleClose} >X</p></div>
            <div className="p-5 mr-auto">
                <div className='modal-content ' >
                    <div className="row mb-5">
                        <hr />
                        <div className="col-6  mb-3">
                            <h5> Name</h5>
                            <input
                                placeholder='Society Name Here...'
                                name='name'
                                id='en'
                                type='text'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                            />
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Phone</h5>
                            <input
                                placeholder='Phone Here...'
                                name='phone'
                                id='en'
                                type='text'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                            />
                        </div>
                        <hr />
                    </div>
                </div>
                <button
                    style={Create_BtnCss}
                    type='submit'
                    className='btn btn-primary '
                    data-kt-users-modal-action='submit'
                >
                    <span className='indicator-label' onClick={handleCreateNewData}>Add New Data</span>
                </button>
            </div>
        </div>
    )
}
export default AddNewFormData
