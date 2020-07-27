const mongoose = require('mongoose');

const SpecificationsSchema = new mongoose.Schema({
  frontderailleour: {
    name: {
      type: String,
      default: 'Generic',
    },
    description: {
      type: String,
    },
  },
  rearderailleour: {
    name: {
      type: String,
      default: 'Generic',
    },
    description: {
      type: String,
    },
  },
  shifter: {
    name: {
      type: String,
      default: 'Generic',
    },
    description: {
      type: String,
    },
  },
  handlebar: {
    name: {
      type: String,
      default: 'Generic',
    },
    description: {
      type: String,
    },
  },
  tire: {
    name: {
      type: String,
      default: 'Generic',
    },
    description: {
      type: String,
    },
  },
  rim: {
    name: {
      type: String,
      default: 'Generic',
    },
    description: {
      type: String,
    },
  },
  suspension: {
    name: {
      type: String,
      default: 'Generic',
    },
    description: {
      type: String,
    },
  },
  chain: {
    name: {
      type: String,
      default: 'Generic',
    },
    description: {
      type: String,
    },
  },
  frontbrake: {
    name: {
      type: String,
      default: 'Generic',
    },
    description: {
      type: String,
    },
    type: {
      type: String,
      default: 'Power',
    },
  },
  rearbrake: {
    name: {
      type: String,
      default: 'Generic',
    },
    description: {
      type: String,
    },
    type: {
      type: String,
      default: 'Power',
    },
  },
});

module.exports = mongoose.model('Specifications', SpecificationsSchema);
