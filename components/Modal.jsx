import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiFillPhone, AiFillMail } from 'react-icons/ai';

function Modal({ closeModal, isModalOpen }) {
  const call = () => {
    window.location.href = 'tel:078####';
  };

    const sendEmail = () => {
        window.location.href = 'mailto:example@example.com';
      };

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                    <div className="  flex items-center">

                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium text-blue-900 leading-6 pr-10 '
                  >
                    Telefon: 07####
                  </Dialog.Title>
                    <button onClick={call}  className="border-2 bg-blue-900 border-orange-400">
                    <AiFillPhone size={30} className="text-orange-400"   />
                    </button>
                    </div>
                    <div className="  flex items-center">

                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium text-blue-900 leading-6 pr-10 '
                  >
                    Email: ####@yahoo.ro
                  </Dialog.Title>
                    <button onClick={sendEmail}  className="border-2 bg-blue-900 border-orange-400">
                    <AiFillMail size={30} className="text-orange-400"  />
                    </button>
                    </div>
                 

                  <div className='mt-4'>
                    <button
                      onClick={closeModal}
                      className='bg-orange-400 ease-in-out duration-300  hover:scale-125" p-1 lg:px-4  hover:bg-blue-900 hover:text-orange-400 '
                    >
                      Inchide
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;
