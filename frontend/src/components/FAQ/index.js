import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import FAQ from './faq.js';
import './modal.css'

export default function FAQModal ({bool}) {
  const [open, setOpen] = useState(false);
  if (bool) setOpen(bool)

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
      <div className='m-0 p-0'>
          <div className="text-gray-300 hover:bg-gray-700 rounded-md cursor-pointer text-sm font-medium" onClick={onOpenModal}>FAQ</div>
          <Modal classNames={{
              overlay: 'customOverlay',
              modal: 'customModal',
          }}   open={open} onClose={onCloseModal} center>
        <FAQ setOpen={setOpen} />
      </Modal>
    </div>
  );
};