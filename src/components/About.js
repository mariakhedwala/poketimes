import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">
                About
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vitae natus soluta ex quae perspiciatis cum nostrum repudiandae assumenda nam repellendus voluptatibus, alias deserunt facilis, magnam voluptas voluptatem, tempora aliquid.</p>
        </div>
    )
}

export default Rainbow(About)