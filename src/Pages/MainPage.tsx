import { AnimButton } from "../Components/anim_button"

export function Fooldal() {
    return <div className="container">
        <div className="hero-section">
            <img src="src/Images/BeerCycleText.png" id="BeerCycleLogo" />
            <img src="src/Images/heroSection.png" id="hero-sectionLogo" />
            <AnimButton />
        </div>
        <div className="second-section">
            <div className="shape">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="bulletPointContainer">
            </div>
            <div className="bulletPointContainer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eveniet voluptatum eum illum. Mollitia reprehenderit accusantium repudiandae! Ab perspiciatis minus et magni consequuntur, rerum nesciunt iusto earum assumenda eos iure.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eveniet voluptatum eum illum. Mollitia reprehenderit accusantium repudiandae! Ab perspiciatis minus et magni consequuntur, rerum nesciunt iusto earum assumenda eos iure.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eveniet voluptatum eum illum. Mollitia reprehenderit accusantium repudiandae! Ab perspiciatis minus et magni consequuntur, rerum nesciunt iusto earum assumenda eos iure.</p>
            </div>
        </div>
        <div className="review-section">
            <h2>
                Visszajelzések
            </h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, odit error aliquid velit impedit soluta exercitationem eaque repudiandae dolorem, consequatur optio possimus iusto harum cupiditate minus nihil hic distinctio facere!
            </p>
        </div>
        <div className="mobil-section">
            <h2>
                Töltsd le mobil alkalmazásunkat!
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis explicabo beatae, ex quam, facilis ea voluptates rerum, eaque dolore quis distinctio qui modi nesciunt aperiam itaque ut esse! Reiciendis, est!
            </p>
            <button>
                Letöltöm!
            </button>
        </div>
    </div>
}