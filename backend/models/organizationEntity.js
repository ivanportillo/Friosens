'use strict';

module.exports = (orm, db) => {
  const Organization = db.define('organization', {
    name: { type: 'text', required: true },
    type: { type: 'enum', values: ["particular", "company", "freelance"] }
  });
};