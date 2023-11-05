import { defineConfig } from "cypress";
import fs from "fs-extra";
import { configurePlugin } from "cypress-mongodb";

export default defineConfig({
  env: {
    mongodb: {
      uri: 'mongodb://127.0.0.1:27017',
      database: 'test'
    }
  },
  e2e: {
    experimentalStudio: true,
    viewportHeight: 1080,
    viewportWidth: 2065,
    // baseUrl: 'https://www.cypress.io/',

    retries: {
      openMode: 2,
      runMode: 2
    },
    setupNodeEvents(on, config) {
      on('task', {log(message) {console.log(message); return null }})
      on('task', {
        saveURL(url) {
          fs.writeFile('./hw11.json', url , err => {
            if (err) return console.error(err)
            console.log('Update was successful!')
          })
          return null
        }
      });
      configurePlugin(on)
    }
  }
});
