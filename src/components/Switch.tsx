import React from 'react'

export const Switch = () => {
  return (
    <label className="inline-flex items-center cursor-pointer ml-5 text-xs">
      <label className="me-2">EN</label>
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="relative w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-secondary-100 after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
      <span className="ms-2 font-medium text-gray-900 dark:text-gray-300">PT</span>
    </label>
  )
}