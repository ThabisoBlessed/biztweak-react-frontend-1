import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '../shared/UserProfile'

export const CMPAdminProfile = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.history.pushState(null, "", document.URL);
    window.addEventListener("popstate", function (event) {
      navigate(-1);
    });
  }, []);

  return (
    <div>
        <UserProfile menu={"cmp"} />
    </div>
  )
}
