import toDoHome from '../../pages/toDo'


describe('ToDo list FE', () => {

  const entry = (Math.random() + 1).toString(36).substring(7);

  it('ToDo list front', () => {
    cy.visit('http://localhost:8080/');
    toDoHome.checkHeader();
    toDoHome.checkNoTask();
    toDoHome.enterNewToDo(entry);
    // toDoHome.checkCreatedTask();
    toDoHome.checkCreatedTaskWithString(entry + ' Remove');
    toDoHome.removeTask();
    toDoHome.checkNoTask();
  })
})