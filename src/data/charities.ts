// Charity content for the Ride for a Cause page — extracted verbatim from
// the original WordPress export. Only 2 today; kept as a list since the
// page intro ("ride for your own charity") leaves room for more later.

export interface Charity {
  slug: string;
  name: string;
  tagline?: string;
  description: string;
  donateUrl: string;
  logo: string;
  photo: string;
  qrCode: string;
}

export const charities: Charity[] = [
  {
    slug: 'saartjie-baartman-centre',
    name: 'The Saartjie Baartman Centre for Women and Children',
    tagline: '#stopgbv',
    description:
      'The Saartjie Baartman Centre for Women and Children (SBCWC) was opened in 1999 as the first multi-disciplinary service (one-stop) centre for abused women and children in the country. This provided an opportunity for organisations to come together as partners to develop an appropriate on-site multi-agency service delivery model for the effective management, treatment and prevention of violence against women and children. It also presented an opportunity for a partnership approach between government departments and the non-governmental sector.',
    donateUrl: 'http://www.saartjiebaartmancentre.org.za/donate/',
    logo: 'saartjie-baartman-centre-logo.png',
    photo: 'saartjie-baartman-centre-photo.jpg',
    qrCode: 'saartjie-baartman-centre-qr.jpg',
  },
  {
    slug: 'qhubeka',
    name: 'Qhubeka',
    description:
      'Qhubeka is a global charity that moves people forward with bicycles in Africa. People earn bicycles through our programmes, improving their access to schools, clinics and jobs. A bicycle is a tool that helps people to travel faster and further, to generate income and to carry more. In the face of extreme and persistent poverty, bicycles can change lives by helping to address socioeconomic challenges at the most basic level – helping people to get where they need to go.',
    donateUrl: 'https://qhubeka.org/how-to-help/donate/',
    logo: 'qhubeka-logo.png',
    photo: 'qhubeka-photo.jpg',
    qrCode: 'qhubeka-qr.jpg',
  },
];
