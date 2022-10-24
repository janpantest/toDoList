import 'cypress-xpath'

class toDoHome {

    headers = {
        header: '//h1[contains(text(), "ToDo App")]',
    }

    inputFields = {
        newToDo: '//input[@name="newToDo"]',
    }

    buttons = {
        submit: '//button[contains(text(), "Add ToDo")]',
        remove: '//li/button[contains(text(), "Remove")]',
    }

    labels = {
        newTask: '(//ul/li)[1]',
        noTask: '//h4[contains(text(), "Empty list.")]',
        taskName: '(//ul/li)[1]',
    }

    checkHeader() {
        cy.xpath(this.headers.header);
    }

    enterNewToDo(string){
        cy.xpath(this.inputFields.newToDo).type(string);
        cy.xpath(this.buttons.submit).click();
    }

    checkCreatedTask() {
        cy.xpath(this.labels.newTask);
    }

    checkCreatedTaskWithString(string) {
        cy.xpath(this.labels.taskName)
        .should('contain.text', string);
    }
    
    removeTask() {
        cy.xpath(this.buttons.remove).click();
    }

    checkNoTask() {
        cy.xpath(this.labels.noTask);
    }

    checkNoTaskWithString(string) {
        cy.xpath(this.labels.taskName)
        .should('not.contain.text', string);
    }

}

module.exports = new toDoHome();
module.exports.toDoHome = toDoHome;
