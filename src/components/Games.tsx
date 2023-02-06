import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';

export const Games = () => {
    return (
        <div
            id="home"
            style={{
                background: `linear-gradient(136deg,#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1)`,
                backgroundSize: "1200% 1200%",
              }}
            className="py-3 title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
        >
            <div className="container py-5">
                <div id="stars"></div>
                <Container className="text-center">
                    <h1 className="display-1">
                        Metroid NES
                    </h1>
                    <iframe width="552" height="167" src="https://itch.io/embed/1868617"><a href="https://michye.itch.io/rollaball">Rollaball by michye</a></iframe>
                    <h1 className="display-1">
                        <div className="lead typist">
                            Contribution: I worked on player weapons, custom level design, Zoomer enemies, and camera control
                        </div>
                    </h1>
                    <h1 className="display-1">
                        <div className="lead typist">
                            Technologies: C#, Unity
                        </div>
                    </h1>
                    <h1 className="display-1">
                        <div className="lead typist">
                            by Michael Ye
                        </div>
                    </h1>
                </Container>
            </div>
        </div>
    )
}