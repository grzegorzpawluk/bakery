import React from 'react';
import './../styles/style.css';
import lesnyMech from './../pictures/lesny_mech.jpg';
import ketoTorcik from './../pictures/keto_torcik.jpg';
import batonBounty from './../pictures/baton_bounty.jpg';
import tortUrodzinowy from './../pictures/tort_urodzinowy.jpg';
import tortMocnoCzekoladowy1 from './../pictures/tort_mocno_czekoladowy1.png';
import tortMocnoCzekoladowy2 from './../pictures/tort_mocno_czekoladowy2.png';
import hands from './../pictures/hands.jpg';
import dough from './../pictures/dough.jpg';
import cake1 from './../pictures/cake1.jpg';

function Cakes() {
  return (
    <div>
      <h1>Ciasta</h1>
      <div className="gallery">
        <div className="transition-cake fade lesny-mech">
          <img src={lesnyMech} alt="lesny_mech" />
        </div>
        <div className="transition-cake fade keto-torcik">
          <img src={ketoTorcik} alt="keto_torcik" />
        </div>
        <div className="transition-cake fade baton-bounty">
          <img src={batonBounty} alt="batonBounty" />
        </div>
        <div className="transition-cake fade tort-urodzinowy">
          <img src={tortUrodzinowy} alt="tortUrodzinowy" />
        </div>
        <div className="transition-cake fade">
          <img src={tortMocnoCzekoladowy1} alt="tortMocnoCzekoladowy1" />
          <img
            className="transition-image"
            src={tortMocnoCzekoladowy2}
            alt="tortMocnoCzekoladowy2"
          />
        </div>
        <div className="transition-cake fade hands">
          <img src={hands} alt="hands" />
        </div>
        <div className="transition-cake fade dough">
          <img src={dough} alt="dough" />
        </div>
        <div className="transition-cake fade cake1">
          <img src={cake1} alt="cake1" />
        </div>
      </div>
    </div>
  );
}

export default Cakes;
