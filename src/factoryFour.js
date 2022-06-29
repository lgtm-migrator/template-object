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

export default factoryFour;