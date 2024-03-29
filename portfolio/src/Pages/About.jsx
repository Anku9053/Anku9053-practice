import {
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Container,
  Text,
  Image,
} from "@chakra-ui/react";
// import resume from "../Components/Images/src/Ankesh_Kumar_Resume (3).4edaaddf2a7fc08d585b (8).pdf";
import resume from "../Components/Images/Ankesh_Kumar_Resume (3).4edaaddf2a7fc08d585b (8).pdf"
// src\Components\Images\Ankesh_Kumar_Resume (3).4edaaddf2a7fc08d585b (8).pdf
//src\Components\Images\Ankesh_Kumar_Resume (3).4edaaddf2a7fc08d585b (8).pdf
import '../Components/Resume.css'
import { SlDocs } from "react-icons/sl";
import { NavLink } from 'react-router-dom';
const testimonials = [
  {
    name: "Ankesh Kumar.",
    role: "Full Stack Web Developer",
    content:
      "As a full stack web developer, I am skilled in both front-end and back-end web development. I have knowledge of programming languages such as JavaScript, HTML, and CSS, as well as web frameworks such as React, Nodejs, and Express . My goal is to build scalable and user-friendly web applications that meet the needs of clients and users. I possess strong problem-solving and collaboration skills, which are essential for working effectively in a team environment.",
    avatar: "https://avatars.githubusercontent.com/u/112754506?v=4",
    
  },
  
];
<a href="https://drive.google.com/file/d/1KqbdZyr1_uH6FdAFirUEMIxpqUsPC81Z/view?usp=sharing" download>Resume</a>

const backgrounds = [
  `url("https://media.istockphoto.com/id/1185382671/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=3YwJa7lCw-cQ-hviINULUokL9lYU4RuGjMP_E_0N8E4=")`,
];

function TestimonialCard(props) {
  function downloadFile1() {
    window.open(
      "https://drive.google.com/file/d/1KqbdZyr1_uH6FdAFirUEMIxpqUsPC81Z/view?usp=share_link",
      "_blank"
    );
    const link = document.createElement("a");
    link.download = resume;
    document.body.appendChild(link);
    link.click();
  }
  const { name, role, content, avatar, index } = props;
  return (
    <div id="about" key={index} className="about section" >
      <Flex
        boxShadow={"lg"}
        maxW={{ lg: "800px", md: "100%", base: "500px" }}
        direction={{ base: "column-reverse", md: "row" }}
        width={"full"}
        rounded={"xl"}
        p={10}
        justifyContent={"space-between"}
        position={"relative"}
        bg={useColorModeValue("white", "gray.800")}
        _after={{
          content: '""',
          position: "absolute",
          height: "21px",
          width: "29px",
          left: "35px",
          top: "-10px",
          backgroundSize: "cover",
          backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
        }}
        _before={{
          content: '""',
          position: "absolute",
          zIndex: "-1",
          height: "full",
          maxW: "800px",
          width: "full",
          filter: "blur(40px)",
          transform: "scale(0.98)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          top: 0,
          left: 0,
          backgroundImage: backgrounds[index],
        }}
      >
        <Flex
          direction={"column"}
          textAlign={"left"}
          justifyContent={"space-between"}
          className="about section"
        >
          <chakra.p
            id="user-detail-intro"
            fontFamily={"Inter"}
            fontWeight={"medium"}
            fontSize={"15px"}
            pb={4}
          >
            {content}
          </chakra.p>
          <chakra.p fontFamily={"Work Sans"} fontWeight={"bold"} fontSize={14} className="name-title">
            {name}
            <chakra.span
              fontFamily={"Inter"}
              fontWeight={"medium"}
              color={"gray.500"}
            >
              {" "}
              - {role}
            </chakra.span>
          </chakra.p>
        </Flex>
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            className="home-img"
            src={avatar}
            height={"180px"}
            width={{ sm: "200px", md: "900px", lg: "1000px" }}
            borderRadius={'50%'}
            alignSelf={"center"}
            m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
            transform="scale(1.0)"
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          />
          <NavLink to="https://drive.google.com/file/d/1KqbdZyr1_uH6FdAFirUEMIxpqUsPC81Z/view">
            <button id="resume-button-2" onClick={downloadFile1}>
              <SlDocs />
              <a href={resume} download>
                
              RESUME
              </a>
            </button>
          </NavLink>
        </Flex>
      </Flex>
    </div>
  );
}

export default function About() {
  return (
    <Container maxW={"4xl"} marginTop={25}>
      <Text
        as={"span"}
        fontSize={"4xl"}
        fontWeight={"bold"}
        position={"relative"}
        _after={{
          content: "''",
          width: "full",
          height: "30%",
          position: "absolute",
          bottom: 1,
          left: 0,
          bg: "white.400",
          zIndex: -1,
        }}
      >
        ABOUT ME
      </Text>
      <Flex
        textAlign={"center"}
        pt={2}
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
        overflow={"hidden"}
        height={"800px"}
      >
        <SimpleGrid
          columns={{ base: 1, xl: 1 }}
          spacing={"20"}
          mt={16}
          mb={16}
          mx={"auto"}
        >
          {testimonials.map((cardInfo, index) => (
            <TestimonialCard {...cardInfo} key={index} index={index} />
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
}