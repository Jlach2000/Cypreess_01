describe("Zaloguj się", () => {

it("Drugie zalogowanie", () => {
    cy.signIn("user888@gmail.com", "1234567890");
    cy.get(':nth-child(12) > .next-bve2vl').scrollIntoView(); // Przewiń do elementu z id 
    cy.wait(2000);
    cy.get(':nth-child(12) > .next-bve2vl').click() // wylogowanie

});
})
it ("Pierwsze zalogowanie", () => {
cy.signIn("testowyqa@qa.team", "QA!automation-1")
cy.get(':nth-child(8) > .next-bve2vl').scrollIntoView(); // Przewiń do elementu  id 
    cy.get(':nth-child(8) > .next-bve2vl').click();// wylogowanie
    cy.wait(5000); // Opóźnienie przez 5000 milisekund 
})