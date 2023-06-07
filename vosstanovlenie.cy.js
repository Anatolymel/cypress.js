describe('Форма логина', function () {

    it('Венрый логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();// найти и кликнуть забыл пароль
        cy.get('#mailForgot').type('german@dolnikov.ru');//найти поле указать почту
        cy.get('#restoreEmailButton').click();//кликнуть кнопку отправить код
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
        })
})
