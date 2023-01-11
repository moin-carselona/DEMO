import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { LocalBaseURL } from '../../../../BaseURLmanagement'
import SingleSelectSearchDetails from '../../../consts/Select/SingleSelectSearchDetails'
import ServerSideTableContext, { useServerSideTableContext } from '../../../consts/ServerSideTable/ServerSideTableContext'

import { ContainerCss, Create_BtnCss, PopCloseFormNotification, PopCloseFormNotificationPtag } from '../../../consts/Styles/CssCom'
import { GetAllSources, GetAllCustomers, GetAllCleaners, CreateRating } from '../API'

interface Props {
    PopUpSocietyBTN: () => void
}
let IDS: any = "";
const AddRatingForm = ({ PopUpSocietyBTN }: Props) => {
    const [Sources, setSources] = useState<any[]>([])
    const [Customers, setCustomers] = useState<any[]>([])
    const [Cleaners, setCleaners] = useState<any[]>([])
    // console.log('address', address);
    const [SelectSourceId, SetSelectSourceId] = useState<any>('')
    const [comment, setComment] = useState<any>('')
    const [SelectCustomerId, SetSelectCustomerId] = useState<any>('')
    const [SelectCleanerId, SetSelectCleanerId] = useState<any>('')
    const [rating, setRating] = useState<any>('')
    const [date_time, setDateTime] = useState<any>('')
    const [paid, setPaid] = useState<boolean>(false)
    LocalBaseURL()
    const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
   

    React.useEffect(() => {
        async function getSourcesInvoked() {
            const { data } = await GetAllSources(localKeyCheck)
            // console.log('add society city ========== city =>', data);
            setSources(data.data)
        }

        async function getCustomersInvoked() {
            const { data } = await GetAllCustomers(localKeyCheck)
            // console.log('add society city ========== city =>', data);
            console.log(data.data);
            
            setCustomers(data.data)
        }

        async function getCleanersInvoked() {
            const { data } = await GetAllCleaners(localKeyCheck)
            // console.log('add society city ========== city =>', data);
            setCleaners(data.data)
        }

        getSourcesInvoked()
        getCustomersInvoked()
        getCleanersInvoked()
    }, [])

    // to close pop up form
    const handleClose = () => {
        PopUpSocietyBTN()
    }

    const handleOnchangeforms = (event: any) => {
        let { name, value, id } = event.target
     
        
        if (name == "source_id") {
            console.log('source_id', value);
            SetSelectSourceId(value)
        }
       

        if (name == "rating") {
            console.log('rating', value);
            setRating(value)
        }


        if (name == "paid") {
            console.log('paid', event.target.checked);
            setPaid(value)
        }

        if (name == "comment") {
            console.log('comment', value);
            setComment(value)
        }

        if (name == "date_time") {
            console.log('date_time', value);
            setDateTime(value)
        }
    }
    
    const handleSelectChange = (event:any, name:any) => {
        let { label, value } = event
        console.log(event);
        
        if (name == "customer_id") {
            console.log('customer_id', value);
            SetSelectCustomerId(value)
        }

        if (name == "cleaner_id") {
            console.log('cleaner_id', value);
            SetSelectCleanerId(value)
        }
    }

    const dispatch  = useDispatch()
    const handleAddRatingCreate = async () => {
        // console.log('handleAddRatingCreate', "moinsssssssssssssssssssssssssssssssssssssssss");
        if(!SelectSourceId || !SelectCleanerId || !rating){
            toast.error("Please select required fields!!")
            
            return
        }
        let payload = {
            "sourceid": SelectSourceId,
            "customerid": SelectCustomerId,
            "cleanerid": SelectCleanerId,
            "rate": rating,
            "date_time": date_time,
            "ispaid": paid ? 1 : 0,
        }
        const response: any = await CreateRating(localKeyCheck, payload)
        if (response?.data?.status === 200) {
            toast.success(response?.data?.msg)
            console.log(dispatch);
            dispatch({type:"TOTAL_COUNT_CHANGED", payload : ''})
            // dispatch({ type: "PAGE_SIZE_CHANGED", payload: '' })
            handleClose()
        } else {
            toast.error(response?.data?.msg)
        }
    }
    
    
    return (
        <div className="p-8" style={ContainerCss}>
            <div style={PopCloseFormNotification}><p style={PopCloseFormNotificationPtag} onClick={handleClose} >X</p></div>
            <div className="p-5 mr-auto">
                <div className='modal-content ' >
                    <div className="row mb-5">
                        <hr />
                        <div className="col-6  mb-3">
                            <h5>Rating</h5>
                            <input
                                placeholder='Enter Rating..'
                                name='rating'
                                type='number'
                                value={rating}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => handleOnchangeforms(e)}
                            />
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Comment</h5>
                            <textarea
                                placeholder='Comment...'
                                name='comment'
                                value={comment}
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                autoComplete='off'
                                onChange={(e) => handleOnchangeforms(e)}
                            ></textarea>
                        </div>
                        <hr />
                    </div>
                    
                    {/* ==================================================================================================== */}
                    <div className="row mb-5">
                        <div className="col-6  mb-3">
                            <h5>Source</h5>
                            <select
                                className='form-select form-select-solid me-2'
                                onChange={(e) => handleOnchangeforms(e)}
                                value={SelectSourceId}
                                name="source_id"
                            >
                                <option >Select Source</option>
                                {Sources?.map((item: any, index: number) => {
                                    return (
                                        <option value={item.id} key={index}>
                                            {item.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Customer</h5>
                             <SingleSelectSearchDetails
                                handleChangeInputData={handleSelectChange}
                                HeaderTitle="Select Customer"
                                SelectData={Customers}
                                DynamicKey={"first_name"}
                                DynamicKey2={"last_name"}
                                DynamicKey3={"phone"}
                                id={"id"}
                                name="customer_id"
                            ></SingleSelectSearchDetails>
                        </div>
                        <hr />
                    </div>

        
                    {/* ============================================== section ========================================================= */}
                    <div className="row mb-5">
                        <div className="col-6  mb-3">
                            <h5>Cleaner</h5>
                            <SingleSelectSearchDetails
                                handleChangeInputData={handleSelectChange}
                                HeaderTitle="Select Cleaner"
                                SelectData={Cleaners}
                                DynamicKey={"first_name"}
                                DynamicKey2={"last_name"}
                                DynamicKey3={"phone"}
                                id={"id"}
                                name="cleaner_id"
                            ></SingleSelectSearchDetails>
                            
                        </div>
                        <div className="col-6  mb-3">
                            <h5>Paid</h5>
                            <div className="mb-10">
                            <div className="form-check form-check-custom form-check-solid form-check-lg">
                                <input className="form-check-input" type="checkbox"  id="paid" name='paid' onChange={(e) => handleOnchangeforms(e)} />
                                <label className="form-check-label">
                                    Is Cleaner Paid ?
                                </label>
                            </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    
                    <div className="row mb-5">
                        
                        <div className="col-6  mb-3">
                            <h5>Date Time</h5>
                            <div className="mb-10">
                            <div className="form-check form-check-custom form-check-solid form-check-lg">
                                <input className="form-control" type="datetime-local"  id="datetime" name='date_time' onChange={(e) => handleOnchangeforms(e)} />
                                
                            </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <button
                    style={Create_BtnCss}
                    type='submit'
                    className='btn btn-primary '
                    data-kt-users-modal-action='submit'
                    onClick={handleAddRatingCreate}
                >
                    <span className='indicator-label' >Add Rating</span>
                </button>
            </div>
        </div>
    )
}
export default AddRatingForm
