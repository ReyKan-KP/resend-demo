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

interface EscalationEmailProps {
  name?: string;
  daysSinceActive?: number;
  bookingLink?: string;
  mentorName?: string;
}

// Email template component
export const EscalationEmail = ({ 
  name = "there", 
  daysSinceActive = 14,
  bookingLink = "https://calendly.com/buildfastwithai/mentoring",
  mentorName = "Satvik"
}: EscalationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>⏳ It's Been a While — Let's Get You Back on Track!</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Logo */}
          <Section style={styles.logoSection}>
            <Link href="https://www.buildfastwithai.com">
              <Img src="https://iili.io/3qiB1kJ.png" width="120" height="120" alt="BUILD AI" style={styles.logo} />
            </Link>
          </Section>

          {/* Header with timer icon */}
          <Section style={styles.header}>
            <Text style={styles.title}>⏳ It's Been a While!</Text>
            <Text style={styles.subtitle}>Let's Get You Back on Track</Text>
          </Section>

          {/* Main Content */}
          <Section style={styles.mainContent}>
            <Text style={styles.contentTitle}>Hey {name},</Text>
            <Text style={styles.paragraph}>
              We noticed you haven't been active in the Gen AI Launch Pad for the past <span style={styles.highlight}>{daysSinceActive} days</span>. 
              The capstone project is coming up soon, and now's the perfect time to jump back in and keep up.
            </Text>
            
            <div style={styles.questionBox}>
              <Text style={styles.questionText}>Is there something holding you back?</Text>
            </div>
            
            <div style={styles.bulletContainer}>
              <Text style={styles.bulletPoint}><span style={styles.bulletNumber}>1️⃣</span> Need help getting started with the course</Text>
              <Text style={styles.bulletPoint}><span style={styles.bulletNumber}>2️⃣</span> Facing technical issues</Text>
              <Text style={styles.bulletPoint}><span style={styles.bulletNumber}>3️⃣</span> Busy schedule</Text>
              <Text style={styles.bulletPoint}><span style={styles.bulletNumber}>4️⃣</span> Something else entirely</Text>
            </div>
            
            <div style={styles.supportBox}>
              <Text style={styles.supportText}>
                Whatever it is, we're here to help you overcome it and keep moving forward.
              </Text>
            </div>
            
            <Text style={styles.inspirationalText}>
              Remember, every step you take brings you closer to building something amazing!
            </Text>
            
            <div style={styles.signatureBox}>
              <Text style={styles.signature}>
                Best,<br />
                <span style={styles.teamName}>Team Build Fast with AI</span>
              </Text>
            </div>
            
            <div style={styles.ctaContainer}>
              <Button style={styles.button} href={bookingLink}>
                Get Back on Track →
              </Button>
            </div>
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
          
          <Text style={styles.communityText}>
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

// Styles - Light Theme
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
    background: "linear-gradient(135deg, #F8D7DA 0%, #e5b9bd 100%)",
    boxSizing: "border-box" as const,
    margin: "0 auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#d16973",
    margin: "0 0 10px",
    lineHeight: "1.3",
  },
  subtitle: {
    fontSize: "18px",
    color: "#d16973",
    margin: "0",
    lineHeight: "1.5",
  },
  mainContent: {
    backgroundColor: "#f9f9f9",
    padding: "30px 20px",
    margin: "20px auto",
    textAlign: "left" as const,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    maxWidth: "90%",
  },
  contentTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#d16973",
    margin: "0 auto 20px",
    lineHeight: "1.4",
  },
  paragraph: {
    fontSize: "16px",
    color: "#424242",
    lineHeight: "1.6",
    margin: "0 0 20px",
  },
  highlight: {
    fontWeight: "bold",
    color: "#d16973",
  },
  questionBox: {
    backgroundColor: "#fdf0f2",
    padding: "15px",
    borderRadius: "8px",
    margin: "25px 0",
    borderLeft: "4px solid #F8D7DA",
  },
  questionText: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#d16973",
    margin: "0",
  },
  bulletContainer: {
    margin: "20px auto",
    padding: "5px 15px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
  },
  bulletPoint: {
    fontSize: "16px",
    color: "#424242",
    margin: "15px auto",
    lineHeight: "1.6",
    display: "flex",
    alignItems: "flex-start",
  },
  bulletNumber: {
    marginRight: "10px",
    fontSize: "18px",
  },
  supportBox: {
    backgroundColor: "#e8f5e9",
    padding: "15px",
    borderRadius: "8px",
    margin: "25px 0",
    borderLeft: "4px solid #43a047",
  },
  supportText: {
    fontSize: "16px",
    color: "#2e7d32",
    margin: "0",
    lineHeight: "1.6",
  },
  inspirationalText: {
    fontSize: "18px",
    fontStyle: "italic",
    color: "#616161",
    margin: "25px 0",
    padding: "0 10px",
    borderLeft: "3px solid #9e9e9e",
    lineHeight: "1.6",
  },
  signatureBox: {
    margin: "30px 0 25px",
  },
  signature: {
    fontSize: "16px",
    color: "#424242",
    lineHeight: "1.6",
    margin: "0",
  },
  teamName: {
    fontWeight: "bold",
    color: "#d16973",
  },
  ctaContainer: {
    textAlign: "center" as const,
    margin: "30px 0 10px",
  },
  button: {
    backgroundColor: "#d16973",
    color: "#ffffff",
    padding: "14px 28px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    border: "none",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)",
    transition: "all 0.3s ease",
  },
  communityText: {
    fontSize: "15px",
    color: "#424242",
    textAlign: "center" as const,
    margin: "15px auto",
    lineHeight: "1.6",
    maxWidth: "85%",
  },
  whatsappLink: {
    color: "#25D366",
    textDecoration: "none",
    fontWeight: "bold",
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
    color: "#d16973",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  socialIcon: {
    margin: "0 5px",
    maxWidth: "100%",
    height: "auto",
    opacity: "0.9",
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

export default EscalationEmail
