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

interface MissedLiveSessionProps {
  name?: string;
  eventTitle?: string;
  recordingLink?: string;
  eventDate?: string;
}

// Helper function to add 7 days to a date string
const addSevenDays = (dateStr?: string): string => {
  if (!dateStr) return "next week";
  
  try {
    const date = new Date(dateStr);
    date.setDate(date.getDate() + 7);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  } catch (e) {
    return "next week";
  }
};

// Email template component
export const MissedLiveSessionTriggerEmail = ({ 
  name = "there", 
  eventTitle = "our recent live session", 
  recordingLink,
  eventDate
}: MissedLiveSessionProps) => {
  const nextSessionDate = addSevenDays(eventDate);
  
  return (
    <Html>
      <Head />
      <Preview>You Missed the {eventTitle} — But You Can Still Catch Up!</Preview>
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
            <Text style={styles.title}>You Missed the {eventTitle} — But You Can Still Catch Up!</Text>
            <Text style={styles.subtitle}>{eventTitle} {eventDate ? `(${eventDate})` : ''}</Text>
          </Section>

          {/* Main Content */}
          <Section style={styles.mainContent}>
            <Text style={styles.contentTitle}>Hey {name},</Text>
            <Text style={styles.paragraph}>
              We saw you missed the <strong>{eventTitle}</strong> — no worries, you can still catch up!
            </Text>
            
            {recordingLink && (
              <>
                <Text style={styles.paragraph}>
                  🎥 Watch the full recording here:
                </Text>
                
                <Button style={styles.button} href={recordingLink}>
                  Recording Link
                </Button>
              </>
            )}

            <Text style={{...styles.nextStepsTitle, marginTop: "30px"}}>What's next:</Text>
            
            <div style={styles.bulletContainer}>
              <Text style={styles.bulletPoint}>1️⃣ Watch the recording and start <strong>Module 1</strong></Text>
              <Text style={styles.bulletPoint}>2️⃣ Join our official <Link href="https://whatsapp.com/channel/0029Vb6CntX7j6gCfitEKM3s" style={styles.telegramLink}>WhatsApp group</Link> to stay connected</Text>
              <Text style={styles.bulletPoint}>3️⃣ Don't miss next week's live session on <strong>{nextSessionDate} at 11 AM</strong></Text>
            </div>

            <Text style={{...styles.paragraph, marginTop: "30px"}}>
              Let's get you back on track — we're excited for what you'll build!
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
            <Link href="https://whatsapp.com/channel/0029Vb6CntX7j6gCfitEKM3s" style={styles.telegramLink}>
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
    background: "linear-gradient(135deg, #5c6bc0 0%, #3f51b5 100%)",
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
    color: "#3f51b5",
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
  callToAction: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#00897b",
    margin: "35px 0 25px",
  },
  nextStepsSection: {
    backgroundColor: "#f9f9f9",
    padding: "30px 20px",
    margin: "20px auto",
    borderRadius: "12px",
    maxWidth: "90%",
  },
  nextStepsTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#3f51b5",
    margin: "0 0 20px",
    textAlign: "center" as const,
  },
  nextStepRow: {
    margin: "15px 0",
    display: "flex",
    alignItems: "center",
  },
  nextStepNumber: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "#3f51b5",
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center" as const,
    lineHeight: "36px",
    margin: "0 15px 0 0",
  },
  nextStepContent: {
    flex: "1",
  },
  nextStepHeading: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#424242",
    margin: "0 0 5px",
  },
  nextStepText: {
    fontSize: "14px",
    color: "#616161",
    margin: "0",
  },
  upcomingSection: {
    padding: "25px 15px",
    margin: "20px auto",
    backgroundColor: "#ede7f6",
    borderRadius: "12px",
    maxWidth: "90%",
    textAlign: "center" as const,
  },
  upcomingTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#3f51b5",
    margin: "0 0 15px",
  },
  calendarButton: {
    backgroundColor: "#5c6bc0",
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
  button: {
    backgroundColor: "#3f51b5",
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
    color: "#3f51b5",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  socialIcon: {
    margin: "0 5px",
    maxWidth: "100%",
    height: "auto",
    opacity: "0.9",
  },
  telegramLink: {
    color: "#00897b",
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

export default MissedLiveSessionTriggerEmail
