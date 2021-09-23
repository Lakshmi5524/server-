const express = require('express')

const Pizza = require('./models/pizzaModel')
const db = require("./db.js")
const pizzasRoute = require('./routes/pizzasRoute')

const app = express();
app.use(express.json());

app.use('/api/pizzas/', pizzasRoute)

app.get('/', (req, res) => {
	res.send('New Server Working' + port);
});


app.get("/getpizzas", (req, res) => {
	Pizza.find({}, (err, docs) => {
		if (err) {
			console.log(err);
		}

		else {
			res.send(docs)
		}

	})
})


const port = process.env.PORT || 5000
app.listen(port, () => 'Server Running on port port');