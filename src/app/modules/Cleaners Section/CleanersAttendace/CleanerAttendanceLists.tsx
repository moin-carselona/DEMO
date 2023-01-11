import moment from 'moment';
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
import { LocalBaseURL } from '../../../../BaseURLmanagement';
import { AllFielSearch } from '../../../consts/FieldSearch/AllFieldSearch';
import { cleanerDataApi, inputEventChanger, cleanerAttendaceInterfaces, payloadsInterfaces } from '../../../consts/Inerfaces4az/CleanerAttendance';
import { getCleanerAttendance } from '../../../consts/Request2Server/_CleanerAttendanceRequest';
import { AllTicketsAPI, allTicketsFilterAPI, } from './API';
import { columns } from './Columns';
import DialogBox from './DialogBox/DialogBox';
import DateSearchBOX from './InputBoxes/DateSearchBOX';
import Filteration from './InputBoxes/Filteration';
// import "../../../styles.css"
const CleanerAttendanceLists = () => {
  LocalBaseURL()
  const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
  const [pending, setPending] = React.useState(true);
  const [PopUpPostFormOpen, setPopUpPostFormOpen] = useState(false)
  const [filterData, setfilterData] = useState<cleanerAttendaceInterfaces[]>([])
  const [CleanerAttendanceData, setCleanerAttendanceData] = React.useState<cleanerAttendaceInterfaces[]>([])
  const [CleanerfilterData, setCleanerfilterData] = React.useState<cleanerDataApi[]>([])
  // const [CustomerfilterData, setCustomerfilterData] = React.useState<CustomerDataApi[]>([])
  // const [SelectedFilterTicketCateogryData, setSelectedFilterTicketCateogryData] = React.useState<any>([])
  // const [TicketCategoryData, setTicketCategoryData] = React.useState<ticketCategoryDataApi[]>([])
  // const [ticektSubCategoryData, setticektSubCategoryData] = React.useState<TicektSubCategoryDataApi[]>([])
  // const [TicketSources, setTicketSources] = React.useState<TicektSourcesDataApi[]>([])
  // const [AdminListData, setAdminListData] = React.useState<AdminListDataApi[]>([])
  // const [SupervisorsListData, setSupervisorsListData] = React.useState<SuperVisorDataApi[]>([])
  const [payloads, setPayloads] = React.useState<payloadsInterfaces>(
    {
      attendencedatefrom: moment().add(0, "days").format("YYYY-MM-DD"),
      attendencedateto: moment().add(7, "days").format("YYYY-MM-DD"),
      cleanerid: 0,
      customerid: null,
      ticketidcategory: null,
      supervisor: null,
      searchs: "",
    }
  )
  // console.log('payloads', payloads);
  const handleChangeInput = (event: inputEventChanger, name: string) => {
    if (event === null) {
      setPayloads({ ...payloads, [name]: name === "searchs" ? "" : 0 })
    }
    else {
      setPayloads({ ...payloads, [name]: name === "searchs" ? event.value : +event.value })
    }
  }
  // fetch all data and also search data by cleaner or cusomer name  ................................................
  useEffect(() => {
    setPending(true)
    async function invokedFilterAPI() {
      // const getSupervisorListData = await getSupervisorList(localKeyCheck)
      // setSupervisorsListData(getSupervisorListData?.data?.data)
      const { data } = await allTicketsFilterAPI(localKeyCheck)
      setCleanerfilterData(data.cleanerdata)
    }
    invokedFilterAPI()
    async function invoked() {
      const { data } = await getCleanerAttendance(localKeyCheck, payloads?.attendencedatefrom, 0, setPending)
      // console.log('data', data);
      setCleanerAttendanceData(data.data)
      setfilterData(data.data)
      setPending(false)
      data?.data && setPending(false)
      data?.status != 200 && setPending(false)
      data?.data?.length == 0 && data?.status == 200 && setPending(false)
    }
    invoked()
  }, [])
  // to search data here 
  React.useEffect(() => {
    const updatedData = AllFielSearch(CleanerAttendanceData, payloads?.searchs)
    setfilterData(updatedData)
  }, [payloads?.searchs])
  // to open add service form  
  const handlecleanerAttendanceform = () => {
    setPopUpPostFormOpen(!PopUpPostFormOpen)
  }
  // search here .............  
  const searchOnclick = async () => {
    setPending(true)
    const { data } = await getCleanerAttendance(localKeyCheck, payloads?.attendencedatefrom, payloads.cleanerid, setPending)
    setCleanerAttendanceData(data.data)
    setfilterData(data.data)
    setPending(false)
    data?.data && setPending(false)
    data?.status != 200 && setPending(false)
    data?.data?.length == 0 && data?.status == 200 && setPending(false)
  }
  //  to fetch data on first time rendering 
  return (
    <div>
      {
        <DataTable
          columns={columns} // to set how many column will be shown
          data={filterData}   // api data provided to render
          // selectableRows   // it just like check box
          progressPending={pending}
          pagination   // to get pagination 
          fixedHeader   // to fix navbar 
          fixedHeaderScrollHeight='auto'   // to manage scrolling
          selectableRowsHighlight // decide what wil be row height
          highlightOnHover   // to see current position of cursur it will higlight that row
          subHeader  // to use input enable to work
          subHeaderComponent={
            <>
              <div className='w-100' style={{ width: "100%" }}>
                <DateSearchBOX
                  payloads={payloads} handleChangeInput={handleChangeInput} searchOnclick={searchOnclick} handlecleanerAttendanceform={handlecleanerAttendanceform} CleanerfilterData={CleanerfilterData}
                />
              </div>
              {/* <Filteration
                handleChangeInput={handleChangeInput}
                CleanerfilterData={CleanerfilterData}
                CustomerfilterData={CustomerfilterData}
                SelectedFilterTicketCateogryData={SelectedFilterTicketCateogryData}
                SupervisorsListData={SupervisorsListData}
              /> */}
            </>
          }
        />
      }
      {PopUpPostFormOpen && <DialogBox handlecleanerAttendanceform={handlecleanerAttendanceform} PopUpPostFormOpen={PopUpPostFormOpen} ParentData={null} reference={"ticketParent"} />}
    </div>
  )
}
export default CleanerAttendanceLists
// just call this to route file
