const userKeys = require('./schema')

module.exports = class UserRepo{
    #db
    #setupDomain()
    #User
    constructor(db){
        this.#db = db
        this.#User = this.#setupDomain()
    }

    #setupDomain(){
        const mongoose = this.#db.mongooseSetup()
        const Schema = mongoose.Schema
        const UserSchema = new Schema(userKeys)
        const User = mongoose.model('RestoUser',UserSchema)
        return User
    }

    async createUser(data){
        const user = new this.#User(data)
        const result = await user.save()
        return result
    }
}