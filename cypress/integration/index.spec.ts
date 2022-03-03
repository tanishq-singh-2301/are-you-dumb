/// <reference types="cypress" />

describe('Home Page', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("Title", () => {
        cy.contains('System message');
    })

    it('are you dumb', () => {
        cy.contains('Are you dumb?');
    })

    describe("buttons", () => {
        it('Yes', () => {
            cy.contains('Yes');
            cy.contains('Yes').click();
            cy.contains('I knew it.!');
        });

        it('No', () => {
            cy.contains('No');

            it('Pressing btn 100 times', () => {
                for (var i = 1; i <= 100; i++)
                    cy.contains('No').click();

                cy.contains('You pressed it 100 times');
            })

            it('Pressing btn 101-999 times', () => {
                for (var i = 101; i <= 999; i++) {
                    cy.contains('No').click();
                    cy.contains(`${i} times.`);
                }
            })

            it('Pressing btn 1000 times', () => {
                cy.contains('No').click();
                cy.contains('You are done now.');
            })

            it('Pressing btn 1000 times', () => {
                cy.contains('No').click();
                cy.contains('I knew it.!')
            })


        })
    })

})

export { }