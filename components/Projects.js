import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projectP4.jpeg";
// import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/projectP5.jpg";
// import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/projectP6.jpg";
// import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
          title: "Web Development Project",
          description: "A full-stack web application built with React and Node.js.",
          imgUrl: projImg1,
        },
        {
          title: "IoT Raspberry Pi Project",
          description: "Developed an RFID Attendance System using Raspberry Pi for efficient and automated attendance tracking.",
          imgUrl: projImg2,
        },
        {
          title: "Machine Learning Project",
          description: "A machine learning model trained for image recognition.",
          imgUrl: projImg3,
        },
        {
          title: "E-commerce Platform",
          description: "Developed a scalable e-commerce platform with user-friendly interface.",
          imgUrl: projImg1,
        },
        {
          title: "Mobile App Development",
          description: "Created a cross-platform mobile app using React Native.",
          imgUrl: projImg2,
        },
        {
          title: "Data Visualization Project",
          description: "Implemented data visualization tools using D3.js and Python.",
          imgUrl: projImg3,
        },
      ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have developed projects in web applications, IoT with Raspberry Pi, and machine learning models. My work focuses on innovative and efficient solutions using advanced tools and methodologies.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
