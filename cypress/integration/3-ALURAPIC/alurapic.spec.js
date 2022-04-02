describe('Usabilidade página inicial', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/')
    });

    it('Verifica mensagem de tela inicial', () => {    
        cy.contains('ap-vmessage', 'User name is required').should('be.visible'); 
        cy.contains('ap-vmessage', 'Password is required').should('be.visible'); 
        cy.get('button[type="submit"]').should('be.disabled');
    });
})