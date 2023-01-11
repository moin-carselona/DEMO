import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { LocalBaseURL } from '../../../BaseURLmanagement'
import { AllFielSearch } from '../../consts/FieldSearch/AllFieldSearch'
import { GetAllActiveCleaner, GetAllActiveCleanerSearch, GetAllSuperVisorData } from './API'
import { columns } from './Columns'
import { customStyles } from './CustomCss'
import './styles.css'
const ReactDataTable = () => {
  LocalBaseURL()
  const [AllActiveCleaner, setAllActiveCleaner] = useState<any>([])
  const [AllSupervisroLis, SetAllSupervisroList] = useState<any>([])
  const [Search, setSearch] = useState<any>('')
  console.log('Search', Search);
  const [isLoading, setLoading] = useState<boolean>(false)
  const [pending, setPending] = useState<boolean>(false)
  const [filterData, setfilterData] = useState<any>([])
  const localKeyCheck = JSON.parse(localStorage.getItem('API') || '0')
  const [payloads, setPayloads] = useState<any>({
    supervisorid: "",
    type: ""
  })
  console.log('payloads', payloads);
  React.useEffect(() => {
    let updatedData = AllFielSearch(AllActiveCleaner, Search)
    setfilterData(updatedData)
  }, [Search])
  useEffect(() => {
    setLoading(true)
    async function InvokedRendered() {
      const { data } = await GetAllActiveCleaner(localKeyCheck)
      setAllActiveCleaner(data.data)
      setfilterData(data.data)
      const supervisor = await GetAllSuperVisorData(localKeyCheck)
      SetAllSupervisroList(supervisor?.data?.data)
      filterData && setLoading(false)
    }
    InvokedRendered()
  }, [])
  const handleSearch = async () => {
    setPending(true)
    const { data } = await GetAllActiveCleanerSearch(localKeyCheck, payloads, setPending)
    setAllActiveCleaner(data.data)
    setfilterData(data.data)
  }
  return (
    <div>
      {isLoading ? (
        <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
          <div className='spinner-border mr-15' role='status'></div>
          <h4 className='fw-bold'>Loading...</h4>
        </div>
      ) : (
        <DataTable
          title='Active Cleaner'
          // sortIcon={<SortIcon />}
          progressPending={pending}
          customStyles={customStyles}
          columns={columns} // to set how many column will be shown
          data={filterData} // api data provided to render
          // selectableRows   // it just like check box
          pagination // to get pagination
          fixedHeader // to fix navbar
          fixedHeaderScrollHeight='auto' // to manage scrolling
          selectableRowsHighlight // decide what wil be row height
          highlightOnHover // to see current position of cursur it will higlight that row
          // actions={
          //   <>
          //     <button className='btn btn-sm btn-primary' onClick={(row) => handleAddCleanerPopUp()}>
          //       Add Cleaner
          //     </button>
          //   </>
          // }
          subHeader // to use input enable to work
          subHeaderComponent={
            <>
              <div className='w-100 d-flex justify-content-between mb-3 '>
                <div className='d-flex align-items-start justify-content-start '>
                  <input
                    type='text'
                    placeholder='Search Here'
                    value={Search}
                    onChange={(e: any) => setSearch(e.target.value)}
                    className='w-100 form-control me-2 align-start'
                  />
                </div>
                <div className='d-flex align-items-center justify-content-end '>
                  <select
                    className='form-select form-select-solid me-2'
                    data-kt-select2='true'
                    data-placeholder='Select option'
                    data-allow-clear='true'
                    name='supervisorid'
                  onChange={(event)=>setPayloads(
                    {...payloads, [event.target.name] : event.target.value}
                  )}
                  >
                    <option>Select Supervisor</option>
                    {AllSupervisroLis?.map((item: any) => {
                      return (
                        <option value={item.id} key={item.id}>
                          {item.first_name}  {item.last_name}
                        </option>
                      )
                    })}
                  </select>
                  <select
                    className='form-select form-select-solid me-2'
                    data-kt-select2='true'
                    data-placeholder='Select option'
                    data-allow-clear='true'
                    name='type'
                    onChange={(event)=>setPayloads(
                      {...payloads, [event.target.name] : event.target.value}
                    )}
                  >
                    <option>Select Cleaner Type</option>
                    {[
                      { id: 0, name: 'Part Time Cleaner' },
                      { id: 1, name: 'Full Time Cleaner' },
                    ].map((item: any) => {
                      return (
                        <option value={item.id} key={item.id}>
                          {item.name}
                        </option>
                      )
                    })}
                  </select>
                  <a className="btn btn-sm btn-primary  cursor-pointer"
                    id="kt_toolbar_primary_button"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_create_app"
                    onClick={handleSearch}
                  >
                    Search
                  </a>
                </div>
              </div>
            </>
          }
        />
      )}
    </div>
  )
}
export default ReactDataTable
// just call this to route file
