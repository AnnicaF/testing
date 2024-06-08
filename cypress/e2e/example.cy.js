// https://on.cypress.io/api

describe("Renders website", () => {
  it("Visits the website", () => {
    cy.visit("http://localhost:5173");
  });
});

describe("request site", () => {
  it("checks status code", () => {
    cy.request("http://localhost:5173").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

