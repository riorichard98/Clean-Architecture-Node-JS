import { Mongoose } from "mongoose"
const mongoose = new Mongoose()

export default class Mongo {
    #mongoUri
    constructor(mongoUri) {
        this.#mongoUri = mongoUri
    }

    mongooseSetup() {
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