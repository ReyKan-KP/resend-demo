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

interface CapstoneCheckpoint3Props {
  name?: string;
  deadline?: string;
}

// Email template component
export const CapstoneCheckpoint3Email = ({ 
  name = "there",
  deadline = "11:59 PM tonight"
}: CapstoneCheckpoint3Props) => {
  return (
    <Html>
      <Head />
      <Preview>Final Call: Submit Your Implementation Plan by Tonight!</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={styles.heroSection}>
            <Section style={styles.logoWrapper}>
              <Link href="https://www.buildfastwithai.com">
                <Img src="https://iili.io/3qiB1kJ.png" width="80" height="80" alt="BUILD AI" style={styles.logo} />
              </Link>
            </Section>
            
            <Text style={styles.heroTitle}>Capstone Checkpoint 3</Text>
            <Text style={styles.heroSubtitle}>Implementation Plan Submission</Text>
          </Section>
          
          {/* Main Content */}
          <Section style={styles.contentSection}>
            <Text style={styles.greeting}>Hey {name}! ⏰</Text>
            <Text style={styles.mainText}>
              This is a reminder to submit your <strong>Capstone Implementation Plan (Checkpoint 3)</strong> by <strong>{deadline}</strong>.
            </Text>
            <Text style={styles.mainText}>
              Your plan is key to outlining how you'll build and launch your AI solution — don't miss this important step!
            </Text>
          </Section>
          
          {/* CTA */}
          <Section style={styles.ctaSection}>
            <Button style={styles.ctaButton} href="https://www.buildfastwithai.com/capstone-submission">
              Submit Your Implementation Plan Now
            </Button>
          </Section>
          
          {/* Help Section */}
          <Section style={styles.helpSection}>
            <Text style={styles.helpText}>
              Need help? Reach out before the deadline — we're here for you.
            </Text>
            <Text style={styles.signatureText}>
              Team Build Fast with AI
            </Text>
          </Section>
          
          {/* What to Include */}
          <Section style={styles.tipsSection}>
            <Text style={styles.tipsTitle}>Your Implementation Plan Should Include:</Text>
            
            <div style={styles.tipItem}>
              <Text style={styles.checkmark}>✅</Text>
              <Text style={styles.tipText}>Technical architecture diagram</Text>
            </div>
            
            <div style={styles.tipItem}>
              <Text style={styles.checkmark}>✅</Text>
              <Text style={styles.tipText}>Key AI components & integration strategy</Text>
            </div>
            
            <div style={styles.tipItem}>
              <Text style={styles.checkmark}>✅</Text>
              <Text style={styles.tipText}>Development timeline with milestones</Text>
            </div>
            
            <div style={styles.tipItem}>
              <Text style={styles.checkmark}>✅</Text>
              <Text style={styles.tipText}>Testing methodology & success metrics</Text>
            </div>
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

// Styles - Peach color scheme with #FCD5B5 as primary color
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
    backgroundColor: "#FCD5B5", // Peach color
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
  // Content Section
  contentSection: {
    padding: "30px 30px 15px",
    backgroundColor: "#ffffff",
  },
  greeting: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
    margin: "0 0 20px",
  },
  mainText: {
    fontSize: "16px",
    color: "#555",
    margin: "0 0 15px",
    lineHeight: "1.5",
  },
  // CTA Section
  ctaSection: {
    padding: "10px 30px 20px",
    backgroundColor: "#ffffff",
    textAlign: "center" as const,
  },
  ctaButton: {
    backgroundColor: "#F8A978", // Darker peach for the button
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    padding: "12px 24px",
    fontSize: "16px",
    textDecoration: "none",
    cursor: "pointer",
    textAlign: "center" as const,
    display: "inline-block",
  },
  // Help Section
  helpSection: {
    padding: "10px 30px 30px",
    backgroundColor: "#ffffff",
    textAlign: "center" as const,
  },
  helpText: {
    fontSize: "16px",
    color: "#555",
    margin: "0 0 15px",
    lineHeight: "1.5",
  },
  signatureText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  // Tips Section
  tipsSection: {
    padding: "20px 30px",
    backgroundColor: "#FEF6EF", // Light peach background
    borderRadius: "8px",
    margin: "0 30px 30px",
  },
  tipsTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    margin: "0 0 15px",
  },
  tipItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "10px",
  },
  checkmark: {
    fontSize: "18px",
    marginRight: "10px",
    margin: "0",
  },
  tipText: {
    fontSize: "16px",
    color: "#555",
    margin: "0",
    lineHeight: "1.5",
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
    color: "#F8A978", // Darker peach for links
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

export default CapstoneCheckpoint3Email;
