import React from 'react'
const ReturnDay = ({ SelectedData }: any) => {
    return (
        <>
            {SelectedData?.fullcleaningday == "1" ? "Sunday" :
                SelectedData?.fullcleaningday == "1" ? "Sunday" :
                    SelectedData?.fullcleaningday == "2" ? "Monday" :
                        SelectedData?.fullcleaningday == "3" ? "Tuesday" :
                            SelectedData?.fullcleaningday == "4" ? "Wednesday" :
                                SelectedData?.fullcleaningday == "5" ? "Friday" :
                                    SelectedData?.fullcleaningday == "6" ? "Saturday" :
                                        "Not Availble"}
        </>
    )
}
export default ReturnDay