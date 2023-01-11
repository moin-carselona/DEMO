import React from 'react'
// import { DataRow } from '../Interfaces'
export interface topHeaders {
    Search: any
    setSearch: any
    handleCleateAccount: any
}
const TopHeader: React.FC<topHeaders> = ({ Search, setSearch, handleCleateAccount }) => {
    return (
        <div className='d-flex align-items-center justify-content-between mb-3  '>
            {/* <input
                type='text'
                placeholder='Search Here'
                value={Search}
                onChange={(e: any) => setSearch(e.target.value)}
                className=' form-control me-2 align-start'
            /> */}
            <button className='btn btn-sm btn-primary' style={{height:"43px", width:"200px"}}  onClick={handleCleateAccount}>
                Add Account
            </button>
            {/* </div> */}
        </div>
    )
}
export default TopHeader
