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

interface CapstoneNotStartedProps {
  name?: string;
}

// Email template component
export const CapstoneNotStartedEmail = ({ 
  name = "there"
}: CapstoneNotStartedProps) => {
  return (
    <Html>
      <Head />
      <Preview>Let's Kick Off Your Capstone — Start with the Problem</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={styles.heroSection}>
            <Section style={styles.logoWrapper}>
              <Link href="https://www.buildfastwithai.com">
                <Img src="https://iili.io/3qiB1kJ.png" width="80" height="80" alt="BUILD AI" style={styles.logo} />
              </Link>
            </Section>
            
            <Text style={styles.heroTitle}>Time to Define Your Capstone</Text>
            <Text style={styles.heroSubtitle}>Start with the problem you want to solve</Text>
            
            <Button style={styles.heroButton} href="https://www.buildfastwithai.com/premium/capstone">
              Define Your Capstone Idea Now
            </Button>
          </Section>
          
          {/* Welcome Message */}
          <Section style={styles.welcomeSection}>
            <Text style={styles.greeting}>Hey {name}! 👋</Text>
            <Text style={styles.welcomeText}>
              The Capstone Project is live — but we noticed you haven't submitted your idea yet.
            </Text>
            <Text style={styles.welcomeText}>
              To get started, all you need to do is define your <strong>problem statement</strong> and outline your AI solution. This first step sets the foundation for everything that follows.
            </Text>
          </Section>
          
          {/* Steps Section */}
          <Section style={styles.stepsSection}>
            <Text style={styles.sectionTitle}>Here's how to start:</Text>
            
            <div style={styles.stepCard}>
              <div style={styles.stepNumber}>1️⃣</div>
              <div style={styles.stepContent}>
                <Text style={styles.stepText}>Identify a real-world problem you're excited to solve</Text>
              </div>
            </div>
            
            <div style={styles.stepCard}>
              <div style={styles.stepNumber}>2️⃣</div>
              <div style={styles.stepContent}>
                <Text style={styles.stepText}>Think about how AI can uniquely address it</Text>
              </div>
            </div>
            
            <div style={styles.stepCard}>
              <div style={styles.stepNumber}>3️⃣</div>
              <div style={styles.stepContent}>
                <Text style={styles.stepText}>Submit your idea as <strong>Checkpoint 1</strong></Text>
              </div>
            </div>
          </Section>
          
          {/* CTA Section */}
          <Section style={styles.ctaSection}>
            <Button style={styles.ctaButton} href="https://www.buildfastwithai.com/premium/capstone">
              👉 Define Your Capstone Idea Now
            </Button>
            
            <Text style={styles.ctaText}>
              Once you lock in your direction, we'll guide you step-by-step toward building and launching your product.
            </Text>
            
            <Text style={styles.encouragementText}>
              You've got this — let's begin!
            </Text>
          </Section>
          
          <Section style={styles.signatureSection}>
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
  heroButton: {
    backgroundColor: "#D23948", // Darker shade of Blush Rose
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    padding: "12px 24px",
    fontSize: "16px",
    textDecoration: "none",
    cursor: "pointer",
    margin: "15px 0",
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
  // Steps Section
  stepsSection: {
    padding: "0 30px 15px",
    backgroundColor: "#ffffff",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    margin: "0 0 20px",
  },
  stepCard: {
    display: "flex",
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "#FEF2F4", // Lighter shade of Blush Rose
    borderRadius: "8px",
    border: "1px solid #F8D7DA",
  },
  stepNumber: {
    fontSize: "24px",
    marginRight: "15px",
    display: "flex",
    alignItems: "center",
  },
  stepContent: {
    flex: "1",
  },
  stepText: {
    fontSize: "15px",
    color: "#555",
    margin: "0",
    lineHeight: "1.5",
  },
  // CTA Section
  ctaSection: {
    padding: "20px 30px",
    backgroundColor: "#ffffff",
    textAlign: "center" as const,
  },
  ctaButton: {
    backgroundColor: "#D23948", // Darker shade of Blush Rose
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    padding: "12px 24px",
    fontSize: "16px",
    textDecoration: "none",
    cursor: "pointer",
    margin: "0 0 20px",
  },
  ctaText: {
    fontSize: "16px",
    color: "#555",
    margin: "0 0 15px",
    lineHeight: "1.5",
  },
  encouragementText: {
    fontSize: "17px",
    fontWeight: "600",
    color: "#333",
    margin: "20px 0 0",
  },
  // Signature Section
  signatureSection: {
    padding: "0 30px 30px",
    backgroundColor: "#ffffff",
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
    color: "#D23948",
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

export default CapstoneNotStartedEmail;
