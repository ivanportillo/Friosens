'use strict';

const registerAlarmListener = require('../listeners/registerAlarmListener');

class alarmDispatcher extends registerAlarmListener {
  constructor(type, unitId, readingId) {
    super();
    this.type = type;
    this.unitId = unitId;
    this.readingId = readingId;
  }
  fire() {
    this.emit(this.event, this.type, this.unitId, this.readingId);
  }
}

module.exports = alarmDispatcher;
