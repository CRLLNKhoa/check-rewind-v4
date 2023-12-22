import React from 'react'

export default function Tab({pathname,pathname1}) {
  return (
    <div className="flex gap-2 text-sm select-none">
        <span>Home</span>
        <span>/</span>
        <span className="font-bold">{pathname}</span>
        {pathname1 &&<span>/</span>}
        {pathname1 && <span className="font-bold">{pathname1}</span>}
      </div>
  )
}
