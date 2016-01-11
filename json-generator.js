var jsf = require('json-schema-faker');
var schema=
{
    "type":"array",
    "items":
    {
      "type":"object",
     "properties": {
      "topicID": {
        "type": "string",
      },
      "topicName":{
        "type":"string",
        "faker": "name.findName"
      },
      "topicIcon":
      {
        "type":"string",
        "faker":"image.avatar"
      },
      "topicCategory":
      {
        "type":"string",
        "faker": "name.findName"
      },

      "topicDescription":
      {
        "type":"string",
      },

      "noOfFollowers":
      {
        "type":"integer",
      }
    }
    },
  "minitems":200,
  "maxitems":300
};




var sample=jsf(schema);
console.log(JSON.stringify(sample));
