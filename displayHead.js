// @TODO we need to finalize this file, so we can accept real data, not just static title...

// partials
import misc from 'atherdon-newsletter-js-layouts-misc';
import headStylesComponent from '../components/headStyles';

import headComponent from '../components/head';

const { fonts } = misc;

const title = `The Secrets of High-Performing DevOps teams`;

const ERROR_TITLE = '`title` is a required option for `renderTemplate`';

const checkingTitle = (title) => {
    if (!title) {
        throw new Error(ERROR_TITLE);
    }
}

const DisplayHead = {
  component: headComponent,
  params: { title, headStylesComponent, fonts },
  display: () => {
      
//         return headComponent(title, headStyles, fonts);
      
      // console.log( this.component );
//     return this.component(....)
      
  },
  checks: () => [
    
      // checkingTitle(this.params.title)
  ]
  
}


function objectZdobject = (component, params) => {

    this.component = component || "";
    this.params = params || {};
    
}

var objectObject = {};

objectObject.component = headComponent;

objectObject.params = {title,headStylesComponent, fonts };


/// const template = {}


/// title, headStylesComponent, fonts
function displayFactory(component = "Hello", params = {}, checks = [], isError = false) {
  return {
      
    display: () => { component(params) },
      
    checks: () => { return []; }  
      
      
      
    //log: () => `${regEx}, ${name}`,

    //get: () => {name:name, regEx:regEx, replace:replace(), isError:false},

    //combine: () => {return {name:name, regEx:regEx, replace:replace()}},

    // I want to have a better way to report errors, so each callback can report an issue, so we can track it better 
    //isError: () => 'errror is here'
  }
}

export default DisplayHead;
