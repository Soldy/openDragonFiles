'use strict'

const jsBase  = require('./js.js').jsBase;
const cssBase = require('./css.js').cssBase;
const htmlBase = require('./html.js').htmlBase;
const svgBase = require('./svg.js').svgBase;

exports.openDragonFilesBase = function(parentIn){
    /*
     * @public 
     * @return {object}
     */
    this.js = function(){
        return js;
    }
    /*
     * @public 
     * @return {object}
     */
    this.css = function(){
        return css;
    }
    /*
     * @public 
     * @return {object}
     */
    this.html = function(){
        return html;
    }
    /*
     * @public 
     * @return {object}
     */
    this.svg = function(){
        return svg;
    }
    /*
     * @private
     * @var {dict}
     */
    let cache = {};
    /*
     * @private 
     * @var {object}
     */
    const openDragon = parentIn;
    /*
     * @private 
     * @var {object}
     */
    const js   = new jsBase(this);
    /*
     * @private 
     * @var {object}
     */
    const csss = new cssBase(this);
    /*
     * @private 
     * @var {object}
     */
    const html = new htmlBase(this);
    /*
     * @private 
     * @var {object}
     */
    const svg  = new svgBase(this);
    /*
     * @param {string}
     * @private 
     * @return {string}
     */
    const processor = function(module){


    }
}

