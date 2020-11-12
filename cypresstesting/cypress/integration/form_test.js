describe("Testing Form Inputs", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Inputs", function () {
    cy.get("[data-cy=name]")
      .type("Juan Perez")
      .should("have.value", "Juan Perez");
    cy.get("[data-cy=email]")
      .type("juanperez@domain.com")
      .should("have.value", "juanperez@domain.com");
    cy.get("[data-cy=password]")
      .type("mypassword")
      .should("have.value", "mypassword");
    cy.get("[data-cy=checkbox]").check().should("be.checked");
    cy.get("[data-cy=submit]").click();
  });
  it("Inputs", function () {
    cy.get("[data-cy=name]")
      .type("Juan Perez")
      .should("have.value", "Juan Perez");
    cy.get("[data-cy=email]")
      .type("juanperez@domain.com")
      .should("have.value", "juanperez@domain.com");
    cy.get("[data-cy=password]")
      .type("mypassword")
      .should("have.value", "mypassword");
    cy.get("[data-cy=checkbox]").check().should("be.checked");
    cy.get("[data-cy=submit]").click();
  });
});
