import React, { PropTypes } from 'react'
import FontAwesome from "react-fontawesome"
import { Grid, Row, Col, ButtonToolbar, Button, PageHeader } from 'react-bootstrap';


const DocumentPreview = ({documents, onDeleteDocument, selectedDoc, reviewDocument, push}) => {

  if(selectedDoc) {
    return (
      <Col md={8} className="documentpreview">
          <PageHeader>Document Preview</PageHeader>
          <div className="document-review">
            <PageHeader style={{textAlign: 'center'}}>{selectedDoc.pageName}</PageHeader>
            {
              selectedDoc.components.map((item, i) => {
                return (
                  <div key={i}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <br/>
                  </div>
                )
              })
            }
          </div>
      </Col>
    )
  } else {
    return (
      <Col md={12} className="documentpreview">
          <br/>
          <PageHeader>List of all documents</PageHeader>
          <ButtonToolbar>
            <Button
              className="create-btn"
              bsSize="small"
              onClick={() => push('/document')}>
              Create new document
            </Button>
          </ButtonToolbar>
          <div className="document">
            {
              documents.map((item, i) => {
                return (
                    <Col md={2} key={i}>
                      <div className="documentItem">
                        <div className="actions-bar">
                          <div className="actions">
                            <FontAwesome onClick={() => reviewDocument(item)} className="action-icon" name="eye" />
                            <FontAwesome className="action-icon" name="pencil" />
                            <FontAwesome onClick={() => onDeleteDocument(item)} className="action-icon" name="trash-o" />
                          </div>
                        </div>
                        <br/>
                        <h5 style={{fontStyle: 'italic'}}>Document</h5>
                        <h5 className="document-title"><b>{item.pageName}</b></h5>
                      </div>
                    </Col>
                )
              })
            }
          </div>
      </Col>)
    } 
}

DocumentPreview.propTypes = {
};

export default DocumentPreview
