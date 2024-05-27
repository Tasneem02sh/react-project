import React from 'react';
import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
        <div className='w-100 bg-dark text-white py-4 px-2'>
        <div className='container'>
          <div className='row justify-content-between mx-auto pb-3'>
            <div className='col-12 col-md-4 mb-3 mb-md-0'>
              <h6 className='fw-bold text-uppercase py-2'>Help</h6>
              <div>
                <p className='py-1'><a href='#' className='text-white text-decoration-none'>Features</a></p>
                <p className='py-1'><a href='#' className='text-white text-decoration-none'>Blog</a></p>
              </div>
            </div>
            <div className='col-12 col-md-4 mb-3 mb-md-0'>
              <h6 className='fw-bold text-uppercase py-2'>About</h6>
              <div>
                <p className='py-1'><a href='#' className='text-white text-decoration-none'>Pricing</a></p>
                <p className='py-1'><a href='#' className='text-white text-decoration-none'>Services</a></p>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <h6 className='fw-bold text-uppercase py-2'>Help</h6>
              <div>
                <p className='py-1'><a href='#' className='text-white text-decoration-none'>Features</a></p>
                <p className='py-1'><a href='#' className='text-white text-decoration-none'>Blog</a></p>
              </div>
            </div>
          </div>
          <hr className='bg-white' />
          <div className='d-flex py-3 justify-content-center'>
            <p>Portfolio</p>
          </div>
          <div className='d-flex justify-content-center gap-4'>
            <FaFacebook className='text-white' />
            <FaGithub className='text-white' />
            <FaInstagram className='text-white' />
            <FaTwitter className='text-white' />
          </div>
        </div>
      </div>
      
    )
}

export default Footer
