/// <reference types= "cypress" />
let login = "muhyeayesh"
let password = "mmmm1998"

describe('the test for our website', () => {
    it('contain test', () => {
        cy.visit("https://automationteststore.com/")
        cy.get('#customer_menu_top > li > a').click()
        cy.get('#loginFrm_loginname').type(login)
        cy.get('#loginFrm_password').type(password)
        cy.get('#loginFrm > fieldset > .btn').click()
        cy.get(':nth-child(1) > .active').click()
        cy.get('#block_frame_latest_1770 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click()
        cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click()
        cy.get('#cart_checkout1').click()
        cy.get('#checkout_btn').click()
        cy.get('.maintext').should('include.text', ' Your Order Has Been Processed!')
    });
});