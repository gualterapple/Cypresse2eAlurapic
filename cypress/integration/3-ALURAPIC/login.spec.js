
describe('Login de usuários alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/')
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
        cy.login('falvio', '123');
        cy.contains('a', '(Logout)').should('be.visible'); 
    });

    it('fazer login de usuario invalido', () => {    
        cy.login('jack', '123');
        cy.on('window:alert',(str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    });

})