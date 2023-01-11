import { Outlet, Route, Routes } from 'react-router-dom'
import { PageTitle } from '../../../_metronic/layout/core'
import CleanerJobsComponent from './cleaner-items/CleanerJobsComponent'
import CleanerAttendanceList from './CleanerAttendanceList'
import CleanerAvailabilityRoute from './CleanerAvailabilityRoute'
import OnBoardingPendingCleanerList from './components/onBoardingPendingCleanerList/OnBoardingPendingCleanerList'
import DeactivatedCleanerList from './components/deactivatedCleanerList/DeactivatedCleanerList'
import WeeklyReports from './components/weeklyReport/WeeklyReports'
import OldJObList from './components/oldJobList/OldJobsList'
import CleanerLeads from './components/cleanerLeads/CleanerLeads'
import CleanerLeagues from './components/cleanerLeagues/CleanerLeagues'
import Cleanersemergencyleaves from './components/cleanersemergencyleaves/Cleanersemergencyleaves'
import ActiveCleaner from './components/activeCleaner/ActiveCleaner'

import ControllerRouteCleanerAttendance from '../Cleaners Section/CleanersAttendace/ControllerRouteCleanerAttendance'
const CleanerPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path={`/cleanerjobs`}
          element={
            <>
              <PageTitle>Job List</PageTitle>
              <CleanerJobsComponent />
            </>
          }
        />
      </Route>
      <Route element={<Outlet />}>
        <Route
          path={`/cleaners`}
          element={
            <>
              <PageTitle>Cleaner List</PageTitle>
              <ActiveCleaner />
            </>
          }
        />
      </Route>
      <Route element={<Outlet />}>
        <Route
          path={`/availabilities`}
          element={
            <>
              <PageTitle>Assign Champ</PageTitle>
              <CleanerAvailabilityRoute
                iscleanerpage={true}
              />
            </>
          }
        />
      </Route>
      <Route element={<Outlet />}>
        <Route
          path={`/onboardingpendingcleanerlist`}
          element={
            <>
              <PageTitle>Onboarding Pending</PageTitle>
              <OnBoardingPendingCleanerList />
            </>
          }
        />
      </Route>
      <Route element={<Outlet />}>
        <Route
          path={`/deactivatedcleanerlist`}
          element={
            <>
              <PageTitle>Deactivated</PageTitle>
              <DeactivatedCleanerList />
            </>
          }
        />
      </Route>
      
      <Route element={<Outlet />}>
        <Route
          path={`/cleanerattendance`}
          element={
            <>
              <PageTitle>Attendance</PageTitle>
              <ControllerRouteCleanerAttendance />
            </>
          }
        />
      </Route>
      <Route element={<Outlet />}>
        <Route
          path={`/cleanerjobs_old`}
          element={
            <>
              <PageTitle>Old Jobs List</PageTitle>
              <OldJObList />
            </>
          }
        />
      </Route>
      <Route element={<Outlet />}>
        <Route
          path={`/weeklysummery`}
          element={
            <>
              <PageTitle>Weekly Payout Report</PageTitle>
              <WeeklyReports />
            </>
          }
        />
      </Route>
      <Route element={<Outlet />}>
        <Route
          path={`/cleanersemergencyleaves`}
          element={
            <>
              <PageTitle>Leaves</PageTitle>
              <Cleanersemergencyleaves />
            </>
          }
        />
      </Route>
      <Route element={<Outlet />}>
        <Route
          path={`/leads`}
          element={
            <>
              <PageTitle>Leads</PageTitle>
              <CleanerLeads />
            </>
          }
        />
      </Route>
      <Route element={<Outlet />}>
        <Route
          path={`/leagues`}
          element={
            <>
              <PageTitle>League</PageTitle>
              <CleanerLeagues />
            </>
          }
        />
      </Route>
    </Routes>
  )
}
export default CleanerPage
