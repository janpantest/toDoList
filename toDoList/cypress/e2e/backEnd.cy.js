
describe('api test', () => {

  const taskName = (Math.random() + 1).toString(36).substring(7);

  it('back end', function () {
    cy.request({
      method: 'POST',
      url: 'https://localhost:5001/api/ToDoItems',
      body: {
        'text': taskName
      }
    }).then((resPost) =>{
      const taskId = resPost.body.id
      return taskId
    })
      .then((taskId) => {
          cy.request({
            method: 'GET',
            url: 'https://localhost:5001/api/ToDoItems/'+taskId
          }).then((resGet) =>{
            expect(resGet.status).to.eq(200)
            expect(resGet.body).to.have.property('id', taskId)
            }).then((res) => {
                cy.request({
                  method: 'DELETE',
                  url: 'https://localhost:5001/api/ToDoItems/'+taskId
                }).then((resDel) => {
                  expect(resDel.status).to.eq(204)
                  }).then((res) => {
                    cy.request({
                      method: 'GET',
                      url: 'https://localhost:5001/api/ToDoItems/'
                    }).then((resGet1) =>{
                      expect(resGet1.status).to.eq(200)
                      cy.log(JSON.stringify(resGet1))
                      // expect(resGet1.body).to.have.property('id', )
                      expect(resGet1.body).not.to.have.property('id',   )
                      })


                  })
              })
          })

  })

})


