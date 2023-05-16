const extractSpecialAttacks = ({ special }) => {
    if (!special) {
      return [];
    }
  
    return special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
      id,
      name,
      icon,
      description,
    }));
  };

  module.exports = extractSpecialAttacks;