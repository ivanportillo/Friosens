const alarmEvent = require('../alarmEvent');
const alarmRepository = require('../../repository').Alarm;
const getDescription = require('../../rules/descriptions/getDescription');

class registerAlarmListener extends alarmEvent{
  constructor(){
    super();
    this.addListener(this.event, this.onAlarmFired);
  }

  onAlarmFired(type, unitId, readingId) {
    const alarm = {
      title: type,
      unit_id: unitId,
      active: true,
      description: getDescription(type),
      reading_id: readingId
    };
    alarmRepository.create(alarm, err => { if(err) console.log(err); });
  }
}

module.exports = registerAlarmListener;