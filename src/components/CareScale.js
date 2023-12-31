// CareScale.jsx
import React, { useState } from 'react';
import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';
import Modal from 'react-modal';


const quantityLabel = {
  1: 'peu',
  2: 'modérément',
  3: 'beaucoup',
};

function CareScale({ scaleValue, careType }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const range = [1, 2, 3];
  const scaleType = careType === 'light' ? <img src={Sun} alt='sun-icon' /> : <img src={Water} alt='water-icon' />;

  return (
    <div className='care-scale-container'>
      <div onClick={openModal}>
        {range.map((rangeElem) => (scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={`Niveau de ${careType === 'light' ? 'lumière' : 'arrosage'}`}
        className="custom-modal"
        overlayClassName="custom-modal-overlay"
      >
        <div className="custom-modal-overlay" onClick={closeModal}>
          <div className="custom-modal-content">
            <p>{`Cette plante requiert ${quantityLabel[scaleValue]} ${careType === 'light' ? 'de lumière' : "d'arrosage"}`}</p>
            <button onClick={closeModal} className="modal-close-btn">
              Fermer
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CareScale;
