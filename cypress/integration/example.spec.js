Cypress.config('eyesTimeout', 180000);

describe('Hello world', () => {
   
   it('works', () => {
    cy.visit('https://applitools.com/helloworld');

    cy.eyesOpen({
      testName: 'Hello World!',
      //All global options are in the applitools.config.js
    });

    if (cy.contains('body', 'section')) {
       cy.eyesCheckWindow({ tag: "Main Page", ignore: { selector: 'div.fancy.title.primary' } });
    } else {
      cy.eyesCheckWindow('Main Page');
    }

    cy.get('button').click();

    cy.get('button').click();

    cy.eyesCheckWindow('Second Check!');
    
    cy.eyesClose();
    
   });

});