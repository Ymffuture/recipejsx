import React from 'react';
import './preloader.scss'; // Make sure to create corresponding styles

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="spinner"></div>
    </div>
  );
}
