
const initState = {
    ActiveStats: [],
    CurrentRefs : "",
    listDrawer : "",
    listDrawerids:0,
    jobdetailsid:0,
    addBank:{},
} 
export const ActiveStatsReducer = (state = initState, { type, payload }: any) => {
    // console.log('payload', payload);
    switch (type) {
        case "ACTIVE_STATE":
            return { ...state, ActiveStats: payload }
        case "REFS":
            return { ...state, CurrentRefs: payload }
        case "LISTDRAWER":
            return { ...state, listDrawer: payload }
        case "LISTDRAWERIDS":
            return { ...state, listDrawerids: payload }
        case "JOBDETAILS":
            return { ...state, jobdetailsid: payload }
        case "ADD-BANK":
            return { ...state, addBank: payload }
        
        default:
            return state
    }
}


