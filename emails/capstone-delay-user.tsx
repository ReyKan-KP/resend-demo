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

interface CapstoneDelayUserProps {
  name?: string;
}

// Email template component
export const CapstoneDelayUserEmail = ({ 
  name = "there"
}: CapstoneDelayUserProps) => {
  return (
    <Html>
      <Head />
      <Preview>Your Capstone Project Awaits — Let's Get Started!</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={styles.heroSection}>
            <Section style={styles.logoWrapper}>
              <Link href="https://www.buildfastwithai.com">
                <Img src="https://iili.io/3qiB1kJ.png" width="80" height="80" alt="BUILD AI" style={styles.logo} />
              </Link>
            </Section>
            
            <Text style={styles.heroTitle}>Capstone Project</Text>
            <Text style={styles.heroSubtitle}>Time to Start Building!</Text>
          </Section>
          
          {/* Main Content */}
          <Section style={styles.welcomeSection}>
            <Text style={styles.greeting}>Hey {name}! 👋</Text>
            <Text style={styles.welcomeText}>
              We noticed you haven't started your <strong>Capstone Project</strong> yet — and Week 7 is already underway.
            </Text>
            <Text style={styles.welcomeText}>
              Now's the perfect time to jump in! Starting early gives you the best chance to build, test, and launch confidently.
            </Text>
          </Section>
          
          {/* Help Section */}
          <Section style={styles.helpSection}>
            <Text style={styles.helpTitle}>Need a hand? Here's how we can help:</Text>
            
            <div style={styles.helpItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.helpText}>Step-by-step guides and templates</Text>
            </div>
            
            <div style={styles.helpItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.helpText}>Office hours with mentors</Text>
            </div>
            
            <div style={styles.helpItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.helpText}>Community support to brainstorm ideas</Text>
            </div>
          </Section>
          
          {/* CTA Section */}
          <Section style={styles.ctaSection}>
            <Button style={styles.ctaButton} href="https://www.buildfastwithai.com/premium/capstone">
              Start Your Capstone
            </Button>
            
            <Text style={styles.signoffText}>
              You've got all the tools — let's turn your ideas into reality!
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

// Styles - Modern Design with Blush Rose (#F8D7DA) as primary color
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
    backgroundColor: "#F8D7DA", // Blush Rose
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
  // Help Section
  helpSection: {
    padding: "0 30px 20px",
    backgroundColor: "#ffffff",
  },
  helpTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    margin: "0 0 15px",
    lineHeight: "1.5",
  },
  helpItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "12px",
  },
  bulletPoint: {
    fontSize: "18px",
    marginRight: "10px",
    margin: "0",
    color: "#dc3545", // Darker shade of Blush Rose
  },
  helpText: {
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
    backgroundColor: "#dc3545", // Darker shade of Blush Rose
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
    color: "#dc3545", // Darker shade of Blush Rose
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

export default CapstoneDelayUserEmail;
