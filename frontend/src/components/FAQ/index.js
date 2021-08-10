import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import FAQ from './faq.js';
import './modal.css'

export default function FAQModal () {
  const [open, setOpen] = useState(false);


  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
      <div className='m-0 p-0 '>
      <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ' onClick={onOpenModal}>
          <div className="text-gray-300 hover:bg-gray-700 rounded-md cursor-pointer text-sm font-medium w-full h-full" >FAQ</div>
          </button>
          <Modal classNames={{
              overlay: 'customOverlay',
              modal: 'customModal',
          }}   open={open} onClose={onCloseModal} center>
        <FAQ setOpen={setOpen} />
      </Modal>
    </div>
  );
};