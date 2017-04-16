'use strict';

const EventEmitter = require('events');

class alarmEvent extends EventEmitter {
  constructor(){
    super();
    this.event = 'fire';
  }
}

module.exports = alarmEvent;
