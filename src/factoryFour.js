class factoryFour2 {
//     constructor(component, params) {
        
//         this.component = component;
//         this.params = params;
//     }

//     create = (settings) => {
//         const { component, params } = settings;



//     }
}

// I want factory to return an object that can be changable.

function factoryFour(settings){


    const { component, params, subcomponents } = settings;


    return  {

        params,
        // plateNO,
        changeParams(value){
            this.params = Object.assign(this.params, value);
        },
        start () {

            console.log(this.params)
        },
        display () {
            return component(params, subcomponents);

            // console.log("driving car...")
        }
    }

}

export { factoryFour, factoryFour2 };