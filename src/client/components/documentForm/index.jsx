import React, { Component, PropTypes } from 'react'
import FontAwesome from "react-fontawesome"
import { Grid, Row, Col, PageHeader, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import AddCustomField from '../addCustomField'
import { Field, reduxForm } from 'redux-form';


const renderField = ({ input, type, placeholder, label, meta: { touched, error } }) => {
  return (
    <div className={'form-group ' + (touched && error ? 'has-error' : '')}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl className="field" rows={5} componentClass={type} placeholder={placeholder} {...input}/>
      <span className="help-block">{touched && error}</span>
    </div>
  )
}

const validate = (values) => {
  const errors = {}

  if (!values.documentTitle) {
    errors.documentTitle = 'Document title is required'
  }

  return errors
}

class DocumentForm extends Component {
    constructor(props){
    	super(props);
    	this.state = {
        document: {
          pageName: ''
        },
        fields: [],
      };
    }

    addField(type, title) {
      let fields = [...this.state.fields];
      fields.push({
        title,
        type,
      });
      this.setState({ fields })
    }

    render() {
      const documentEx = (values) => console.log(values)

      return (
          <div className="document-form">
            <PageHeader>Create new document</PageHeader>
              <Row>
                <form onSubmit={this.props.handleSubmit(documentEx)}>
                  <FormGroup bsSize="large">
                    <Col md={6} mdOffset={3}>
                      <Field
                        name="documentTitle"
                        label="Document Title"
                        component={renderField}
                        type="input"
                        placeholder="Enter document title"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col md={10} mdOffset={1}>
                      <hr/>
                      {
                        this.state.fields.map((item, i) => {
                          return (
                            <div key={i}>
                              <Field
                                name={item.title + `(${i})`}
                                component={renderField}
                                type={item.type}
                                placeholder={item.title}
                                label={item.title}
                              />
                              <br/>
                            </div>
                          )
                        })
                      }
                      <AddCustomField addField={this.addField.bind(this)}/>
                      <Button type="submit" bsStyle="primary">Save Document</Button>
                    </Col>
                  </FormGroup>
                </form>
              </Row>
          </div>
      )
    }
}

DocumentForm.propTypes = {

};

DocumentForm = reduxForm({
  form: 'document',
  validate
})(DocumentForm);

export default DocumentForm
