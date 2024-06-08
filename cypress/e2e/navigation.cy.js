describe("Test navigation", () => {
  it("Test navigation", () => {
    cy.visit("http://localhost:5173");
    cy.get("a").contains("About").click();
    cy.url().should("include", "/about");
  });
});
