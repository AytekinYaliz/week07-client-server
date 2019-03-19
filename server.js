var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

const cities = [
  { id: 1, name: "london", location: "south east" },
  { id: 2, name: "birmingham", location: "midlands" },
  { id: 3, name: "glasgow", location: "scotland" },
  { id: 4, name: "dublin", location: "ireland" },
  { id: 5, name: "luleburgaz", location: "there" }
];

app.get("/", function(req, res) {
  res.send(`
    <html>
        <body>
            <h1> the root</h1>
            <p> this is my first server application!!</p>
        </body>
    </html>
  `);
});

app.get("/cities", function(req, res) {
  console.log( 'hit /cities' );
  for(let i=0; i < 3000000000; i++) {
    let s = i;
  }
  res.json(cities);
});

// app.get("/cities/:id", function(req, res) {
//   const city = cities.find(x => x.id == req.params.id);
//   res.json(city);
// });

app.get("/cities/second", function(req, res) {
  const name = req.query.name;
  const location = req.query.location;

  const result = cities.filter(x => x.name.indexOf(name) > -1)
  res.json(result);
});

app.post("/cities", function(req, res) {
  let newCity = req.body;
  newCity.id = cities.length+1;

  cities.push(newCity)

  res.send();
});

app.get("/myCity", function(req, res) {
  res.send(`
    <html>
        <head>
            <style>
                table {
                    border: 1px solid red;
                }
            </style>
        </head>
        <body>
            <h1> the root</h1>
            <table>
                <tr>
                    <td>
                        ${cities[0].name}
                    </td>
                </tr>
                <tr>
                    <td>
                        ${cities[1].name}
                    </td>
                </tr>
                <tr>
                    <td>
                        ${cities[2].name}
                    </td>
                </tr>
            </table>
            <p> this is my first server application!!</p>
        </body>
    </html>
  `);
});

app.listen(3000);
