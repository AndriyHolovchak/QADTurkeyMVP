import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import LoadingBar from 'react-redux-loading-bar'
import NavBar from 'components/navBar'
import SideBar from 'components/sideBar'
import DocumentPreview from 'components/documentPreview'
import DeleteModal from 'components/deleteModal'

export default class Home extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      modal: {
        showModal: false
      }
    };
  }

  componentDidMount() {
    this.props.fetchDocuments();
  }

  onDeleteDocument(document) {
    this.openModal(document);
  }

  closeModal() {
    this.setState({modal: {
        showModal: false
      }
    })
  }

  openModal(document) {
    this.setState({modal: {
      showModal: true,
      document
    }})
  }

  render() {

    return (
      <div>
        <NavBar />
        <LoadingBar style={{ zIndex: 1 }}/>
        <Grid fluid>
          <Row>
            <SideBar {...this.props} onDeleteDocument={this.onDeleteDocument.bind(this)}/>
            <DocumentPreview />
          </Row>
        </Grid>
        <DeleteModal modal={this.state.modal} deleteDocument={this.props.deleteDocument} closeModal={this.closeModal.bind(this)}/>
      </div>
    )
  }
}

Home.propTypes = {
  fetchDocuments: PropTypes.func.isRequired,
  deleteDocument: PropTypes.func.isRequired,
};
