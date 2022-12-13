import React from 'react'
import { LMSMenu } from './LMSMenu'

export const Courses = () => {
  return (
    <div className='w-full'>
         <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <LMSMenu />
        </div>
        <div className="col-md-10 text-left">
          <div className="card bg-transparent border-0 mb-3">
            <div className="card-header bg-transparent border-0">
              <h5 className="mb-0 text-dark">Courses</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
