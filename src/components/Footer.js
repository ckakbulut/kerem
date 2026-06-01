import FadeInSection from "./FadeInSection";
import "../styles/Footer.css";

function Footer() {
    return (
        <FadeInSection>
            <div id="credits">
                <div className="ending-credits">
                    <div>
                        Built by Can Kerem Akbulut — design adapted from{" "}
                        <a
                            href="https://gazijarin.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Gazi Jarin
                        </a>
                        .
                    </div>
                </div>
            </div>
        </FadeInSection>
    );
}

export default Footer;
