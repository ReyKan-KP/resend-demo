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

interface CapstoneMeetingReminderProps {
  name?: string;
  meetingDate?: string;
  meetingTime?: string;
  meetingLink?: string;
}

// Email template component
export const CapstoneMeetingReminderEmail = ({ 
  name = "there",
  meetingDate = "Thursday, July 25th",
  meetingTime = "7:00 PM IST",
  meetingLink = "https://us06web.zoom.us/j/89237838331?pwd=jEHclKpo6pxjmbgaCickaaCIeB6XmX.1"
}: CapstoneMeetingReminderProps) => {
  return (
    <Html>
      <Head />
      <Preview>Reminder: Developer Office Hours — Bring Your Capstone Questions</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={styles.heroSection}>
            <Section style={styles.logoWrapper}>
              <Link href="https://www.buildfastwithai.com">
                <Img src="https://iili.io/3qiB1kJ.png" width="80" height="80" alt="BUILD AI" style={styles.logo} />
              </Link>
            </Section>
            
            <Text style={styles.heroTitle}>Developer Office Hours</Text>
            <Text style={styles.heroSubtitle}>Get direct support on your Capstone Project</Text>
          </Section>
          
          {/* Welcome Message */}
          <Section style={styles.welcomeSection}>
            <Text style={styles.greeting}>Hey {name}! 👋</Text>
            <Text style={styles.welcomeText}>
              A quick heads-up — <strong>Developer Office Hours</strong> are happening soon!
            </Text>
            <Text style={styles.welcomeText}>
              This is your chance to get direct support on your <strong>Capstone Project</strong>.
            </Text>
          </Section>
          
          {/* Questions Section */}
          <Section style={styles.questionsSection}>
            <div style={styles.questionItem}>
              <Text style={styles.checkmark}>✅</Text>
              <Text style={styles.questionText}>Stuck on implementation?</Text>
            </div>
            
            <div style={styles.questionItem}>
              <Text style={styles.checkmark}>✅</Text>
              <Text style={styles.questionText}>Need feedback on your MVP progress?</Text>
            </div>
            
            <div style={styles.questionItem}>
              <Text style={styles.checkmark}>✅</Text>
              <Text style={styles.questionText}>Have questions about tools, tech, or testing?</Text>
            </div>
            
            <Text style={styles.encouragementText}>
              Bring it all to the session — we're here to help you move forward with confidence.
            </Text>
          </Section>
          
          {/* Meeting Details */}
          <Section style={styles.meetingSection}>
            <div style={styles.meetingCard}>
              <div style={styles.meetingDetail}>
                <Text style={styles.meetingIcon}>📅</Text>
                <Text style={styles.meetingText}><strong>Date:</strong> {meetingDate}</Text>
              </div>
              
              <div style={styles.meetingDetail}>
                <Text style={styles.meetingIcon}>🕒</Text>
                <Text style={styles.meetingText}><strong>Time:</strong> {meetingTime}</Text>
              </div>
              
              <div style={styles.meetingDetail}>
                <Text style={styles.meetingIcon}>📍</Text>
                <Text style={styles.meetingText}><strong>Join Here:</strong></Text>
              </div>
              
              <Button style={styles.meetingButton} href={meetingLink}>
                Join Meeting
              </Button>
            </div>
          </Section>
          
          {/* CTA Section */}
          <Section style={styles.ctaSection}>
            <Text style={styles.ctaText}>
              Don't miss this chance to unblock, refine, and accelerate your build.
            </Text>
            
            <Text style={styles.signoffText}>
              See you there!
            </Text>
            
            <Text style={styles.signatureText}>
              Team Build Fast with AI
            </Text>
          </Section>
          
          {/* Social Media */}
          <Section style={styles.socialSection}>
            <Text style={styles.socialTitle}>Connect With Us</Text>
            <Row>
              <Column align="center">
                <Link href="https://www.instagram.com/buildfastwithai/">
                  <Img src="https://iili.io/3qiBMIR.png" width="32" height="32" alt="Instagram" style={styles.socialIcon} />
                </Link>
              </Column>
              <Column align="center">
                <Link href="https://github.com/satvik314">
                  <Img src="https://iili.io/3qiBEmv.png" width="32" height="32" alt="Github" style={styles.socialIcon} />
                </Link>
              </Column>
              <Column align="center">
                <Link href="https://x.com/BuildFastWithAI">
                  <Img src="https://iili.io/3qiBVXp.png" width="32" height="32" alt="Twitter" style={styles.socialIcon} />
                </Link>
              </Column>
              <Column align="center">
                <Link href="https://www.linkedin.com/company/build-fast-with-ai/">
                  <Img src="https://iili.io/3qizzxf.png" width="30" height="30" alt="LinkedIn" style={styles.socialIcon} />
                </Link>
              </Column>
              <Column align="center">
                <Link href="https://www.youtube.com/@buildfastwithai">
                  <Img src="https://iili.io/3qipEwF.png" width="36" height="36" alt="YouTube" style={styles.socialIcon} />
                </Link>
              </Column>
            </Row>
            
            <Text style={styles.socialText}>
              Join our
              <Link href="https://whatsapp.com/channel/0029Vb6CntX7j6gCfitEKM3s" style={styles.socialLink}>
                &nbsp;WhatsApp Channel&nbsp;
              </Link>
              for the latest AI updates, tips, and resources.
            </Text>
          </Section>
          
          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.footerText}>Build Fast With AI, Koramangala, Bengaluru, 560034</Text>
            <Text style={styles.footerText}>Contact: satvik@buildfastwithai.com</Text>
            <Text style={styles.footerLinks}>
              <Link href="https://www.buildfastwithai.com/unsubscribe" style={styles.footerLink}>
                Unsubscribe
              </Link>
              {" • "}
              <Link href="https://www.buildfastwithai.com/privacy-policy" style={styles.footerLink}>
                Privacy Policy
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles - Modern Design with Light Lavender (#E9D5FF) as primary color
const styles = {
  body: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    WebkitFontSmoothing: "antialiased",
    margin: "0",
    padding: "0",
    width: "100%",
    backgroundColor: "#f7f7f7",
  },
  container: {
    margin: "0 auto",
    padding: "0",
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "#ffffff",
    boxSizing: "border-box" as const,
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
  },
  // Hero Section
  heroSection: {
    padding: "20px",
    backgroundColor: "#E9D5FF", // Light Lavender
    textAlign: "center" as const,
    borderRadius: "0 0 15px 15px",
  },
  logoWrapper: {
    marginBottom: "20px",
  },
  logo: {
    margin: "0 auto",
  },
  heroTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    margin: "0 0 10px",
    lineHeight: "1.3",
  },
  heroSubtitle: {
    fontSize: "18px",
    color: "#555",
    margin: "0 0 25px",
  },
  // Welcome Section
  welcomeSection: {
    padding: "30px 30px 15px",
    backgroundColor: "#ffffff",
  },
  greeting: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
    margin: "0 0 20px",
  },
  welcomeText: {
    fontSize: "16px",
    color: "#555",
    margin: "0 0 15px",
    lineHeight: "1.5",
  },
  // Questions Section
  questionsSection: {
    padding: "0 30px 20px",
    backgroundColor: "#ffffff",
  },
  questionItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "12px",
  },
  checkmark: {
    fontSize: "18px",
    marginRight: "10px",
    margin: "0",
  },
  questionText: {
    fontSize: "16px",
    color: "#555",
    margin: "0",
    lineHeight: "1.5",
  },
  encouragementText: {
    fontSize: "16px",
    color: "#555",
    margin: "20px 0 0",
    lineHeight: "1.5",
    fontStyle: "italic",
  },
  // Meeting Section
  meetingSection: {
    padding: "0 30px 20px",
    backgroundColor: "#ffffff",
  },
  meetingCard: {
    padding: "20px",
    backgroundColor: "#F5EFFE", // Lighter shade of Light Lavender
    borderRadius: "8px",
    border: "1px solid #E9D5FF",
  },
  meetingDetail: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  meetingIcon: {
    fontSize: "18px",
    marginRight: "10px",
    margin: "0",
    width: "24px",
  },
  meetingText: {
    fontSize: "16px",
    color: "#555",
    margin: "0",
    lineHeight: "1.5",
  },
  meetingButton: {
    backgroundColor: "#9333EA", // Darker purple to complement Light Lavender
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    padding: "12px 24px",
    fontSize: "16px",
    textDecoration: "none",
    cursor: "pointer",
    margin: "15px 0 0",
    textAlign: "center" as const,
    display: "block",
  },
  // CTA Section
  ctaSection: {
    padding: "20px 30px 30px",
    backgroundColor: "#ffffff",
    textAlign: "center" as const,
  },
  ctaText: {
    fontSize: "16px",
    color: "#555",
    margin: "0 0 20px",
    lineHeight: "1.5",
  },
  signoffText: {
    fontSize: "16px",
    color: "#555",
    margin: "0 0 10px",
  },
  signatureText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  // Social Section
  socialSection: {
    padding: "25px 30px",
    backgroundColor: "#f7f9fc",
    textAlign: "center" as const,
    borderTop: "1px solid #eaeaea",
  },
  socialTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    margin: "0 0 15px",
  },
  socialIcon: {
    margin: "0 8px",
  },
  socialText: {
    fontSize: "14px",
    color: "#777",
    margin: "15px 0 0",
  },
  socialLink: {
    color: "#9333EA", // Darker purple to complement Light Lavender
    textDecoration: "none",
  },
  // Footer
  footer: {
    padding: "20px 30px",
    backgroundColor: "#f0f0f0",
    textAlign: "center" as const,
  },
  footerText: {
    fontSize: "12px",
    color: "#777",
    margin: "0 0 5px",
  },
  footerLinks: {
    fontSize: "12px",
    color: "#777",
    margin: "10px 0 0",
  },
  footerLink: {
    color: "#777",
    textDecoration: "underline",
  },
};

export default CapstoneMeetingReminderEmail;
