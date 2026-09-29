// Company details shared by the contact section and footer.
export const company = {
  name: 'EON General Supply Company',
  legalName: 'EON General Supply Company (Pty) Ltd',
  regNo: '2023/868724/07',
  phoneDisplay: '+27 82 891 2818',
  phoneHref: 'tel:+27828912818',
  whatsappHref: 'https://wa.me/27828912818',
  email: 'eongeneral01@gmail.com',
  addressLines: ['41 Fieldside Avenue, Centenary Park', 'Durban, KwaZulu-Natal', 'South Africa'],
  hours: ['Monday – Friday: 8:00 AM – 5:00 PM', 'Saturday & Sunday: Closed']
};

export const asset = (path) => `${process.env.PUBLIC_URL || ''}/assets/images/${path}`;
