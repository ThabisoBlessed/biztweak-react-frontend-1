import React, { useEffect } from 'react'
import { LOCALSTORAGE_KEYS } from '../../config';
import { UserProfile } from '../shared/UserProfile'

export const CMPAdminProfile = () => {
  useEffect(() => {
    localStorage.setItem(
      LOCALSTORAGE_KEYS.selectedMenuPrev,
      "/cmp/manage-courses/admin-user"
    );
  });

  return (
    <div>
        <UserProfile menu={"cmp"} />
    </div>
  )
}
