import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { PageTitle } from '../../../_metronic/layout/core'
import { ListViewProvider } from '../apps/user-management/users-list/core/ListViewProvider'
import Old_JobList from '../Old_JobList/Old_JobList'
const SchedulesRoutes = () => {
    const [data] = React.useState(Object)
    const [isLoading, setLoading] = React.useState(false)
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div className='row'>
            <Routes>
                {/* Job List   */}
                <Route element={<Outlet />}>
                    <Route
                        path={`/job-list`}
                        element={
                            <>
                                <PageTitle>Job List </PageTitle>
                                <ListViewProvider>
                                    <Old_JobList
                                    />
                                </ListViewProvider>
                            </>
                        }
                    />
                </Route>
                {/* Job List   */}

            </Routes>
        </div>
    )
}
export default SchedulesRoutes
