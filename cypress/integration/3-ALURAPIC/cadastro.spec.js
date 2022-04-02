
describe('Cadastro de usuários alura pic', () => {

    beforeEach(() => {
        cy.visit('/')
    })


    it('verifica mensagem de email invalido', () => {      
        cy.contains('a', 'Register now').click(); 
        cy.contains('button', 'Register').click(); 
        cy.get('input[formcontrolname="email"]').type('gualter');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible'); 
    });

    it('verifica mensagem validacao', () => {      
        cy.contains('a', 'Register now').click(); 
        cy.contains('button', 'Register').click(); 
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible'); 
        cy.contains('button', 'Register').click(); 
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible'); 
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible'); 
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible'); 
    });

    it('verifica mensagem de senha com menos de 8 caracteres invalido', () => {      
        cy.contains('a', 'Register now').click();  
        cy.contains('button', 'Register').click(); 
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click(); 
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible'); 
    });

    const usuarios = require('../../fixtures/usuarios.json');

    usuarios.forEach(u => {

        it(`Cadastrar novo usuário ${u.userName}`, () => {    
            cy.contains('a', 'Register now').click(); 
            cy.contains('button', 'Register').click(); 
            cy.get('input[formcontrolname="userName"]').type(u.userName);
            cy.get('input[formcontrolname="fullName"]').type(u.fullName);
            cy.get('input[formcontrolname="email"]').type(u.email);
            cy.get('input[formcontrolname="password"]').type(u.password);
            cy.contains('button', 'Register').click(); 
        });
        
    });

})