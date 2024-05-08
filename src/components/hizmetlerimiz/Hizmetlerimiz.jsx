import React from 'react';
import './hizmetlerimiz.scss';

// Array of service objects with detailed descriptions
const services = [
  {
    name: 'Özel Eğitim Nedir',
    description: 'Özel eğitim, bireylerin eğitim ihtiyaçlarına özel olarak tasarlanmış, kişisel farklılıklar ve öğrenme kapasiteleri göz önünde bulundurularak hazırlanan bir eğitim sistemidir. Amacımız, her bireyin kendi potansiyelini en iyi şekilde geliştirebilmesi için uygun ortamlar sağlamaktır.',
    imagePath: '/images/ozelegitim1.jpg'
  },
  {
    name: 'Özel Öğrenme Güçlüğü',
    description: 'Özel öğrenme güçlüğü, okuma, yazma, anlama veya matematik becerileri gibi özel alanlarda zorluk çeken bireyler için sunulan eğitim ve destek programlarıdır. Bu programlar, öğrencilerin akademik becerilerini geliştirmelerine ve öğrenme engellerini aşmalarına yardımcı olur.',
    imagePath: '/images/ozelegitim2.jpg'
  },
  {
    name: 'Otizm Spektrum Bozukluğu',
    description: 'Otizm spektrum bozukluğu, sosyal etkileşim, iletişim becerileri ve tekrarlayan davranışlarla karakterize edilen gelişimsel bir durumdur. Bizim programlarımız, otizm spektrumundaki bireylerin sosyal ve iletişim becerilerini güçlendirmeye yöneliktir, böylece onların topluma daha iyi entegre olmalarını sağlar.',
    imagePath: '/images/ozelegitim3.jpg'
  },
  {
    name: 'Zihinsel Yetersizlik',
    description: 'Zihinsel yetersizlik, bilişsel işlevlerin ve günlük yaşam becerilerinin gelişiminin beklenen düzeyin altında kalması durumudur. Programlarımız, zihinsel yetersizliği olan bireylerin eğitim ve yaşam kalitelerini artırmak için tasarlanmıştır, kişisel yeteneklerini maksimize etmeye ve bağımsız yaşam becerilerini geliştirmeye odaklanır.',
    imagePath: '/images/ozelegitim4.jpg'
  }
];

const Hizmetlerimiz = () => {
  return (
    <div className="services-container">
      {services.map((service, index) => (
        <section key={index} className="service">
          <div className="image-container" style={{ backgroundImage: `url(${service.imagePath})` }}>
          </div>
          <h2>{service.name}</h2>
          <p>{service.description}</p>
        </section>
      ))}
    </div>
  );
};

export default Hizmetlerimiz;
