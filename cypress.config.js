import { defineConfig } from "cypress";
import fs from "fs-extra";

export default defineConfig({
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
      on('task', {
        saveURL(url) {
          fs.writeFile('./hw11.json', url , err => {
            if (err) return console.error(err)
            console.log('Update was successful!')
          })
          return null
        }
      })
    }
  }
});
