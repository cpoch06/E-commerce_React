import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>

        <form action="">
            <input type="email" placeholder='Your Email Address' />
            <button>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetter