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

interface LiveSessionAttendeesProps {
  name?: string;
  eventTitle?: string;
  recordingLink?: string;
  eventDate?: string;
  keyTakeaways?: string[];
}

// Email template component
export const LiveSessionAttendeesEmail = ({ 
  name = "there", 
  eventTitle = "our recent live session", 
  recordingLink,
  eventDate,
  keyTakeaways = [
    "Generative AI Launch Pad overview",
    "Key Generative AI concepts and fundamentals",
    "Essential tools including Langchain, Streamlit, and more",
    "Tips to stay on track throughout your learning journey",
    "Live demonstrations to get you started"
  ]
}: LiveSessionAttendeesProps) => {
  return (
    <Html>
      <Head />
      <Preview>In Case You Missed It: Live Session Recap & Recording</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Logo */}
          <Section style={styles.logoSection}>
            <Link href="https://www.buildfastwithai.com">
              <Img src="https://iili.io/3qiB1kJ.png" width="100" height="100" alt="BUILD AI" style={styles.logo} />
            </Link>
          </Section>

          {/* Header with gradient background */}
          <Section style={styles.header}>
            <Text style={styles.title}>Live Session Recap & Recording</Text>
            <Text style={styles.subtitle}>{eventTitle} {eventDate ? `(${eventDate})` : ''}</Text>
          </Section>

          {/* Main Content */}
          <Section style={styles.mainContent}>
            <Text style={styles.contentTitle}>Hey {name},</Text>
            <Text style={styles.paragraph}>
              Great job joining today's live session! {keyTakeaways.length > 0 ? "Here's a quick recap of what we covered:" : ""}
            </Text>
            
            <div style={styles.bulletContainer}>
              {keyTakeaways.map((takeaway, index) => (
                <Row key={index} style={styles.bulletRow}>
                  <Column style={styles.bulletNumber}>{index + 1}️⃣</Column>
                  <Column style={styles.bulletTextColumn}>
                    <Text style={styles.bulletText}>{takeaway}</Text>
                  </Column>
                </Row>
              ))}
            </div>

            <Text style={styles.paragraph}>
              Missed anything or want to review?
            </Text>
            
            {recordingLink && (
              <Section style={styles.buttonContainer}>
                <Button style={styles.button} href={recordingLink}>
                  Watch the recording here
                </Button>
              </Section>
            )}
          </Section>

          <Section style={styles.nextStepsSection}>
            <Text style={styles.nextStepsTitle}>Next Steps:</Text>
            
            <Row style={styles.nextStepRow}>
              <Column style={styles.checkmark}>✅</Column>
              <Column style={styles.nextStepContent}>
                <Text style={styles.nextStepText}>
                  <Link href="https://www.buildfastwithai.com/premium/module/1/topic/basics/lesson/basics-of-python" style={styles.nextStepLink}>
                    Start Module 1
                  </Link> (if you haven't yet)
                </Text>
              </Column>
            </Row>
            
            <Row style={styles.nextStepRow}>
              <Column style={styles.checkmark}>✅</Column>
              <Column style={styles.nextStepContent}>
                <Text style={styles.nextStepText}>Complete hands-on tasks before next Saturday</Text>
              </Column>
            </Row>
            
            <Row style={styles.nextStepRow}>
              <Column style={styles.checkmark}>✅</Column>
              <Column style={styles.nextStepContent}>
                <Text style={styles.nextStepText}>
                  Ask questions anytime in the <Link href="https://chat.whatsapp.com/FT4fHhAaTRkIz3pS5QMoCA" style={styles.nextStepLink}>WhatsApp group</Link>
                </Text>
              </Column>
            </Row>

            <Text style={styles.motivationText}>
              Keep the momentum going and continue building your AI expertise!
            </Text>
          </Section>

          <Hr style={styles.divider} />

          {/* Social Media Icons */}
          <Section style={styles.socialSection}>
            <Text style={styles.socialTitle}>Connect With Us</Text>
            <Row>
              {[
                { href: "https://www.instagram.com/buildfastwithai/", src: "https://iili.io/3qiBMIR.png", alt: "Instagram" },
                { href: "https://github.com/satvik314", src: "https://iili.io/3qiBEmv.png", alt: "Github" },
                { href: "https://x.com/BuildFastWithAI", src: "https://iili.io/3qiBVXp.png", alt: "Twitter" },
                { href: "https://www.linkedin.com/company/build-fast-with-ai/", src: "https://iili.io/3qizzxf.png", alt: "LinkedIn" },
                { href: "https://www.youtube.com/@buildfastwithai", src: "https://iili.io/3qipEwF.png", alt: "YouTube" }
              ].map((social, index) => (
                <Column key={index} align="center">
                  <Link href={social.href}>
                    <Img
                      src={social.src}
                      width="32"
                      height="32"
                      alt={social.alt}
                      style={styles.socialIcon}
                    />
                  </Link>
                </Column>
              ))}
            </Row>
          </Section>
          
          <Text style={styles.whatsappText}>
            Join our
            <Link href="https://whatsapp.com/channel/0029Vb6CntX7j6gCfitEKM3s" style={styles.whatsappLink}>
              &nbsp;WhatsApp Channel&nbsp;
            </Link>
            for the latest AI updates, tips, and resources.
          </Text>
          
          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.signatureText}>Best regards,</Text>
            <Text style={styles.signatureText}>Team Build Fast with AI</Text>
            <Hr style={styles.footerDivider} />
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
    backgroundColor: "#f5f5f5",
  },
  container: {
    margin: "0 auto",
    padding: "0 0 20px",
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "#ffffff",
    boxSizing: "border-box" as const,
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
  },
  logoSection: {
    padding: "16px",
    textAlign: "center" as const,
    backgroundColor: "#f8f8f8",
  },
  logo: {
    margin: "0 auto",
    padding: "8px",
    borderRadius: "8px",
    maxWidth: "100%",
    height: "auto",
  },
  header: {
    padding: "28px 15px",
    textAlign: "center" as const,
    background: "linear-gradient(135deg, #E9D5FF 0%, #9D5BD2 100%)",
    boxSizing: "border-box" as const,
    margin: "0 auto",
  },
  title: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "#ffffff",
    margin: "0 0 8px",
    lineHeight: "1.3",
  },
  subtitle: {
    fontSize: "16px",
    color: "#ffffff",
    margin: "0",
    lineHeight: "1.5",
    opacity: "0.9",
  },
  mainContent: {
    backgroundColor: "#ffffff",
    padding: "28px 24px",
    margin: "0 auto",
    textAlign: "left" as const,
    borderRadius: "0",
  },
  contentTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#7B3FB2",
    margin: "0 0 16px",
    lineHeight: "1.4",
  },
  paragraph: {
    fontSize: "16px",
    color: "#333333",
    lineHeight: "1.6",
    margin: "0 0 20px",
  },
  bulletContainer: {
    margin: "20px 0 24px",
    padding: "0",
  },
  bulletRow: {
    margin: "10px 0",
    display: "flex",
    alignItems: "flex-start",
  },
  bulletNumber: {
    width: "32px",
    paddingRight: "8px",
    fontSize: "18px",
  },
  bulletTextColumn: {
    flex: "1",
  },
  bulletText: {
    fontSize: "16px",
    color: "#333333",
    margin: "0",
    lineHeight: "1.5",
    fontWeight: "normal",
  },
  buttonContainer: {
    margin: "24px 0",
    textAlign: "center" as const,
  },
  button: {
    backgroundColor: "#9D5BD2",
    color: "#ffffff",
    padding: "12px 24px",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    border: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  },
  nextStepsSection: {
    backgroundColor: "#f9f9f9",
    padding: "28px 24px",
    margin: "0 auto",
    borderRadius: "0",
    borderTop: "1px solid #eeeeee",
    borderBottom: "1px solid #eeeeee",
  },
  nextStepsTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#7B3FB2",
    margin: "0 0 20px",
    textAlign: "left" as const,
  },
  nextStepRow: {
    margin: "12px 0",
    display: "flex",
    alignItems: "flex-start",
  },
  checkmark: {
    width: "28px",
    paddingRight: "8px",
    fontSize: "16px",
  },
  nextStepContent: {
    flex: "1",
  },
  nextStepText: {
    fontSize: "16px",
    color: "#333333",
    margin: "0",
    lineHeight: "1.5",
  },
  nextStepLink: {
    color: "#9D5BD2",
    textDecoration: "none",
    fontWeight: "bold",
  },
  motivationText: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#7B3FB2",
    margin: "24px 0 0",
    textAlign: "center" as const,
  },
  divider: {
    borderColor: "#eeeeee",
    margin: "0",
  },
  socialSection: {
    padding: "24px",
    textAlign: "center" as const,
    backgroundColor: "#ffffff",
    margin: "0 auto",
  },
  socialTitle: {
    fontSize: "16px",
    color: "#7B3FB2",
    marginBottom: "16px",
    fontWeight: "bold",
  },
  socialIcon: {
    margin: "0 6px",
    maxWidth: "100%",
    height: "auto",
    opacity: "0.85",
    transition: "opacity 0.2s" as any,
  },
  whatsappText: {
    fontSize: "15px",
    color: "#333333",
    textAlign: "center" as const,
    margin: "0 auto 24px",
    lineHeight: "1.6",
    maxWidth: "90%",
  },
  whatsappLink: {
    color: "#9D5BD2",
    textDecoration: "none",
    fontWeight: "bold",
  },
  footer: {
    padding: "24px",
    textAlign: "center" as const,
    backgroundColor: "#f8f8f8",
    margin: "0 auto",
    boxSizing: "border-box" as const,
  },
  footerDivider: {
    borderColor: "#e0e0e0",
    margin: "12px auto 16px",
    width: "40%",
  },
  signatureText: {
    fontSize: "15px",
    color: "#333333",
    margin: "4px 0",
    lineHeight: "1.5",
  },
  footerText: {
    fontSize: "13px",
    color: "#666666",
    margin: "4px 0",
    lineHeight: "1.5",
  },
  unsubscribeText: {
    fontSize: "12px",
    color: "#757575",
    margin: "16px 0 0",
  },
  unsubscribeLink: {
    color: "#666666",
    textDecoration: "underline",
  },
}

export default LiveSessionAttendeesEmail

