import React from 'react'
import image404 from 'images/404.png'

const NoMatch = () => (
  <div className="container-404">
  	<h2>
  		The system was unable to process your request.<br/>
  		<a href="/">Return to QAD Applicaton.</a>
		</h2>
  	<div className="image-cont">
  		<img src={image404} alt="" />	
  	</div>
    <h3><b>Error 400</b>: Bad Request</h3>
  </div>
)

export default NoMatch
