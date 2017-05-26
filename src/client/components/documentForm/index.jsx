import React, { Component, PropTypes } from 'react'
import FontAwesome from "react-fontawesome"
import { Grid, Row, Col, PageHeader, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import AddCustomField from '../addCustomField'
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';


const renderField = ({ input, type, placeholder, label, disabled, meta: { touched, error } }) => {
  return (
    <div className={'form-group ' + (touched && error ? 'has-error' : '')}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl disabled={disabled} className="field" rows={5} componentClass={type} placeholder={placeholder} {...input}/>
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

    documentEx(values) {
      let data = {...values}
      delete data.documentTitle;

      let arrayFields = [...this.state.fields]
      let fieldsObj = _.keyBy(arrayFields, 'title');

      let fields = _.map(data, function(value, prop) {
        let key = window.atob(prop)
        return {
          title: key,
          description: value,
          type: fieldsObj[key].type,
          status: 'exist'
        }
      });

      let document = {
        pageName: values.documentTitle,
        components: fields
      }

      this.props.createDocument(document);
    }

    render() {

      return (
          <div className="document-form">
            <PageHeader>Create new document</PageHeader>
              <Row>
                <form onSubmit={this.props.handleSubmit(this.documentEx.bind(this))}>
                  <FormGroup bsSize="large">
                    <Col md={6} mdOffset={3}>
                      <Field
                        name="documentTitle"
                        label="Document Title"
                        component={renderField}
                        type="input"
                        placeholder="Enter document title"
                        disabled={this.props.creating}
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
                                name={window.btoa(item.title)}
                                component={renderField}
                                type={item.type}
                                placeholder={item.title}
                                label={item.title}
                                disabled={this.props.creating}
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
  creating: PropTypes.bool,
  createDocument: PropTypes.func.isRequired,
};

DocumentForm = reduxForm({
  form: 'document',
  validate
})(DocumentForm);

export default DocumentForm
