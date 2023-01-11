import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { columns } from './Components/Columns'
import { customStyles } from './Components/CustomCss'
import { useSelector } from 'react-redux'
import TopHeader from './Components/TopHeader'
import { getcleanerbankdetail } from '../API'
import Dialogbox from '../../../consts/Dialogbox/Dialogbox'
import { BankAccountInterface } from '../interfaces'
const AddAccountTable = () => {
  const cleanerDetails = useSelector((store: any) => store?.ActiveStatsReducer?.addBank)
  const refreshAfterAssigning = useSelector((store: any) => store.DailyReAssignments.refreshbankAccount)
  console.log('refreshAfterAssigning', refreshAfterAssigning);
  // console.log('refreshAfterAssigning', refreshAfterAssigning);
  const localKeyCheck = JSON.parse(localStorage.getItem('API') || '0')
  const [Search, setSearch] = useState<any>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const [MainData, SetMainData] = useState([])
  const [isAccountModelOpen, setisAccountModelOpen] = useState<boolean>(false)
  const [filterData, setfilterData] = useState([])
  React.useEffect(() => {
    const updatedData = MainData.filter((data: any) => {
      return data.name.toLowerCase().match(Search.toLowerCase())
    })
    setfilterData(updatedData)
  }, [Search])
  async function invokedApi() {
    const result = await getcleanerbankdetail(localKeyCheck, cleanerDetails?.id, setLoading)
    SetMainData(result?.data?.result)
    setfilterData(result?.data?.result)
    return result?.data?.result as BankAccountInterface[];
  }
  React.useEffect(() => {
    setLoading(true)
    invokedApi()
  }, [cleanerDetails?.id, refreshAfterAssigning])
  const handleCleateAccount = () => {
    setisAccountModelOpen(!isAccountModelOpen)
  }
  const handlcloseModel = () => {
    setisAccountModelOpen(false)
  }
  return (
    <div className='' style={{ width: "850px", margin: "auto" }}>
      {isLoading && filterData.length != 0 ? (
        <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
          <div className='spinner-border mr-15' role='status'></div>
          <h4 className='fw-bold'>Loading...</h4>
        </div>
      ) : (
        <DataTable
          customStyles={customStyles}
          columns={columns} // to set how many column will be shown
          data={filterData} // api data provided to render
          pagination // to get pagination
          fixedHeader // to fix navbar
          fixedHeaderScrollHeight='auto' // to manage scrolling
          selectableRowsHighlight // decide what wil be row height
          highlightOnHover // to see current position of cursur it will higlight that row
          // actions={
          //   <>
          //     <TopHeader setSearch={setSearch} Search={Search} handleCleateAccount={handleCleateAccount}></TopHeader>
          //   </>
          // }
          subHeader // to use input enable to work
          subHeaderComponent={
            <>
              <TopHeader setSearch={setSearch} Search={Search} handleCleateAccount={handleCleateAccount} ></TopHeader>
            </>
          }
        />
      )}
      {isAccountModelOpen && <Dialogbox handleCloseForm={handlcloseModel} PopUpPostFormOpen={isAccountModelOpen} ParentData={cleanerDetails} invokedApi={invokedApi} reference={"AddBankAccount"} />}
    </div>
  )
}
export default AddAccountTable
// just call this to route file
