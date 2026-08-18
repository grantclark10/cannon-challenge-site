// Cannon stop data for the Route page — extracted verbatim from the
// original WordPress export (Route page, "The Cannons" section).
// Photos live in ../assets/images/cannons/, numbered to match `order`.

export interface Cannon {
  order: number;
  name: string;
  what3words: string;
  terrain: string;
  description: string;
  image: string;
}

export const cannons: Cannon[] = [
  {
    order: 1,
    name: 'Cape Town Castle',
    what3words: '///bodysuits.ringleader.rocketed',
    terrain: 'Road',
    description:
      'One cannon down already! Just a short distance from the start and one of the most famous locations and oldest buildings in South Africa.',
    image: '01-cape-town-castle.jpg',
  },
  {
    order: 2,
    name: 'Chavonnes Battery (Waterfront, Cape Town)',
    what3words: '///outliving.humming.clenches',
    terrain: 'Road, cobbles',
    description:
      'Unfortunately not open at the moment. From here you head through the Waterfront and docks towards Green Point and into Bokaap.',
    image: '02-chavonnes-battery.jpg',
  },
  {
    order: 3,
    name: 'Noon Day Gun (Signal Hill)',
    what3words: '///mouthpiece.infeasible.nonlinear',
    terrain: 'Road, cobbles',
    description:
      'A steep climb up through Bokaap will take you towards the Noon Gun. Unless you’ve timed it well, the gate will most likely be locked. The Noon gun has been a historic time signal in Cape Town, South Africa, since 1806. It consists of a pair of black powder Dutch naval guns, fired alternatingly with one serving as a backup.',
    image: '03-noon-day-gun.jpg',
  },
  {
    order: 4,
    name: 'Camps Bay Drive, Kloof Nek',
    what3words: '///freights.inductions.outfits',
    terrain: 'Road, pavement',
    description:
      'Back on the road and you’ll find these cannons just over the crest of Kloof Nek as you start to head downhill towards Camps Bay. They will be on your right (sea side) and you’ll have to take care crossing the road. As you come down the road off Signal towards the Glen, it’s best to cross straight away and to roll down the pavement on the right-hand side.',
    image: '04-camps-bay-drive-kloof-nek.jpg',
  },
  {
    order: 5,
    name: 'Apostle Battery, Llandudno',
    what3words: '///lampshades.mothered.owes',
    terrain: 'Road',
    description:
      'A sharp left off Victoria Road onto Apostle Battery road will take you up to the gate. The gate will probably be closed which is a shame as this is one of the most impressive cannons! You could always ask to be let in 🙂',
    image: '05-apostle-battery-llandudno.jpg',
  },
  {
    order: 6,
    name: 'West Fort Battery',
    what3words: '///schmoozed.gratuitous.audibly',
    terrain: 'Road',
    description:
      'The West Fort Battery was originally built to protect Hout Bay and the Cape, from a possible British attack. Today, remains of the West Fort can be found behind the fish factories on the far side of Hout Bay harbour.',
    image: '06-west-fort-battery.jpg',
  },
  {
    order: 7,
    name: 'East Fort Battery',
    what3words: '///carb.unreformed.slouched',
    terrain: 'Portage off road',
    description:
      'East Fort Battery c.1782 is one of four coastal fortifications built and developed in Hout Bay during the period 1781–1806. On the 15th Sept 1795, the guns were fired in anger foiling the possible entry to the Bay of a squadron of British warships.',
    image: '07-east-fort-battery.jpg',
  },
  {
    order: 8,
    name: 'Slangkop, Kommetjie',
    what3words: '///endorphin.rigidly.photo',
    terrain: 'Hiking trail',
    description:
      'This cannon site is at the top of a mountain hiking trail and you do not need to go up to it to tag it! You can keep cycling 🙂',
    image: '08-slangkop-kommetjie.jpg',
  },
  {
    order: 9,
    name: 'Kanonkop, Cape Point',
    what3words: '///bedecked.spent.fluffy',
    terrain: 'Hiking trail',
    description:
      'This cannon site is inside the Cape Point Nature reserve and you do not need to go inside to tag it. You can keep cycling around towards Simonstown 🙂',
    image: '09-kanonkop-cape-point.jpg',
  },
  {
    order: 10,
    name: 'Jubilee Square, Simonstown',
    what3words: '///abstract.rewarm.remarking',
    terrain: 'Road',
    description:
      'The roll down Smits takes you down past Boulders and the penguins and into Simonstown and Jubilee Square where you’ll find the next cannon (as well as a statue of Just Nuisance). This is a lovely spot for a break and some food and drink! Because after this you’ll be climbing again.',
    image: '10-jubilee-square-simonstown.jpg',
  },
  {
    order: 11,
    name: 'Red Hill 9.2’ Gun, Scala Battery, Upper North',
    what3words: '///deadened.sanctified.networking',
    terrain: 'Road',
    description:
      'You’ll cycle out of Simonstown towards Kalk Bay, but before you get there, it’s a climb up the beautiful switchbacks of Red Hill to the Scala Battery. From there you’ll cycle through the Naval Base and down the back side of Glencairn back to the main coastal road and onto Muizenberg.',
    image: '11-red-hill-scala-battery.jpg',
  },
  {
    order: 12,
    name: 'Poshuys, Muizenberg',
    what3words: '///heavier.boring.comedic',
    terrain: 'Road',
    description:
      'You’ll find the Poshuys on your left just before you get to Muizenberg and Surfers Corner. One of the oldest buildings in South Africa, it was built in 1742 by the Dutch East India Company as a toll-house to levy a tax on farmers passing by to sell their produce to ships lying in Simon’s Bay.',
    image: '12-poshuys-muizenberg.jpg',
  },
  {
    order: 13,
    name: 'La Parada, Constantia Nek',
    what3words: '///bridges.lawless.lawns',
    terrain: 'Single-track, Road',
    description:
      'Get your off road skills ready! After heading towards Tokai, you’ll get taken up the green belt single-track of Constantia towards the top of Constantia Nek and the cannon at La Parada. You will have earnt yourself a drink by the time you get here! Two more cannons and some of the toughest sections still to come though.',
    image: '13-la-parada-constantia-nek.jpg',
  },
  {
    order: 14,
    name: 'Kings Blockhouse, Table Mountain',
    what3words: '///pursuer.guardian.generous',
    terrain: 'Trail',
    description:
      'Almost there! This has been a long tough section on the trails through Kirstenbosch and Newlands and up the slopes of Devil’s Peak with lots of climbing and grinding, but you’ve got some great views and just one more cannon to go!',
    image: '14-kings-blockhouse.jpg',
  },
  {
    order: 15,
    name: 'Tafelberg Road',
    what3words: '///luxurious.detouring.presses',
    terrain: 'Portage off road',
    description:
      'You’ll find the last cannon just below Tafelberg road as you come off the gravel and onto the tar. It’s a short portage down to the cannons, so take a breather on the cement couch! This is a beautiful little spot. There’s some tough single-track to come along the slopes of Signal Hill before you drop down into town and the Company’s Gardens before finishing back at East City Cycles.',
    image: '15-tafelberg-road.jpg',
  },
  {
    order: 16,
    name: 'Kramat Cannons (Signal Hill)',
    what3words: '///closely.outsides.lawsuit',
    terrain: 'Portage off road',
    description:
      'This is a portage off Signal Hill road onto the trail and a short hike up the hill and around to the cannons that look towards the Kramat of Sheikh Mohamed Hassen.',
    image: '16-kramat-cannons.jpg',
  },
];
