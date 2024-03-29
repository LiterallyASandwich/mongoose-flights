const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
      type: Date,
    }
  }, {
    timestamps: true
  });
  

const flightSchema = new Schema({
    airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
    },
    airport: {
    type: String, 
    default: 'DEN',
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    
    },
    depart: {
    type: Date,
    },
    destinations: [destinationSchema],
    ticket: [{
      type: Schema.Types.ObjectId,
      ref: 'Ticket'
    }],
    }, {
        timestamps: true
  });

  module.exports = mongoose.model('Flights', flightSchema);