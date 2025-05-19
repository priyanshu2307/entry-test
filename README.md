
# 🧪 Cypress Login Test - React App

This project is a simple React-based login form with Cypress end-to-end testing.

## 📁 Project Structure

```
login-app/
├── public/
├── src/
│   ├── App.js
│   ├── Login.js
│   ├── Dashboard.js
│   ├── index.js
├── cypress/
│   └── e2e/
│       └── login.cy.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repo / Setup Your Project

If not already cloned, start a new project:

```bash
npx create-react-app login-app
cd login-app
npm install react-router-dom
```

### 2. Setup Cypress

```bash
npm install --save-dev cypress
npx cypress open
```

This will scaffold the `cypress/` folder.

---

## 🔐 Login Credentials

- **Email**: `test@example.com`
- **Password**: `password`

---

## 🛠️ Bug Fix Explanation

> The login redirect wasn't working due to a case mismatch in the filename (`Login.js` vs `login.js`) and missing routing logic. After fixing the import case sensitivity and using React Router's `useNavigate`, redirection worked. Cypress confirmed the fix.

---

## ✅ Cypress Test Cases

Located in: `cypress/e2e/login.cy.js`

```js
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
```

---

## 💻 Run the App

```bash
npm start
```

In a second terminal:

```bash
npx cypress open
```

Click Chrome, then run `login.cy.js`.

---

## 📸 Test Result

All test cases pass successfully, and user is redirected on valid login.
