import googleHomePage from '../../pages/googleHome'
import googleResults from '../../pages/googleResults'
import brnoHome from '../../pages/brnoHome'
import goToBrno from '../../pages/goToBrno'

describe('POM js test', () => {

  it('Brno test', () => {
    googleHomePage.goTo('https://www.google.com');
    googleHomePage.clickDeny();
    googleHomePage.enterString('brno');
    googleResults.clickFirstLink();
 
  })
})