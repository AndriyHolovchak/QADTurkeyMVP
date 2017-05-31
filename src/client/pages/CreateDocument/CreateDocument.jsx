import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LoadingBar from 'react-redux-loading-bar'
import NavBar from 'components/navBar';
import DocumentForm from 'components/documentForm';

export default class CreateDocument extends Component {

  constructor(props){
  	super(props);
  	this.state = {};
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    if(id) {
      this.props.fetchDocument(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    let documentForUpdating = nextProps.documentForUpdating;
    if(documentForUpdating) {
      let formStateObj = {
        documentTitle: documentForUpdating.documentName
      }
      _.forEach(documentForUpdating.fields, (o, i) => {
        let title = window.btoa(unescape(encodeURIComponent(`${o.title}-${i}`)));
        formStateObj[title] = o.description;
      })

      this.setState({initialFormValues: formStateObj})
    }
  }

  render() {

    return (
      <div>
        <NavBar/>
        <LoadingBar/>
        <Grid>
          <Row>
            <DocumentForm {...this.props} initialValues={this.state.initialFormValues}/>
          </Row>
        </Grid>
      </div>
    )
  }
}

CreateDocument.propTypes = {
  createDocument: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  fetchDocument: PropTypes.func.isRequired,
  documentByIdFulfiled: PropTypes.func.isRequired,
  updateDocument: PropTypes.func.isRequired,
  creating: PropTypes.bool,
  documentForUpdating: PropTypes.object,
};
