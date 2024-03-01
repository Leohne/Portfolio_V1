import { useEffect } from "react";
import github from "../assets/img/github-mark/github-mark-white.svg"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";    
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);


function Header () {
    const ScrollToPresent = () => {
        gsap.to(window, { duration: 2, scrollTo: { y: ".present_title", offsetY: 160 } });
    }
    const ScrollToProjet = () => {
        gsap.to(window, { duration: 2, scrollTo: { y: ".title_projet", offsetY: 160 } });
    }
    const ScrollToSkill = () => {
        gsap.to(window, { duration: 2, scrollTo: { y: ".title_skill", offsetY: 160 } });
    }
    useEffect(() => {
    
        const windowHeight = window.innerHeight;
        const middlePosition = windowHeight / 2; 
    
        gsap.to(".div_header", {
            opacity: 1, 
            scrollTrigger: {
                trigger: ".present_div", 
                start: "top center", 
                end: () => `top+=${middlePosition} center`,
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });
    }, []);

    return (
        <header>
            <div className="div_header">
            <nav>
            <ul className="nav_ul">
                <li className="nav_ul-li"><a onClick={ScrollToPresent} >Présentation</a></li>
                <li className="nav_ul-li"><a onClick={ScrollToProjet}>Projet</a></li>
                <li className="nav_ul-li"><a onClick={ScrollToSkill}>Compétence</a></li>
            </ul>
            <a className="github-a" href="https://github.com/Leohne" target="_blank" rel="noreferrer">
            <img src={github} className="github" alt="Github" />
            </a>
            </nav>
            </div>
        </header>
    )
}

export default Header