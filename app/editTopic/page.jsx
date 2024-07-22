import React from 'react'
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
const page = () => {
  return (
    <div>
         <div className = "flex gap-1 text-sm items-center mt-4">
             <MoveLeft size  = {15} />
             <Link className = "text-sm underline" href = "/">Back to home</Link>
         </div>

         <div className = "mt-4 flex  items-center w-full justify-center ">
         <form className = "flex w-96 flex-col gap-4 bg-slate-600 py-4 px-4 shadow-md rounded-lg">
              <input className = "h-10 px-1 rounded-lg" type = "text" placeholder = "Create your work title" />
              <input className = "h-10 px-1 rounded-lg" type = "text" placeholder = "Create a todo work" />
              <button className = "bg-slate-700 py-2 px-4 w-full rounded-xl">Edit Topic</button>
         </form>
         </div>
    </div>
  )
}

export default page