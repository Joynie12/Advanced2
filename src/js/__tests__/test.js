const extractSpecialAttacks = require('../advanced');

describe('extractSpecialAttacks', () => {
  it('should extract special attacks with description', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
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
          description: 'Нокаутирующий удар оглушает противника',
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
        description: 'Нокаутирующий удар оглушает противника',
      },
    ];

    expect(extractSpecialAttacks(character)).toEqual(expected);
  });

  it('should extract special attacks with default description', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
        },
      ],
    };

    const expected = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ];

    expect(extractSpecialAttacks(character)).toEqual(expected);
  });

  it('should return an empty array if special attacks are not provided', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
    };

    expect(extractSpecialAttacks(character)).toEqual([]);
  });
});
