import React, { PropTypes } from 'react'
import FontAwesome from "react-fontawesome"
import { Grid, Row, Col, Image } from 'react-bootstrap';


const DocumentPreview = () => (
  <Col md={8} className="documentpreview">
      <div className="document">
        <p>DOCUMENT</p>
        <img src="../images/preview.png"/>
      </div>
  </Col>
)

DocumentPreview.propTypes = {
};

export default DocumentPreview
