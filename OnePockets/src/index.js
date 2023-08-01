const express = require('express');
const bodyParser = require('body-parser');
const route = require('./Routes/Route');
const { default: mongoose } = require('mongoose');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://singhshreya425:shreyasingh1234@cluster0.yxxvuvg.mongodb.net/shreya526", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route);

// Task 1: Basic Node.js Server
// app.get('/', (req, res) => {
//     res.send('Hello World!');
//     console.log('abc')
//   });

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});