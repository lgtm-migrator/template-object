// checks should be runned inside display
function displayFactory(component = "<h1>Hello</h1>", checks = [], params = {}, subcomponents = {},  isError = false) {
    return {
       
      params: params,
      subcomponents: subcomponents,  
      display: () => { 
  
          //here i want to apply a check and see if everything is fine, if not we generate error = true 
  
          component(params) 
      
      },
        
      checks: () => { return []; },  
        
        
      init: () => {
  
      },
      
      try: () => {
  
      },
      checks: () => {
          checks.map(() => {

          })

          if(subcomponents){
            //   subcomponents.map((component) => {
            //     component.init();
            //   })
          }

        

      }
      //log: () => `${regEx}, ${name}`,
  
      //get: () => {name:name, regEx:regEx, replace:replace(), isError:false},
  
      //combine: () => {return {name:name, regEx:regEx, replace:replace()}},
  
      // I want to have a better way to report errors, so each callback can report an issue, so we can track it better 
      //isError: () => 'errror is here'
    }
  }
  
  
  


const objectZdobject = (component, params) => {

    this.component = component || null;
    this.params = params || {};
    this.subcomponents = subcomponents || {};
    
}

var objectObject = {};

objectObject.component = headComponent;

objectObject.params = { title,headStylesComponent, fonts };


/// const template = {}
prototypeObject = {
	fullName: function(){
		return this.firstName + " " + this.lastName		
	}
}
var person = Object.create(prototypeObject)


/// title, headStylesComponent, fonts


export default displayFactory;