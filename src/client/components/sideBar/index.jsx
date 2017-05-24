import React, { PropTypes } from 'react'
import FontAwesome from "react-fontawesome"
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';


const SideBar = () => (
  <Col md={4} className="sidebar">
      <hr/>
      <ButtonToolbar>
        <Button className="create-btn pull-right" bsStyle="primary" bsSize="small">Create new document</Button>
      </ButtonToolbar>
      <hr/>
      <Col md={6}>
        <div className="documentItem">
          <div className="actions">
            <FontAwesome className="action-icon" name="pencil" />
            <FontAwesome className="action-icon" name="trash-o" />
          </div>
          <p>Document</p>
        </div>
      </Col>
      <Col md={6}>
        <div className="documentItem">
          <div className="actions">
            <FontAwesome className="action-icon" name="pencil" />
            <FontAwesome className="action-icon" name="trash-o" />
          </div>
          <p>Document</p>
        </div>
      </Col>
      <Col md={6}>
        <div className="documentItem">
          <div className="actions">
            <FontAwesome className="action-icon" name="pencil" />
            <FontAwesome className="action-icon" name="trash-o" />
          </div>
          <p>Document</p>
        </div>
      </Col>
  </Col>
)

SideBar.propTypes = {
};

export default SideBar