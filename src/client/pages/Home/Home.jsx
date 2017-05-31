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

  reviewDocument(doc) {
    this.setState({selectedDoc: doc})
  }

  render() {

    let fluid = this.state.selectedDoc ? true : false;

    return (
      <div>
        <NavBar />
        <LoadingBar style={{ zIndex: 1 }}/>
        <Grid fluid={fluid} className="document-container">
          <Row>
            {
              this.state.selectedDoc ?
              <SideBar
                {...this.props}
                selectedDoc={this.state.selectedDoc}
                onDeleteDocument={this.onDeleteDocument.bind(this)}
                reviewDocument={this.reviewDocument.bind(this)}/> : null
            }

            <DocumentPreview
              {...this.props}
               onDeleteDocument={this.onDeleteDocument.bind(this)}
               reviewDocument={this.reviewDocument.bind(this)}
               selectedDoc={this.state.selectedDoc}/>
          </Row>
        </Grid>
        <DeleteModal
          modal={this.state.modal}
          deleteDocument={this.props.deleteDocument}
          closeModal={this.closeModal.bind(this)}
          reviewDocument={this.reviewDocument.bind(this)}
          documents={this.props.documents}
          selectedDoc={this.state.selectedDoc}
         />
      </div>
    )
  }
}

Home.propTypes = {
  push: PropTypes.func.isRequired,
  fetchDocuments: PropTypes.func.isRequired,
  deleteDocument: PropTypes.func.isRequired,
  documents: PropTypes.array.isRequired,
};
