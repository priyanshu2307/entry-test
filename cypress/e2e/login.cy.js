describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should show login form", () => {
    cy.get('input[type="email"]').should("exist");
    cy.get('input[type="password"]').should("exist");
    cy.get('button[type="submit"]').should("contain", "Login");
  });

  it("should login and redirect to dashboard", () => {
    cy.get('input[type="email"]').type("test@example.com");
    cy.get('input[type="password"]').type("password");
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/dashboard");
    cy.contains("Welcome to Dashboard").should("exist");
  });
});
