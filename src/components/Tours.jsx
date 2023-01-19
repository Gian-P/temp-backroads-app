import tour1 from '../../assets/images/tour-1.jpeg'
import tour2 from '../../assets/images/tour-2.jpeg'
import tour3 from '../../assets/images/tour-3.jpeg'
import tour4 from '../../assets/images/tour-4.jpeg'
import { tours } from './data/data'
import Title from './Title'

const Tours = () => {
  return (
    <section className="section" id="tours">

      <Title title='featured' subTitle='tours'/>

      <div className="section-center featured-center">
        {tours.map(({ id, image, date, title, info, location, duration, cost }) => {
          return (
            <article className="tour-card" key={ id }>
              <div className="tour-img-container">
                <img src={ image } className="tour-img" alt="" />
                <p className="tour-date">{ date }</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{ title }</h4>
                </div>
                <p>
                  { info }
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    { location }
                  </p>
                  <p>{ duration }</p>
                  <p>{ cost }</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Tours
