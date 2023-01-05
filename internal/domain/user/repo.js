import userKeys from './schema.js'

export default class UserRepo{
    #db
    #user
    constructor(db){
        this.#db = db
        this.#user = this.setupDomain()
    }

    setupDomain(){
        const mongoose = this.#db.mongooseSetup()
        const Schema = mongoose.Schema
        const UserSchema = new Schema(userKeys)
        const User = mongoose.model('RestoUser',UserSchema)
        return User
    }

    async createUser(data){
        const user = new this.#user(data)
        const result = await user.save()
        return result
    }
}