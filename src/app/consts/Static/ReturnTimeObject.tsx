const ReturnTimeObject = (SelectedData: any) => {
    const timeOBJ = SelectedData?.timeslot == "2" ? { name: "06AM-07AM", id: "2" }
        : SelectedData?.timeslot == "3" ? { name: "07AM-08AM", id: "3" }
            : SelectedData?.timeslot == "4" ? { name: "08AM-09AM", id: "4" }
                : SelectedData?.timeslot == "5" ? { name: "09AM-10AM", id: "5" }
                    : SelectedData?.timeslot == "6" ? { name: "10AM-11AM", id: "6" }
                        : SelectedData?.timeslot == "7" ? { name: "11AM-12AM", id: "7" }
                            : SelectedData?.timeslot == "8" ? { name: "12PM-01PM", id: "8" }
                                : SelectedData?.timeslot == "9" ? { name: "01PM-02PM", id: "9" }
                                    : SelectedData?.timeslot == "10" ? { name: "02PM-03PM", id: "10" }
                                        : SelectedData?.timeslot == "11" ? { name: "03PM-04PM", id: "11" }
                                            : SelectedData?.timeslot == "12" ? { name: "04PM-05PM", id: "12" }
                                                : SelectedData?.timeslot == "13" ? { name: "05PM-06PM", id: "13" }
                                                    : SelectedData?.timeslot == "14" ? { name: "06PM-07PM", id: "14" }
                                                        : { name: "Not Availble", id: null }
    return timeOBJ
}
export default ReturnTimeObject