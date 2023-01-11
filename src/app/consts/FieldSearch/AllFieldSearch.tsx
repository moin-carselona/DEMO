export const AllFielSearch = ((SelectData: any, Search: string) => {
    const updatedData = SelectData.filter((obj: any) => Object.values(obj).some((val: any) => {
        if (typeof (val) == typeof ("str") && val !== "") {
            if (val.toLowerCase().includes(Search.toLowerCase())) {
                return obj
            }
        }
        if (typeof (val) == typeof (6)) {
            let newStr = val.toString()
            if (typeof (newStr) == typeof ("str") && newStr !== "") {
                if (newStr.includes(Search)) {
                    return obj
                }
            }
        }
    }))
    return updatedData
}
)
// if(nested then use below data else part )
   //  else {
    //   return Object.values(val).some((val1: any) => {
    //     if (val1 !== null) {
    //       return val1.toString().includes(Search)
    //     }
    //   })
    // }
