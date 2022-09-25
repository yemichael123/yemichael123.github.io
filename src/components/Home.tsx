import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';

export const Home = () => {
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
                        michael ye :)
                    </h1>
                    <h1 className="display-1">
                        <Typist>
                            <div className="lead typist">
                                i have no clue what i'm doing
                            </div>
                        </Typist>
                    </h1>
                </Container>
            </div>
        </div>
    )
}