import React , { Component } from 'react';

/**
 * @class FileUpload
 * @classdesc Browse and upload yaml, yml files only and show the contents on the browser
 * @example ReactDOM.render(<FileUpload />, document.getElementById('root'));
 * @author stahlstalin
 */
export default class FileUpload extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null
      };
      this.handleFileSelect = this.handleFileSelect.bind(this);
    }

    /**
     * @description component state set to the file contents
     * @param {string} content
     */
    displayData(content) {
      this.setState({data: content});
    }

    /**
     * @description Event handler to handle browsed files and read the contents
     * @param {Object} evt
     */
    handleFileSelect(evt) {
      let files = evt.target.files;
      if (!files.length) {
        alert('No file select');
        return;
      }
      let file = files[0];
      let that = this;
      let reader = new FileReader();
      reader.onload = function(e) {
          let yamlString = e.target.result;

          /**
           * @borrows https://github.com/nodeca/js-yaml
           *  This package parses yaml string to javascript object.
           *  For more manipulation of the yaml string, refer the above git
           */
        const jsyaml = require('js-yaml');
        let ymlObj1 = jsyaml.load(e.target.result );
        console.log(typeof ymlObj1, "ymlObj1: ",ymlObj1);

        const yaml = require('js-yaml');
        yaml.safeLoadAll(yamlString, function (doc) {
            console.log(typeof doc, "yaml doc: ", doc);
        });

        /**
         * @borrows from https://github.com/jeremyfa/yaml.js
         *  This package parses yaml string to javascript object.
         *  For more manipulation of the yaml string, refer the above git
         */
        const YAML = require('yamljs');
        let ymlObj2 = YAML.parse(yamlString);
        console.log(typeof ymlObj2, "ymlObj2: ",ymlObj2);

        that.displayData( e.target.result);
      };
      reader.readAsText(file);
    }

    render() {
      const data = this.state.data;
      return (
        <div>
          <input type="file" accept=".yml, .yaml" onChange={this.handleFileSelect}/>
          { data && <div> {data} </div> }
        </div>
      );
    }
  }
