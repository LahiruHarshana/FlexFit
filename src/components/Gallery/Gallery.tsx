import React from 'react';
import './Gallery.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {
  return (

    <div className='container'>
       <div className="btn-group btn-group-justified filter-button-group" role="group" aria-label="filterImages">
  <div className="btn-group" role="group">
    <button type="button" className="btn btn-default is-checked" data-filter="*">All</button>
  </div>
  <div className="btn-group" role="group">
    <button type="button" className="btn btn-default" data-filter=".people">People</button>
  </div>
  <div className="btn-group" role="group">
    <button type="button" className="btn btn-default" data-filter=".nature">Nature</button>
  </div>
</div> 
    <div className="grid">
      <div className="grid-sizer col-xs-12 col-sm-6 col-md-4 col-lg-4"></div>
      <div className="">
        <a className="prettyphoto" href="https://res.cloudinary.com/debtiw4tn/image/upload/v1464228325/Venice_USA_jc7bsq.jpg" rel="prettyPhoto[portfolio]">
          <img className="thumbnail img-responsive col-xs-12 col-sm-6 col-md-4 grid-item people" src="https://res.cloudinary.com/debtiw4tn/image/upload/v1464228325/Venice_USA_jc7bsq.jpg" alt="Venice beach, California." />
        </a>
      </div>
        <a className="prettyphoto" href="https://res.cloudinary.com/debtiw4tn/image/upload/v1464247984/_DSC2757_uztioi.jpg" rel="prettyPhoto[portfolio]">
          <img className="thumbnail img-responsive col-xs-12 col-sm-6 col-md-4 grid-item nature" src="https://res.cloudinary.com/debtiw4tn/image/upload/v1464247984/_DSC2757_uztioi.jpg" alt="Aurora over Svalbard archipelago, Norway." />
        </a>
        <a className="prettyphoto" href="https://res.cloudinary.com/debtiw4tn/image/upload/v1464247785/DSCF2474_hjhodu.jpg" rel="prettyPhoto[portfolio]">
          <img className="thumbnail img-responsive col-xs-12 col-sm-6 col-md-4 grid-item nature" src="https://res.cloudinary.com/debtiw4tn/image/upload/v1464247785/DSCF2474_hjhodu.jpg" alt="Flying around Mt. Everest, Nepal." />
        </a>
        <img className="thumbnail img-responsive col-xs-12 col-sm-6 col-md-4 grid-item people" src="https://res.cloudinary.com/debtiw4tn/image/upload/v1464228326/Polar_night_in_Longyearbyen_Svalbard_bgq55i.jpg" alt="" />
      
        <img className="thumbnail img-responsive col-xs-12 col-sm-6 col-md-4 grid-item people" src="https://res.cloudinary.com/debtiw4tn/image/upload/v1464228325/Mosque_in_Samarkand_Uzbekistan_ym9kzo.jpg" alt="" />
      
        <img className="thumbnail img-responsive col-xs-12 col-sm-6 col-md-4 grid-item people" src="https://res.cloudinary.com/debtiw4tn/image/upload/v1464228325/In_a_dessert_Southern_Kazakhstan_ylwjbl.jpg" alt="" />
      
        <img className="thumbnail img-responsive col-xs-12 col-sm-6 col-md-4 grid-item people" src="https://res.cloudinary.com/debtiw4tn/image/upload/v1464228324/Ho_Chi_Mihn_Vietnam_jwdqxd.jpg" alt="" />
      
        <img className="thumbnail img-responsive col-xs-12 col-sm-6 col-md-4 grid-item nature" src="https://res.cloudinary.com/debtiw4tn/image/upload/v1464228324/Wellington_New_Zealand_cwvqfz.jpg" alt="" />

        <img className="thumbnail img-responsive col-xs-12 col-sm-6 col-md-4 grid-item people" src="https://res.cloudinary.com/debtiw4tn/image/upload/v1464228323/Mangawhai_New_Zealand_ftmvhv.jpg" alt="" />
      
        <img className="thumbnail img-responsive col-xs-12 col-sm-6 col-md-4 grid-item people" src="https://res.cloudinary.com/debtiw4tn/image/upload/v1464228323/Wellington_New_Zealand_2_bwxicu.jpg" alt="" />
      
        <img className="thumbnail img-responsive col-xs-12 col-sm-6 col-md-4 grid-item people" src="https://res.cloudinary.com/debtiw4tn/image/upload/v1464228323/Kuan_Yin_Thong_Hood_Cho_Temple_Penang_e6vys6.jpg" alt="" />
      
        <img className="thumbnail img-responsive col-xs-12 col-sm-6 col-md-4 grid-item people" src="https://res.cloudinary.com/debtiw4tn/image/upload/v1464228323/Wellington_New_Zealand_4_u11nld.jpg" alt="" />
      
        <img className="thumbnail img-responsive col-xs-12 col-sm-6 col-md-4 grid-item people" src="https://res.cloudinary.com/debtiw4tn/image/upload/v1464228323/Wellington_New_Zealand_3_ghuumw.jpg" alt="" />
      
      
        <img className="thumbnail img-responsive col-xs-12 col-sm-6 col-md-4 grid-item people" src="https://res.cloudinary.com/debtiw4tn/image/upload/v1464247813/_DSC3321_copy_rzjopt.jpg" alt="" />
      
        <img className="thumbnail img-responsive col-xs-12 col-sm-6 col-md-4 grid-item people" src="https://res.cloudinary.com/debtiw4tn/image/upload/v1464228323/Wellington_New_Zealand_1_cezblk.jpg" alt="" />
      
        <img className="thumbnail img-responsive col-xs-12 col-sm-6 col-md-4 grid-item people" src="https://res.cloudinary.com/debtiw4tn/image/upload/v1464247813/_DSC1457_cdoncu.jpg" alt="" />
     
        <img className="thumbnail img-responsive col-xs-12 col-sm-6 col-md-4 grid-item people" src="https://res.cloudinary.com/debtiw4tn/image/upload/v1464247786/DSCF2489_iz6wkx.jpg" alt="" />
    </div>
    </div>
  );
}

export default Gallery;
