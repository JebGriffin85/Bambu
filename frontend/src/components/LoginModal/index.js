import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import LoginModalForm from './LoginModalForm';
import './modal.css'

export default function LoginModal () {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
      <div className='m-0 p-0'>
          <div className="text-gray-300 hover:bg-gray-700 rounded-md cursor-pointer text-sm font-medium" onClick={onOpenModal}>Login</div>
          <Modal classNames={{
              overlay: 'customOverlay',
              modal: 'customModal',
          }}   open={open} onClose={onCloseModal} center>
        <LoginModalForm setOpen={setOpen} />
      </Modal>
    </div>
  );
};