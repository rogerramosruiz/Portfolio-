import React from 'react'

export default function Icon({ icon }: { icon: React.ReactNode }) {
  return (
    <div>
      {React.cloneElement(icon as React.ReactElement<any>, {
        className: 'size-8 hover:size-7 transition-all duration-100 ',
      })}
    </div>
  )
}
