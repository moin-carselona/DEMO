import React from 'react'
const ShowTiming = ({SelectedData}: any) => {
    const timesstmp = SelectedData?.timeslot == "2" ? "06AM-07AM"
        : SelectedData?.timeslot == "3" ? "07AM-08AM"
            : SelectedData?.timeslot == "4" ? "08AM-09AM"
                : SelectedData?.timeslot == "5" ? "09AM-109AM"
                    : SelectedData?.timeslot == "6" ? "10AM-11AM"
                        : SelectedData?.timeslot == "7" ? "11AM-12AM"
                            : SelectedData?.timeslot == "7" ? "12PM-01PM"
                                : SelectedData?.timeslot == "8" ? "01PM-02PM"
                                    : SelectedData?.timeslot == "9" ? "02PM-03PM"
                                        : SelectedData?.timeslot == "2" ? "03PM-04PM"
                                            : SelectedData?.timeslot == "10" ? "04PM-05PM"
                                                : SelectedData?.timeslot == "11" ? "05PM-06PM"
                                                    : SelectedData?.timeslot == "12" ? "06PM-07PM"
                                                        : " Not Availble"

                                                        
    return (
       <>
       {timesstmp}
       </>
    )
}
export default ShowTiming