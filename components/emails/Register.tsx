import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface RegisterEmailProps {
    username: string;
  }

  
  export const RegisterEmail = ({
    username,
  }: RegisterEmailProps) => (
    <Html>
      <Head />
      <Preview>
        The leading crypto real-estate investment company.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* <Img
            src={`${baseUrl}/static/koala-logo.png`}
            width="170"
            height="50"
            alt="Koala"
            style={logo}
          /> */}
          <Text style={paragraph}>Hi {username},</Text>
          <Text style={paragraph}>
            Welcome to botexfinance, the leading cryptocurrency real estate investment company. We trade your investment and offer great profit to you in a maximum of 30days. Invest today and enjoy great profit.
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="https://botexfinance.com/login">
              Get started
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The Botex Finance Team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            7 Home Farm, Bagshot Park, Bagshot, Surrey, UK, GU19 5PJ
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  RegisterEmail.PreviewProps = {
    username: "Alan",
  } as RegisterEmailProps;
  
  export default RegisterEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const btnContainer = {
    textAlign: "center" as const,
  };
  
  const button = {
    backgroundColor: "#c89b41",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };
  