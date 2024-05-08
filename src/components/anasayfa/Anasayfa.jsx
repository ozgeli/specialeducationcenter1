import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import "./anasayfa.scss";
import Carousel from './Carousel';

const Anasayfa = () => {
  const navigate = useNavigate(); // React Router hook for navigation
  const newsItems = [
    { imgSrc: "/images/news1.jpg", altText: "Haber 1", description: "Hizmetlerimizdeki son güncellemeler." },
    { imgSrc: "/images/news2.jpg", altText: "Haber 2", description: "Gelecek dönem için yeni kurslarımız açılacaktır." },
    { imgSrc: "/images/news3.jpg", altText: "Haber 3", description: "Son topluluk etkinliğimizden öne çıkanlar." },
    { imgSrc: "/images/news4.jpg", altText: "Haber 4", description: "Yakın zamanda gerçekleştirdiğimiz topluluk etkinliğimiz hakkında bilgiler." }
  ];

  const hizmetlerimizItems = [
    { imgSrc: "/images/ozelegitim1.jpg", altText: "Özel Eğitim Nedir", description: "Özel eğitim nedir" },
    { imgSrc: "/images/ozelegitim2.jpg", altText: "Özel Öğrenme Güçlüğü", description: "Özel öğrenme güçlüğü" },
    { imgSrc: "/images/ozelegitim3.jpg", altText: "Otizm Spektrum Bozukluğu", description: "Otizm spektrum bozukluğu" },
    { imgSrc: "/images/ozelegitim4.jpg", altText: "Zihinsel Yetersizlik", description: "Zihinsel yetersizlik" }
  
  ];

  return (
    <div className="anasayfa">
      <div className="section-separator_1"></div>
      <div className="carousel-background">
        <Carousel />
      </div>
      <div className="section-separator"></div>
      <h2 className="news-title">Hizmetlerimiz</h2>
      <div className="hizmetlerimiz-section">
      
        {hizmetlerimizItems.map((item, index) => (
          <div key={index} className="hizmet-item">
            <img src={item.imgSrc} alt={item.altText} />
            <p>{item.description}</p>
          </div>
        ))}
        <button className="arrow-button" onClick={() => navigate('/hizmetlerimiz')}>Daha Fazla</button>
      </div>
      <div className="section-separator"></div>
      <div className="news-section">
        <h2 className="news-title">Bizden Haberler</h2>
        {newsItems.map((item, index) => (
          <div key={index} className="news-item">
            <img src={item.imgSrc} alt={item.altText} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Anasayfa;
