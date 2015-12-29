var jsf = require('json-schema-faker');

var schema = {
  type: 'array',
  minItems: 1000,
  maxItems: 1000,
  items: {
      type: 'object',
      properties: {
        questionId: {
          type: 'string',
          minLength: 5,
          maxLength:5,
          faker: 'random.number'
        },
        question: {
          type: 'string',
          minLength: 45,
          maxLength:70,
          faker: 'lorem.sentence'

        },
        correctIndex: {
          type: 'integer',
          minimum:1,
          maximum:4
        },
        option1: {
          type: 'string',
          minLength: 6,
          maxLength:16,
          faker: 'name.firstName'

        },
        option2: {
          type: 'string',
          minLength: 5,
          maxLength:8,
          faker: 'name.firstName'
      },

        option3: {
          type: 'string',
          minLength: 5,
          maxLength:8,
          faker: 'name.firstName'
    },

        option4: {
          type: 'string',
          minLength: 5,
          maxLength:8,
          faker: 'name.firstName'
        },
        topicId: {
          type: 'string',
          minLength: 2,
          maxLength:2,
          faker: 'random.number'

        },
        image:{
          type: 'string',
        faker: 'image.avatar'
        }
      },
      required: ['questionId', 'question','image' ,'correctIndex','option1','option2','option3','option4','topicId']
    },
  definitions: {
    positiveInt: {
      type: 'integer',
      minimum: 0,
      exclusiveMinimum: true
    }
  }
};

var sample = jsf(schema);

console.log(JSON.stringify(sample, null, 2)); //JSON
