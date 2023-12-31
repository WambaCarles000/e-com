import React, { useState } from 'react';
import CareScale from './CareScale';
import Modal from 'react-modal';
import '../styles/PlantItem.css';
import '../styles/ModalsPlantItem.css'




function PlantItem({ name, cover, id, light, water, price }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleClick() {
    openModal();
  }

  const modalContent = (
    <div className="custom-modal-content">
      <p>{`Vous voulez acheter 1 ${name} ? Très bon choix 🌱✨`}</p>
      <button onClick={closeModal} className="modal-close-btn">
        Fermer
      </button>
    </div>
  );

  return (
    <div>
      <li key={id} className='lmj-plant-item' onClick={handleClick}>
        <span className='lmj-plant-item-price'>{price}€</span>
        <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
        {name}
        <div>
          <CareScale careType='water' scaleValue={water} />
          <CareScale careType='light' scaleValue={light} />
        </div>
      </li>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={`Achat de ${name}`}
        className="custom-modal"
        overlayClassName="custom-modal-overlay"
      >
        {modalContent}
      </Modal>
    </div>
  );
}

export default PlantItem;
