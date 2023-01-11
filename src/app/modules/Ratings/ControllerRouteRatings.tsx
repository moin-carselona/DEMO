import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { KTCardBody } from '../../../_metronic/helpers'
import { USERS_COLUMNS } from "./RatingColumns"
import ServerSideDataTable from '../../consts/ServerSideTable/ServerSideDataTable'
import { GetAllRatings } from './API'
import { LocalBaseURL } from '../../../BaseURLmanagement'
import RatingIndex from './RatingIndex'

const ControllerRouteRatings: FC = () => {
   
   const [isLoading, setIsloading] = useState(false)
    if (isLoading) {
        return (
            <div className='d-flex align-items-center justify-content-center h-75 flex-column'>
                <div className='spinner-border mr-15' role='status'></div>
                <h4 className='fw-bold'>Loading...</h4>
            </div>
        )
    }
    return (
        <KTCardBody className='card py-4'>
            <RatingIndex />
        </KTCardBody>
    )
}
export default ControllerRouteRatings