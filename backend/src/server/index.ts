import bodyParser from 'body-parser'
import * as PuppeteerFunctions from '../functions/puppeteer'
import express from 'express'


class API {
    public server: express.Application

    constructor() {
        this.server = express()
        this.middleware()
        this.routes()
    }
    
    middleware() {
        this.server.use(bodyParser.json())
        this.server.use(bodyParser.urlencoded({ extended: true }))
    }
    
    routes() {
        this.server.route('/').get((req, res) => res.status(200).json({  '/api/search': 'blablabla'  }))
        this.server.route('/api/search/:profile').get(PuppeteerFunctions.default.searchProfile)
    }
}

export default new API()