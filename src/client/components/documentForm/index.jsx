import React, { Component, PropTypes } from 'react'
import FontAwesome from "react-fontawesome"
import { Grid, Row, Col, PageHeader, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import AddCustomField from '../addCustomField'
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';


const renderField = ({ input, type, placeholder, label, disabled, deleted, meta: { touched, error } }) => {
  return (
    <div className={'form-group ' + (touched && error ? 'has-error' : '')}>
      <ControlLabel>{label} {deleted ? <i className="deleted-label">(Field deleted)</i> : null}</ControlLabel>
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
        fields: []
      };
    }

    componentWillReceiveProps(nextProps) {
      let documentForUpdating = nextProps.documentForUpdating;

      if(!this.state.isUpdate && documentForUpdating) {
        const id = this.props.match.params.id;
        this.setState({fields: documentForUpdating.fields, isUpdate: true, documentId: id})
      }
    }

    componentWillUnmount() {
      this.props.documentByIdFulfiled({documentForUpdating: undefined});
    }

    addField(type, title) {
      let fields = [...this.state.fields];
      fields.push({
        title,
        type,
      });
      this.setState({ fields })
    }

    removeField(field, index) {
      let fields = [...this.state.fields];
      let fieldIndex = _.findIndex(fields, (o, i) => `${o.title}-${i}` === `${field.title}-${index}`);
      fieldIndex != -1 ? fields[fieldIndex].status = 'deleted' : null;
      this.setState({ fields });
    }

    restoreField(field, index) {
      let fields = [...this.state.fields];
      let fieldIndex = _.findIndex(fields, (o, i) => `${o.title}-${i}` === `${field.title}-${index}`);
      fieldIndex != -1 ? fields[fieldIndex].status = 'exist' : null;
      this.setState({ fields });
    }

    documentEx(values) {
      let data = {...values}
      delete data.documentTitle;

      let arrayFields = [...this.state.fields]
      let fieldsObj = {};
      _.forEach(arrayFields, (o, i) => fieldsObj[`${o.title}-${i}`] = o)

      let fields = [];
      _.forEach(data, (value, prop) => {
        let key = decodeURIComponent(escape(window.atob(prop)));
        if(fieldsObj[key]) {
          let componentObj = {
            title: fieldsObj[key].title,
            description: value,
            type: fieldsObj[key].type,
            status: fieldsObj[key].status || 'exist',
          }

          fieldsObj[key].id ? componentObj.id = fieldsObj[key].id : null;
          fields.push(componentObj)
        }
      });

      let document = {
        documentName: values.documentTitle,
        fields: fields
      }

      if(this.state.isUpdate) {
        document.id = this.state.documentId;
        this.props.updateDocument(document)
      } else {
        _.remove(document.fields, (o) => o.status === 'deleted')
        this.props.createDocument(document);
      }
    }

    render() {
      return (
          <div className="document-form">
            <a onClick={() => this.props.push('/')}><FontAwesome name="angle-left"/> See all documents</a>
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
                          let deleted = item.status === 'deleted';
                          let type = 'input';
                          if(item.type === 'input' || item.type === 'textarea') {
                            type = item.type;
                          }
                          return (
                            <div key={i} className="custom-field">
                              <Field
                                name={window.btoa(unescape(encodeURIComponent(`${item.title}-${i}`)))}
                                component={renderField}
                                type={type}
                                placeholder={item.title}
                                label={item.title}
                                deleted={deleted}
                                disabled={this.props.creating || deleted}
                              />
                              {deleted ? <a className="restore-field" onClick={() => this.restoreField(item, i)}>Restore?</a> : null}
                              <FontAwesome name="times" className="remove-field" onClick={() => this.removeField(item, i)}/>
                              <br/>
                            </div>
                          )
                        })
                      }
                      <AddCustomField addField={this.addField.bind(this)}/>
                      <Button type="submit">{this.state.isUpdate ? 'Update' : 'Save'} Document</Button>
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
  push: PropTypes.func.isRequired,
  documentByIdFulfiled: PropTypes.func.isRequired,
  updateDocument: PropTypes.func.isRequired,
  documentForUpdating: PropTypes.object
};

DocumentForm = reduxForm({
  form: 'document',
  validate
})(DocumentForm);

export default DocumentForm
