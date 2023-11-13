import React from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <div className="container">
        <ul className="list-inline  mb-0">
          <li className="list-inline-item mx-4">
            <a href="#">
            <FontAwesomeIcon icon={faFacebook} size={'2xl'} />
            </a>
          </li>
          <li className="list-inline-item mx-4">
            <a href="#">
            <FontAwesomeIcon icon={faXTwitter} size={'2xl'} />
            </a>
          </li>
          <li className="list-inline-item mx-4">
            <a href="#">
            <FontAwesomeIcon icon={faInstagram} size={'2xl'} />
            </a>
          </li>
          <li className="list-inline-item copy-right mx-4">
          © omotayo Michael 2023
          All Rights Reserved.

          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer