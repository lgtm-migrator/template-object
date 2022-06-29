
const {
  // writingFile
  factoryFour
} = require('../src/index');


const settings = {
  component: "EmailTemplateBodyComponent",
  params: {
    a:'a', b:'b', c:'c', d:'d', e:'e'
  }
};




describe('test ', () => {


    test('rendering', () => {

      

      var Factory = new factoryFour(settings)

      console.log(Factory.start())

    });
    
});
