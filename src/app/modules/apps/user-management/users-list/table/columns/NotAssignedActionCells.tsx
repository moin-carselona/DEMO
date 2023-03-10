/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { MenuComponent } from '../../../../../../../_metronic/assets/ts/components'
import { ID, KTSVG, QUERIES } from '../../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { deleteUser } from '../../core/_requests'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import React from 'react'
import { useCallback } from 'react'
import { Dialog } from '@mui/material'
import { useDispatch } from 'react-redux'
type Props = {
  id: ID
  data: any
  referece: string
}
const NotAssignedActionCells: FC<Props> = ({ referece, id, data }) => {
  let filterCleanerData = data.filter((item: any) => item.id === id)[0]
  const navigate = useNavigate();
// React.useEffect(() =>{
//   id ?  navigate(`/apps/statistics/same-day/assign-cleaner-view/not_assigned/${id}`) : ""

  

// }, [id])
  const dispatch = useDispatch()
  const { setItemIdForUpdate } = useListView()
  const { query } = useQueryResponse()
  const queryClient = useQueryClient()
  const [selectedId, setId] = React.useState("");
  const [isAssignCleanerOpen, setAssignCleanerOpen] = React.useState(false);
  const [changeCleanerOpen, setChangeCleanerOpen] = React.useState(false);
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])
  const deleteItem = useMutation(() => deleteUser(id), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
    },
  })
  const handleChangeStatus = (id: ID) => {
    const formData = new FormData();
    formData.append('orderid', String(id));
    if (window.confirm("Do you really want to leave?")) {
      axios.post('https://adminapi.carselonadaily.com/api/admin/markCompleteOndemandService', formData).then(response => {
        alert("Order updated successfully!");
        window.location.reload();
      }).catch(error => {
        console.log(error);
        alert("Something went wrong!");
      })
    }
  }
  const handleAssignCleanerOpen = (id: any) => {
    dispatch({ type: "ASSIGN_CLEANER_ID", payload: id })
    // navigate(`/apps/statistics/same-day/assign-cleaner-view/not_assigned/${id}`)
    navigate(`/schedule/cleaner/un-assigned/not_assigned/${id}`)
  }




  const handleChangeCleanerOpen = (id: any) => {
    // navigate(`/champ-permanent-replacement/permanent_not_assigned/${filterCleanerData.cleanerid}`)

  }




  const handleCloseModal = () => {
    setAssignCleanerOpen(false)
    setChangeCleanerOpen(false)
  }
  return (
    <>
      <a
        href='#'
        className=' btn btn-light btn-active-light-primary btn-sm'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        Actions
        <KTSVG path='/media/icons/duotune/arrows/arr072.svg' className='svg-icon-5 m-0' />
      </a>
      {/* begin::Menu */}
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
        data-kt-menu='true'
      >
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a className='menu-link px-3 bg-danger text-white'>
            Get Link
          </a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3 bg-warning text-white'>
            View
          </a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3 bg-success text-white'
            href={`/apps/statistics/same-day/assign-cleaner-view/not_assigned/${id}`}
            onClick={() => handleAssignCleanerOpen(id)}>
            Assign Cleaner
          </a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3 bg-warning text-white'
            onClick={() => handleChangeCleanerOpen(id)}>
            Change Cleaner
          </a>
        </div>
        <div className='menu-item px-3'>
          <a className='menu-link px-3 bg-warning text-white'
            onClick={() => handleChangeStatus(id)}>
            Complete
          </a>
        </div>
      </div>
      {/* {isAssignCleanerOpen && <Dialog
        open={true}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <AssignerCleanerComponent selectedId={selectedId} />
      </Dialog>}
      {changeCleanerOpen && <Dialog
        open={true}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <ChangeCleanerComponent selectedId={selectedId} />
      </Dialog>} */}
    </>
  )
}
export { NotAssignedActionCells }
