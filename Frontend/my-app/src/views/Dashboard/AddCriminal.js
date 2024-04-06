/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState, useRef} from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";
// Chakra imports
import { 
  Box, 
  Button, 
  Flex, 
  Grid, 
  Spacer, 
  Text,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

// Images

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import GradientBorder from "components/GradientBorder/GradientBorder";

// Icons

// Data

/**************************************************************************************
 * Return function of Add Criminal Page
 **************************************************************************************/

function AddCriminal() {
  const history = useHistory();
  const titleColor = "white";
  const fileRef = useRef(null);
  const [name, set_name] = useState("");
  const [crimes, set_crimes] = useState("");
  const [current_status, set_current_status] = useState("");
  const [image_url, set_image_url] = useState("");
  const token = localStorage.getItem('AccessToken')


  const handleNew = () => {
    const form_data = new FormData();
    form_data.append("name", name);
    form_data.append("crimes", crimes);
    form_data.append("current_status", current_status);
    form_data.append("image_url", image_url);
    try {
      axios.post("http://localhost:8000/api/criminals/", form_data, {
        headers: {
          'content-type': 'multipart/form-data', 'Authorization': `Bearer ${token}`
        }
      }).then(() => {
        alert("Criminal Records Updated.");
        history.push("/admin/tables");
      })
        .catch(err => console.log(err))
    } catch (err) { console.log(err); };
  }

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }} mx='auto'>
      <Grid templateColumns={{ sm: "1fr", lg: "50% 38%" }}>
        <Box>
          <Card p='16px' mt='24px'>
            <CardHeader>
              <Flex
                justify='space-between'
                align='center'
                minHeight='60px'
                w='100%'>
                <Text fontSize='lg' color='#fff' fontWeight='bold'>
                  Add a Criminal
                </Text>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex w = '100%'>
                <FormControl>
                  <FormLabel
                    color={titleColor}
                    ms='4px'
                    fontSize='sm'
                    fontWeight='normal'>
                    Name
                  </FormLabel>
                  <GradientBorder
                    mb='24px'
                    h='50px'
                    w='100%'
                    borderRadius='20px'>
                    <Input
                      color={titleColor}
                      bg={{
                        base: "rgb(19,21,54)",
                      }}
                      border='transparent'
                      borderRadius='20px'
                      fontSize='sm'
                      size='lg'
                      w='100%'
                      maxW='100%'
                      h='46px'
                      type='text'
                      placeholder='Enter criminal name'
                      onChange={e => set_name(e.target.value)}
                    />
                  </GradientBorder>
                  <FormLabel
                    color={titleColor}
                    ms='4px'
                    fontSize='sm'
                    fontWeight='normal'>
                    Past Crimes
                  </FormLabel>
                  <GradientBorder
                    mb='24px'
                    h='50px'
                    w='100%'
                    borderRadius='20px'>
                    <Input
                      color={titleColor}
                      bg={{
                        base: "rgb(19,21,54)",
                      }}
                      border='transparent'
                      borderRadius='20px'
                      fontSize='sm'
                      size='lg'
                      w='100%'
                      maxW='100%'
                      h='46px'
                      type='email'
                      placeholder='Mention past crimes (eg.: Theft, Fraud..)'
                      onChange={e => set_crimes(e.target.value)}
                    />
                  </GradientBorder>
                  <FormLabel
                    color={titleColor}
                    ms='4px'
                    fontSize='sm'
                    fontWeight='normal'>
                    Current Status
                  </FormLabel>
                  <GradientBorder
                    mb='24px'
                    h='50px'
                    w='100%'
                    borderRadius='20px'>
                    <Input
                      color={titleColor}
                      bg={{
                        base: "rgb(19,21,54)",
                      }}
                      border='transparent'
                      borderRadius='20px'
                      fontSize='sm'
                      size='lg'
                      w='100%'
                      maxW='100%'
                      h='46px'
                      type='email'
                      placeholder='Mention the current status of criminal (eg.: In Jail, Out on Bail..)'
                      onChange={e => set_current_status(e.target.value)}
                    />
                  </GradientBorder>
                  <FormLabel
                    color={titleColor}
                    ms='4px'
                    fontSize='sm'
                    fontWeight='normal'>
                    Upload image
                  </FormLabel>
                  <GradientBorder
                    me={{ sm: "0px", md: "24px" }}
                    w='100%'
                    mb='24px'
                    h='50px'
                    borderRadius='18px'>
                    <Flex
                      p='20px'
                      bg={{
                        base: "rgb(19,21,54)",
                      }}
                      border='transparent'
                      borderRadius='20px'
                      align='center'
                      h='46px'
                      w='100%'
                      alt="Upload your File">
                      <Text color='gray.400' fontSize='sm'>
                        {image_url.name || "Upload an image where the criminals' face is prominent"}
                      </Text>
                      <Spacer />
                      <Button size = "sm" maxW='400px' h='25px' fontSize='10px' variant='brand' onClick={() => fileRef.current.click()}>
                        CHOOSE FILE
                      </Button>
                      <input ref={fileRef} onChange = {e => set_image_url(e.target.files[0])} style={{display: "none"}} type="file" />
                    </Flex>
                  </GradientBorder>
                  <Button
                    variant='brand'
                    fontSize='12px'
                    type='submit'
                    w='100%'
                    maxW='350px'
                    h='45'
                    mb='20px'
                    mt='20px'
                    onClick={() => handleNew()}>
                    ADD CRIMINAL
                  </Button>
                </FormControl>
              </Flex>
            </CardBody>
          </Card>
        </Box>
      </Grid>
    </Flex>
  );
}

export default AddCriminal;
