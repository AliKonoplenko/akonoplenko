import fs from 'fs-extra'
import fetch from 'node-fetch'
import log4js from 'log4js'


const logger = log4js.getLogger()
logger.level = "debug"


const dataUser = {
    "username": "Frank",
    "email": "frank@mail.com",
    "password": "54Tr90i30o3o@"
}

async function createUser(data) {
    try {
        const response = await fetch('https://reqres.in/api/user/register',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
        await logger.debug("request was send successfully")

        logger.debug("Got cheese.")
        logger.debug("Cheese is quite smelly.")
        logger.debug("Cheese is too ripe!")
        logger.debug("Cheese was breeding ground for listeria.")

        const dataRStatusCode = await response.status
        const responsed = await response.json()
        console.log(dataRStatusCode)
        console.log(responsed)
    } catch (error) {
        console.log(error)
    }
}

createUser(dataUser)