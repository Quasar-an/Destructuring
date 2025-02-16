const extractSpecialAttacks = require('../src/extractSpecialAttacks');

describe('extractSpecialAttacks', () => {
  it('должна вернуть пустой массив, если special не существует', () => {
    const character = {};
    const result = extractSpecialAttacks(character);
    expect(result).toEqual([]);
  });

  it('должна вернуть массив с корректными данными для всех атак', () => {
    const character = {
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    };

    const expected = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ];

    const result = extractSpecialAttacks(character);
    expect(result).toEqual(expected);
  });

  it('должна работать корректно, если массив special пустой', () => {
    const character = { special: [] };
    const result = extractSpecialAttacks(character);
    expect(result).toEqual([]);
  });

  it('должна игнорировать лишние свойства в объектах special', () => {
    const character = {
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
          extraField: 'Это лишнее поле',
        },
      ],
    };

    const expected = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
    ];

    const result = extractSpecialAttacks(character);
    expect(result).toEqual(expected);
  });
});
