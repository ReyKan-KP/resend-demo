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

interface InactivityNudge2Props {
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
      return "Still waiting to start on your AI journey?";
    case 2:
      return "Don't Fall Behind — Finish Modules 1 & 2 Before Saturday";
    case 3:
      return "Module 3 is wrapping up — but you haven't finished previous modules";
    case 4:
      return "5 Days In... Have You Started Module 4 Yet? ⏳";
    case 5:
      return "Haven't Started Module 5 Yet? The Final Project Is Coming 🎯";
    case 6:
      return "Get Ready for the Capstone! Complete Your Modules Before Saturday 🎯";
    default:
      return "Still waiting to start on your AI journey?";
  }
};

// Helper function to get module-specific email content
const getModuleContent = (moduleId?: number, name?: string, moduleTitle?: string) => {
  switch(moduleId) {
    case 1:
      return {
        title: "Still waiting to start?",
        subtitle: "Your AI journey awaits!",
        content: `
          <p>It's been 5 days since Gen AI Launch Pad kicked off — and we noticed you haven't accessed the course yet.<br/>
          This journey was designed to help you level up with the power of Generative AI… but only if you start!</p>
          <div style="margin: 20px 0;">
            <p style="margin-bottom: 5px;"><strong>Here's why getting started today matters:</strong></p>
            <p>✅ Catch up before the next module drops on Saturday<br/>
            ✅ Build your first AI App TODAY<br/>
            ✅ You've already taken the first step by signing up — now just take the next one!</p>
          </div>
          <p>No pressure — just progress. Let's get moving 🚀</p>
          <p>We're rooting for you!</p>
        `
      };
    case 2:
      return {
        title: "Don't Fall Behind",
        subtitle: "Finish Modules 1 & 2 Before Saturday",
        content: `
          <p>We noticed you haven't completed <strong>Module 1</strong> yet — and with <strong>Module 2</strong> wrapping up this week, now's the perfect time to catch up.</p>
          <p>Each module builds on the last, and missing the foundational concepts in Module 1 could make Module 3 a lot harder to follow.</p>
          <div style="margin: 20px 0;">
            <p style="margin-bottom: 5px;"><strong>Here's why completing Modules 1 & 2 now matters:</strong></p>
            <p>- <strong>Module 1</strong> helps you build your <strong>first AI app</strong> — the foundation for everything ahead.</p>
            <p>- <strong>Module 2</strong> covers <strong>chatbots, memory, and RAG</strong> — must-know skills for smart assistants.</p>
            <p>- <strong>Module 3 drops this Saturday</strong>, so now's the time to catch up and stay on track.</p>
          </div>
          <p>Take this moment to refocus — you've already started the journey, now let's make real progress.</p>
          <p>We're here cheering you on every step of the way.</p>
        `
      };
    case 3:
      return {
        title: "Module 3 is wrapping up",
        subtitle: "But you haven't finished previous modules",
        content: `
          <p>We're nearing the end of <strong>Week 3</strong> of the Gen AI Launch Pad. But it looks like you haven't yet completed the <strong>earlier modules</strong>.</p>
          <p>This course is designed to build <strong>step by step</strong>, and starting late means you're missing out on the core skills that power everything ahead.</p>
          <div style="margin: 20px 0;">
            <p style="margin-bottom: 5px;"><strong>Here's what you've missed so far:</strong></p>
            <p>🔹 <strong>Module 1</strong> helps you build your <strong>first AI app</strong> — the foundation for everything ahead.</p>
            <p>🔹 <strong>Module 2</strong> covers <strong>chatbots, memory, and RAG</strong> — must-know skills for smart assistants.</p>
            <p>🔹 <strong>Module 4 drops this Saturday</strong>, so now's the time to catch up and stay on track.</p>
          </div>
          <p>You're not too late — but now's the time to get going.</p>
        `
      };
    case 4:
      return {
        title: "5 Days In...",
        subtitle: "Have You Started Module 4 Yet? ⏳",
        content: `
          <p>It's been <strong>5 days</strong> since <strong>Module 4: Automation with AI Agents</strong> went live — and we noticed you haven't started yet.</p>
          <div style="margin: 20px 0;">
            <p>This module is packed with hands-on tools to help you:</p>
            <p>1️⃣ Build your own AI Agents (think stock bots, support agents, more!)<br/>
            2️⃣ Automate Excel & Google Sheets with GPT<br/>
            3️⃣ Create workflows using LangGraph, CrewAI, and n8n</p>
          </div>
          <p>Don't fall behind — your personal AI workforce is waiting to be built.</p>
          <p>You've got this 💪</p>
        `
      };
    case 5:
      return {
        title: "Haven't Started Module 5 Yet?",
        subtitle: "The Final Project Is Coming 🎯",
        content: `
          <p>We noticed you haven't started <strong>Module 5: Build Your AI SaaS Business</strong> yet — and the course is quickly heading toward the finish line. 🏁</p>
          <p>🚨 The <strong>Capstone Project</strong> is just around the corner, and Module 5 is key to preparing for it.</p>
          <div style="margin: 20px 0;">
            <p>⏳ Start now so you have enough time to:</p>
            <p>1️⃣ Build a real SaaS product<br/>
            2️⃣ Learn AI coding tools like Cursor, v0.dev & more<br/>
            3️⃣ Be ready to launch your capstone project with confidence</p>
          </div>
          <p>Let's finish strong 💪</p>
        `
      };
    case 6:
      return {
        title: "Get Ready for the Capstone!",
        subtitle: "Complete Your Modules Before Saturday 🎯",
        content: `
          <p>The course is coming to an end, and the <strong>Capstone Project</strong> launches this Saturday! 🚀</p>
          <p>To set yourself up for success, make sure you've completed all the previous modules — especially <strong>Module 6: Advanced AI Implementation & Business Strategy</strong>.</p>
          <div style="margin: 20px 0;">
            <p>⏳ Finishing the modules now will help you:</p>
            <p>1️⃣ Master AI ethics, security, and responsible development practices<br/>
            2️⃣ Learn how to build and deploy secure AI systems with enterprise applications<br/>
            3️⃣ Develop and prototype your own AI SaaS product with confidence<br/>
            4️⃣ Be fully prepared to launch your capstone project on time</p>
          </div>
          <p>There's still time to finish strong — let's get you ready for an awesome capstone! 💪</p>
        `
      };
    default:
      return {
        title: "Still waiting to start?",
        subtitle: "Your AI journey awaits!",
        content: `
          <p>It's been 5 days since Gen AI Launch Pad kicked off — and we noticed you haven't accessed the course yet.
          This journey was designed to help you level up with the power of Generative AI… but only if you start!</p>
          <div style="margin: 20px 0;">
            <p style="margin-bottom: 5px;"><strong>Here's why getting started today matters:</strong></p>
            <p>✅ Catch up before the next module drops on Saturday<br/>
            ✅ Build your first AI App TODAY<br/>
            ✅ You've already taken the first step by signing up — now just take the next one!</p>
          </div>
          <p>No pressure — just progress. Let's get moving 🚀</p>
          <p>We're rooting for you!</p>
        `
      };
  }
};

// Email template component
export const InactivityNudge2Email = ({ 
  name = "there", 
  moduleTitle = "your current module",
  moduleLink = "https://www.buildfastwithai.com/dashboard",
  daysInactive = 5,
  moduleId = 1
}: InactivityNudge2Props) => {
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

// Styles - Orange/Urgent Theme
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

export default InactivityNudge2Email
