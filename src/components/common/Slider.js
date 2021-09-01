import React, { useState } from 'react'
import {
  faCircle,
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
{
  /* 
    This component is used to display Carousel on Dashboard page.
  */
}
const Slider = ({ slides, ...props }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <>
      <div className="dashboard-carousel">
        <FontAwesomeIcon
          icon={faArrowCircleLeft}
          onClick={prevSlide}
          size="lg"
          className="dashboard-carousel-icons"
        />
        {slides.map((slide, index) => {
          return (
            <div key={slide.title}>
              {index === current && (
                <>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="d-block w-100 dashboard-carousel-img"
                  />
                  <div className="dashboard-carousel-text">
                    <h2>{slide.title}</h2>
                    <p>{slide.text}</p>
                  </div>
                  <div className="dashboard-carousel-pagination">
                    {slides.map((slide, index) => {
                      return (
                        <div key={slide.title} style={{ margin: '5px' }}>
                          {
                            <>
                              {index === current ? (
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  size="sm"
                                  onClick={(e) => setCurrent(index)}
                                  className="dashboard-carousel-dots-active"
                                />
                              ) : (
                                <FontAwesomeIcon
                                  icon={faCircle}
                                  onClick={(e) => setCurrent(index)}
                                  size="sm"
                                  className="dashboard-carousel-dots"
                                />
                              )}
                            </>
                          }
                        </div>
                      )
                    })}
                  </div>
                </>
              )}
            </div>
          )
        })}
        <FontAwesomeIcon
          icon={faArrowCircleRight}
          onClick={nextSlide}
          size="lg"
          className="dashboard-carousel-icons"
        />
      </div>
    </>
  )
}

export default Slider
