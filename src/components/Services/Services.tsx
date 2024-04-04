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
    <div className='container'>
      <div className="row">
        <div className="col">
          <section>
            <p>Select from the product Catalogue</p>
          </section>

          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                  {/* Content for the first carousel item */}
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
                        <p className="card-text">Nike</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <small className="text-bg-warning px-2 rounded">$800.00</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content for the second carousel item */}
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
                        <p className="card-text">Adidas</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <small className="text-bg-warning px-2 rounded">$600.00</small>
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
                        <p className="card-text">Adidas</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <small className="text-bg-warning px-2 rounded">$600.00</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Add the third item here */}
                </div>
              </div>

              <div className="carousel-item">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                  <div className="col">
                    <div className="card shadow-sm mx-8 my-5">
                      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <image href="https://hips.hearstapps.com/hmg-prod/images/man-doing-dumbbell-incline-bench-press-workout-royalty-free-image-522600373-1540485179.png?crop=0.671xw:1.00xh;0.166xw,0&resize=1200:*" height="100%" width="100%" />
                      </svg>
                      <div className="card-body">
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-regular fa-star text-warning"></i>
                        <i className="fa-regular fa-star text-warning"></i>
                        <p className="card-text">Adidas</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <small className="text-bg-warning px-2 rounded">$600.00</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card shadow-sm mx-8 my-5">
                      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <image href="https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t31.18172-8/15675794_1043523692441491_7614252218834846195_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHdtReSjjAcl0WEdc2qeW4Y6vGSRDP1LFTq8ZJEM_UsVDOqnswsd429XrLBRuk7X15iLdkijCFYRsDo2dUEDGE7&_nc_ohc=5AKeHjE-9P8Ab6QQFPi&_nc_ht=z-p3-scontent.fcmb7-1.fna&oh=00_AfDJDfWYnWGvy1DRI-XDlXMs9ayfaqUQWnTMP7KWuJcqeQ&oe=66366CB0" height="100%" width="100%" />
                      </svg>
                      <div className="card-body">
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-regular fa-star text-warning"></i>
                        <i className="fa-regular fa-star text-warning"></i>
                        <p className="card-text">Adidas</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <small className="text-bg-warning px-2 rounded">$600.00</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card shadow-sm mx-8 my-5">
                      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <image href="https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2017/10/bodybuilder-dumbbells-gym-1280.jpg?w=1200&h=675&crop=1&quality=86&strip=all" height="100%" width="100%" />
                      </svg>
                      <div className="card-body">
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-regular fa-star text-warning"></i>
                        <i className="fa-regular fa-star text-warning"></i>
                        <p className="card-text">Adidas</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <small className="text-bg-warning px-2 rounded">$600.00</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Add the fourth item here */}
                  {/* Add the fifth item here */}
                  {/* Add the sixth item here */}
                </div>
              </div>
            </div>

            <div className="control-btn">
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
