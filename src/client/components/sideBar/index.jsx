import React, { PropTypes } from 'react'
import FontAwesome from "react-fontawesome"
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';


const SideBar = ({push, documents, onDeleteDocument}) => (
  <Col md={4} className="sidebar">
      <hr/>
      <ButtonToolbar>
        <Button
          className="create-btn pull-right"
          bsStyle="primary"
          bsSize="small"
          onClick={() => push('/document')}>
          Create new document
        </Button>
      </ButtonToolbar>
      <hr/>
      <div className="documentsList">
      {
        documents.map((item, i) => {
          return (
            <Col md={12} key={i}>
              <div className="documentItem">
                <div className="actions">
                  <FontAwesome className="action-icon" name="eye" />
                  <FontAwesome className="action-icon" name="pencil" />
                  <FontAwesome onClick={() => onDeleteDocument(item)} className="action-icon" name="trash-o" />
                </div>
                <p>{item.pageName}</p>
              </div>
            </Col>
          )
        })
       }
      </div>
  </Col>
)

SideBar.propTypes = {
   push: PropTypes.func.isRequired,
   documents: PropTypes.array.isRequired
};

export default SideBar
