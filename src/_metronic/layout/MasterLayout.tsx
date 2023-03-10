import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AsideDefault } from './components/aside/AsideDefault'
import { Footer } from './components/Footer'
import { HeaderWrapper } from './components/header/HeaderWrapper'
import { Toolbar } from './components/toolbar/Toolbar'
import { RightToolbar } from '../partials/layout/RightToolbar'
import { ScrollTop } from './components/ScrollTop'
import { Content } from './components/Content'
import { PageDataProvider } from './core'
import { useLocation } from 'react-router-dom'
import {
  DrawerMessenger,
  ActivityDrawer,
  InviteUsers,
  UpgradePlan,
  ThemeModeProvider,
  ListDrawer,
} from '../partials'
import { MenuComponent } from '../assets/ts/components'
import { MessengerChatBoxDrawer } from '../../app/consts/Chats/MessengerChatBoxDrawer'
const MasterLayout = () => {
  const location = useLocation()
  const urlEndPoint = window.location.pathname.split("/")
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [])
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])
  return (
    <PageDataProvider>
      <ThemeModeProvider>
        <div className='page d-flex flex-row flex-column-fluid'>
          <AsideDefault />
          <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
            <HeaderWrapper />
            <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
              {urlEndPoint[urlEndPoint.length - 1] === "area-wise-cleaner" && <Toolbar />}
              {urlEndPoint[urlEndPoint.length - 1] === "dashboard" && <Toolbar />}
              <Toolbar />
              <div className='post d-flex flex-column-fluid' id='kt_post'>
                <Content>
                  <Outlet />
                </Content>
              </div>
            </div>
            <Footer />
          </div>
        </div>
        {/* begin:: Drawers */}
        <ActivityDrawer />
        <ListDrawer />
        <RightToolbar />
        <DrawerMessenger />
        <MessengerChatBoxDrawer></MessengerChatBoxDrawer>
        {/* end:: Drawers */}
        {/* begin:: Modals */}
        {/* <InviteUsers /> */}
        <UpgradePlan />
        {/* end:: Modals */}
        <ScrollTop />
      </ThemeModeProvider>
    </PageDataProvider>
  )
}
export { MasterLayout }
