const { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } = require('../src/index');

test('Create Bowerman', () => {
  const bowman = new Bowerman('Archer');
  expect(bowman.name).toBe('Archer');
  expect(bowman.type).toBe('Bowman');
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
});

test('Create Swordsman', () => {
  const swordsman = new Swordsman('Warrior');
  expect(swordsman.name).toBe('Warrior');
  expect(swordsman.type).toBe('Swordsman');
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});

test('Create Magician', () => {
  const magician = new Magician('Wizard');
  expect(magician.name).toBe('Wizard');
  expect(magician.type).toBe('Magician');
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});

test('Create Daemon', () => {
  const daemon = new Daemon('DarkLord');
  expect(daemon.name).toBe('DarkLord');
  expect(daemon.type).toBe('Daemon');
  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(40);
});

test('Create Undead', () => {
  const undead = new Undead('Skeleton');
  expect(undead.name).toBe('Skeleton');
  expect(undead.type).toBe('Undead');
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
});

test('Create Zombie', () => {
  const zombie = new Zombie('Walker');
  expect(zombie.name).toBe('Walker');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
});