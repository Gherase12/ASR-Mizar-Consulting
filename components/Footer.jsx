import React from 'react'
import { AiFillPhone, AiFillMail } from 'react-icons/ai';

function Footer() {

    const contacte = [
        {
            content:"0742051084",
            Icon:AiFillPhone
        },
        {
            content:"asr.mizar@gmail.com",
            Icon:AiFillMail
        }
    ]
  return (
    <div className='bg-blue-900 w-full pt-5  h-20 flex flex-col md:flex-row  items-center md:justify-center md:space-x-5 '>
        {
            contacte.map(({content, Icon},i)=>(
                <div key={i} className="flex space-x-5 items-center  text-orange-400" >
                    <Icon />
                    <div>{content}</div>
                </div>
            ))
        }
    </div>
  )
}

export default Footer