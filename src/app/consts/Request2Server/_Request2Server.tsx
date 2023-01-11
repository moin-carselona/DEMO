import axios from "axios"
import { TEST_ADMIN_BASE_API_URL, MAIN_ADMIN_BASE_API_URL } from "../../../apiGlobally"


////// general api for reuse -------------------------------------- common api ----------------------
export const gettimeslotsData: any = async (localKeyCheck: string) => {
    try {
        const result = axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/gettimeslots`)
        return result
    } catch (error) {
        console.log('error gettimeslots : ', error)
    }
}
export const getCleanerListDataAPI: any = async (localKeyCheck: string) => {
    try {
        const result = axios.get(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getCleanerList`)
        return result
    } catch (error) {
        console.log('error getCleanerList : ', error)
    }
}





// AddNewTags  ----------------------------------------------createCleanerTag---------------------------------------
export function createCleanerTag(localKeyCheck: string, payloads: any, refs: string, id: number, setloading: any) {
    const result = axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/createCleanerTag`, { tagname: payloads.join(","), cleanerid: id, tagtype: refs }).then((res) => {
        // setloading(false)
        return res
    }).catch((err) => {
        // setloading(false)
        return err
    })
    return result
}
export function assignMultipleCleanersWithSupervisior(localKeyCheck: string, payloads: any) {
    const result = axios.post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/assignMultipleCleanersWithSupervisior`, payloads).then((res) => {
        // setloading(false)
        return res
    }).catch((err) => {
        // setloading(false)
        return err
    })
    return result
}
// AREA WISE CLEANER API----------------------getAvalabilitybyAddress-------------------------------
export const getAvalabilitybyAddress: any = async (localKeyCheck: string, payloads: any, setLoading: any) => {
    try {
        const result = await axios
            .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybyAddress`, payloads)
        setLoading(false)
        return result
    } catch (error) {
        setLoading(false)
        console.log('error getAvalabilitybySubscription : ', error)
        return []
    }
}




// CleanerAvailibilityRoute API---------------getAvalabilitybySubscription-------------------------------
export const getAvalabilitybySubscription: any = async (localKeyCheck: string, payloads: any, setLoading: any) => {
    try {
        const result = await axios
            .post(`${localKeyCheck ? MAIN_ADMIN_BASE_API_URL : TEST_ADMIN_BASE_API_URL}/admin/getAvalabilitybySubscription`, payloads)
        setLoading(false)
        return result
    } catch (error) {
        setLoading(false)
        console.log('error getAvalabilitybySubscription : ', error)
        return []
    }
}