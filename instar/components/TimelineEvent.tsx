import { newEvent } from '@prisma/client'
import React from 'react'
import { BsDot } from 'react-icons/bs'


export const TimelineEvent = ({content}:{content:newEvent}) => {
  const eventDate:any = String(content.createdAt)
  return (
    <div className='flex flex-row items-center space-x-8 '>
        <BsDot size={70}/>
        <span className='mt4'>{eventDate.substring(0, 10)}</span>
        <span className='mt4'>{content.eventName}</span>
        <div className='space-x-2'>
          <span className='mt4'>{content.pointsAlloted}</span>
          <span className='mt4'>Points</span>
        </div>
    </div>
  )
}
