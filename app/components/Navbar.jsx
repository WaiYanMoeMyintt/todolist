import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className = " px-4 py-2.5 bg-slate-800 w-full rounded-md my-2 flex justify-between items-center gap-4">
         <Link className = " py-2.5 px-4 rounded-xl" href = "/">Miracle</Link>
         <Link className = "bg-slate-700 py-2.5 px-4 rounded-xl" href = "/addTopic">Add Topic</Link>
    </nav>
  )
}

export default Navbar