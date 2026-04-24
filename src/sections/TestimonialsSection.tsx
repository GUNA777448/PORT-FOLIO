
import { testimonialsData } from "../data/constants";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="screen-section reveal-block">
      <div className="content-shell w-full">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials-showcase">
          {testimonialsData.map((item) => (
            <article
              key={item.name}
              className="reveal-item testimonial-ui-card"
            >
              <div className="testimonial-ui-head">
                <img
                  className="testimonial-ui-avatar"
                  src={item.image}
                  alt={item.name}
                />
                <div className="testimonial-ui-title">
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
              </div>

              <p className="testimonial-ui-quote">{item.quote}</p>

              <div
                className="testimonial-ui-stars"
                aria-label="5 out of 5 stars"
              >
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
