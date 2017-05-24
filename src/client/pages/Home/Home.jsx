import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from 'components/navBar';
import SideBar from 'components/sideBar';
import DocumentPreview from 'components/documentPreview';

export default class Home extends Component {

  render() {

    return (
      <div>
        <div>
          <NavBar />
        </div>
        <Grid>
          {/*<div className="row">
          <SideBar />
          <DocumentPreview />
        </div>*/}
          <Row className="show-grid">
            <Col md={4}><SideBar /></Col>
            <Col md={8}><DocumentPreview /></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

Home.propTypes = {
};
