import React, { Component, PropTypes } from 'react'
import FontAwesome from "react-fontawesome"
import { Grid, Row, Col, PageHeader, FormGroup, FormControl, ControlLabel, Accordion, Panel, Button, Radio } from 'react-bootstrap';

class AddCustomField extends Component {
    constructor(props){
    	super(props);
    	this.state = {
        newFieldTitle: '',
        newFieldType: 'input',
        open: false
      };
    }

    createField() {
      let type = this.state.newFieldType;
      let title = this.state.newFieldTitle;

      this.props.addField(type, title);

      this.setState({
        open: false,
        newFieldTitle: '',
        newFieldType: 'input'
      })
    }

    getValidationState() {
      const length = this.state.newFieldTitle.trim().length;
      if (length > 0) return 'success';
      else return 'error';
    }

    render() {

      const title = (
        <h3 onClick={()=> this.setState({ open: !this.state.open })}>Add new custom field</h3>
      );

      return (
          <div>
              <Panel collapsible header={title} expanded={this.state.open}>
                <FormGroup validationState={this.getValidationState()}>
                  <ControlLabel>Field title</ControlLabel>
                  <FormControl value={this.state.newFieldTitle} onChange={(e) => this.setState({newFieldTitle: e.target.value})} type="text" placeholder="Enter field title" />
                  <br/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Choose filed type</ControlLabel>
                  <br/>
                  <Radio value="input" onChange={(e) => this.setState({newFieldType: e.target.value})} checked={this.state.newFieldType === 'input'} name="radioGroup" inline>
                    Text
                  </Radio>
                  {' '}
                  <Radio value="textarea" onChange={(e) => this.setState({newFieldType: e.target.value})} checked={this.state.newFieldType === 'textarea'} name="radioGroup" inline>
                    Multiline Text
                  </Radio>
                </FormGroup>
                <Button disabled={!this.state.newFieldTitle.trim()} onClick={this.createField.bind(this)} className="pull-right" bsStyle="primary">Add Field</Button>
              </Panel>
          </div>
      )
    }
}

AddCustomField.propTypes = {
  addField: PropTypes.func.isRequired,
};

export default AddCustomField
