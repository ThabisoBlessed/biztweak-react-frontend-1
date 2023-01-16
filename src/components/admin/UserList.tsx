import React from 'react'
import { AdminMenu } from './AdminMenu'
import { Users } from './Users'

export const UserList = (props: any) => {
  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <AdminMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <Users users={props.users || []} />
        </div>
      </div>
    </div>
  )
}
