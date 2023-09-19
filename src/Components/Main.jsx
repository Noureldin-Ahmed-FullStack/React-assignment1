import React, { Component } from 'react'
import '../MyCss/MyCustomStylesheet.css'
import avatarImg from '../images/avatars.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fa from '@fortawesome/free-solid-svg-icons'
import * as fab from '@fortawesome/free-brands-svg-icons';

export default class Main extends Component {
  render() {
    return (
      <div className='tall GreenishBG d-flex justify-content-center align-items-center MainSection text-center'>
        <div className='w-50'>
          <div>
            <img className='w-50 my-3' src={avatarImg} alt='avatar' />
            <h1 className='bigga'>START FRAMEWORK</h1>
            <div className="starArea d-flex justify-content-center my-3 align-items-center ">
              <div className="whiteLine"></div>
              <FontAwesomeIcon className='px-3' icon={fa.faStar} />
              <div className="whiteLine"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>

      </div>

    )
  }
}
