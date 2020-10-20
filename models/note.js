const mongoose = require('mongoose')
mongoose.set('useUnifiedTopology', true);
/*
if ( process.env.NODE_ENV !== 'production' ) {
    require('dotenv').config()
}

const url = process.env.MONGODB_URI
mongoose.connect(url)
*/


const url = 'mongodb+srv://database_normal_user:normaali123@villen-cluster.pxg9c.mongodb.net/fullstack-user?retryWrites=true&w=majority'
mongoose.connect(url, { useNewUrlParser: true });

const Note = mongoose.model('Note', {
    content: String,
    date: Date,
    important: Boolean
})

module.exports = Note