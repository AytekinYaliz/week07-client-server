const axios = require('axios');


console.log( 'start' )

axios
  .get("http://localhost:3000/cities/second?name=lo")
  .then(function(response) {
    console.log( 'response comes' )

    console.log(response.data);
  })
  .catch(function(error) {
    console.log(error);
  });

console.log( 'finish' )
