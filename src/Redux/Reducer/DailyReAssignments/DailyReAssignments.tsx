const initState = {
    DailyReAssign: null,
    DailyReAssigDateChange: null,
    areawise: {},
    trackIDAssigning: "",
    trackIDAssigningCanceled: "",
    refreshbankAccount:0,

}
export const DailyReAssignments = (state = initState, { type, payload }: any) => {
    console.log('payload', payload);
    // console.log('type', type);
    // console.log('payload', payload);
    // console.log('payload', payload);
    switch (type) {
        case "DAILY-RE-ASSIGN":
            return { ...state, DailyReAssign: payload }
        case "DAILY-RE-ASSIGN-DATE-CHANGE":
            return { ...state, DailyReAssigDateChange: payload }
        case "GOOGLEATUOCOMPLETEAREAWISE":
            return { ...state, areawise: payload }
        case "TRACK_ASSSIGNING":
            return { ...state, trackIDAssigning: payload }
        case "TRACK_ASSSIGNING_CANCELED":
            return { ...state, trackIDAssigningCanceled: payload }
        case "REFRESH-BANK":
            return { ...state, refreshbankAccount: payload }
        default:
            return state
    }
}


