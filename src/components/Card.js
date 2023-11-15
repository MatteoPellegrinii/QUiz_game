// src/components/Card.js
import React, { useState } from 'react';
import './Card.css';

function mostraPopupBello() {
  Swal.fire({
    title: 'Risposta esatta!!!!!!',
    icon: 'success', // Puoi usare 'success', 'error', 'warning', 'info', ecc.
    confirmButtonText: 'OK'
  });
}


function Card({ question, answer, onFlip, stopTime }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      onFlip();
      mostraPopupBello();
      }
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card-inner">
        <div className="card-front">{question}</div>
        <div className="card-back">{answer}</div>
      </div>
    </div>
  );
}

export default Card;
