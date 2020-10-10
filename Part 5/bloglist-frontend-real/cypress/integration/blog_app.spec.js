describe("Blog app", function () {
	beforeEach(function () {
		cy.request("POST", "http://localhost:3001/api/testing/reset");
		const user = {
			name: "Matti Luukkainen",
			username: "mluukkai",
			password: "salainen",
		};
		cy.request("POST", "http://localhost:3001/api/users/", user);
		cy.visit("http://localhost:3000");
	});

	it("Login form is shown", function () {
		// ...
		cy.contains("login").click();
		cy.get("#username").type("mluukkai");
		cy.get("#password").type("salainen");
		cy.get("#login-button").click();

		cy.contains("Matti Luukkainen logged-in");
	});
});
