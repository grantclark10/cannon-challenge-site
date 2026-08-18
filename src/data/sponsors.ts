// Sponsor strip shown on every page's footer ("proudly partnering with").
// Neither logo was a link on the original site — kept unlinked here too.

export interface Sponsor {
  name: string;
  logo: string;
}

export const sponsors: Sponsor[] = [
  { name: 'East City Cycles', logo: 'east-city-cycles-logo.png' },
  { name: 'Jack Black Brewing Company', logo: 'jack-black-brewing-logo.png' },
];
