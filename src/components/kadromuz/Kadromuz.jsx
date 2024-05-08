import React from 'react';
import './kadromuz.scss';

// Adjusting the mock data for the team members with public folder paths
const teamMembers = [
  {
    id: 1,
    name: 'Yasin Öztürk',
    expertise: 'Kurucu Psikolog',
    email: 'yasin@example.com',
    imageUrl: '/images/ozgur.png', // Direct path from the public folder
  },
  {
    id: 2,
    name: 'Özgür Sarıçan',
    expertise: 'Özel Eğitim Uzmanı/ Psikolog',
    email: 'ozgur@example.com',
    imageUrl: '/images/ozgur.png', // Same here
  },
  {
    id: 3,
    name: 'Yasemin',
    expertise: 'Özel Eğitim Uzmanı / Psikolog',
    email: 'yasemin@example.com',
    imageUrl: '/images/ozgur.png',
  },
  {
    id: 4,
    name: 'Yasin Öztürk',
    expertise: 'Kurucu Psikolog',
    email: 'yasin@example.com',
    imageUrl: '/images/ozgur.png', // Direct path from the public folder
  },
  {
    id: 5,
    name: 'Özgür Sarıçan',
    expertise: 'Özel Eğitim Uzmanı/ Psikolog',
    email: 'ozgur@example.com',
    imageUrl: '/images/ozgur.png', // Same here
  },
  {
    id: 6,
    name: 'Yasemin',
    expertise: 'Özel Eğitim Uzmanı / Psikolog',
    email: 'yasemin@example.com',
    imageUrl: '/images/ozgur.png',
  },
  // Add more members as needed...
];

const colorList = [
  'rgba(255,255,255)'
  /*Greens
$color-new-green1 (#bbd2b6): RGB(187, 210, 182)
$color-new-green2 (#4b6e43): RGB(75, 110, 67)
$color-new-green3 (#6a9b5e): RGB(106, 155, 94)
$color-soothing-green (#2E8B57): RGB(46, 139, 87)
$color-ter-green (#00572b): RGB(0, 87, 43)
$color-ter-blurred-green (#dfeae4): RGB(223, 234, 228)
$color-ter-grey (#424e48): RGB(66, 78, 72)
Yellow-Oranges
$color-new-yellow1 (#ffd689): RGB(255, 214, 137)
$color-new-yellow2 (#ffb11e): RGB(255, 177, 30)
$color-new-yellow3 (#f9a300): RGB(249, 163, 0)
Oranges
$color-new-orange1 (#ffc289): RGB(255, 194, 137)
$color-new-orange2 (#ff8b1e): RGB(255, 139, 30)
$color-new-orange3 (#f97900): RGB(249, 121, 0)
*/ 
];

function Kadromuz() {
  return (
    <section className="kadromuz">
      <h2 className="kadromuz-title">Kadromuz</h2>
      <p className="kadromuz-description">Çocuk Aklı Danışmanlık Merkezi'nin ekibi ile tanışın.</p>
      <div className="team-members-grid">
        {teamMembers.map((member, index) => (
          <div key={member.id} className="team-member" style={{ backgroundColor: colorList[index % colorList.length] }}>
            <div className="member-photo-wrapper">
              <div className="member-photo" style={{ backgroundImage: `url(${member.imageUrl})` }} />
            </div>
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-expertise">{member.expertise}</p>
              <p className="member-email">{member.email}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Kadromuz;
