import { ObjectId } from 'mongodb'


describe('Find data', () => {

    conteXt('usage of mongodb', () => {
        it('findMany', () => {
            cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
                cy.task('log', mongoresult)
            })
        })

    })


})