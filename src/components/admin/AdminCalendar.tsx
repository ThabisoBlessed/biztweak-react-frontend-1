import React from 'react'
import { Calendar } from '../shared/Calendar'
import { AdminMenu } from './AdminMenu'

export const AdminCalendar = () => {
  return (
    <div>
        <Calendar menu={"admin"} />
    </div>
  )
}
