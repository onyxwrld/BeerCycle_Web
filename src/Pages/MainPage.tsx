import { Navbar } from "../Components/Navbar"
import { AnimButton } from "../Components/anim_button"

export function Fooldal(){
    return<div className="container">
        <div className="hero-section">
            <img src="src/Images/BeerCycleText.png" id="BeerCycleLogo"/>
            <img src="src/Images/heroSection.png" id="hero-sectionLogo"/>
            <AnimButton/>
        </div>
        <div className="second-section">
            <h2>
                Rólunk
            </h2>
            <ul>
                <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, alias. Quidem, ipsa quaerat deserunt repudiandae obcaecati adipisci reprehenderit repellat numquam pariatur, eaque ratione enim porro iste placeat dolore odio aperiam!
                </li>
                <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, alias. Quidem, ipsa quaerat deserunt repudiandae obcaecati adipisci reprehenderit repellat numquam pariatur, eaque ratione enim porro iste placeat dolore odio aperiam!
                </li>
                <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, alias. Quidem, ipsa quaerat deserunt repudiandae obcaecati adipisci reprehenderit repellat numquam pariatur, eaque ratione enim porro iste placeat dolore odio aperiam!
                </li>
            </ul>
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