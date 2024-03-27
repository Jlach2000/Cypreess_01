describe("Pierwszy blok testów", () => {
// it("Wizyta na stronie GoIT", () => {
// cy.visit("https://www.edu.goit.global/account/login")
// });

it("Wpisz email", () => {
    cy.visit("https://www.edu.goit.global/account/login")
    cy.get('#user_email').type("user888@gmail.com")// wpisanie maila
    cy.get('#user_password').type("1234567890");//wpisanie hasła
    cy.get('.eckniwg2').click()// kliknięcie w login
    cy.wait(3000); // Opóźnienie przez 5000 milisekund (czyli 5 sekundy)
    cy.get('#open-navigation-menu-mobile').click()
    cy.wait(2000)
    cy.get(':nth-child(12) > .next-bve2vl').scrollIntoView(); // Przewiń do elementu z id 
    cy.wait(2000)
    cy.get(':nth-child(12) > .next-bve2vl').click() // wylogowanie

});
})
it ("Zaloguj się", () => {
    cy.visit("https://www.edu.goit.global/account/login")
    cy.get('#user_email').type("testowyqa@qa.team")// wpisanie maila
    cy.get('#user_password').type("QA!automation-1");//wpisanie hasła
    cy.get('.eckniwg2').click()// kliknięcie w login
    cy.wait(5000); // Opóźnienie przez 3000 milisekund (czyli 3 sekundy)
    cy.get('#open-navigation-menu-mobile').click()
    cy.get(':nth-child(8) > .next-bve2vl').scrollIntoView(); // Przewiń do elementu z id 
    cy.get(':nth-child(8) > .next-bve2vl').click();// wylogowanie
    cy.wait(5000); // Opóźnienie przez 5000 milisekund (czyli 5 sekundy)
})