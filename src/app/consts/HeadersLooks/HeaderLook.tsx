/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { KTSVG, toAbsoluteUrl } from '../../../_metronic/helpers'
interface Props {
  headersData: {
    title: string
    SubTitle: string
    Source: string
  } | null
}
const HeaderLook: React.FC<Props> = ({ headersData }) => {
  const location = useLocation()
  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3 row'>
          <div className='me-7 mb-4 col'>
            <div className='symbol symbol-50px symbol-lg-55px symbol-fixed position-relative'>
              <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='Metornic' />
              {/* <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div> */}
            </div>
          </div>
          <div className='flex-grow-1 col'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    Max Smith
                  </a>
                  {/* <a href='#'>
                    <KTSVG
                      path='/media/icons/duotune/general/gen026.svg'
                      className='svg-icon-1 svg-icon-primary'
                    />
                  </a> */}
                </div>
                <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTSVG
                      path='/media/icons/duotune/communication/com006.svg'
                      className='svg-icon-4 me-1'
                    />
                    Developer
                  </a>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                  >
                    <KTSVG
                      path='/media/icons/duotune/communication/com011.svg'
                      className='svg-icon-4 me-1'
                    />
                    max@kt.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex overflow-auto h-55px'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  // (location.pathname === '/react/interview/questions/topics/overview' && 'active')
                  (location.pathname === 'react/interview/questions/topics/overview' && 'active')
                }
                to='/react/interview/questions/topics/overview'
              >
                Overview
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/react/interview/questions/topics/projects' && 'active')
                }
                to='/react/interview/questions/topics/projects'
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/react/interview/questions/topics/campaigns' && 'active')
                }
                to='/react/interview/questions/topics/campaigns'
              >
                Campaigns
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/react/interview/questions/topics/documents' && 'active')
                }
                to='/react/interview/questions/topics/documents'
              >
                Documents
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/react/interview/questions/topics/connections' && 'active')
                }
                to='/react/interview/questions/topics/connections'
              >
                Connections
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export { HeaderLook }
