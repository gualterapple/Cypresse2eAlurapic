
describe('Login de usuários alura pic', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.intercept('POST','https://apialurapic.herokuapp.com/user/login',{
            statusCode: 400
        }).as('stubPost');
    })

    it('buscar fotos do flavio', () => {      
        cy.request({   
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'   
            }).then((res => {
                expect(res.status).to.be.equal(200);
                expect(res.body).is.not.empty;
                expect(res.body[0]).to.have.property('description');
                expect(res.body[0].description).to.be.equal('Farol iluminado');
            })); 
    });

    it('fazer login de usuario valido', () => {    
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible'); 
    });

    it('fazer login de usuario invalido', () => {    
        cy.login('jack', '123');
        cy.on('window:alert',(str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    });

})