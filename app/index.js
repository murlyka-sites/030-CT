const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express()

app
	.use(express.static(path.join(__dirname, 'public')))
	// .get('/', (req, res) => res.render('public/index.html'))
	.listen(PORT, () => console.log(`localhost://${ PORT }`))

