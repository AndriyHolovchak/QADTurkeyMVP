import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from 'components/navBar';
import DocumentForm from 'components/documentForm';

export default class CreateDocument extends Component {

  render() {

    return (
      <div>
        <NavBar/>
        <Grid>
          <Row>
            <DocumentForm/>
          </Row>
        </Grid>
      </div>
    )
  }
}

CreateDocument.propTypes = {
};
