// 

import moment from 'moment'
import React from 'react'

const MomentDate = (startOrEndDay: number) => {
    return moment().add(startOrEndDay, "days").format("YYYY-MM-DD")
}

export default MomentDate














// const today = new Date();
//   let firstDay = new Date(today.setDate(today.getDate() - today.getDay() + 1)).toString();
//   let lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 7)).toString();
//   let FirstDate: any = MonthString.indexOf(firstDay.split(" ")[1])
//   let lastDate: any = MonthString.indexOf(lastDay.split(" ")[1])
//   let start = firstDay.split(" ")[3] + "-" + MonthNumber[FirstDate] + "-" + firstDay.split(" ")[2]
//   let last = lastDay.split(" ")[3] + "-" + MonthNumber[lastDate] + "-" + lastDay.split(" ")[2]