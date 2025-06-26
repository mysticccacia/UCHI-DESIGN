import React from 'react'
import Links from '../utils/Links'

const FooterLinks = () => {
  return (
     <div className="grid grid-cols-2 gap-10 py-10 text-zinc-700 bg-zinc-100">
      {Object.entries(Links).map(([key, value]) => (
        <div key={key}>
          <h3 className="text-lg font-regular mb-1">{key}:</h3>
          {Array.isArray(value) ? (
            value.map((item, i) => <p className=' underline cursor-pointer text-lg font-regular mb-[1px]' key={i}>{item}</p>)
          ) : (
            <p className=' underline text-lg font-regular mb-[1px]' >{value}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default FooterLinks