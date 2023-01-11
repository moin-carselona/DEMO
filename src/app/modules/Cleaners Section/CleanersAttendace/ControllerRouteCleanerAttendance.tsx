import React, { FC } from 'react'
import { KTCardBody } from '../../../../_metronic/helpers'
import CleanerAttendanceLists from './CleanerAttendanceLists'
const ControllerRouteCleanerAttendance: FC = () => {
    return (
        <KTCardBody className='card py-4'>
            <CleanerAttendanceLists></CleanerAttendanceLists>
        </KTCardBody>
    )
}
export default ControllerRouteCleanerAttendance
