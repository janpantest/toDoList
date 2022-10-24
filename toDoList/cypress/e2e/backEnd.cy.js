
describe('api test', () => {

  

  it('Login incorrect', function () {
    cy.request({
      method: 'POST',
      url: 'https://localhost:5001/api/ToDoItems',
      body: {
        'text': 'newTask'
      }
    }).then((res) =>{
      // expect(res.status).to.eq(201);
      // expect(res.body).has.property('text', 'newTask')
      // cy.log(JSON.stringify(res))
      // cy.log(res.body.id)
      // console.log(JSON.stringify(res.body.id))
      const taskId = res.body.id
      return taskId
      // cy.log(JSON.stringify(res))
    })
    .then((taskId) => {
        cy.request({
          method: 'GET',
          url: 'https://localhost:5001/api/ToDoItems/'+taskId
        }).then((resp) =>{
          expect(resp.status).to.eq(200)
          expect(resp.body).to.have.property('id', taskId)
        })
    })
    // .then((taskId) =>{
    //   cy.request({
    //     method: 'DELETE',
    //     url: 'https://localhost:5001/api/ToDoItems/'+taskId
    //   }).then((resp) =>{
    //     expect(resp.status).to.eq(200)
    //   })
    // })
  })



})


