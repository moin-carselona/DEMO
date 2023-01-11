const FilterationLogic = (SelectedData: any, cleanerid: any) => {
    let filterdataCleanerStats = SelectedData?.filter((filter: any) => filter?.cleaner_details?.id == +cleanerid)
    let OriginalData = SelectedData
    for (let i = 0; i < OriginalData.length; i++) {
        if (OriginalData[i].cleaner_details?.id !== +cleanerid) {
            filterdataCleanerStats.push(OriginalData[i])
        }
    }

    return filterdataCleanerStats
}
export default FilterationLogic
