let Spaceship = require('./Spaceship');
let CrewMember = require('./CrewMember');
let Rocket = require('./Rocket');

let launchpad = (ship, crew, rocket) => {
  console.log('This is your preflight message');
  console.log('Hello ' + ship.name + '');
  ship.loadCrew(crew);
  console.log(ship.captain().name + ' is the captain');
  rocket.addFuel(20);
  ship.mountPropulsion(rocket);
  ship.takeoff();
};

let trainCrew = (crew) => {
  let trained = crew.map((member)=> {
    let person = new CrewMember(member);
      person.trained = true;
      return person;
  });
  return trained;
};
let names = ['evi', 'rex'];
let trainedCrew = trainCrew(names);
let ourship = new Spaceship('challenger');
let ourRocket = new Rocket();


launchpad(ourship, trainedCrew, ourRocket);
