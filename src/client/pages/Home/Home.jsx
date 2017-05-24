import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from 'components/navBar';
import SideBar from 'components/sideBar';
import DocumentPreview from 'components/documentPreview';

export default class Home extends Component {

  render() {

    return (
      <div>
        <NavBar />
        <Grid fluid>
          <Row className="show-grid">
            <SideBar />
            <DocumentPreview />
          </Row>
        </Grid>
      </div>
    )
  }
}

Home.propTypes = {
};
