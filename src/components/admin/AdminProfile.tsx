import React from 'react'
import { IUser } from '../../model/user.model'
import { UserProfile } from '../shared/UserProfile'

export const AdminProfile = () => {
  return (
    <div>
        <UserProfile menu={"admin"} user={{} as IUser} />
    </div>
  )
}
