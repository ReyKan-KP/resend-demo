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

interface OnboardingEmailProps {
  name?: string;
  courseName?: string;
  date?: string;
  time?: string;
  liveSessionLink?: string;
  whatsappLink?: string;
  cardImageUrl?: string;
}

// Email template component
export const OnboardingTriggerEmail = ({ 
  name = "there", 
  courseName = "Generative AI Launch Pad 2025",
  date = "June 14th",
  time = "9AM IST",
  liveSessionLink = "https://www.buildfastwithai.com/premium",
  whatsappLink = "Coming Soon",
  cardImageUrl = "https://iili.io/3qiB1kJ.png"
}: OnboardingEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Generative AI Launch Pad 2025!</Preview>
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
            <Text style={styles.title}>Welcome to {courseName}!</Text>
          </Section>

          {/* Main Content */}
          <Section style={styles.mainContent}>
            <Text style={styles.contentTitle}>Welcome, {name}</Text>
            <Text style={styles.paragraph}>
              We are pleased to have you join the {courseName}.
            </Text>
            
            <Text style={styles.sectionTitle}>Kick-off Session Details</Text>
            <Text style={styles.paragraph}>
              The course begins this weekend.
            </Text>
            <div style={styles.sessionDetails}>
              <Text style={styles.sessionItem}>Session Date: Saturday, {date} at {time}</Text>
            </div>
            
            <Text style={styles.sectionTitle}>Course Overview</Text>
            <div style={styles.bulletContainer}>
              <Text style={styles.bulletPoint}>
                • New video modules released daily
              </Text>
              <Text style={styles.bulletPoint}>
                • Weekly mentoring sessions: Every Saturday at 9AM IST
              </Text>
              <Text style={styles.bulletPoint}>
                • Weekly doubt sessions: Every Wednesday at 8.30PM IST
              </Text>
              <Text style={styles.bulletPoint}>
                • Daily discussions and updates via WhatsApp
              </Text>
            </div>
            
            <Text style={styles.sectionTitle}>Course Logistics</Text>
            <Text style={styles.paragraph}>
              Course Platform: <Link href="https://www.buildfastwithai.com/premium" style={styles.inlineLink}>www.buildfastwithai.com/premium</Link>
            </Text>
            <Text style={styles.paragraph}>
              Course WhatsApp Group link: {whatsappLink}
            </Text>
            
            <Text style={styles.sectionTitle}>Share Your Excitement</Text>
            <Text style={styles.paragraph}>
              Let your network know you have started your AI journey.
            </Text>
            <Text style={styles.paragraph}>
              Tag us and use the hashtag: <strong>#BuildFastwithAI</strong>
            </Text>
            <div style={styles.imageContainer}>
              <Img 
                src={cardImageUrl} 
                width="250" 
                height="250" 
                alt="Build Fast with AI" 
                style={styles.shareImage} 
              />
            </div>
            
            <Text style={styles.sectionTitle}>Contact Information</Text>
            <Text style={styles.paragraph}>
              If you have any questions, feel free to reach out.
            </Text>
            <div style={styles.contactContainer}>
              <Text style={styles.contactItem}>
                • Sakshi: <Link href="mailto:sakshi@buildfastwithai.com" style={styles.inlineLink}>sakshi@buildfastwithai.com</Link>
              </Text>
              <Text style={styles.contactItem}>
                • Satvik: <Link href="mailto:satvik@buildfastwithai.com" style={styles.inlineLink}>satvik@buildfastwithai.com</Link>
              </Text>
            </div>
            
            <Text style={styles.paragraph}>
              Looking forward to an exciting journey ahead.
            </Text>
            
            <Text style={styles.signOff}>
              Best regards,<br />
              Team Build Fast With AI
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

// Styles - Powder Blue Theme
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
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  },
  logoSection: {
    padding: "15px",
    textAlign: "center" as const,
    backgroundColor: "#f5f5f5",
    borderBottom: "1px solid #e0e0e0",
  },
  logo: {
    margin: "0 auto",
    padding: "10px",
    borderRadius: "12px",
    maxWidth: "100%",
    height: "auto",
    transition: "transform 0.3s ease",
  },
  header: {
    padding: "35px 15px",
    textAlign: "center" as const,
    background: "linear-gradient(135deg, #D0EBFF 0%, #A0D7FF 100%)",
    boxSizing: "border-box" as const,
    margin: "0 auto",
    borderBottom: "1px solid #b8e0ff",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#2D3748",
    margin: "0 0 10px",
    lineHeight: "1.3",
    textShadow: "0 1px 2px rgba(0,0,0,0.05)",
  },
  mainContent: {
    backgroundColor: "#f9f9f9",
    padding: "30px 25px",
    margin: "25px auto",
    textAlign: "center" as const,
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    maxWidth: "90%",
    border: "1px solid #e8e8e8",
  },
  contentTitle: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "#2D3748",
    margin: "0 auto 20px",
    lineHeight: "1.4",
    borderBottom: "2px solid #4299e1",
    paddingBottom: "10px",
    display: "inline-block",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#4299e1",
    margin: "35px 0 15px",
    textAlign: "left" as const,
    borderLeft: "3px solid #4299e1",
    paddingLeft: "10px",
  },
  paragraph: {
    fontSize: "16px",
    color: "#424242",
    lineHeight: "1.6",
    margin: "20px 0",
    textAlign: "left" as const,
  },
  signOff: {
    fontSize: "16px",
    color: "#424242",
    lineHeight: "1.6",
    margin: "30px 0 10px",
    textAlign: "left" as const,
    padding: "15px",
    backgroundColor: "#f0f7ff",
    borderRadius: "8px",
    borderLeft: "3px solid #4299e1",
  },
  bulletContainer: {
    margin: "15px auto",
    padding: "15px",
    maxWidth: "100%",
    textAlign: "left" as const,
    backgroundColor: "#f0f7ff",
    borderRadius: "8px",
    border: "1px solid #d0e3f7",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "15px 0 25px",
  },
  bulletPoint: {
    fontSize: "15px",
    color: "#424242",
    margin: "12px auto",
    lineHeight: "1.6",
    textAlign: "left" as const,
  },
  sessionDetails: {
    margin: "15px 0",
    padding: "15px 20px",
    backgroundColor: "#EBF8FF",
    borderRadius: "10px",
    borderLeft: "4px solid #4299e1",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start" as const,
  },
  sessionItem: {
    fontSize: "16px",
    color: "#424242",
    margin: "8px 0 15px",
    lineHeight: "1.5",
    textAlign: "left" as const,
    fontWeight: "bold",
  },
  joinButton: {
    backgroundColor: "#4299e1",
    color: "#ffffff",
    padding: "10px 18px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    border: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
    margin: "5px 0",
    transition: "background-color 0.3s ease",
  },
  inlineLink: {
    color: "#4299e1",
    textDecoration: "none",
    fontWeight: "bold",
    borderBottom: "1px dashed #4299e1",
    padding: "0 2px",
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "25px 0",
  },
  shareImage: {
    margin: "20px auto",
    borderRadius: "10px",
    maxWidth: "100%",
    height: "auto",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    border: "1px solid #e0e0e0",
    transition: "transform 0.3s ease",
  },
  contactContainer: {
    margin: "15px 0",
    padding: "15px 20px",
    backgroundColor: "#EBF8FF",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    border: "1px solid #c5e1f5",
  },
  contactItem: {
    fontSize: "15px",
    color: "#424242",
    margin: "10px 0",
    lineHeight: "1.5",
    textAlign: "left" as const,
  },
  button: {
    backgroundColor: "#4299e1",
    color: "#ffffff",
    padding: "12px 25px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    border: "none",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
    margin: "15px 0 20px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  divider: {
    borderColor: "#E2E8F0",
    margin: "25px 10px",
    height: "1px",
  },
  socialSection: {
    padding: "25px 15px",
    textAlign: "center" as const,
    backgroundColor: "#EBF8FF",
    margin: "15px auto",
    borderRadius: "12px",
    maxWidth: "90%",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    border: "1px solid #c5e1f5",
  },
  socialTitle: {
    fontSize: "18px",
    color: "#4299e1",
    marginBottom: "15px",
    fontWeight: "bold",
    borderBottom: "2px solid #a0d7ff",
    paddingBottom: "8px",
    display: "inline-block",
  },
  socialIcon: {
    margin: "0 10px",
    maxWidth: "100%",
    height: "auto",
    opacity: "0.9",
    transition: "transform 0.2s ease, opacity 0.2s ease",
    padding: "8px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  },
  footer: {
    padding: "25px 15px",
    textAlign: "center" as const,
    backgroundColor: "#f0f0f0",
    margin: "20px auto 0",
    boxSizing: "border-box" as const,
    borderTop: "1px solid #e0e0e0",
  },
  footerText: {
    fontSize: "13px",
    color: "#616161",
    margin: "6px 0",
    lineHeight: "1.5",
  },
  unsubscribeText: {
    fontSize: "12px",
    color: "#757575",
    margin: "20px 0 0",
    padding: "8px",
    backgroundColor: "#e8e8e8",
    borderRadius: "6px",
    display: "inline-block",
  },
  unsubscribeLink: {
    color: "#616161",
    textDecoration: "underline",
    padding: "0 3px",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row" as const,
    justifyContent: "space-between" as const,
    margin: "20px 0",
    flexWrap: "wrap" as const,
    gap: "15px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
    width: "45%",
    minWidth: "200px",
    flex: "1",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "space-between" as const,
    border: "1px solid #e0e0e0",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#2D3748",
    margin: "0 0 15px",
  },
  cardButton: {
    backgroundColor: "#4299e1",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    border: "none",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
    margin: "10px 0 0",
    width: "90%",
  },
}

export default OnboardingTriggerEmail
