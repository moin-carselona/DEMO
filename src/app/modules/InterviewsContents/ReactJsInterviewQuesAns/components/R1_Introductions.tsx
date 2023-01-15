import React from 'react'

import { HeaderLook } from '../../../../consts/HeadersLooks/HeaderLook'
import { InfoDetailsCard } from '../../cards/InfoDetailsCard'
import { VideoWidgets } from '../../cards/VideoWidgets'
export function R1_Introductions() {
  return (
    <>
      <HeaderLook headersData={{
        title: "NothingIsWorking",
        SubTitle: "NothingIsWorking",
        Source: "NothingIsWorking",
      }} />
      <div className='row g-5 g-xxl-8'>
        <div className='col-xl-12'>
          <InfoDetailsCard className='mb-5 mb-xxl-8' />
        </div>
        <div className='col-xl-12'>
          <VideoWidgets className='mb-5 mb-xxl-8' />
        </div>
      </div>
    </>
  )
}
