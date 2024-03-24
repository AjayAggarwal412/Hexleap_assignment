import {
  Heading,
  Button,
  Box,
  Card,
  Text,
  Image,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const cardData = [
  {
    heading: "Sacramento River Cats",
    image: "/images/1.jpeg",
    event: "48",
    sport: "Baseball",
  },
  {
    heading: "Las Vegas Aviators",
    image: "/images/2.jpeg",
    event: "28",
    sport: "Baseball",
  },
  {
    heading: "New jersey devils",
    image: "/images/3.jpeg",
    event: "15",
    sport: "Icehockey",
  },
  {
    heading: "Las Vegas Aviators",
    image: "/images/2.jpeg",
    event: "28",
    sport: "Baseball",
  },
  {
    title: "Advertisement title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/4.jpeg",
  },
];

const secondCardData = [
  {
    title: "Las Vegas Aviators",
    description: "Las Vegas Ballpark, Las Vegas, Nevada",
    collection: "Take Flight Collection",
    image: "/images/5.jpeg",
  },
  {
    title: "Sacramento River Cats",
    description: "Sutter Health Park, Sacramento, California",
    collection: "Orange Collection",
    image: "/images/6.jpeg",
  },
  {
    title: "Las Vegas Aviators",
    description: "Las Vegas Ballpark, Las Vegas, Nevada",
    collection: "Take Flight Collection",
    image: "/images/5.jpeg",
  },
];

export default function Custom() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    updateThemeStyles(!isDarkTheme);
    const body = document.querySelector("body");
    if (body) {
      body.style.backgroundColor = isDarkTheme ? "#FFFFFF" : "#292B32";
    }
  };

  const updateThemeStyles = (isDarkMode: boolean) => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--bg-color", "#292B32");
      root.style.setProperty("--text-color", "#FFFFFF");
      root.style.setProperty("--card-color", "#3B3E47");
      root.style.setProperty(
        "--gradient",
        "linear-gradient(180deg, #18282A 0%, #221A2C 100%)"
      );
    } else {
      root.style.setProperty("--bg-color", "#FFFFFF");
      root.style.setProperty("--text-color", "#000000");
      root.style.setProperty("--card-color", "#F3F4F6");
      root.style.setProperty(
        "--gradient",
        "linear-gradient(180deg, #F9F8FF 0%, #F3F9FF 100%)"
      );
    }
  };

  useEffect(() => {
    updateThemeStyles(isDarkTheme);
  }, [isDarkTheme]);

  return (
    <>
      {/* sports heading */}

      <Box textAlign="left" mb={4} position="relative">
        <Heading
          fontFamily="Poppins"
          fontSize="24px"
          fontWeight="700"
          as="h1"
          size="xl"
          borderBottom="2px"
          borderColor="blue.500"
          display="inline-block"
          color="var(--text-color)"
          marginTop="2%"
          marginLeft="15%"
        >
          Sports
        </Heading>

        {/* Theme Toggle Button */}
        <Button
          colorScheme="blue"
          position="absolute"
          top="80%"
          right="5%"
          transform="translateY(-50%)"
          onClick={toggleTheme}
        >
          {isDarkTheme ? "Switch to Light" : "Switch to Dark"}
        </Button>
      </Box>

      {/* Card box */}

      <Box
        display="flex"
        justifyContent="center"
        p={4}
        maxW="1241px"
        h="673px"
        mx="auto"
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        {cardData.map((data, index) => (
          <Card
            key={index}
            width="237px"
            m={2}
            h="511px"
            backgroundColor="var(--card-color)"
            color="var(--text-color)"
          >
            <CardBody>
              <Image
                src={data.image}
                objectFit="cover"
                h={index < 4 ? "385.31px" : "218px"}
                w="217px"
              />

              <Heading
                fontWeight="500"
                fontSize="17px"
                lineHeight="20.57px"
                color="var(--text-color)"
                mt={2}
              >
                {data.heading}
              </Heading>

              {index !== cardData.length - 1 && (
                <>
                  <Box mt={2} borderRadius={2}>
                    <Grid
                      templateRows="repeat(2, 1fr)"
                      templateColumns="repeat(2, 1fr)"
                      gap={2}
                      color="var(--text-color)"
                      backgroundColor="var(--card-color)"
                      p={1}
                    >
                      <GridItem
                        rowSpan={1}
                        colSpan={1}
                        color="var(--text-color)"
                        ml={2}
                        fontSize="12px"
                        fontWeight="400"
                      >
                        Total events
                      </GridItem>
                      <GridItem
                        rowSpan={1}
                        color="var(--text-color)"
                        ml={4}
                        fontSize="12px"
                        fontWeight="400"
                      >
                        Sport
                      </GridItem>
                      <GridItem
                        rowSpan={1}
                        colSpan={1}
                        ml={2}
                        fontSize="14px"
                        fontWeight="500"
                      >
                        {data.event} events
                      </GridItem>
                      <GridItem
                        rowSpan={1}
                        colSpan={1}
                        ml={4}
                        fontSize="14px"
                        fontWeight="500"
                      >
                        {data.sport}
                      </GridItem>
                    </Grid>
                  </Box>
                </>
              )}
            </CardBody>

            {index === cardData.length - 1 &&
              data.title &&
              data.description && (
                <>
                  <CardHeader>
                    <Heading
                      size="md"
                      color="var(--text-color)"
                      fontWeight="600"
                      fontSize="20px"
                      lineHeight="24.2px"
                    >
                      {data.title}
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Box w="187.14px" h="171px">
                      <Text
                        color="var(--text-color)"
                        fontSize="12.8px"
                        fontWeight="400"
                        lineHeight="19px"
                      >
                        {data.description}
                      </Text>
                    </Box>
                  </CardBody>
                </>
              )}
          </Card>
        ))}
      </Box>

      {/* see more button */}

      <Box display="flex" justifyContent="center">
        <Button
          backgroundColor="#2C9CF0"
          width="124px"
          height="46px"
          padding="10px, 30px, 10px, 30px"
          borderRadius="3px"
          marginBottom="5%"
        >
          See more
        </Button>
      </Box>

      {/* second box heading  */}

      <Box
        mt={4}
        pt={8}
        maxW="1240px"
        mx="auto"
        h="978px"
        style={{ background: "var(--gradient)" }}
      >
        <div
          style={{
            marginTop: "40px",
            color: "var(--text-color)",
            fontSize: "50px",
            fontWeight: "700",
            lineHeight: "52.5px",
            fontFamily: "Poppins",
            textAlign: "center",
          }}
        >
          Collection Spotlight
        </div>

        <div
          style={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "22.65px",
            textAlign: "center",
            color: "var(--text-color)",
            marginTop: "30px",
            width: "917px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "4em",
            display: "block",
          }}
        >
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </div>

        {/* second box */}

        <Box display="flex" justifyContent="center" mt={4}>
          {secondCardData.map((data, index) => (
            <Card
              key={index}
              m={8}
              maxW="257px"
              h="624px"
              backgroundColor="var(--card-color)"
              color="var(--text-color)"
              boxShadow={
                isDarkTheme ? "none" : "0px 4px 12px rgba(0, 0, 0, 0.1)"
              }
            >
              <CardBody>
                <Image
                  src={data.image}
                  objectFit="cover"
                  h={index < 4 ? "385.31px" : "218px"}
                  w="217px"
                />

                <Box
                  position="absolute"
                  mt={5}
                  left="50%"
                  transform="translateX(-50%)"
                  borderBottom="2px dashed #DFDFDF"
                  width="80%"
                  color="#818A97"
                />
              </CardBody>

              <CardBody>
                <Heading
                  color="var(--text-color)"
                  fontWeight="500"
                  fontSize="17px"
                  lineHeight="26.52px"
                  textAlign="center"
                  mb={4}
                >
                  {data.title}
                </Heading>

                <Box>
                  <Text
                    color="var(--text-color)"
                    fontSize="14px"
                    fontWeight="400"
                    lineHeight="21px"
                    textAlign="center"
                    mb={4}
                  >
                    OCT 15 | SUN | 4:30 PM
                  </Text>
                </Box>

                <Box>
                  <Text
                    color="var(--text-color)"
                    fontSize="14px"
                    fontWeight="400"
                    lineHeight="20.58px"
                    textAlign="center"
                  >
                    {data.description}
                  </Text>
                </Box>

                <Box
                  w="213px"
                  h="36px"
                  textAlign="center"
                  mt={3}
                  p={2}
                  fontWeight="500"
                  fontSize="12.73px"
                  color="#ffff"
                  backgroundColor="#000000"
                >
                  {data.collection}
                </Box>

                {/* Circle 1 */}
                <Box
                  position="absolute"
                  top="50%"
                  left="-2"
                  transform="translateY(520%)"
                  borderRadius="50%"
                  style={{ background: "var(--gradient)" }}
                  width="20px"
                  height="20px"
                />

                {/* Circle 2 */}
                <Box
                  position="absolute"
                  top="50%"
                  right="-2"
                  transform="translateY(520%)"
                  borderRadius="50%"
                  style={{ background: "var(--gradient)" }}
                  width="20px"
                  height="20px"
                />
              </CardBody>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}
