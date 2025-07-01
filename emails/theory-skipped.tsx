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

interface TheorySkippedProps {
  name?: string;
  skipPercentage?: number;
  watchedTheoryVideos?: number;
  totalTheoryVideos?: number;
  moduleTitle?: string;
  moduleLink?: string;
  theoryBenefits?: string[];
}

// Email template component
export const TheorySkippedEmail = ({ 
  name = "there", 
  skipPercentage = 75,
  watchedTheoryVideos = 2,
  totalTheoryVideos = 8,
  moduleTitle = "Current Module",
  moduleLink = "https://www.buildfastwithai.com/dashboard",
  theoryBenefits = [
    "Understand why certain patterns work better than others",
    "Learn fundamental concepts that apply across multiple tools",
    "Develop stronger mental models for solving new problems"
  ]
}: TheorySkippedProps) => {
  return (
    <Html>
      <Head />
      <Preview>Get the full picture: Understanding the theory behind the code</Preview>
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
            <Text style={styles.title}>The Theory-Practice Connection</Text>
            <Text style={styles.subtitle}>Unlocking deeper understanding for better results</Text>
          </Section>

          {/* Main Content */}
          <Section style={styles.mainContent}>
            <Text style={styles.contentTitle}>Hey {name},</Text>
            <Text style={styles.paragraph}>
              We noticed you've been focusing primarily on the practical sections of our course. That's great for building hands-on skills! However, we've seen you've watched only <strong>{watchedTheoryVideos} out of {totalTheoryVideos} theory videos</strong> (about {Math.round(100 - skipPercentage)}% of the available theory content).
            </Text>
            
            <div style={styles.calloutBox}>
              <Text style={styles.calloutTitle}>Theory + Practice = Mastery</Text>
              <Text style={styles.calloutText}>
                Research shows that understanding the theory behind techniques leads to:
              </Text>
              <div style={styles.bulletContainer}>
                <Text style={styles.bulletPoint}>✓ <strong>More innovative solutions</strong> when faced with new challenges</Text>
                <Text style={styles.bulletPoint}>✓ <strong>Better troubleshooting skills</strong> when things don't work as expected</Text>
                <Text style={styles.bulletPoint}>✓ <strong>Faster adaptation</strong> to new tools and technologies</Text>
              </div>
            </div>

            <Text style={{...styles.paragraph, marginTop: "25px"}}>
              <strong>Here's why the theory sections in {moduleTitle} are especially valuable:</strong>
            </Text>
            
            <div style={styles.tipsContainer}>
              {theoryBenefits.map((benefit, index) => (
                <Text key={index} style={styles.tipItem}>
                  {index + 1}. {benefit}
                </Text>
              ))}
            </div>

            <Text style={{...styles.paragraph, marginTop: "25px"}}>
              We recommend revisiting the theory sections of <strong>{moduleTitle}</strong> to get the full benefit of your learning journey:
            </Text>
            
            <Button style={styles.button} href={moduleLink}>
              Revisit Theory Content
            </Button>

            <Text style={{...styles.paragraph, marginTop: "25px"}}>
              <strong>Need help connecting theory to practice?</strong> Reply to this email and our instructors can give you personalized guidance on how the theory applies to your specific use cases.
            </Text>
            
            <Text style={styles.paragraph}>
              Happy learning!<br/>
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

// Styles - Blue/Theory Theme
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
    background: "linear-gradient(135deg, #0288d1 0%, #01579b 100%)",
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
    color: "#0277bd",
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
    margin: "10px auto",
    padding: "0 10px",
    maxWidth: "90%",
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
    backgroundColor: "#e1f5fe",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #b3e5fc",
    margin: "20px auto",
    maxWidth: "90%",
  },
  calloutTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#0277bd",
    margin: "0 0 10px",
  },
  calloutText: {
    fontSize: "15px",
    color: "#424242",
    margin: "0 0 15px",
    lineHeight: "1.5",
  },
  tipsContainer: {
    backgroundColor: "#e8f4f8",
    padding: "15px 20px",
    borderRadius: "8px",
    border: "1px dashed #81d4fa",
    margin: "15px auto",
    maxWidth: "90%",
    textAlign: "left" as const,
  },
  tipItem: {
    fontSize: "15px",
    color: "#424242",
    margin: "10px 0",
    lineHeight: "1.5",
  },
  button: {
    backgroundColor: "#0288d1",
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
    color: "#0277bd",
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
    color: "#0277bd",
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

export default TheorySkippedEmail
