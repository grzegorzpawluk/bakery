import React from 'react';
// import './../styles/style.css';
import CakesStyles from './Cakes.module.css';
import classes from 'classnames';
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
      <div className={CakesStyles.gallery}>
        <div
          className={classes(
            CakesStyles.transitionCake,
            CakesStyles.fade,
            CakesStyles.lesnyMech
          )}
        >
          <img src={lesnyMech} alt="lesnyMech" />
        </div>
        <div
          className={classes(
            CakesStyles.transitionCake,
            CakesStyles.fade,
            CakesStyles.lesnyMech
          )}
        >
          <img src={ketoTorcik} alt="ketoTorcik" />
        </div>
        <div
          className={classes(
            CakesStyles.transitionCake,
            CakesStyles.fade,
            CakesStyles.batonBounty
          )}
        >
          <img src={batonBounty} alt="batonBounty" />
        </div>
        <div
          className={classes(
            CakesStyles.transitionCake,
            CakesStyles.fade,
            CakesStyles.tortUrodzinowy
          )}
        >
          <img src={tortUrodzinowy} alt="tortUrodzinowy" />
        </div>
        <div
          className={classes(
            CakesStyles.transitionCake,
            CakesStyles.fade,
            CakesStyles.tortMocnoCzekoladowy1
          )}
        >
          <img src={tortMocnoCzekoladowy1} alt="tortMocnoCzekoladowy1" />
          <img
            className={CakesStyles.transitionImage}
            src={tortMocnoCzekoladowy2}
            alt="tortMocnoCzekoladowy2"
          />
        </div>
        <div
          className={classes(
            CakesStyles.transitionCake,
            CakesStyles.fade,
            CakesStyles.hands
          )}
        >
          <img src={hands} alt="hands" />
        </div>
        <div
          className={classes(
            CakesStyles.transitionCake,
            CakesStyles.fade,
            CakesStyles.dough
          )}
        >
          <img src={dough} alt="dough" />
        </div>
        <div
          className={classes(
            CakesStyles.transitionCake,
            CakesStyles.fade,
            CakesStyles.cake1
          )}
        >
          <img src={cake1} alt="cake1" />
        </div>
      </div>
    </div>
  );
}

export default Cakes;
