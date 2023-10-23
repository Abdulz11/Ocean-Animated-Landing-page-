import model1 from "./assets/pexels-arianna-jadé-4006576.jpg";
import model2 from "./assets/pexels-alexander-krivitskiy-1572878.jpg";
import model3 from "./assets/pexels-nappy-1771383.jpg";
import model4 from "./assets/pexels-sebastiaan-stam-1097456.jpg";
import { useRef, useLayoutEffect } from "react";
import { gsap, Power2, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  let heroBackground = useRef(null);
  let heroImage = useRef(null);
  const tl = useRef(null);
  let imgOverlay = useRef(null);
  let postHero = useRef(null);
  let penulHero = useRef(null);
  let app = useRef();

  useLayoutEffect(() => {
    const heroCtx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from(heroBackground.current, {
          width: 0,
          duration: 1,
          ease: Power1,
        })
        .fromTo(
          heroImage.current,
          {
            left: 0,
            width: 0,
          },
          {
            left: "47.9%",
            width: 500,
            duration: 1,
            delay: 1,
            ease: Power1,
          },
          "-=1.5"
        )
        .to(imgOverlay.current, { width: 0 })
        .fromTo(
          ".hero-text-one",
          { y: 15 },
          { y: 0, opacity: 1, stagger: { each: 0.2 } }
        )
        .fromTo(
          "nav",
          { y: 10 },
          {
            opacity: 1,
            y: 0,
          }
        )
        .fromTo(
          ".side-message",
          {
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
          },
          "<"
        );
    }, app);

    return () => heroCtx.revert();
  }, []);

  useLayoutEffect(() => {
    let postCtx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: postHero.current,
            start: "top 40%",
          },
        })
        .to(".image-in-post img", {
          y: 0,
          ease: Power1,
          duration: 1.5,
          stagger: { each: 0.3 },
        })
        .to(
          ".image-in-post img",
          {
            scale: 1,
            ease: Power2,
            stagger: { each: 0.2 },
          },
          "-=1"
        )
        .fromTo(
          ".post-hero .texts",
          {
            opacity: 0,
            y: 15,
          },
          { opacity: 1, y: 0, stagger: 0.2 },
          "-=1"
        )
        .to(".lines div", {
          scrollTrigger: {
            trigger: ".image-in-post",
            scrub: 3,
          },
          height: "612px",
        });
    }, postHero);

    return () => postCtx.revert();
  }, []);

  useLayoutEffect(() => {
    let penulHeroCtx = gsap.context(() => {
      let tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: penulHero.current,
            start: "top 90%",
          },
        })
        .to(".penul-img-div", {
          x: 0,
          duration: 1.2,
          ease: Power2,
        })
        .to(
          ".penul-text",
          {
            x: 0,
            duration: 1.1,
            ease: Power2,
          },
          "-=1"
        )
        .to(".overlay", {
          width: 0,
          ease: Power1,
          duration: 1.3,
        })
        .to(
          ".penul-img-div img",
          {
            scale: 1,
          },
          "-=1"
        )
        .to(".penul-text span", { color: "white" }, ">");
    }, penulHero);

    return () => penulHeroCtx.revert();
  }, []);

  return (
    <div ref={app} className='app'>
      <nav>
        <div className='link-div'>
          <h2>Ocean.</h2>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Expertise</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a>Career</a>
            </li>
            <li>
              <a>Services</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Hero section */}
      <div className='hero' ref={heroBackground}>
        <div className='hero-text'>
          <h2 className='hero-text-one'>
            Breath In <span>the Sea</span>
          </h2>
          <p className='hero-text-one'>Embrace the summer </p>
        </div>
        <div className='hero-img-div' ref={heroImage}>
          <img src={model2} alt='picture of model' />
          <div className='hero-img-overlay' ref={imgOverlay}></div>
        </div>
        <div className='side-message'>
          <h3>Inhale</h3>
          <div></div>
        </div>
      </div>
      {/* side-panel */}
      {/* <section className='side-panel'>
        <a>facebook</a>
        <a>twitter</a>
        <a>instagram</a>
      </section> */}
      {/* next section */}
      <section className='post-hero' ref={postHero}>
        <div className='lines'>
          <div></div>
          <div></div>
        </div>

        <div className='text'>
          <h2 className='texts'>
            Spend your time with <span>you</span> Time to let your soul{" "}
            <span>Exfoliate</span>.
          </h2>
          <p className='texts'>
            Making time for eveyone else and forgetting the most important
            person happens to everyone. Time shift back the focus.
          </p>
          <button className='texts'>Join</button>
        </div>
        <div className='images-div'>
          <div className='image-in-post'>
            <img src={model1} alt='model ' />
          </div>
          <div className='image-in-post'>
            <img src={model3} alt='model sitting on stairs ' />
          </div>
        </div>
      </section>
      {/* penul-section */}
      <section className='penul-hero' ref={penulHero}>
        <div className='penul-img-div'>
          <img src={model4} alt='model' />
          <div className='overlay'></div>
        </div>
        <div className='penul-text'>
          <p>
            What is life without self-<span>expression</span>. Indulge in your
            decadence as you <span>unwind</span> in your element.
          </p>
        </div>
      </section>
      <footer>
        <h4>
          <span>O</span>cean.
        </h4>
      </footer>
    </div>
  );
}

export default App;
