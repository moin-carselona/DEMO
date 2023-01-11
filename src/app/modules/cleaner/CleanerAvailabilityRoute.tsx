import { Dialog } from '@mui/material'
import axios from 'axios'
import React, { useMemo } from 'react'

import moment from "moment";
import { useLocation, useParams } from 'react-router'
import CleanerDetailsModel from './cleaner-items/CleanerDetailsModel'
import JobDetailsModal from './cleaner-items/JobDetailsModal'
import CleanerTableBodyComponent from './common/CleanerTableBodyComponent'
import MultiSelect from './common/MultiSelect'
import { useSelector } from 'react-redux';
import { LocalBaseURL } from '../../../BaseURLmanagement';
import { MAIN_ADMIN_BASE_API_URL, TEST_ADMIN_BASE_API_URL } from '../../../apiGlobally';
import Timing from './Timing';
import ReturnTime from '../../consts/Static/ReturnTime';
import ReturnDay from '../../consts/Static/ReturnDay';
import MomentDate from '../../consts/MomentDate';
import { getAvalabilitybySubscription, getCleanerListDataAPI } from '../../consts/Request2Server/_Request2Server';
// import { getAvalabilitybySubscription, getCleanerList } from './api';
const CleanerAvailabilityRoute = (props: {
  iscleanerpage?: boolean
}) => {
  const { iscleanerpage } = props
  LocalBaseURL()
  const paramsIDS: any = useParams()
  const urlEndPoint = window.location.pathname.split("/")
  const [cleanerStats, setCleanerStats] = React.useState<any>([])
  const [SubscriptionData, setsubscriptionData] = React.useState<any>({})
  const [distenceRadeus, setDistenceRadeus] = React.useState<any>(2)
  const [dates, setDates] = React.useState<any>([])
  const [cleanerList, setCleanerList] = React.useState([])
  const [timeSlots, setTimeSlots] = React.useState<any>([])
  const [timeSlotsfilter, settimeSlotsfilter] = React.useState<any>([])
  const [timingSlots, setTimingslots] = React.useState<any>([])
  const [SelectedTimingMultiSelect, setSelectedTimingMultiSelect] = React.useState<any>([])
  const [selectedCleaner, setCleaner] = React.useState('0')
  const [id, setId] = React.useState("")
  const [jobdetailssss, setjobdetails] = React.useState({})
  const [jobDetailsTimeSlot, setjobDetailsTimeSlot] = React.useState('')
  const [jobsiteid, setjobsiteid] = React.useState(0)
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [isCleanerModelOpen, setCleanerModelOpen] = React.useState(false)
  const [isLoading, setLoading] = React.useState(false)
  const [attendencedatefrom, setAttendencedatefrom] = React.useState<any>(MomentDate(0))
  const [attendencedateto, setAttendencedateto] = React.useState<any>(MomentDate(7))
  const [loading2, setloading2] = React.useState(false)
  const data = useMemo(() => cleanerStats, [cleanerStats])
  const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
  const refreshAfterAssigning = useSelector((store: any) => store.ActivePaidSubscriptionReducer.cleanerAvailibiltyRoutes)
  React.useEffect(() => {
    async function loadsData() {
      let timeSlotsidfiltered = []
      for (let i = 0; i < SelectedTimingMultiSelect.length; i++) {
        timeSlotsidfiltered.push(SelectedTimingMultiSelect[i].value)
      }
      if (SelectedTimingMultiSelect.length != 0) {
        let arr = []
        for (let i = 0; i < timingSlots.length; i++) {
          let payload = {
            name: timingSlots[i]
          }
          arr.push(payload)
        }
        setTimeSlots(arr)
        setloading2(true)
        const payloads = {
          fromDate: attendencedatefrom,
          toDate: attendencedateto,
          subscriptionID: +paramsIDS?.id,
          timeslots: timeSlotsidfiltered || SelectedTimingMultiSelect,
          distenceRadius: +distenceRadeus
        }
        // axios
        //   .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payloads)
        //   .then((response) => {
        //     setDates(response.data.dates)
        //     settimeSlotsfilter(response.data.timeslots)
        //     setCleanerStats(response.data.data)
        //     setloading2(false)
        //   })
        //   .catch((error) => {
        //     setloading2(false)
        //   })
        const result = await getAvalabilitybySubscription(localKeyCheck, payloads, setloading2)
        console.log('refresh result', result);
        setDates(result?.data?.dates)
        settimeSlotsfilter(result?.data?.timeslots)
        setCleanerStats(result?.data?.data)
      }
    }
    loadsData()
  }, [refreshAfterAssigning])
  React.useEffect(() => {
    setLoading(true)
    const payloads = {
      fromDate: attendencedatefrom,
      toDate: attendencedateto,
      subscriptionID: +paramsIDS?.id,
      timeslots: [],
      distenceRadius: +distenceRadeus
    }
    async function loadsData() {
      const result = await getAvalabilitybySubscription(localKeyCheck, payloads, setLoading)
      console.log('result params', result);
      setDates(result?.data?.dates)
      settimeSlotsfilter(result?.data?.timeslots)
      setCleanerStats(result?.data?.data)
      setsubscriptionData(result?.data?.subscriptionData)
      const timing = ReturnTime(result?.data?.subscriptionData)
      if (timing === "06AM-09AM") {
        setTimeSlots(result?.data?.timeslots)
      }
      else {
        if (result?.data?.subscriptionData?.timeslot === "") {
          setTimeSlots(result?.data?.timeslots)
        }
        else {
          setTimeSlots([{
            name: timing
          }])
          setTimingslots([timing])
          setSelectedTimingMultiSelect([{
            label: timing,
            track: "rendered",
            value: result?.data?.subscriptionData?.timeslot
          }])
        }
        setTimeSlots(result?.data?.timeslots)
      }
      const getCleanerListdata = await getCleanerListDataAPI(localKeyCheck)
      setCleanerList(getCleanerListdata?.data?.data)
    }
    loadsData()
    // axios
    //   .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payloads)
    //   .then((response) => {
    //     console.log('response paramsid', response);
    //     setDates(response.data.dates)
    //     settimeSlotsfilter(response.data.timeslots)
    //     setCleanerStats(response.data.data)
    //     setsubscriptionData(response.data.subscriptionData)
    //     const timing = ReturnTime(response.data.subscriptionData)
    //     if (timing === "06AM-09AM") {
    //       setTimeSlots(response.data.timeslots)
    //     }
    //     else {
    //       if (response.data.subscriptionData.timeslot === "") {
    //         setTimeSlots(response.data.timeslots)
    //       }
    //       else {
    //         setTimeSlots([{
    //           name: timing
    //         }])
    //         setTimingslots([timing])
    //         setSelectedTimingMultiSelect([{
    //           label: timing,
    //           track: "rendered",
    //           value: response.data.subscriptionData.timeslot
    //         }])
    //       }
    //       setTimeSlots(response.data.timeslots)
    //     }
    //     setLoading(false)
    //   })
    //   .catch((error) => {
    //     setLoading(false)
    //   })
    // axios
    //   .get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getCleanerList`)
    //   .then((response) => {
    //     setCleanerList(response.data.data)
    //   })
    //   .catch((error) => {
    //     console.error('ERROR', error)
    //   })
  }, [paramsIDS?.id])
  const handleFromDateChange = (e: any) => {
    // setloading2(true)
    setAttendencedatefrom(e.target.value)
    // setloading2(false)
  }
  const handleToDateChange = (e: any) => {
    // setloading2(true)
    setAttendencedateto(e.target.value)
    // setloading2(false)
  }
  const handleClick = () => {
    async function loadsData() {
      let timeSlotsidfiltered = []
      for (let i = 0; i < SelectedTimingMultiSelect.length; i++) {
        timeSlotsidfiltered.push(SelectedTimingMultiSelect[i].value)
      }
      if (SelectedTimingMultiSelect.length != 0) {
        let arr = []
        for (let i = 0; i < timingSlots.length; i++) {
          let payload = {
            name: timingSlots[i]
          }
          arr.push(payload)
        }
        setTimeSlots(arr)
        setloading2(true)
        const payloads = {
          fromDate: attendencedatefrom,
          toDate: attendencedateto,
          subscriptionID: +paramsIDS?.id,
          timeslots: timeSlotsidfiltered || SelectedTimingMultiSelect,
          distenceRadius: +distenceRadeus
        }
        const result = await getAvalabilitybySubscription(localKeyCheck, payloads, setloading2)
        console.log('result onlcik if', result);
        setDates(result?.data?.dates)
        settimeSlotsfilter(result?.data?.timeslots)
        setCleanerStats(result?.data?.data)
        // axios
        //   .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payloads)
        //   .then((response) => {
        //     setDates(response.data.dates)
        //     settimeSlotsfilter(response.data.timeslots)
        //     setCleanerStats(response.data.data)
        //     setloading2(false)
        //   })
        //   .catch((error) => {
        //     setloading2(false)
        //   })
      }
      else {
        setloading2(true)
        const payloads = {
          fromDate: attendencedatefrom,
          toDate: attendencedateto,
          subscriptionID: +paramsIDS?.id,
          timeslots: SelectedTimingMultiSelect,
          distenceRadius: +distenceRadeus
        }
        const result = await getAvalabilitybySubscription(localKeyCheck, payloads, setloading2)
        console.log('result onlcik else', result);
        setDates(result?.data?.dates)
        settimeSlotsfilter(result?.data?.timeslots)
        setCleanerStats(result?.data?.data)
        setsubscriptionData(result?.data?.subscriptionData)
        setTimeSlots(result?.data?.timeslots)
        // axios
        //   .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payloads)
        //   .then((response) => {
        //     setDates(response.data.dates)
        //     settimeSlotsfilter(response.data.timeslots)
        //     setCleanerStats(response.data.data)
        //     setsubscriptionData(response.data.subscriptionData)
        //     setloading2(false)
        //     setTimeSlots(response.data.timeslots)
        //   })
        //   .catch((error) => {
        //     setloading2(false)
        //   })
      }
    }
    loadsData()
  }
  const handleCleanerChange = (e: any) => {
    setloading2(true)
    setCleaner(e.target.value)
    const payload = {
      cleanerid: +e.target.value,
      fromData: attendencedatefrom,
      timeslots: SelectedTimingMultiSelect,
      toDate: attendencedateto,
      subscriptionID: +paramsIDS?.id,
      distenceRadius: +distenceRadeus
    }
    axios
      .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payload)
      .then((response) => {
        setCleanerStats(response.data.data)
        setloading2(false)
      })
      .catch((error) => {
        setloading2(false)
      })
  }
  const handleDistanceFormData = (e: any) => {
    setDistenceRadeus(e.target.value)
  }
  const handleJobDetailSubmit = (timeslot: any, timeslotSelected: any, jobsiteid: number) => {
    setjobdetails(timeslot)
    setjobDetailsTimeSlot(timeslotSelected)
    setjobsiteid(jobsiteid)
    setModalOpen(true)
  }
  const handleCleanerDetailsSubmit = (id: any) => {
    setId(id)
    setCleanerModelOpen(!isCleanerModelOpen)
  }
  const handleCloseModal = () => {
    setModalOpen(false)
  }
  const handleCloseModalCleaner = () => {
    setCleanerModelOpen(!isCleanerModelOpen)
  }
  const [activeTab, setActiveTab] = React.useState(1)
  // define a onClick function to bind the value on tab click
  const onTabClick = (e: any, index: any) => {
    console.log(e)
    setActiveTab(index)
  }
  if (isLoading) {
    return (
      <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
        <div className='spinner-border mr-15' role='status'></div>
        <h4 className='fw-bold mt-2'>Loading...</h4>
      </div>
    )
  }
  return (
    <>
      {!iscleanerpage && cleanerStats && (
        <div className='card  d-flex flex-row mb-1  justify-content-between position-sticky' style={{ top: "69px", zIndex: 99, height: "85px" }}>
          <div className='my-2'>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Frequency :'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.masterFrequency?.name} </span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Subscription Date :'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.startdate} to {SubscriptionData?.enddate}  </span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Address  :'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.jobsitename ? SubscriptionData?.jobsitename : "Individual"}  </span>
            </div>
          </div>
          <div className='my-2'>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Customer Name:'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.name}</span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Customer phone:'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.phone}</span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Active Champ :'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.activechamp?.first_name ? SubscriptionData?.activechamp?.first_name + SubscriptionData?.activechamp?.last_name : "No Name"} </span>
            </div>
          </div>
          <div className='my-2'>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Time:'}</span>
              <span className='text-muted fs-5'><Timing SubscriptionData={SubscriptionData}></Timing></span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Cleaning:'}</span>
              <span className='text-muted fs-5'>
                <ReturnDay SelectedData={SubscriptionData}></ReturnDay>
              </span>
            </div>
            <div className='d-flex'>
              <span className='fw-bolder fs-5 me-1'>{'Package Name :'}</span>
              <span className='text-muted fs-5'>{SubscriptionData?.packageDetail?.name} </span>
            </div>
          </div>
        </div>
      )}
      {/* cleanr list  */}
      <div className='card  d-flex flex-row mb-3  justify-content-between align-items-center position-sticky' style={{ top: "150px", zIndex: 99, height: "50px", overflow: "scroll", overflowY: "hidden", scrollbarColor: "red" }}>
        <div className='w-100'>
          <div className='d-flex' style={{}}>
            {
             SubscriptionData?.societyWorkingCleaners?.length !== 0 ?  SubscriptionData?.societyWorkingCleaners?.map((cleanerlist: any) =>
             <span className='badge badge-light-dark fs-8 fw-bold me-2 '>  {cleanerlist?.first_name + " " + cleanerlist?.last_name}</span>
           ) :        <span className='badge badge-light-dark fs-8 fw-bold me-2  text-center'>No Cleaner Is Available in this society</span>
            }
          </div>
        </div>
      </div>
      <br />
      {/* cleanr list  */}
      <div className='w-125 card d-flex mb-5 justify-content-around align-items-center flex-wrap px-3 position-sticky' style={{ height: "70px", top: "185px", zIndex: 100, }}>
        <div className='col-12 col-sm-12 col-md-12 col-lg-5 d-flex align-items-center mt-3'>
          <span className='me-2' >
            <MultiSelect defaultVal={
              SubscriptionData
            } SelectedTimingMultiSelect={SelectedTimingMultiSelect} setSelectedTimingMultiSelect={setSelectedTimingMultiSelect} setTimingslots={setTimingslots} setTimeSlots={setTimeSlots} timeSlotsfilter={timeSlotsfilter}></MultiSelect>
          </span>
          <select
            className='form-select form-select-solid'
            onChange={handleCleanerChange}
            value={selectedCleaner}
          >
            <option value=''>Select Cleaner</option>
            {cleanerList?.map((item: any) => {
              return (
                <option value={item.id} key={item.id}>
                  {item.first_name} {item.last_name}
                </option>
              )
            })}
          </select>
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-6 d-flex align-items-center mt-3'>
          <input
            type='number'
            className='form-control bg-secondary me-2 border'
            placeholder='0/km'
            onChange={handleDistanceFormData}
            value={distenceRadeus}
          />
          <input
            type='date'
            className='form-select form-select-solid me-2'
            onChange={handleFromDateChange}
            value={attendencedatefrom}
          />
          <input
            type='date'
            className='form-select form-select-solid me-2'
            onChange={handleToDateChange}
            defaultValue={attendencedateto}
            value={attendencedateto}
          />
          <div>
            <button className='btn btn-sm btn-warning' onClick={handleClick}>
              Search
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className='card'>
        {loading2 ? <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
          <div className='spinner-border mr-15' role='status'></div>
          <h4 className='fw-bold mt-2'>Loading...</h4>
        </div> :
          <div className='table-responsive px-3'>
            <table
              id='kt_table_users'
              className='table align-middle table-row-dashed fs-6 gy-3 dataTable no-footer'
            >
              <thead  >
                <tr  >
                  <th style={{ width: '130px' }}>
                    <div className='bg-secondary text-dark  p-2  text-center fw-bolder rounded'>
                      Cl Name
                    </div>
                  </th>
                  <th>
                    <div className='bg-secondary text-dark  p-2 text-center fw-bolder rounded'>
                      TimeSlots
                    </div>
                  </th>
                  {dates?.map((item: any) => (
                    <th key={item}>
                      <div
                        className='bg-secondary text-success  p-2 text-center fw-bolder rounded'
                        style={{ maxWidth: '120px', width: '100px' }}
                      >
                        {item}
                        <br />
                        {moment(item).format('dddd')}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              {
                SubscriptionData.timeslot === "6" ?
                  <h4 className=' mt-4 text-center mr-auto'>No Data</h4>
                  : cleanerStats && <CleanerTableBodyComponent
                    cleanerStats={cleanerStats}
                    timeSlots={timeSlots}
                    handleJobDetailSubmit={handleJobDetailSubmit} handleCleanerDetailsSubmit={handleCleanerDetailsSubmit}
                  />
              }
            </table>
          </div>
        }
        {
          isModalOpen && (
            <Dialog
              open={true}
              onClose={handleCloseModal}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <JobDetailsModal filteredData={jobdetailssss} jobsiteid={jobsiteid} jobDetailsTimeSlot={jobDetailsTimeSlot} data={data} handleCloseModal={handleCloseModal} />
            </Dialog>
          )
        }
        {
          isCleanerModelOpen && (
            <Dialog
              open={true}
              onClose={handleCloseModalCleaner}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <CleanerDetailsModel referece={urlEndPoint[urlEndPoint?.length - 2]} timeSlotsfilter={timeSlotsfilter} filteredCustomerData={SubscriptionData} SubscriptionData={
                SubscriptionData
              } id={id} data={data} handleCloseModalCleaner={handleCloseModalCleaner} CustomerDetails={SubscriptionData} />
            </Dialog>
          )
        }
      </div >
    </>
  )
}
export default CleanerAvailabilityRoute
