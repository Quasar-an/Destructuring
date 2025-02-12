class Character {
    constructor(name, type) {
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('Имя должно быть строкой от 2 до 10 символов.');
      }
  
      const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (!allowedTypes.includes(type)) {
        throw new Error(`Неверный тип персонажа. Доступные типы: ${allowedTypes.join(', ')}.`);
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = 0;
      this.defence = 0;
    }
  
    levelUp() {
      if (this.health === 0) {
        throw new Error('Нельзя повысить уровень мертвого персонажа.');
      }
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  
    damage(points) {
      if (this.health === 0) {
        throw new Error('Мертвый персонаж не может получать урон.');
      }
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
  
  module.exports = Character;