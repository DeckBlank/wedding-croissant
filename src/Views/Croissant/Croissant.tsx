import * as React from "react";
import { gsap } from "gsap";
require(`../../cdn/TweenMax.min.js`)
import "./Croissant.scss";
require(`./0yLbYWbO.png`);
require(`./r8US84pyqs0RO5rUCyJBp1Dg.webp`);
require(`./1s.png`);
require(`./2s.png`);
require(`./3s.png`);
require(`./4s.png`);
import QRCode from "react-qr-code";
import { cuentas } from "./pagos";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
const Croissant = () => {
const envelope = React.useRef(null)
const button = React.useRef(null)
const [flipped, setFlipped] = React.useState(false);
const [firstEffect, setFirstEffect] = React.useState(false);
const [initEffect, setInittEffect] = React.useState(false);

const BASE_URL = process.env.BASE_URL||`https://pizzabodas.uc.r.appspot.com`;

const tl = gsap.timeline()
hljs.registerLanguage(`javascript`, javascript);
function pullOut() {
    if(!envelope.current.classList.contains(`is-open`)&&!initEffect){
      setInittEffect(true)
      tl.to(`.flap`, 1, {
        rotationX: 180,
        ease: Power1.easeInOut
      }, `scaleBack`)
      tl.to(`.invitation`, 1, {
        scale: 0.8,
        ease: Power4.easeInOut,
      }, `scaleBack`)
      .set(`.flap`, {
        zIndex: 0
      })
      tl.to(`.card`, 1, {
        y: `0%`,
        scaleY: 1.2,
        ease: Circ.easeInOut,
      })
      /* tl.to(`.card`, 1, {
        scale: 0.8,
        ease: Power4.easeIn,
      }) */
      tl.set(`.mask`, {
        //- Change overflow on mask
        overflow: `visible`,
        onComplete: function() {
          envelope.current.classList.toggle(`is-open`);
        }
      })
      tl.to(`.mask`, 1.3, {
        'clip-path': `inset(0 0 0% 0)`,
        ease: Circ.easeInOut,
      }, `moveDown`)
      tl.to(`.card`, 1.3, {
        y: `100%`,
        scaleY: 1,
        ease: Circ.easeInOut,
      }, `moveDown`)
      tl.to(`button`, 1, {
        y: `180px`,
        ease: Circ.easeInOut,
        onComplete: function(){
         /*  button.current.classList.toggle(`invert`);
          button.current.textContent = `Enterate más!`; */
          setFirstEffect(true)
        }
      }, `moveDown+=0.15`);
    }/* else if(firstEffect){
      setFlipped(!flipped)
      const ry = (!flipped) ? 180 : 0;
        gsap.to(`.card`, 1, {
          rotationY: ry,
          ease: Power4.easeInOut,
          onComplete: function(){
            button.current.classList.remove(`invert`);
            button.current.textContent = `Ahi nos vemos!`;
          }
        });
    } */
  }
  return (
    <div>
      <div className="invitation" onClick={pullOut}>
        <div className="envelope" ref={envelope}>
          <div className="mask">
            <div className="card">
              <div className="face front" style={{backgroundImage:`url(${BASE_URL}/public/images/r8US84pyqs0RO5rUCyJBp1Dg.webp)`}}>
                <h1>
                  <img src={`front`} />
                  {/* <span className="extrude">Invitation Card</span> */}
                </h1>
              </div>
              <div className="face back">
                <div className="photo-container-back">
                    <div className="photo uno"></div>

                    <div className="photo dos"></div>

                    <div className="photo tres"></div>

                    <div className="photo cuatro"></div>
                </div>
                <div className="head-back">
                    head
                </div>
                <div className="body-back">
                      body
                </div>
                <div className="footer-back">
                <QRCode
                  size={256}
                  style={{ height: `auto`, maxWidth: `30%`, width: `100%` , background:`red` }}
                  value={cuentas.YAPE}
                  viewBox={`0 0 256 256`}
                  />
                  
                <span>Confirma tu asistencia <a href="">aquí </a></span> <br/>
                <span>Colaboracion para la boda <a href="">aquí 💸💎💰</a></span> <br/>
                </div>
                
                <code className="hljs language-javascript">
                  const a = `asdasd`;
</code>
              </div>
            </div>
          </div>
        </div>
        <div className="flap"></div>
       {/*  <button style={{display:(flipped?`none`:`block`)}} className="button-action" ref={button}>
          Te invitamos!
        </button> */}
      </div>
    </div>
  );
};

export default Croissant;
