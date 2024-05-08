import React from 'react';
import './iletisim.scss';

const Iletisim = () => {
  return (
    <div className="iletisim-container">
      <div className="map-and-info">
        <div className="map-container">
          {<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    async defer></script>}
        </div>
        <div className="contact-info">
          <h2>İletişim</h2>
          <p>Adres: Karlıktepe Mahallesi Çamlık Sokak</p>
          <p>Tel No: 0216 535 35 35 </p>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Ad Soyad" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Mesajınız" required></textarea>
          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default Iletisim;
