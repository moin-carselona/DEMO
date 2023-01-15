/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from "../_metronic/layout/core"

import { CardsView } from './Components/CardsView'
const Dashboard: FC = () => {
    
    return (
        <>
            <div className='row gy-5 g-xl-8'>
                <div className='col-xl-12'>
                    {/* <CardsView className='card-xl-stretch mb-xl-8'  headertitle={"React JS Interview ( React ) "} SubTitle={"Questions & Answers"}  /> */}
                </div>
                <div className='col-xl-12'>
                    <CardsView className='card-xl-stretch mb-xl-8' />
                </div>
                <div className='col-xl-12'>
                    <CardsView className='card-xl-stretch mb-xl-8' />
                </div>
            </div>
        </>
    )
}


const DashboardWrapper: FC = () => {
    const intl = useIntl()
    return (
        <>
            <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
            <Dashboard />
        </>
    )
}
export default DashboardWrapper
