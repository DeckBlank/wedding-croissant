//import * as React from "react";
import "./Croissant.scss";

import { gsap  ,Power1,Power4 ,Circ} from "gsap";
import { useRef, useState } from "react";
/* import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript"; */

//require(`../../cdn/TweenMax.min.js`);
require(`./0yLbYWbO.png`);
require(`./r8US84pyqs0RO5rUCyJBp1Dg.webp`);
require(`./1s.png`);
require(`./2s.png`);
require(`./3s.png`);
require(`./4s.png`);

const Croissant = () => {
	const envelope = useRef<HTMLDivElement>(null);
	const button = useRef<HTMLButtonElement>(null);
	const [flipped, setFlipped] = useState(false);
	const [firstEffect, setFirstEffect] = useState(false);
	const [initEffect, setInittEffect] = useState(false);

	const base = window.screen.width > window.screen.height ? 0.7 : 0.95;
	const tl = gsap.timeline();
	/* hljs.registerLanguage(`javascript`, javascript); */
	function pullOut(e:any) {
    if(e.target.classList.contains('photo'))
      return false;
		if (envelope.current === null) {
			return null;
		}
		if (envelope.current && !initEffect) {// eslint-disable-line
			if (envelope.current.classList.contains(`is-open`)) {
				return null;
			}
			setInittEffect(true);
			tl.to(
				`.flap`,
				1,
				{
					rotationX: 180,
					ease: Power1.easeInOut,// eslint-disable-line
				},
				`scaleBack`
			);
			tl.to(
				`.invitation`,
				1,
				{
					scale: base,
					ease: Power4.easeInOut,// eslint-disable-line
				},
				`scaleBack`
			).set(`.flap`, {
				zIndex: 0,
			});
			tl.to(`.card`, 1, {
				y: `0%`,
				scaleY: 1,
				ease: Circ.easeInOut,// eslint-disable-line
			});
			/* tl.to(`.card`, 1, {
        scale: 0.8,
        ease: Power4.easeIn,
      }) */
			tl.set(`.mask`, {
				//- Change overflow on mask
				overflow: `visible`,
				onComplete() {
					if (envelope.current != null) {
						envelope.current.classList.toggle(`is-open`);
					}
				},
			});
			tl.to(
				`.mask`,
				1.3,
				{
					"clip-path": `inset(0 0 0% 0)`,
					ease: Circ.easeInOut,// eslint-disable-line
				},
				`moveDown`
			);
			tl.to(
				`.card`,
				1.3,
				{
					y: `100%`,
					scaleY: 1,
					ease: Circ.easeInOut,// eslint-disable-line
				},
				`moveDown`
			);
			tl.to(
				`button`,
				1,
				{
					y: `180px`,
					ease: Circ.easeInOut,// eslint-disable-line
					onComplete() {
						if (button != null) {
							if (button.current != null) {
						 button.current.classList.toggle(`invert`);
          				button.current.textContent = `Quiero saber más!`;
							}
						}
						setFirstEffect(true);
					},
				},
				`moveDown+=0.15`
			);
		} else if (firstEffect) {
			setFlipped(!flipped);
			const ry = !flipped ? 180 : 0;
			gsap.to(`.card`, 1, {
				rotationY: ry,
				ease: Power4.easeInOut,// eslint-disable-line
				onComplete() {
					/* if (button != null) {
						if (button.current != null) {
							button.current.classList.remove(`invert`);
							button.current.textContent = `Ahi nos vemos!`;
						}
					} */
				},
			});
		}
	}

	return (
		<div className="invitation" onClick={pullOut}>
			<div className="envelope" ref={envelope}>
				<div className="mask">
					<div className="card">
						<div className="face front">
							<h1>{/* <span className="extrude">Invitation Card</span> */}</h1>
						</div>
						<div className="face back">
							<div className="photo-container-back">
								<div className="photo uno"></div>

								<div className="photo dos"></div>

								<div className="photo tres"></div>

								<div className="photo cuatro"></div>
							</div>
							{/* <div className="head-back">head</div>
							<div className="body-back">body</div>
							<div className="footer-back">
								<span>
									Confirma tu asistencia <a href="">aquí </a>
								</span>{" "}
								<br />
								<span>
									Colaboracion para la boda <a href="">aquí 💸💎💰</a>
								</span>{" "}
								<br />
							</div> */}
						</div>
					</div>
				</div>
			</div>
			<div className="flap"></div>
			 <button style={{display:(flipped?`none`:`block`)}} className="button-action" ref={button}>
          Te invitamos!
        </button>
		</div>
	);
};

export default Croissant;
