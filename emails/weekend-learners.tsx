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

interface WeekendLearnersProps {
  name?: string;
  nextModuleLink?: string;
  weekendCount?: number;
  weekdayCount?: number;
  weekdayTips?: string[];
}

// Email template component
export const WeekendLearnersEmail = ({ 
  name = "there", 
  nextModuleLink = "https://www.buildfastwithai.com/dashboard",
  weekendCount = 0,
  weekdayCount = 0,
  weekdayTips = []
}: WeekendLearnersProps) => {
  return (
    <Html>
      <Head />
      <Preview>Your Weekend AI Sprint Starts Now 🧠⚡</Preview>
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
            <Text style={styles.title}>Your Weekend AI Sprint Starts Now 🧠⚡</Text>
          </Section>

          {/* Main Content */}
          <Section style={styles.mainContent}>
            <Text style={styles.contentTitle}>Hey {name},</Text>
            <Text style={styles.paragraph}>
              It's the weekend — your prime time to dive back in and make progress! 💻✨
            </Text>
            
            <Text style={styles.paragraph}>
              Whether you're catching up or continuing where you left off, this is your moment to:
            </Text>
            
            <div style={styles.listContainer}>
              <Text style={styles.listItem}>
                1️⃣ Knock out a few lessons and build momentum
              </Text>
              <Text style={styles.listItem}>
                2️⃣ Apply what you've learned in real AI projects
              </Text>
              <Text style={styles.listItem}>
                3️⃣ Get one step closer to your capstone launch
              </Text>
            </div>

            <Text style={{...styles.paragraph, marginTop: "25px"}}>
              You've already built the habit — now keep the streak alive.
            </Text>
            
            <Button style={styles.button} href={nextModuleLink}>
              Continue Learning
            </Button>

            <Text style={{...styles.paragraph, marginTop: "25px"}}>
              Your future self will thank you. Let's make this weekend count!
            </Text>
            
            <Text style={styles.paragraph}>
              <strong>Team Build Fast with AI</strong>
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

// Styles - Peach Theme
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
    backgroundColor: "#FEF2E7",
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
    background: "linear-gradient(135deg, #FCD5B5 0%, #F8B78B 100%)",
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
    backgroundColor: "#FEF9F5",
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
    color: "#E67E22",
    margin: "0 auto 20px",
    lineHeight: "1.4",
  },
  paragraph: {
    fontSize: "16px",
    color: "#424242",
    lineHeight: "1.6",
    margin: "0 0 20px",
  },
  listContainer: {
    margin: "15px auto",
    padding: "15px 20px",
    maxWidth: "90%",
    backgroundColor: "#FEF2E7",
    borderRadius: "8px",
    border: "1px solid #F8C9A1",
    textAlign: "left" as const,
  },
  listItem: {
    fontSize: "16px",
    color: "#424242",
    margin: "15px auto",
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
  button: {
    backgroundColor: "#F8B78B",
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
    borderColor: "#F8C9A1",
    margin: "25px 10px",
  },
  socialSection: {
    padding: "20px 10px",
    textAlign: "center" as const,
    backgroundColor: "#FEF2E7",
    margin: "10px auto",
    borderRadius: "12px",
    maxWidth: "90%",
  },
  socialTitle: {
    fontSize: "16px",
    color: "#E67E22",
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
    color: "#E67E22",
    textDecoration: "none",
    fontWeight: "bold",
  },
  footer: {
    padding: "20px 15px",
    textAlign: "center" as const,
    backgroundColor: "#FEF9F5",
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
    color: "#E67E22",
    textDecoration: "underline",
  },
}

export default WeekendLearnersEmail
