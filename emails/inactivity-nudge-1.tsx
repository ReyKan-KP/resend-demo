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

interface InactivityNudgeProps {
  name?: string;
  moduleTitle?: string;
  moduleLink?: string;
  daysInactive?: number;
  moduleId?: number;
}

// Helper function to get module-specific preview text
const getPreviewText = (moduleId?: number) => {
  switch(moduleId) {
    case 1:
      return "Don't Fall Behind — Let's Catch Up Before Saturday's Drop!";
    case 2:
      return "Don't Fall Behind — Module 2 Is Waiting for You!";
    case 3:
      return "Still haven't started Module 3?";
    case 4:
      return "Your AI agents are waiting to get to work 🤖";
    case 5:
      return "Still Thinking About Your AI Startup? Let's Build It 🛠️";
    case 6:
      return "Haven't Started Module 6 Yet?";
    default:
      return "Don't Fall Behind — Let's Catch Up Before Saturday's Drop!";
  }
};

// Helper function to get module-specific email content
const getModuleContent = (moduleId?: number, name?: string, moduleTitle?: string) => {
  switch(moduleId) {
    case 1:
      return {
        title: "Don't Fall Behind",
        subtitle: "Let's Catch Up Before Saturday's Drop!",
        content: `
          <p>We noticed you haven't started your Gen AI Launch Pad journey yet — and that's okay! But now's the perfect time to dive in before <strong>Module 2 drops this Saturday</strong>.</p>
          <div style="margin: 20px 0;">
            <p style="margin-bottom: 5px;">Here's why you shouldn't miss out:</p>
            <p>✅ Every module builds on the last — catch up now to stay in sync<br/>
            ✅ The earlier you start, the more time you get to experiment and learn<br/>
            ✅ You've got a community (and mentors!) ready to support you</p>
          </div>
          <p>Start small — just hit play on the first video. You've got this 💪</p>
          <p>We can't wait to see your ideas come to life!</p>
        `
      };
    case 2:
      return {
        title: "Don't Fall Behind",
        subtitle: "Module 2 Is Waiting for You!",
        content: `
          <p>We noticed you haven't started Module 2 yet — and trust us, you don't want to miss what's inside!<br/>
          This is where things get really exciting.</p>
          <div style="margin: 20px 0;">
            <p style="margin-bottom: 5px;"><strong>Here's what you'll unlock in Module 2:</strong></p>
            <p>- Learn how <strong>chatbots and AI assistants</strong> work<br/>
            - Build your own <strong>custom chatbot step-by-step</strong><br/>
            - Understand <strong>RAG (Retrieval-Augmented Generation)</strong> — from basics to advanced techniques</p>
            <p>Each concept builds on the last, so jumping in now helps you stay on track and make the most of what's coming next.</p>
          </div>
          <p>You're just one click away from leveling up your AI skills!</p>
        `
      };
    case 3:
      return {
        title: "Still Haven't Started Module 3?",
        subtitle: "You're Missing Something Exciting!",
        content: `
          <p>Module 3 of the Gen AI Launch Pad is already live — and it's packed with the most exciting tools and techniques yet. If you haven't started, now's the perfect time to jump in.</p>
          <div style="margin: 20px 0;">
            <p style="margin-bottom: 5px;">Here's what you're missing in <strong>Week 3: Multimodal AI – Design Your Digital Universe</strong>:</p>
            <p>✅ Learn to create <strong>AI-generated art, voices, and videos</strong><br/>
            ✅ Build your <strong>own AI image and voice clone</strong><br/>
            ✅ Explore <strong>finetuning</strong>, multimodal chatbots, and even make your own <strong>AI writer and story app</strong></p>
          </div>
          <p>The future of AI isn't just text — it's visual, vocal, and interactive. Don't get left behind.</p>
          <p>You're just one click away from building something amazing.</p>
        `
      };
    case 4:
      return {
        title: "Your AI Agents Are Waiting",
        subtitle: "Ready to Boost Your Productivity 🤖",
        content: `
          <p>We noticed you haven't started <strong>Module 4: Automation & AI Agents</strong> yet — and it's packed with powerful tools to boost your productivity.</p>
          <div style="margin: 20px 0;">
            <p style="margin-bottom: 5px;">Here's what you'll unlock:</p>
            <p>✅ AI agents with LangGraph & CrewAI<br/>
            ✅ No-code automations with N8N & NITAN.io<br/>
            ✅ Real-world bots for finance, customer service & more</p>
          </div>
          <p>You're just one module away from deploying your AI workforce. Let's get started 🚀</p>
        `
      };
    case 5:
      return {
        title: "Build Your AI SaaS Business",
        subtitle: "From Idea to Launch 🛠️",
        content: `
          <p>Module 5 — <strong>Build Your AI SaaS Business</strong> — is live, and it's a game-changer. If you haven't started yet, now's the time.</p>
          <div style="margin: 20px 0;">
            <p style="margin-bottom: 5px;">Here's what's waiting for you:</p>
            <p>1️⃣ Build your own AI-powered product<br/>
            2️⃣ Use tools like Cursor, V0.dev & database.build<br/>
            3️⃣ Learn the playbook to go from idea to MVP</p>
          </div>
          <p>Small start. Big impact. Let's build something people want.</p>
        `
      };
    case 6:
      return {
        title: "The Final Module Awaits",
        subtitle: "Let's Finish Strong!",
        content: `
          <p>Module 6 is live — and we noticed you haven't jumped in yet.</p>
          <div style="margin: 20px 0;">
            <p style="margin-bottom: 5px;">This final module is all about <strong>real-world implementation</strong>:</p>
            <p>1️⃣ Build <strong>secure, ethical AI systems</strong><br/>
            2️⃣ Learn <strong>local deployment techniques</strong><br/>
            3️⃣ Prototype your own <strong>AI SaaS product</strong></p>
          </div>
          <p>You're almost at the finish line — don't stop now. Let's wrap this journey strong.</p>
        `
      };
    default:
      return {
        title: "Don't Fall Behind",
        subtitle: "Let's Catch Up!",
        content: `
          <p>We noticed it's been days since you've made progress on <strong>${moduleTitle}</strong>. We know life gets busy, but we'd love to see you back in the course!</p>
          <div style="margin: 20px 0;">
            <p style="margin-bottom: 5px;">Here's why you shouldn't miss out:</p>
            <p>✅ Every module builds on the last — catch up now to stay in sync<br/>
            ✅ The earlier you start, the more time you get to experiment and learn<br/>
            ✅ You've got a community (and mentors!) ready to support you</p>
          </div>
          <p>Start small — just hit play on the first video. You've got this 💪</p>
          <p>We can't wait to see your ideas come to life!</p>
        `
      };
  }
};

// Email template component
export const InactivityNudgeEmail = ({ 
  name = "there", 
  moduleTitle = "your current module",
  moduleLink = "https://www.buildfastwithai.com/dashboard",
  daysInactive = 3,
  moduleId = 1
}: InactivityNudgeProps) => {
  const previewText = getPreviewText(moduleId);
  const moduleContent = getModuleContent(moduleId, name, moduleTitle);
  
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
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
            <Text style={styles.title}>{moduleContent.title}</Text>
            <Text style={styles.subtitle}>{moduleContent.subtitle}</Text>
          </Section>

          {/* Main Content */}
          <Section style={styles.mainContent}>
            <Text style={styles.contentTitle}>Hey {name},</Text>
            
            <div dangerouslySetInnerHTML={{ __html: moduleContent.content }} style={styles.contentHtml} />
            
            <Button style={styles.button} href={moduleLink}>
              Start Learning Now
            </Button>

            <Text style={{...styles.paragraph, marginTop: "30px"}}>
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

// Styles - Blue/Gentle Theme
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
    background: "linear-gradient(135deg, #F8D7DA 0%, #e5b9bd 100%)",
    boxSizing: "border-box" as const,
    margin: "0 auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#d16973",
    margin: "0 0 10px",
    lineHeight: "1.3",
  },
  subtitle: {
    fontSize: "16px",
    color: "#d16973",
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
    color: "#d16973",
    margin: "0 auto 20px",
    lineHeight: "1.4",
  },
  contentHtml: {
    fontSize: "16px",
    color: "#424242",
    lineHeight: "1.6",
    margin: "0 0 20px",
    textAlign: "left" as const,
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
  calloutBox: {
    backgroundColor: "#fdf0f2",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #F8D7DA",
    margin: "20px auto",
    maxWidth: "90%",
  },
  calloutTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#d16973",
    margin: "0 0 10px",
  },
  calloutText: {
    fontSize: "15px",
    color: "#424242",
    margin: "0 0 15px",
    lineHeight: "1.5",
  },
  button: {
    backgroundColor: "#d16973",
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
    color: "#d16973",
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
    color: "#d16973",
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

export default InactivityNudgeEmail
