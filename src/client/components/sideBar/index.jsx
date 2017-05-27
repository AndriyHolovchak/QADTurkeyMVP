import React, { PropTypes } from 'react'
import FontAwesome from "react-fontawesome"
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap'
import classNames from 'classnames'


const SideBar = ({push, documents, onDeleteDocument, reviewDocument, selectedDoc}) => (
  <Col md={4} className="sidebar">
      <hr/>
      <ButtonToolbar>
        <div className="pull-right">
          <Button
            className="create-btn"
            bsSize="small"
            onClick={() => reviewDocument(false)}>
            See all documents
          </Button>
          <Button
            className="create-btn"
            bsSize="small"
            onClick={() => push('/document')}>
            Create new document
          </Button>
        </div>
      </ButtonToolbar>
      <hr/>
      <div className="documentsList">
      {
        documents.map((item, i) => {
          return (
            <Col md={12} key={i}>
              <div className={classNames('documentItem', { 'active-document-item': item.id === selectedDoc.id })}>
                <div className="actions">
                  <FontAwesome onClick={() => reviewDocument(item)} className="action-icon" name="eye" />
                  <FontAwesome className="action-icon" name="pencil" />
                  <FontAwesome onClick={() => onDeleteDocument(item)} className="action-icon" name="trash-o" />
                </div>
                <p onClick={() => reviewDocument(item)}>{item.pageName}</p>
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
