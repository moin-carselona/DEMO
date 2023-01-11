import React from 'react'
import { LocalBaseURL } from '../../../BaseURLmanagement'
import ServerSideDataTable from '../../consts/ServerSideTable/ServerSideDataTable'
import { GetAllRatings } from './API'
import { USERS_COLUMNS } from './RatingColumns'

const RatingIndex = () => {
    LocalBaseURL()
    const localKeyCheck = JSON.parse(localStorage.getItem('API') || '0')
    
  return (
    <div>
        <div className=''>
            <h2>Ratings</h2>
        </div>
        
        <ServerSideDataTable column={USERS_COLUMNS} apiName ={GetAllRatings(localKeyCheck, null)}></ServerSideDataTable>
    </div>
  )
}

export default RatingIndex