import React from 'react'
import SingleSelectSearchDetails from '../../../../consts/Select/SingleSelectSearchDetails'
const DateSearchBOX = ({ payloads, handleChangeInput, searchOnclick, handlecleanerAttendanceform, CleanerfilterData }: any) => {
    const cleanerListDatas = CleanerfilterData && CleanerfilterData?.filter((individual: any) => {
        if (individual?.first_name == null) return (individual.first_name = individual.phone, individual.last_name = individual.phone);
        return individual
    })
    return (
        <div className=' d-flex align-items-center justify-content-between me-3 ' style={{ width: "100%" }} >
            <div className='d-flex align-items-center justify-content-start w-100 me-10 '>
                <input
                    type='text'
                    data-kt-user-table-filter='search'
                    className='form-control form-control-solid w-25 me-2'
                    style={{ height: "38px", width: "300px" }}
                    placeholder='Search'
                    onChange={(event: any) => handleChangeInput(event.target, "searchs")}
                />
                {
                    <SingleSelectSearchDetails
                        handleChangeInputData={handleChangeInput}
                        HeaderTitle="Select cleaner"
                        SelectData={cleanerListDatas}
                        DynamicKey={"first_name"}
                        DynamicKey2={"last_name"}
                        DynamicKey3={"phone"}
                        id={"id"}
                        name="cleanerid"
                    ></SingleSelectSearchDetails>
                }
                <input
                    type='date'
                    style={{ height: "38px" }}
                    value={payloads.attendencedatefrom}
                    name="attendencedatefrom"
                    onChange={(event: any) => handleChangeInput(event.target, "attendencedatefrom")}
                    className='w-25  height-100 form-control me-2 align-start'
                />
                <button className=" ml-2 btn btn-sm btn-primary w-25" onClick={searchOnclick}>Search</button>
            </div>
            <button className="btn btn-sm btn-primary w-25" onClick={(row) => handlecleanerAttendanceform()}>Add  Attendance</button>
        </div>
    )
}
export default DateSearchBOX