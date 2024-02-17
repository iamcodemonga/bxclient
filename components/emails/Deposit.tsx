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
  
  interface DepositEmailProps {
    username: string;
    plan: string;
    method: string;
    amount: number;
  }
  
  export const DepositEmail = ({
    username,
    plan,
    method,
    amount
  }: DepositEmailProps) => (
    <Html>
      <Head />
      <Preview>
        The future is crypto, real-estate and investment.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* <Img
            src={`https://botexfinance.com/logo.png`}
            width="170"
            height="50"
            alt="botexfinance"
            style={logo}
          /> */}
          <Text style={paragraph}>Hi {username},</Text>
          <Text style={paragraph}>
            Your request to deposit ${amount} in our {plan} plan using {method} has been received and will be credited to your account as soon as payment has been received and verified.
          </Text>
          <Text style={paragraph}>
            You can earn a referral bonus of 10% on every deposit made by any user who registered with your referral link. simply share your referral link to your family, friends and colleagues to start earning.
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="https://botexfinance.com/account/referrals">
              Get referral link
            </Button>
          </Section>
          <Text style={paragraph}>
            Regards,
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
  
  DepositEmail.PreviewProps = {
    username: "Alan",
  } as DepositEmailProps;
  
  export default DepositEmail;
  
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
    objectFit: "cover"
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
  