const { Mongoose } = require('mongoose')
const mongoose = new Mongoose()

module.exports = class Mongo {
    #mongoUri
    constructor(mongoUri) {
        this.#mongoUri = mongoUri
    }

    mongoose() {
        mongoose.set('debug', (collectionName, method, query, doc) => {
            console.log(`${collectionName}.${method}`, JSON.stringify(query), doc)
        })
        mongoose
            .connect(this.#mongoUri, { useNewUrlParser: true, config: { autoIndex: true } })
            .then(() => console.log('connection successful'))
            .catch((err) => console.log(err))
        return mongoose
    }
}