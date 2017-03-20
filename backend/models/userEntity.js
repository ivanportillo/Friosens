module.exports = (orm, db) => {
  const User = db.define('user', {
    first_name: { type: 'text' },
    last_name: { type: 'text' },
    company: { type: 'text' },
    address: { type: 'text' },
    telephone: { type: 'text' },
    enabled: { type: 'boolean' },
    admin: { type: 'boolean' },
    email: { type: 'text' },
    created_at: { type: 'date', required: true, time: true },
    password: { type: 'text' },
    salt: { type: 'text' },
    last_login: { type: 'date', time: true }
  },{
    hooks: {
      beforeValidation: () => {
        this.created_at = new Date();
      }
    }
  });
};
