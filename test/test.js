var should   = require('should'),
    events   = require('events'),
    helpers  = require('../lib/helpers'),
    Wearable = require('../lib/wearable'),
    kit;

beforeEach(function () {
  kit = new Wearable({
    name: 'myBleDevice'
  });
});

describe('Wearable class', function () {
  it('should be an instance of Wearable class', function () {
    var wearableInstance    = Wearable({ name: 'myBleDevice' }),
        newWearableInstance = new Wearable({ name: 'myBleDevice' });

    wearableInstance.should.be.an.instanceOf(Wearable);
    newWearableInstance.should.be.an.instanceOf(Wearable);
  });

  it('should throw error if no wearable name is set', function () {
    (function () {
      var kit = new Wearable();
    }).should.throw();
  });

  it('should NOT throw error if wearable name is set', function () {
    (function () {
      var kit = new Wearable({ name: 'myBleDevice' });
    }).should.not.throw();
  });

  it('should be an instance of EventEmitter', function () {
    kit.should.be.an.instanceOf(events.EventEmitter);
  });
});


describe('Wearable method', function () {
  it('findWearable should be a function', function () {
    kit.findWearable.should.be.instanceof(Function);
  });

  it('connect should be a function', function () {
    kit.connect.should.be.instanceof(Function);
  });

  it('disconnect should be a function', function () {
    kit.disconnect.should.be.instanceof(Function);
  });

  it('sendCommand should be a function', function () {
    kit.sendCommand.should.be.instanceof(Function);
  });

  it('onData should be a function', function () {
    kit.onData.should.be.instanceof(Function);
  });

  it('ledOFF should be a function', function () {
    kit.ledOFF.should.be.instanceof(Function);
  });

  it('ledON should be a function', function () {
    kit.ledON.should.be.instanceof(Function);
  });

  it('playMelody should be a function', function () {
    kit.playMelody.should.be.instanceof(Function);
  });

  it('luminosity should be a function', function () {
    kit.luminosity.should.be.instanceof(Function);
  });

  it('temperature should be a function', function () {
    kit.temperature.should.be.instanceof(Function);
  });

  it('isConnected should be a function and return a boolean (false by default)', function () {
    var connected = kit.isConnected();

    kit.isConnected.should.be.instanceof(Function);
    connected.should.be.instanceof(Boolean);
    connected.should.be.false;
  });
});


describe('Helpers', function () {
  it('checkValue should be a function and return a number between 0 and 255', function () {
    var val  = helpers.checkValue();
        val2 = helpers.checkValue('255');
        val3 = helpers.checkValue('0');
        val4 = helpers.checkValue('lorem ipsum');
        val5 = helpers.checkValue(10);

    helpers.checkValue.should.be.instanceof(Function);

    val.should.eql(255);
    val2.should.eql(255);
    val3.should.eql(0);
    val4.should.eql(255);
    val5.should.eql(10);
  });

  it('log should be a function', function () {
    helpers.log.should.be.instanceof(Function);
  });
});
