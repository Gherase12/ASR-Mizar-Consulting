import React from 'react'
import { useState } from 'react';
import Modal from './Modal';

function ContactBtn({call}) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    function closeModal() {
      setIsModalOpen(false)
    }
  
    function openModal() {
      setIsModalOpen(true)
    }
  

  return (
    <button onClick={openModal} className='bg-orange-400 ease-in-out duration-300  hover:scale-125" p-1 lg:px-4  hover:bg-blue-900 hover:text-orange-400 relative font-bold'>
         <Modal closeModal={closeModal} openModal={openModal} call={call} isModalOpen={isModalOpen} />
         Contact
    </button>
  )
}

export default ContactBtn