/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { MenuComponent } from '../../../../_metronic/assets/ts/components'
import { ID, KTSVG } from '../../../../_metronic/helpers'
import Dialogbox from '../../../consts/Dialogbox/Dialogbox'
type Props = {
  cleaneridSingle: ID
  filteredData: any
  referece: string
}
export const DropdownAttendanceStatus: FC<Props> = ({ referece, cleaneridSingle, filteredData }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [tagsData, setTagsData] = useState<any>({})
  const [isOpenedModel, setisOpenedModel] = useState<boolean>(false)
  const [refs, setrefs] = useState<any>("")
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])
  const handleReAssign = (cleaneridSingle: any) => {
    navigate(`/champ-permanent-replacement/active_cleaner_champ/${cleaneridSingle}`)
    const state = {
      filteredData,
      cleaneridSingle,
      referece: "cleaner"
    }
  }
  const handleReAssignTemporay = (cleaneridSingle: any) => {
    // navigate('/champ-permanent-replacement', {
    //   state: {
    //     filteredData
    //   }
    // })
    navigate(`/daily/job/assign/oldjob/${cleaneridSingle}`)
  }
  const handlNewAddTag = (singleData: any) => {
    setTagsData(singleData)
    setisOpenedModel(!isOpenedModel)
    setrefs("ActiveCleanerDropDownAddNewTag")
  }
  const handlAssignRemoveSupervisor = (singleData: any) => {
    setTagsData(singleData)
    setisOpenedModel(!isOpenedModel)
    setrefs("Assig-remove-supervisor")
  }
  const handlAddBankAccount = (singleData: any) => {
    dispatch({ type: "LISTDRAWER", payload: "AddBankAccount" })
    dispatch({ type: "ADD-BANK", payload: singleData })
  }
  const handleCloseModel = () => {
    setisOpenedModel(false)
  }
  const ViewProfileCleaner = (cleaneridSingle: any) => {
  }
  const Deactivate = (cleaneridSingle: any) => {
  }
  const handleUpdateStatus = (cleaneridSingle: any) => {
  }
  const AsignChangeSlab = (cleaneridSingle: any, drawerRefs: any) => {
    dispatch({ type: "LISTDRAWER", payload: drawerRefs })
    dispatch({ type: "LISTDRAWERIDS", payload: cleaneridSingle })
  }
  const AssignUpdateAlowance = (cleaneridSingle: any, drawerRefs: any) => {
    dispatch({ type: "LISTDRAWER", payload: drawerRefs })
    dispatch({ type: "LISTDRAWERIDS", payload: cleaneridSingle })
  }
  const GiveRewards = (cleaneridSingle: any, drawerRefs: any) => {
    dispatch({ type: "LISTDRAWER", payload: drawerRefs })
    dispatch({ type: "LISTDRAWERIDS", payload: cleaneridSingle })
  }
  const ViewLoans = (cleaneridSingle: any, drawerRefs: any) => {
    dispatch({ type: "LISTDRAWER", payload: drawerRefs })
    dispatch({ type: "LISTDRAWERIDS", payload: cleaneridSingle })
  }
  const AssignSuperVisor = (cleaneridSingle: any, drawerRefs: any) => {
    dispatch({ type: "LISTDRAWER", payload: drawerRefs })
    dispatch({ type: "LISTDRAWERIDS", payload: cleaneridSingle })
  }
  return (
    <>
      <button
        className='btn btn-light btn-active-light-primary btn-sm '
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        Actions
        <KTSVG path='/media/icons/duotune/arrows/arr072.svg' className='svg-icon-5 m-0' />
      </button>
      <div
        className='menu DropdownContainerwidth menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
        data-kt-menu='true'
        style={{
          width: "500px",
          zIndex: '105',
          position: 'fixed',
          inset: '0px 0px auto auto',
          margin: '0px',
          transform: 'translate(-59px, 440px)',
        }}
      >
        <div className='menu-item px-3'>
          <a
            href={`/champ-permanent-replacement/active_cleaner_champ/${cleaneridSingle}`}
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            // target="_blank"
            onClick={() => handleReAssign(cleaneridSingle)}
          >
            Re-Assign/Permanent
          </a>
        </div>
        <div className='menu-item px-3'>
          <a
            href={`/daily/job/assign/oldjob/${cleaneridSingle}`}
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            // target="_blank"
            onClick={() => handleReAssignTemporay(cleaneridSingle)}
          >
            Re-Assign/Temporary
          </a>
        </div>
        <div className='menu-item px-3'>
          <a
            // href={`/daily/job/assign/oldjob/${cleaneridSingle}`}
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            // target="_blank"
            onClick={() => handlAssignRemoveSupervisor(filteredData)}
          >
            Assign/Remove-Supervisor
          </a>
        </div>
        <div className='menu-item px-3'>
          <a
            // href={`/daily/job/assign/oldjob/${cleaneridSingle}`}
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            // target="_blank"
            onClick={() => handlNewAddTag(filteredData)}
          >
            Add New Tags
          </a>
        </div>
        <div className='menu-item px-3'>
          <a
            // href={`/daily/job/assign/oldjob/${cleaneridSingle}`}
            className='menu-link  px-3'
            id="kt_activities2_toggle2"
            data-kt-users-table-filter='delete_row'
            // target="_blank"
            onClick={() => handlAddBankAccount(filteredData)}
          >
            Add Bank Account
          </a>
        </div>
        <div className='menu-item px-3' >
          <a
            // href='_blank'
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => ViewProfileCleaner(cleaneridSingle)}
          >
            View Profile
          </a>
        </div>
        <div className='menu-item px-3'>
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => Deactivate(cleaneridSingle)}
          >
            Deactivate
          </a>
        </div>
        <div className='menu-item px-3'>
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => handleUpdateStatus(cleaneridSingle)}
          >
            Make Full Timer
          </a>
        </div>
        <div className='menu-item px-3'>
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
          >
            Availibility
          </a>
        </div>
        <div className='menu-item px-3' id="kt_activities2_toggle2">
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => AsignChangeSlab(cleaneridSingle, "AsignChange")}
          >
            Assign / Change Slab
          </a>
        </div>
        <div className='menu-item px-3' id="kt_activities2_toggle2">
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => AssignUpdateAlowance(cleaneridSingle, "AllownceAssign")}
          >
            Assign / Upddate Allowance
          </a>
        </div>
        <div className='menu-item px-3' id='kt_activities2_toggle2'>
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => GiveRewards(cleaneridSingle, "giveRewards")}
          >
            Give Rewards
          </a>
        </div>
        <div className='menu-item px-3' id='kt_activities2_toggle2' >
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => ViewLoans(cleaneridSingle, "viewLoans")}
          >
            View Loans
          </a>
        </div>
        <div className='menu-item px-3' id="kt_activities2_toggle2">
          <a
            className='menu-link  px-3'
            data-kt-users-table-filter='delete_row'
            onClick={() => AssignSuperVisor(cleaneridSingle, "assignSuper")}
          >
            Assign SuperVisor
          </a>
        </div>
      </div>
      {isOpenedModel && <Dialogbox handleCloseForm={handleCloseModel} PopUpPostFormOpen={isOpenedModel} invokedApi={null} ParentData={
        tagsData 
      } reference={refs} />}
    </>
  )
}
