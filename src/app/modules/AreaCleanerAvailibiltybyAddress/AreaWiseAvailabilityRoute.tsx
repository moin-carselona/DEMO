import { Dialog } from '@mui/material'
import React, { useMemo } from 'react'
import moment from "moment";
import MultiSelect from './common/MultiSelect'
import { useSelector } from 'react-redux';
import { LocalBaseURL } from '../../../BaseURLmanagement';
import CleanerTableBodyComponent from './common/CleanerTableBodyComponent';
import JobDetailsModal from '../cleaner/cleaner-items/JobDetailsModal';
import { getAvalabilitybyAddress, gettimeslotsData } from '../../consts/Request2Server/_Request2Server';
import MomentDate from '../../consts/MomentDate';
const AreaWiseAvailabilityRoute = (props: {
  subscriptionId?: any
  distenceRadius?: string
  iscleanerpage?: boolean
}) => {
  const { iscleanerpage } = props
  LocalBaseURL()
  const areawise_lat_long = useSelector((store: any) => store?.DailyReAssignments?.areawise)
  const [cleanerStats, setCleanerStats] = React.useState<any>([])
  const [distenceRadeus, setDistenceRadeus] = React.useState<any>(2)
  const [dates, setDates] = React.useState<any>([])
  const [empty] = React.useState<any>([])
  const [timeSlots, setTimeSlots] = React.useState<any>([])
  const [timeSlotsfilter, settimeSlotsfilter] = React.useState([])
  const [SelectedTimingMultiSelect, setSelectedTimingMultiSelect] = React.useState<any>([])
  const [timingSlots, setTimingslots] = React.useState<any>([])
  const [id, setId] = React.useState('')
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [isCleanerModelOpen, setCleanerModelOpen] = React.useState(false)
  const [isLoading, setLoading] = React.useState(false)
  
  const [attendencedatefrom, setAttendencedatefrom] = React.useState<any>(MomentDate(0))
  const [attendencedateto, setAttendencedateto] = React.useState<any>(MomentDate(7))
  const [jobdetailsCustomer, setjobdetailsCustomer] = React.useState({})
  const [loading2, setloading2] = React.useState(false)
  const [trackStatus, setTrackStatus] = React.useState(false)
  const data = useMemo(() => cleanerStats, [cleanerStats])
  const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
  React.useEffect(() => {
    async function loadsData() {
      setLoading(true)
      const payloads = {
        fromDate: attendencedatefrom,
        toDate: attendencedateto,
        latitude: areawise_lat_long?.ltd,
        longitude: areawise_lat_long?.lng,
        timeslots: empty || SelectedTimingMultiSelect,
        distenceRadius: +distenceRadeus
      }
      const result = await getAvalabilitybyAddress(localKeyCheck, payloads, setLoading)
      // console.log('refresh areawise refresh', result);
      setDates(result?.data?.dates)
      settimeSlotsfilter(result?.data?.timeslots)
      setCleanerStats(result?.data?.data)
      const getTimelosts = await gettimeslotsData(localKeyCheck, payloads, setLoading)
      setTimeSlots(getTimelosts.data.data)
      // axios
      //   .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybyAddress`, payloads)
      //   .then((response) => {
      //     setDates(response.data.dates)
      //     settimeSlotsfilter(response.data.timeslots)
      //     setCleanerStats(response.data.data)
      //     setLoading(false)
      //   })
      //   .catch((error) => {
      //     setLoading(false)
      //   })
      // axios
      //   .get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/gettimeslots`)
      //   .then((response) => {
      //     setTimeSlots(response.data.data)
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
    }
    loadsData()
  }, [])
  React.useEffect(() => {
    async function loadsData() {
      if (SelectedTimingMultiSelect.length != 0) {
        let arr = []
        for (let i = 0; i < timingSlots.length; i++) {
          let payload = {
            name: timingSlots[i]
          }
          arr.push(payload)
        }
        setTimeSlots(arr)
      }
      setloading2(true)
      const payloads = {
        fromDate: attendencedatefrom,
        toDate: attendencedateto,
        latitude: areawise_lat_long?.ltd,
        longitude: areawise_lat_long?.lng,
        timeslots: SelectedTimingMultiSelect,
        distenceRadius: +distenceRadeus
      }
      const result = await getAvalabilitybyAddress(localKeyCheck, payloads, setloading2)
      // console.log('refresh areawise refresh', result);
      setDates(result?.data?.dates)
      settimeSlotsfilter(result?.data?.timeslots)
      setCleanerStats(result?.data?.data)
      // const getTimelosts = await gettimeslotsData(localKeyCheck)
      // console.log('getTimelosts', getTimelosts);
      // setTimeSlots(getTimelosts.data.data)
      // axios
      //   .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybyAddress`, payloads)
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
    loadsData()
  }, [areawise_lat_long?.ltd])
  const handleFromDateChange = (e: any) => {
    setloading2(true)
    setTrackStatus(true)
    setAttendencedatefrom(e.target.value)
    setloading2(false)
  }
  const handleToDateChange = (e: any) => {
    setloading2(true)
    setTrackStatus(true)
    setAttendencedateto(e.target.value)
    setloading2(false)
  }
  const handleClick = async () => {
    async function loadsData() {
     
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
          // subscriptionID: 22896,
          latitude: areawise_lat_long?.ltd,
          longitude: areawise_lat_long?.lng,
          timeslots: SelectedTimingMultiSelect,
          distenceRadius: +distenceRadeus
        }
        const result = await getAvalabilitybyAddress(localKeyCheck, payloads, setloading2)
        console.log('refresh areawise refresh', result);
        setDates(result?.data?.dates)
        settimeSlotsfilter(result?.data?.timeslots)
        setCleanerStats(result?.data?.data)
        // axios
        //   .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybyAddress`, payloads)
        //   .then((response) => {
        //     setDates(response.data.dates)
        //     settimeSlotsfilter(response.data.timeslots)
        //     setCleanerStats(response.data.data)
        //     setloading2(false)
        //     setTrackStatus(false)
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
          // subscriptionID: 22896,
          latitude: areawise_lat_long?.ltd,
          longitude: areawise_lat_long?.lng,
          timeslots: SelectedTimingMultiSelect,
          distenceRadius: +distenceRadeus
        }
        const result = await getAvalabilitybyAddress(localKeyCheck, payloads, setloading2)
        setDates(result?.data?.dates)
        settimeSlotsfilter(result?.data?.timeslots)
        setCleanerStats(result?.data?.data)
        // axios
        //   .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybyAddress`, payloads)
        //   .then((response) => {
        //     setDates(response.data.dates)
        //     settimeSlotsfilter(response.data.timeslots)
        //     setCleanerStats(response.data.data)
        //     setloading2(false)
        //     setTrackStatus(false)
        //   })
        //   .catch((error) => {
        //     setloading2(false)
        //   })
      }
    }
    loadsData()
  }
  const handleDistanceFormData = (e: any) => {
    setTrackStatus(true)
    setDistenceRadeus(e.target.value)
  }
  const handleJobDetailSubmit = (timeslot: any) => {
    setjobdetailsCustomer(timeslot)
    setModalOpen(true)
  }
  const handleCleanerDetailsSubmit = (id: any) => {
    setId(id)
    setCleanerModelOpen(!isCleanerModelOpen)
  }
  const handleCloseModal = () => {
    setModalOpen(false)
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
      <div className='card mb-12 mt-3 position-sticky' style={{ top: "120px", zIndex: 99, height: "60px" }}>
        <div className=' d-flex  justify-content-around align-items-center flex-wrap px-3 ' >
          <div className='col-12 col-sm-12 col-md-12 col-lg-5 d-flex align-items-center mt-3'>
            <span className='me-2' >
              <MultiSelect setSelectedTimingMultiSelect={setSelectedTimingMultiSelect} setTrackStatus={setTrackStatus} setTimingslots={setTimingslots} timeSlotsfilter={timeSlotsfilter}></MultiSelect>
            </span>
            <input
              type='number'
              className='form-control bg-secondary me-2 border'
              placeholder='0/km'
              onChange={handleDistanceFormData}
              value={distenceRadeus}
            />
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 d-flex align-items-center mt-3'>
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
      </div>
      <div className='card mt-4'>
        {/* <div className='d-flex mb-3 justify-content-around align-items-center flex-wrap px-3'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-5 d-flex align-items-center mt-3'>
            <span className='me-2' >
              <MultiSelect setSelectedTimingMultiSelect={setSelectedTimingMultiSelect} setTrackStatus={setTrackStatus} setTimingslots={setTimingslots} timeSlotsfilter={timeSlotsfilter}></MultiSelect>
            </span>
            <input
              type='number'
              className='form-control bg-secondary me-2 border'
              placeholder='0/km'
              onChange={handleDistanceFormData}
              value={distenceRadeus}
            />
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-6 d-flex align-items-center mt-3'>
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
        </div> */}
        {loading2 ? <div className='d-flex padding-top-100 align-items-center justify-content-center mt-12 h-75 flex-column'>
          <div className='spinner-border mr-10' role='status'></div>
          <h4 className='fw-bold mt-8'>Loading...</h4>
        </div> :
          <div className='table-responsive px-3'>
            <table
              id='kt_table_users'
              className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
            >
              <thead>
                <tr>
                  <th style={{ width: '130px' }}>
                    <div className='bg-secondary text-dark py-2 me-2 text-center fw-bolder rounded'>
                      Cl Name
                    </div>
                  </th>
                  <th>
                    <div className='bg-secondary text-dark py-2 me-2 text-center fw-bolder rounded'>
                      TimeSlots
                    </div>
                  </th>
                  {dates?.map((item: any) => (
                    <th key={item}>
                      <div
                        className='bg-secondary text-success py-2  gy-5  text-center fw-bolder rounded'
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
                cleanerStats && <CleanerTableBodyComponent
                  cleanerStats={cleanerStats}
                  timeSlots={timeSlots}
                  handleJobDetailSubmit={handleJobDetailSubmit} handleCleanerDetailsSubmit={handleCleanerDetailsSubmit}
                />
              }
            </table>
          </div>
        }
        {isModalOpen && (
          <Dialog
            open={true}
            onClose={handleCloseModal}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <JobDetailsModal filteredData={jobdetailsCustomer} data={data} handleCloseModal={handleCloseModal} />
          </Dialog>
        )}
        {/* {isCleanerModelOpen && (
          <Dialog
            open={true}
            onClose={handleCloseModalCleaner}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <CleanerDetailsModel referece={referece} timeSlotsfilter={timeSlotsfilter} filteredCustomerData={filteredData} id={id} subscription_order_id={subscription_order_id} data={data} handleCloseModalCleaner={handleCloseModalCleaner} CustomerDetails={filteredData} />
          </Dialog>
        )} */}
      </div>
    </>
  )
}
export default AreaWiseAvailabilityRoute
