import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Img,
  Text,
  Button,
  Hr,
  Link,
  Row,
  Column,
  Preview,
} from "@react-email/components"
import { render } from "@react-email/render"

interface ConsecutiveMissedSessionProps {
  name?: string;
  sessionsMissed?: number;
  recordingLinks?: string[];
  nextSessionDate?: string;
}

// Email template component
export const ConsecutiveMissedSessionEmail = ({ 
  name = "there", 
  sessionsMissed = 2,
  recordingLinks = [],
  nextSessionDate = "next week"
}: ConsecutiveMissedSessionProps) => {
  return (
    <Html>
      <Head />
      <Preview>Important: You've Missed {sessionsMissed.toString()} Live Sessions in a Row</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Logo */}
          <Section style={styles.logoSection}>
            <Link href="https://www.buildfastwithai.com">
              <Img src="https://iili.io/3qiB1kJ.png" width="120" height="120" alt="BUILD AI" style={styles.logo} />
            </Link>
          </Section>

          {/* Header with gradient background */}
          <Section style={styles.header}>
            <Text style={styles.title}>You've Missed {sessionsMissed.toString()} Live Sessions</Text>
            <Text style={styles.subtitle}>We'd like to help you get back on track!</Text>
          </Section>

          {/* Main Content */}
          <Section style={styles.mainContent}>
            <Text style={styles.contentTitle}>Hey {name},</Text>
            <Text style={styles.paragraph}>
              We've noticed you've missed <strong>{sessionsMissed.toString()} consecutive live sessions</strong> in your AI course. We're reaching out because we don't want you to miss out on valuable learning experiences and the opportunity to ask questions in real-time.
            </Text>
            
            {/* {recordingLinks && recordingLinks.length > 0 && (
              <>
                <Text style={styles.paragraph}>
                  🎥 Catch up on the missed sessions here:
                </Text>
                
                <div style={styles.bulletContainer}>
                  {recordingLinks.map((link, index) => (
                    <Text key={index} style={styles.bulletPoint}>
                      <Link href={link} style={styles.recordingLink}>Session {index + 1} Recording</Link>
                    </Text>
                  ))}
                </div>
              </>
            )} */}

            <div style={{...styles.calloutBox, marginTop: "30px"}}>
              <Text style={styles.calloutTitle}>Need Help?</Text>
              <Text style={styles.calloutText}>
                If you're facing any challenges that are preventing you from attending the live sessions, please reply to this email. We're here to help!
              </Text>
              <Button style={styles.supportButton} href="mailto:support@buildfastwithai.com">
                Contact Support
              </Button>
            </div>

            <Text style={{...styles.nextStepsTitle, marginTop: "30px"}}>Your next steps:</Text>
            
            <div style={styles.bulletContainer}>
              <Text style={styles.bulletPoint}>1️⃣ <strong>Catch up</strong> on the recordings of the sessions you missed</Text>
              <Text style={styles.bulletPoint}>2️⃣ <strong>Join our next live session</strong> on {nextSessionDate}</Text>
              <Text style={styles.bulletPoint}>3️⃣ <strong>Reach out</strong> if you need any assistance</Text>
            </div>

            <Text style={{...styles.paragraph, marginTop: "30px"}}>
              Your success matters to us. Let's get you back on track!
            </Text>
            
            <Text style={styles.paragraph}>
              Best,<br/>
              Team Build Fast with AI
            </Text>
          </Section>

          <Hr style={styles.divider} />

          {/* Social Media Icons */}
          <Section style={styles.socialSection}>
            <Text style={styles.socialTitle}>Connect With Us</Text>
            <Row>
              <Column align="center">
                <Link href="https://www.instagram.com/buildfastwithai/">
                  <Img
                    src="https://iili.io/3qiBMIR.png"
                    width="35"
                    height="35"
                    alt="Instagram"
                    style={styles.socialIcon}
                  />
                </Link>
              </Column>
              <Column align="center">
                <Link href="https://github.com/satvik314">
                  <Img
                    src="https://iili.io/3qiBEmv.png"
                    width="35"
                    height="35"
                    alt="Github"
                    style={styles.socialIcon}
                  />
                </Link>
              </Column>
              <Column align="center">
                <Link href="https://x.com/BuildFastWithAI">
                  <Img
                    src="https://iili.io/3qiBVXp.png"
                    width="35"
                    height="35"
                    alt="Twitter"
                    style={styles.socialIcon}
                  />
                </Link>
              </Column>
              <Column align="center">
                <Link href="https://www.linkedin.com/company/build-fast-with-ai/">
                  <Img
                    src="https://iili.io/3qizzxf.png"
                    width="32"
                    height="32"
                    alt="LinkedIn"
                    style={styles.socialIcon}
                  />
                </Link>
              </Column>
              <Column align="center">
                <Link href="https://www.youtube.com/@buildfastwithai">
                  <Img
                    src="https://iili.io/3qipEwF.png"
                    width="40"
                    height="40"
                    alt="YouTube"
                    style={styles.socialIcon}
                  />
                </Link>
              </Column>
            </Row>
          </Section>
          
          <Text style={styles.bulletPoint2}>
            Join our
            <Link href="https://whatsapp.com/channel/0029Vb6CntX7j6gCfitEKM3s" style={styles.whatsappLink}>
              &nbsp;WhatsApp Channel&nbsp;
            </Link>
            for the latest AI updates, tips, and resources.
          </Text>
          
          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.footerText}>Build Fast With AI, Koramangala, Bengaluru, 560034</Text>
            <Text style={styles.footerText}>Contact: satvik@buildfastwithai.com</Text>
            <Text style={styles.unsubscribeText}>
              <Link href="https://www.buildfastwithai.com/unsubscribe" style={styles.unsubscribeLink}>
                Unsubscribe
              </Link>
              {" • "}
              <Link href="https://www.buildfastwithai.com/privacy-policy" style={styles.unsubscribeLink}>
                Privacy Policy
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles - Red/Urgent Theme
const styles = {
  body: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    WebkitFontSmoothing: "antialiased",
    margin: "0",
    padding: "0",
    width: "100%",
  },
  container: {
    margin: "0 auto",
    padding: "20px 0",
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "#ffffff",
    boxSizing: "border-box" as const,
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  logoSection: {
    padding: "15px",
    textAlign: "center" as const,
    backgroundColor: "#f5f5f5",
  },
  logo: {
    margin: "0 auto",
    padding: "10px",
    borderRadius: "12px",
    maxWidth: "100%",
    height: "auto",
  },
  header: {
    padding: "30px 15px",
    textAlign: "center" as const,
    background: "linear-gradient(135deg, #e53935 0%, #c62828 100%)",
    boxSizing: "border-box" as const,
    margin: "0 auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#ffffff",
    margin: "0 0 10px",
    lineHeight: "1.3",
  },
  subtitle: {
    fontSize: "16px",
    color: "#ffffff",
    margin: "0",
    lineHeight: "1.5",
  },
  mainContent: {
    backgroundColor: "#f9f9f9",
    padding: "30px 20px",
    margin: "20px auto",
    textAlign: "center" as const,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    maxWidth: "90%",
  },
  contentTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#d32f2f",
    margin: "0 auto 20px",
    lineHeight: "1.4",
  },
  paragraph: {
    fontSize: "16px",
    color: "#424242",
    lineHeight: "1.6",
    margin: "0 0 20px",
  },
  bulletContainer: {
    margin: "20px auto",
    padding: "0 10px",
    maxWidth: "85%",
    textAlign: "left" as const,
  },
  bulletPoint: {
    fontSize: "15px",
    color: "#424242",
    margin: "12px auto",
    lineHeight: "1.6",
  },
  bulletPoint2: {
    fontSize: "15px",
    color: "#424242",
    textAlign: "center" as const,
    margin: "12px auto",
    lineHeight: "1.6",
    maxWidth: "85%",
  },
  calloutBox: {
    backgroundColor: "#ffebee",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #ffcdd2",
    margin: "20px auto",
    maxWidth: "90%",
  },
  calloutTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#d32f2f",
    margin: "0 0 10px",
  },
  calloutText: {
    fontSize: "15px",
    color: "#424242",
    margin: "0 0 15px",
    lineHeight: "1.5",
  },
  supportButton: {
    backgroundColor: "#d32f2f",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    border: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  nextStepsTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#d32f2f",
    margin: "0 0 20px",
    textAlign: "center" as const,
  },
  recordingLink: {
    color: "#d32f2f",
    textDecoration: "none",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#d32f2f",
    color: "#ffffff",
    padding: "12px 25px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    border: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  divider: {
    borderColor: "#e0e0e0",
    margin: "25px 10px",
  },
  socialSection: {
    padding: "20px 10px",
    textAlign: "center" as const,
    backgroundColor: "#f5f5f5",
    margin: "10px auto",
    borderRadius: "12px",
    maxWidth: "90%",
  },
  socialTitle: {
    fontSize: "16px",
    color: "#d32f2f",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  socialIcon: {
    margin: "0 5px",
    maxWidth: "100%",
    height: "auto",
    opacity: "0.9",
  },
  whatsappLink: {
    color: "#d32f2f",
    textDecoration: "none",
    fontWeight: "bold",
  },
  footer: {
    padding: "20px 15px",
    textAlign: "center" as const,
    backgroundColor: "#f0f0f0",
    margin: "15px auto 0",
    boxSizing: "border-box" as const,
  },
  footerText: {
    fontSize: "13px",
    color: "#616161",
    margin: "6px 0",
    lineHeight: "1.5",
  },
  unsubscribeText: {
    fontSize: "11px",
    color: "#757575",
    margin: "15px 0 0",
  },
  unsubscribeLink: {
    color: "#616161",
    textDecoration: "underline",
  },
}

export default ConsecutiveMissedSessionEmail
