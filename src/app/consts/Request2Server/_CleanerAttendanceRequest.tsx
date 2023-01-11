import axios from "axios"
import { MAIN_ADMIN_BASE_API_URL,MAIN_API_BASE_API_URL,TEST_ADMIN_BASE_API_URL, TEST_API_BASE_API_URL } from "../../../apiGlobally"
  export function getCleanerAttendance(localKeyCheck: string,date:string, cleanerid:number | string | null, setloading2: any) {
    const result = axios.get(`${localKeyCheck ? MAIN_API_BASE_API_URL : TEST_API_BASE_API_URL}/admin/getCleanerAttendance?date=${date}&cleanerid=${cleanerid?cleanerid:0}`, ).then((res) => {
        setloading2(false)
        return res
    }).catch((err) => {
        setloading2(false)
        return err
    })
    return result
}