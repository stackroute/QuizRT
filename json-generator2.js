var jsf = require('json-schema-faker');
var schema=
{
  "type": "object",
  "properties": {
    "userId":{
      "type":"integer",
      "minimum":0,
      "maximum":1000000
    },
    "name": {
      "type": "string",
      "faker": "name.findName"
    },
    "age":{
      "type":"integer",
      "minimum":1,
      "maximum":80
    },
    "imageLink":
    {
      "type":"string",
      "faker":"image.avatar"
    },
    "country":
    {
      "type":"string",
      "faker":"address.country"
    },

    "flagLink":
    {
      "type":"string",
      "faker":"image.avatar"
    },
    "badge":
    {
      "type":"array",
      "items":
      {
        "enum":["computer-master","turin-master","shaana"]
      },
      "minitems":1,
      "maxitems":1
    },
    "totalGames":
    {
      "type":"integer",
      "minimum":0,
      "maximum":"100000"
    },
    "followers":
    {
      "type":"integer",
      "minimum":0,
      "maximum":"100000"
    },
    "following":
    {
      "type":"integer",
      "minimum":0,
      "maximum":"100000"
    },
    "wins":
    {
      "type":"integer",
      "minimum":0,
      "maximum":"100000"
    },
    "followedtopics":
    {
      "type":"array",
      "items":
      {
       "type":"object",
      "properties": {
        "topicId":
        {
          "type":"string",
          "minlength":6,
          "maxlength":10
        },
        "topicName":{
          "type": "string",
          "faker": "lorem.words",
        },
        "topicImage":
        {
          "type":"string",
          "faker":"image.imageUrl"
        },
        "gamesPlayed":
        {
          "type":"integer",
          "minimum":0,
          "maximum":500
        },
        "gamesWon":
        {
          "type":"integer",
          "minimum":0,
          "maximum":500
        },
        "level":
        {
          "type":"integer",
          "minimum":0,
          "maximum":500
        }
      },
      "required": [
        "topicId",
        "topicName",
        "topicImage",
        "gamesplayed",
        "gamesWon",
        "level"
      ]
    },
    "minitems":2,
    "maxitems":100
  },
    "friends": {
      "type": "array",
      "items":{
        "type":"string"
      },
      "minitems":0,
      "maxitems":1000
    }

  },
  "required": [
    "userId",
    "name",
    "age",
    "imageLink",
    "country",
    "flagLink",
    "badge",
    "totalGames",
    "followers",
    "following",
    "wins",
    "followedtopics",
    "friends"
  ]
}
var sample=jsf(schema);
console.log(sample);
