import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import LoginModalForm from './LoginModalForm';
import './modal.css'

export default function LoginModal () {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
// hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium
  return (
      <div className='m-0 p-0 '>
      <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium block' onClick={onOpenModal}>
          <div  >Login</div>
      </button>
          <Modal classNames={{
              overlay: 'customOverlay',
              modal: 'customModal',
          }}   open={open} onClose={onCloseModal} center>
        <LoginModalForm setOpen={setOpen} />
      </Modal>
    </div>
  );
};