import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { KTSVG } from '../_metronic/helpers'
import ActiveStatsData from '../Dashboard/components/ActiveStatsData/ActiveStatsData'
const ListDrawer: FC = () => {
    const drawerRefrence = useSelector((store: any) => store?.ActiveStatsReducer.listDrawer)
    return (
        <div
            id='kt_activities2'
            className='bg-body'
            data-kt-drawer='true'
            data-kt-drawer-name='activities'
            data-kt-drawer-activate='true'
            data-kt-drawer-overlay='true'
            data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
            data-kt-drawer-direction='end'
            data-kt-drawer-toggle='#kt_activities2_toggle2'
            data-kt-drawer-close='#kt_activities_close'
        >
            <div className='card shadow-none rounded-0'>
                <div className='card-header' id='kt_activities_header'>
                    <h3 className='card-title fw-bolder text-dark'>
                        {drawerRefrence === "AsignChange" ? "Assign/Change Slabs" : drawerRefrence == "activeStats" ? "Active Stats" : drawerRefrence == "AllownceAssign" ? "Assign Allowance" : drawerRefrence == "giveRewards" ? "Give Rewards" : drawerRefrence == "viewLoans" ? "View Loans" : drawerRefrence == "assignSuper" ? "Assign Super Visor" : drawerRefrence == "AddBankAccount" ? "Add Bank Account" : ""
                        }
                    </h3>
                    <div className='card-toolbar'>
                        <button
                            type='button'
                            className='btn btn-sm btn-icon btn-active-light-primary me-n5'
                            id='kt_activities_close'
                        >
                            <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
                        </button>
                    </div>
                </div>
                <div className='card-body position-relative' id='kt_activities_body'>
                    {
                        drawerRefrence == "activeStats" ? <ActiveStatsData></ActiveStatsData> : ""
                    }
                </div>
            </div>
        </div>
    )
}
export { ListDrawer }
