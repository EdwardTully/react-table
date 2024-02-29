import React from 'react'

function GlobalFilter({filter, setFilter}) {
    //this funct destructer the props, which we will include in the jsx below
  return (
    <span>
        Search:  {'   '}
        <input value={filter || ''} onChange={(e)=>setFilter(e.target.value)}/>
    </span>
  )
}

export default GlobalFilter