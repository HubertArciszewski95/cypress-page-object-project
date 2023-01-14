import './commands/login.ts'
import './commands/verifyUrl.ts'

import addContext from 'mochawesome/addContext'

// Enable to add screenshots to the mochawesome report
Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        let item = runnable
        const nameParts = [runnable.title]

        while (item.parent) {
            nameParts.unshift(item.parent.title)
            // @ts-ignore
            item = item.parent
        }

        const fullTestName = nameParts
            .filter(Boolean)
            .join(' -- ')

        const imageUrl = `screenshots/${Cypress.spec.name
            }/${fullTestName} (failed).png`
        // @ts-ignore
        addContext({ test }, imageUrl)
    }
})
