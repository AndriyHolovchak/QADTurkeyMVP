import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LoadingBar from 'react-redux-loading-bar'
import NavBar from 'components/navBar';
import DocumentForm from 'components/documentForm';

export default class CreateDocument extends Component {

  render() {

    return (
      <div>
        <NavBar/>
        <LoadingBar/>
        <Grid>
          <Row>
            <DocumentForm {...this.props}/>
          </Row>
        </Grid>
      </div>
    )
  }
}

CreateDocument.propTypes = {
};
