import React, { useEffect } from 'react';
import './Services.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Services = () => {
  useEffect(() => {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const carouselInstance = new (window as any).bootstrap.Carousel(carousel, {
      interval: 2000,
      pause: 'hover',
      wrap: true 
    });
    return () => {
      carouselInstance.dispose();
    };
  }, []);

  return (
    <div className='services-background d-flex align-items-center justify-content-center'>
      <div id='service' className='container'>
        <div id='serviceRow' className="row">
          <div className="col">
            <section style={{position:'relative',top:'15%', color:'white'}}>
              <h1 style={{fontSize:'60px'}} className='Header'>SERVICES</h1>
              <hr />
            </section>

            <div id="carouselExampleCaptions" className="carousel slide " style={{position:'relative',top:'25%'}}>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    <div className="col">
                      <div className="card shadow-sm mx-8 my-5">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                          <image href="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="100%" width="100%" />
                        </svg>
                        <div className="card-body">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-regular fa-star text-warning"></i>
                          <p className="card-text">Functional Training Area</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className=" rounded" style={{ background: "#f65e13 !important",color:"#8a8a8a"}}>
                              A designated space equipped with functional training tools and equipment such as TRX suspension trainers, kettlebells, battle ropes, plyometric boxes, and stability balls.
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-sm mx-8 my-5">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                          <image href="https://hips.hearstapps.com/hmg-prod/images/killing-that-kettlebell-workout-royalty-free-image-637772778-1562688657.jpg?resize=1200:*" height="100%" width="100%" />
                        </svg>
                        <div className="card-body">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-regular fa-star text-warning"></i>
                          <i className="fa-regular fa-star text-warning"></i>
                          <p className="card-text">Personalized Training Programs</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className=" rounded" style={{ background: "#f65e13 !important",color:"#8a8a8a"}}>
                              A designated space equipped with functional training tools and equipment such as TRX suspension trainers, kettlebells, battle ropes, plyometric boxes, and stability balls.
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="card shadow-sm mx-8 my-5">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                          <image href="https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1400/MTk2MTM2NDIwMTA3NTYwNDUz/shutterstock_570689305.webp" height="100%" width="100%" />
                        </svg>
                        <div className="card-body">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-regular fa-star text-warning"></i>
                          <i className="fa-regular fa-star text-warning"></i>
                          <p className="card-text">Mind-Body Wellness Workshops</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className=" rounded" style={{ background: "#f65e13 !important",color:"#8a8a8a"}}>
                              A designated space equipped with functional training tools and equipment such as TRX suspension trainers, kettlebells, battle ropes, plyometric boxes, and stability balls.
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="control-btn">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
