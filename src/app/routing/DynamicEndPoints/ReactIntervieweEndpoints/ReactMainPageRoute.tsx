import { Navigate, Routes, Route, Outlet } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../../_metronic/layout/core'
import { HeaderLook } from '../../../consts/HeadersLooks/HeaderLook'
import { R1_Introductions } from '../../../modules/InterviewsContents/ReactJsInterviewQuesAns/components/R1_Introductions'
const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'React',
    path: '/react/interview/questions/topics',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]
const ReactMainPageRoute = () => (
  <Routes>
    <Route
      element={
        <>
          {/* <HeaderLook headersData={{}}  /> */}
          <Outlet />
        </>
      }
    >
      <Route
        path='overview'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle>
            <R1_Introductions />
          </>
        }
      />
      <Route
        path='projects'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Projects</PageTitle>
            <R1_Introductions />

          </>
        }
      />
      <Route
        path='campaigns'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Campaigns</PageTitle>
            <R1_Introductions />

          </>
        }
      />
      <Route
        path='documents'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Documents</PageTitle>
            <R1_Introductions />

          </>
        }
      />
      <Route
        path='connections'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Connections</PageTitle>
            <R1_Introductions />

          </>
        }
      />
      <Route index element={<Navigate to='/react/interview/questions/topics/overview' />} />
    </Route>
  </Routes>
)
export default ReactMainPageRoute
