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

interface CapstoneCheckpoint4Props {
  name?: string;
  feedbackDate?: string;
  feedbackTime?: string;
}

// Email template component
export const CapstoneCheckpoint4Email = ({ 
  name = "there",
  feedbackDate = "Friday, August 2nd",
  feedbackTime = "7:00 PM IST"
}: CapstoneCheckpoint4Props) => {
  return (
    <Html>
      <Head />
      <Preview>Final Call: Submit Your Capstone & Join Feedback Session — Only 3 Days Left!</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={styles.heroSection}>
            <Section style={styles.logoWrapper}>
              <Link href="https://www.buildfastwithai.com">
                <Img src="https://iili.io/3qiB1kJ.png" width="80" height="80" alt="BUILD AI" style={styles.logo} />
              </Link>
            </Section>
            
            <Text style={styles.heroTitle}>Final Capstone Checkpoint</Text>
            <Text style={styles.heroSubtitle}>Last Call for Feedback & Submission</Text>
          </Section>
          
          {/* Main Content */}
          <Section style={styles.welcomeSection}>
            <Text style={styles.greeting}>Hey {name}! 👋</Text>
            <Text style={styles.welcomeText}>
              Your <strong>Capstone Project</strong> is due in just <strong>3 days</strong>, but we noticed you haven't submitted it yet.
            </Text>
            <Text style={styles.welcomeText}>
              This is your last chance to get feedback and polish your project before the deadline.
            </Text>
          </Section>
          
          {/* Checklist Section */}
          <Section style={styles.checklistSection}>
            <Text style={styles.checklistTitle}>✅ Here's your final checklist:</Text>
            
            <div style={styles.checklistItem}>
              <Text style={styles.checkmark}>•</Text>
              <Text style={styles.checklistText}>Submit your capstone project on the dashboard</Text>
            </div>
            
            <div style={styles.checklistItem}>
              <Text style={styles.checkmark}>•</Text>
              <Text style={styles.checklistText}>Join the upcoming feedback session to refine your work</Text>
            </div>
            
            <div style={styles.checklistItem}>
              <Text style={styles.checkmark}>•</Text>
              <Text style={styles.checklistText}>Address any last-minute fixes or improvements</Text>
            </div>
          </Section>
          
          {/* Session Details */}
          <Section style={styles.sessionSection}>
            <div style={styles.sessionCard}>
              <div style={styles.sessionDetail}>
                <Text style={styles.sessionIcon}>📅</Text>
                <Text style={styles.sessionText}>
                  <strong>Feedback Session Date:</strong> {feedbackDate} at {feedbackTime}
                </Text>
              </div>
            </div>
          </Section>
          
          {/* CTA Section */}
          <Section style={styles.ctaSection}>
            <Button style={styles.ctaButton} href="https://www.buildfastwithai.com/premium/capstone">
              Submit Your Capstone Now
            </Button>
            
            <Text style={styles.signoffText}>
              Don't miss out — we're here to help you cross the finish line!
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
  // Checklist Section
  checklistSection: {
    padding: "0 30px 20px",
    backgroundColor: "#ffffff",
  },
  checklistTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    margin: "0 0 15px",
    lineHeight: "1.5",
  },
  checklistItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "12px",
  },
  checkmark: {
    fontSize: "18px",
    marginRight: "10px",
    margin: "0",
  },
  checklistText: {
    fontSize: "16px",
    color: "#555",
    margin: "0",
    lineHeight: "1.5",
  },
  // Session Section
  sessionSection: {
    padding: "0 30px 20px",
    backgroundColor: "#ffffff",
  },
  sessionCard: {
    padding: "20px",
    backgroundColor: "#F5EFFE", // Lighter shade of Light Lavender
    borderRadius: "8px",
    border: "1px solid #E9D5FF",
  },
  sessionDetail: {
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
  },
  sessionIcon: {
    fontSize: "18px",
    marginRight: "10px",
    margin: "0",
    width: "24px",
  },
  sessionText: {
    fontSize: "16px",
    color: "#555",
    margin: "0",
    lineHeight: "1.5",
  },
  // CTA Section
  ctaSection: {
    padding: "20px 30px 30px",
    backgroundColor: "#ffffff",
    textAlign: "center" as const,
  },
  ctaButton: {
    backgroundColor: "#9333EA", // Darker purple to complement Light Lavender
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    padding: "12px 24px",
    fontSize: "16px",
    textDecoration: "none",
    cursor: "pointer",
    margin: "0 0 25px",
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

export default CapstoneCheckpoint4Email;
