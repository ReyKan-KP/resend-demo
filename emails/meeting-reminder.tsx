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

interface MeetingReminderProps {
  name?: string;
  meetingTitle?: string;
  meetingDate?: string;
  meetingTime?: string;
  meetingLink?: string;
  meetingAgenda?: string[];
}

// Email template component
export const MeetingReminderEmail = ({ 
  name = "there", 
  meetingTitle = "LIVE Doubt Solving Session", 
  meetingDate = "Today",
  meetingTime = "8:30 PM IST",
  meetingLink = "https://us06web.zoom.us/j/89237838331?pwd=jEHclKpo6pxjmbgaCickaaCIeB6XmX.1",
  meetingAgenda = [
    "Get your questions answered live by our expert mentor Satvik",
    "Receive real-time feedback on your projects",
    "Learn from challenges and solutions shared by other participants"
  ]
}: MeetingReminderProps) => {
  return (
    <Html>
      <Head />
      <Preview>Join Us Live — {meetingTitle} Happening {meetingDate}!</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={styles.heroSection}>
            <Section style={styles.logoWrapper}>
              <Link href="https://www.buildfastwithai.com">
                <Img src="https://iili.io/3qiB1kJ.png" width="80" height="80" alt="BUILD AI" style={styles.logo} />
              </Link>
            </Section>
            
            <Text style={styles.heroTitle}>{meetingTitle}</Text>
            <Text style={styles.heroDate}>{meetingDate} • {meetingTime}</Text>
            
            {meetingLink && (
              <Button style={styles.heroButton} href={meetingLink}>
                Join The Session
              </Button>
            )}
          </Section>
          
          {/* Welcome Message */}
          <Section style={styles.welcomeSection}>
            <Text style={styles.greeting}>Hey {name}! 👋</Text>
            <Text style={styles.welcomeText}>
              We're excited to invite you to {meetingDate}'s <strong>{meetingTitle}</strong> as part of Gen AI Launch Pad!
            </Text>
          </Section>
          
          {/* Meeting Benefits */}
          <Section style={styles.benefitsSection}>
            <Text style={styles.sectionTitle}>This is your chance to:</Text>
            
            <div style={styles.benefitsGrid}>
              {meetingAgenda.map((item, index) => (
                <div key={index} style={styles.benefitCard}>
                  <div style={styles.benefitIcon}>{index === 0 ? "🎓" : index === 1 ? "💬" : "🚀"}</div>
                  <Text style={styles.benefitText}>{item}</Text>
                </div>
              ))}
            </div>
            
            <Text style={styles.calloutText}>
              If you're stuck or want to deepen your understanding, don't miss this!
            </Text>
          </Section>
          
          {/* Preparation Steps */}
          <Section style={styles.prepSection}>
            <Text style={styles.sectionTitle}>How to Prepare</Text>
            
            <div style={styles.prepSteps}>
              <div style={styles.prepStep}>
                <div style={styles.prepStepNumber}>1</div>
                <div style={styles.prepStepContent}>
                  <Text style={styles.prepStepTitle}>Prepare Your Questions</Text>
                  <Text style={styles.prepStepText}>Note down specific questions you'd like to have answered</Text>
                </div>
              </div>
              
              <div style={styles.prepStep}>
                <div style={styles.prepStepNumber}>2</div>
                <div style={styles.prepStepContent}>
                  <Text style={styles.prepStepTitle}>Bring Your Project</Text>
                  <Text style={styles.prepStepText}>Have your code or project ready to share for feedback</Text>
                </div>
              </div>
              
              <div style={styles.prepStep}>
                <div style={styles.prepStepNumber}>3</div>
                <div style={styles.prepStepContent}>
                  <Text style={styles.prepStepTitle}>Test Your Setup</Text>
                  <Text style={styles.prepStepText}>Ensure your camera, microphone and Zoom are working properly</Text>
                </div>
              </div>
            </div>
          </Section>
          
          {/* CTA Section */}
          <Section style={styles.ctaSection}>
            <Text style={styles.ctaTitle}>Ready to join?</Text>
            
            <div style={styles.ctaCard}>
              <div style={styles.ctaDetails}>
                <div style={styles.ctaDetailRow}>
                  <div style={styles.ctaDetailIcon}>📅</div>
                  <div style={styles.ctaDetailText}>
                    <Text style={styles.ctaDetailLabel}>Date</Text>
                    <Text style={styles.ctaDetailValue}>{meetingDate}</Text>
                  </div>
                </div>
                
                <div style={styles.ctaDetailRow}>
                  <div style={styles.ctaDetailIcon}>⏰</div>
                  <div style={styles.ctaDetailText}>
                    <Text style={styles.ctaDetailLabel}>Time</Text>
                    <Text style={styles.ctaDetailValue}>{meetingTime}</Text>
                  </div>
                </div>
              </div>
              
              {meetingLink && (
                <>
                  <Button style={styles.ctaButton} href="https://us06web.zoom.us/j/89237838331?pwd=jEHclKpo6pxjmbgaCickaaCIeB6XmX.1">
                    Join Zoom Meeting Now
                  </Button>
                  
                  <Text style={styles.ctaLinkText}>
                    Or copy this link: <Link href="https://us06web.zoom.us/j/89237838331?pwd=jEHclKpo6pxjmbgaCickaaCIeB6XmX.1" style={styles.ctaLink}>https://us06web.zoom.us/j/89237838331?pwd=jEHclKpo6pxjmbgaCickaaCIeB6XmX.1</Link>
                  </Text>
                </>
              )}
            </div>
            
            <Text style={styles.ctaNote}>
              Bring your doubts, notes, and enthusiasm — see you there!
            </Text>
          </Section>
          
          <Section style={styles.signatureSection}>
            <Text style={styles.signatureText}>
              Best,<br />
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

// Styles - Modern Design
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
    padding: "0 0 40px",
    textAlign: "center" as const,
    backgroundColor: "#C084FC",
    backgroundImage: "linear-gradient(135deg, #C084FC 0%, #A855F7 100%)",
    position: "relative" as const,
    overflow: "hidden" as const,
    borderBottomLeftRadius: "30% 5%",
    borderBottomRightRadius: "30% 5%",
  },
  logoWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "15px 0",
    marginBottom: "25px",
  },
  logo: {
    margin: "0 auto",
    borderRadius: "12px",
    maxWidth: "100%",
    height: "auto",
    padding: "5px",
  },
  heroTitle: {
    fontSize: "30px",
    fontWeight: "800",
    color: "#ffffff",
    margin: "0 auto 10px",
    lineHeight: "1.2",
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    letterSpacing: "-0.5px",
    maxWidth: "80%",
  },
  heroDate: {
    fontSize: "18px",
    color: "#F3E8FF",
    margin: "0 auto 25px",
    lineHeight: "1.5",
    fontWeight: "500",
    maxWidth: "80%",
  },
  heroButton: {
    backgroundColor: "#ffffff",
    color: "#A855F7",
    padding: "14px 30px",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "700",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    border: "none",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
    margin: "10px 0 0",
    letterSpacing: "0.3px",
  },
  // Welcome Section
  welcomeSection: {
    padding: "40px 30px 20px",
    backgroundColor: "#ffffff",
    textAlign: "center" as const,
  },
  greeting: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#333333",
    margin: "0 0 15px",
    lineHeight: "1.4",
  },
  welcomeText: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#4B5563",
    margin: "0 auto",
    maxWidth: "90%",
  },
  // Benefits Section
  benefitsSection: {
    padding: "20px 25px 30px",
    backgroundColor: "#ffffff",
    textAlign: "center" as const,
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#333333",
    margin: "0 0 25px",
    textAlign: "center" as const,
    position: "relative" as const,
    display: "inline-block",
  },
  benefitsGrid: {
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: "15px",
    margin: "0",
    maxWidth: "100%",
  },
  benefitCard: {
    display: "flex" as const,
    alignItems: "center" as const,
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#F9F5FF",
    border: "1px solid #E9D5FF",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)",
  },
  benefitIcon: {
    fontSize: "24px",
    marginRight: "15px",
    flexShrink: 0,
  },
  benefitText: {
    fontSize: "15px",
    color: "#4B5563",
    textAlign: "left" as const,
    margin: "0",
    lineHeight: "1.5",
  },
  calloutText: {
    fontSize: "16px",
    color: "#4B5563",
    fontWeight: "500",
    fontStyle: "italic" as const,
    margin: "25px auto 0",
    padding: "10px",
    maxWidth: "85%",
    textAlign: "center" as const,
  },
  // Prep Section
  prepSection: {
    padding: "35px 25px",
    backgroundColor: "#FAFAFA",
    textAlign: "center" as const,
    borderTop: "1px solid #F3F4F6",
    borderBottom: "1px solid #F3F4F6",
  },
  prepSteps: {
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: "20px",
    maxWidth: "85%",
    margin: "0 auto",
  },
  prepStep: {
    display: "flex" as const,
    alignItems: "flex-start" as const,
    textAlign: "left" as const,
  },
  prepStepNumber: {
    width: "30px",
    height: "30px",
    // borderRadius: "50%",
    // backgroundColor: "#C084FC",
    color: "#C084FC",
    fontSize: "18px",
    fontWeight: "bold",
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    marginRight: "15px",
    flexShrink: 0,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  prepStepContent: {
    flex: 1,
  },
  prepStepTitle: {
    fontSize: "17px",
    fontWeight: "700",
    color: "#374151",
    margin: "0 0 5px",
    lineHeight: "1.3",
  },
  prepStepText: {
    fontSize: "14px",
    color: "#6B7280",
    margin: "0",
    lineHeight: "1.5",
  },
  // CTA Section
  ctaSection: {
    padding: "40px 25px",
    backgroundColor: "#ffffff",
    textAlign: "center" as const,
  },
  ctaTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#111827",
    margin: "0 0 25px",
    textAlign: "center" as const,
  },
  ctaCard: {
    backgroundColor: "#F9F5FF",
    borderRadius: "12px",
    padding: "25px 20px",
    maxWidth: "90%",
    margin: "0 auto 20px",
    border: "1px solid #E9D5FF",
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.05)",
  },
  ctaDetails: {
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: "15px",
    marginBottom: "25px",
  },
  ctaDetailRow: {
    display: "flex" as const,
    alignItems: "center" as const,
  },
  ctaDetailIcon: {
    width: "40px",
    fontSize: "22px",
    textAlign: "center" as const,
    marginRight: "10px",
  },
  ctaDetailText: {
    flex: "1",
    textAlign: "left" as const,
  },
  ctaDetailLabel: {
    fontSize: "14px",
    color: "#6B7280",
    margin: "0 0 2px",
    fontWeight: "500",
  },
  ctaDetailValue: {
    fontSize: "16px",
    color: "#374151",
    margin: "0",
    fontWeight: "600",
  },
  ctaButton: {
    backgroundColor: "#A855F7",
    color: "#ffffff",
    padding: "15px 30px",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "700",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    border: "none",
    boxShadow: "0 4px 8px rgba(168, 85, 247, 0.3)",
    width: "80%",
    marginBottom: "15px",
  },
  ctaLinkText: {
    fontSize: "13px",
    color: "#6B7280",
    margin: "0",
    lineHeight: "1.5",
  },
  ctaLink: {
    color: "#A855F7",
    fontWeight: "500",
    textDecoration: "underline",
    wordBreak: "break-word" as const,
  },
  ctaNote: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#4B5563",
    margin: "25px auto 0",
    maxWidth: "85%",
    lineHeight: "1.6",
  },
  // Signature Section
  signatureSection: {
    padding: "15px 25px 30px",
    textAlign: "center" as const,
  },
  signatureText: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#4B5563",
    fontWeight: "500",
  },
  // Social Section
  socialSection: {
    padding: "25px 20px",
    backgroundColor: "#F9FAFB",
    textAlign: "center" as const,
    borderTop: "1px solid #F3F4F6",
  },
  socialTitle: {
    fontSize: "16px",
    color: "#4B5563",
    marginBottom: "15px",
    fontWeight: "600",
  },
  socialIcon: {
    margin: "0 7px",
    maxWidth: "100%",
    height: "auto",
  },
  socialText: {
    fontSize: "14px",
    color: "#6B7280",
    margin: "15px auto 0",
    lineHeight: "1.6",
    maxWidth: "80%",
  },
  socialLink: {
    color: "#A855F7",
    textDecoration: "none",
    fontWeight: "500",
    padding: "1px 4px",
    backgroundColor: "#F3E8FF",
    borderRadius: "4px",
  },
  // Footer
  footer: {
    padding: "25px 15px",
    textAlign: "center" as const,
    backgroundColor: "#F3F4F6",
    borderTop: "1px solid #E5E7EB",
  },
  footerText: {
    fontSize: "12px",
    color: "#6B7280",
    margin: "5px 0",
    lineHeight: "1.5",
  },
  footerLinks: {
    fontSize: "12px",
    color: "#6B7280",
    margin: "15px 0 0",
  },
  footerLink: {
    color: "#6B7280",
    textDecoration: "underline",
  }
}

export default MeetingReminderEmail
