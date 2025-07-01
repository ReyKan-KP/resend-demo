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

interface ModuleReleaseEmailProps {
  name?: string;
  moduleName?: string;
  moduleNumber?: number;
  moduleDescription?: string;
  moduleImageUrl?: string;
  liveSessionDate?: string;
  liveSessionTime?: string;
  liveSessionLink?: string;
}

// Helper function to get module-specific links
const getModuleLink = (moduleNumber: number) => {
  switch(moduleNumber) {
    case 1:
      return "https://www.buildfastwithai.com/premium/module/1/topic/basics/lesson/basics-of-python";
    case 2:
      return "https://www.buildfastwithai.com/premium/module/2/topic/intro-to-chatbots/lesson/introduction-cb";
    case 3:
      return "https://www.buildfastwithai.com/premium/module/3/topic/finetuning-llms/lesson/what-is-finetuning";
    case 4:
      return "https://www.buildfastwithai.com/premium/module/4/topic/agents-101/lesson/what-are-ai-agents";
    case 5:
      return "https://www.buildfastwithai.com/premium/module/5/topic/gen-ai-x-coding/lesson/intro-to-gen-ai-coding";
    case 6:
      return "https://www.buildfastwithai.com/premium/module/6/topic/mcp-and-browser-use/lesson/what-is-mcp-G2BdMu8";
    default:
      return `https://www.buildfastwithai.com/dashboard/module/${moduleNumber}`;
  }
};

// Helper function to get module-specific preview text
const getPreviewText = (moduleNumber: number, moduleName: string) => {
  switch(moduleNumber) {
    case 1:
      return "Kickstart Your Gen AI Journey: Your First Module Awaits!";
    case 2:
      return "Build Your Own ChatGPT — Live Session First, Then Dive Into Module 2 🤯";
    case 3:
      return "Ready to Clone Yourself? 🧬 Join the Live Session to Get Started";
    case 4:
      return "🧠 Automate Everything: Live Session + New Module Drop";
    case 5:
      return "🚀 Build Your AI SaaS Business – Live Session Kicks It Off!";
    case 6:
      return "Final Stretch! Join the Live Session for Module 6 Today";
    default:
      return `🚀 New Module Released: ${moduleName} is now available!`;
  }
};

// Helper function to get module-specific email content
const getModuleContent = (moduleNumber: number, name: string, liveSessionDate?: string, liveSessionTime?: string, liveSessionLink?: string, moduleName?: string) => {
  // Create conditional live session details section
  let liveSessionDetails = '';
  
  if (liveSessionDate || liveSessionTime || liveSessionLink) {
    liveSessionDetails = '<p><strong>Live Session Details:</strong><br />';
    
    if (liveSessionDate) {
      liveSessionDetails += `📅 Date: ${liveSessionDate}<br />`;
    }
    
    if (liveSessionTime) {
      liveSessionDetails += `🕓 Time: ${liveSessionTime}<br />`;
    }
    
    if (liveSessionLink) {
      liveSessionDetails += `📍 Join here: ${liveSessionLink}`;
    }
    
    liveSessionDetails += '</p>';
  }
  
  switch(moduleNumber) {
    case 1:
      return {
        title: "Your AI Journey Starts Today – Let's Begin",
        content: `
          <p>Your Generative AI journey begins with <strong>Week 1: Basics of Generative AI & How to Get Started</strong> – and the live session is your first step toward mastering this transformative technology.</p>
          ${liveSessionDetails}
          <p>In Module 1, you will:</p>
          <p>1. Learn Python basics<br />
          2. Understand Large Language Models (LLMs) and transformers<br />
          3. Explore industry-leading tools including Suno, Claude, and Perplexity<br />
          4. Practice prompt engineering and implement Langchain<br />
          5. Build and deploy your first AI application</p>
          <p>We look forward to supporting you on this exciting learning journey.</p>
          <p>Best regards,</p>
          <p><strong>Team Build Fast with AI</strong></p>
        `
      };
    case 2:
      return {
        title: "Build Your Own ChatGPT",
        content: `
          <p>We're about to launch <strong>Module 2: Chatbots and Assistants</strong> — but first, don't miss our LIVE mentor session!</p>
          ${liveSessionDate ? `<p>📅 <strong>Live Mentor Session:</strong> ${liveSessionDate}</p>` : ''}
          ${liveSessionLink ? `<p>🔗 <strong>Join Live Session:</strong> ${liveSessionLink}</p>` : ''}
          <p>🔓 <strong>After the session, Module 2 will go live!</strong></p>
          <p>Here's what you'll unlock:<br />
          ✅ Build a chatbot with memory<br />
          ✅ Chat with PDFs, docs & videos<br />
          ✅ Learn RAG & use Vector DBs</p>
          <p>Can't wait to see what you'll build!</p>
        `
      };
    case 3:
      return {
        title: "Build Your AI Clone",
        content: `
          <p>Get ready to build <em>your digital twin</em>!<br />
          <strong>Module 3: Build Your AI Clone</strong> kicks off with a <strong>live session</strong> you won't want to miss.</p>
          <p>1️⃣ Fine-tune AI models to match <em>your</em> style<br />
          2️⃣ Create images of yourself with AI<br />
          3️⃣ Clone your voice for speech & songs<br />
          4️⃣ Build your own AI writing assistant</p>
          <p><strong>Dive into Module 3 right after the session!</strong></p>
          ${liveSessionDate ? `<p><strong>Live Session Date:</strong> ${liveSessionDate}</p>` : ''}
          ${liveSessionLink ? `<p><strong>Join the Live Session:</strong> ${liveSessionLink}</p>` : ''}
          <p><strong>Module unlocks right after the session!</strong></p>
          <p>Prep your questions and let's create your AI double — see you live!</p>
        `
      };
    case 4:
      return {
        title: "Automation with AI Agents",
        content: `
          <p>It's time to let AI do the heavy lifting.<br />
          We're launching <strong>Module 4: Automation with AI Agents</strong> — and we're kicking it off <strong>live</strong>!</p>
          ${liveSessionDate ? `<p>🗓️ <strong>Live Session:</strong> ${liveSessionDate}</p>` : ''}
          <p>🎯 Topic: Build smart AI agents, automate workflows, and boost productivity</p>
          <p>Right after the session, you'll unlock <strong>Module 4</strong>, where you'll:</p>
          <p>🔢 Build personal AI agents (stock bots, chatbots & more)<br />
          🔢 Scrape websites using natural language<br />
          🔢 Automate Excel & data analysis with GPT<br />
          🔢 Explore no-code tools like <strong>N8N</strong> and <strong>NITAN.io</strong></p>
          <p>Let's make AI your personal productivity team.<br />
          See you live!</p>
        `
      };
    case 5:
      return {
        title: "Build Your AI SaaS Business",
        content: `
          <p>Ready to turn your ideas into a real product?</p>
          <p>We're kicking off <strong>Module 5: Build Your AI SaaS Business</strong> with a <strong>LIVE session</strong> — and trust us, this one's big.</p>
          ${liveSessionDate ? `<p>📅 <strong>Live Session Date:</strong> ${liveSessionDate}</p>` : ''}
          <p>💡 Topic: How to go from <em>code to customers</em> with AI</p>
          <p>After the session, you'll unlock Module 5 where you'll:<br />
          1️⃣ Design landing pages & databases with AI tools<br />
          2️⃣ Build full-stack apps in minutes using Cursor, V0.dev & more<br />
          3️⃣ Launch your own MVP — fast and functional</p>
          <p>This is your step toward launching your own AI-powered product. Let's make it real.</p>
        `
      };
    case 6:
      return {
        title: "Advanced AI Implementation & Business Strategy",
        content: `
          <p>Welcome to the final stretch of the Gen AI Launch Pad!<br />
          <strong>Module 6: Advanced AI Implementation & Business Strategy</strong> is where we go beyond demos and build production-ready AI systems that can scale.</p>
          <p>Before the module goes live, join us for the <strong>live session</strong> to kick things off:</p>
          ${liveSessionTime ? `<p>🕒 <strong>Time:</strong> ${liveSessionTime}</p>` : ''}
          ${liveSessionLink ? `<p>🔗 <strong>Zoom Link:</strong> ${liveSessionLink}</p>` : ''}
          <p>Here's what you'll dive into this week:<br />
          1️⃣ <strong>Secure & ethical AI</strong>: Guardrails, governance, and content moderation<br />
          2️⃣ <strong>Local model deployment</strong>: Run AI tools from your own infrastructure<br />
          3️⃣ <strong>Enterprise-grade solutions</strong>: Build your own <strong>AI SaaS prototype</strong></p>
          <p>The final module unlocks right after the session — and it's everything you've worked toward.</p>
        `
      };
    default:
      const moduleNameSafe = moduleName || `Module ${moduleNumber}`;
      return {
        title: `Module ${moduleNumber} Is Now Available! 🚀`,
        content: `
          <p>We're excited to announce that Module ${moduleNumber}: ${moduleNameSafe} has just been released and is ready for you to dive in!</p>
          ${(liveSessionDate || liveSessionTime || liveSessionLink) ? '<p>Join us for the live session to kick things off:</p>' : ''}
          ${liveSessionDetails}
        `
      };
  }
};

// Email template component
export const ModuleReleaseTriggerEmail = ({ 
  name = "there", 
  moduleName = "New Module", 
  moduleNumber = 1,
  moduleDescription = "Exciting new content is now available for you to explore!",
  moduleImageUrl = "https://iili.io/3qiB1kJ.png",
  liveSessionDate = "",
  liveSessionTime = "",
  liveSessionLink = ""
}: ModuleReleaseEmailProps) => {
  // Get the appropriate module link
  const moduleLink = getModuleLink(moduleNumber);
  const previewText = getPreviewText(moduleNumber, moduleName);
  const moduleContent = getModuleContent(moduleNumber, name, liveSessionDate, liveSessionTime, liveSessionLink, moduleName);
  
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
            <Text style={styles.subtitle}>{moduleName}</Text>
          </Section>

          {/* Main Content */}
          <Section style={styles.mainContent}>
            <Text style={styles.contentTitle}>Hey {name},</Text>
            
            <div dangerouslySetInnerHTML={{ __html: moduleContent.content }} style={styles.contentHtml} />
            
            {moduleImageUrl && moduleImageUrl !== "https://iili.io/3qiB1kJ.png" && (
              <Img 
                src={moduleImageUrl} 
                width="400" 
                alt={`Module ${moduleNumber} Preview`} 
                style={styles.moduleImage} 
              />
            )}
            
            <Text style={styles.callToAction}>START LEARNING NOW 👇🏼</Text>
            
            <Button style={styles.button} href={moduleLink}>
              Go to Module {moduleNumber}
            </Button>
          </Section>

          {/* Module Highlights */}
          {/*<Section style={styles.moduleHighlightsSection}>
            <Text style={styles.highlightsTitle}>Module Highlights</Text>
            
            <Row style={styles.highlightRow}>
              <Column style={styles.highlightIcon}>🔍</Column>
              <Column style={styles.highlightContent}>
                <Text style={styles.highlightHeading}>In-depth Learning</Text>
                <Text style={styles.highlightText}>Master new concepts with comprehensive lessons and examples</Text>
              </Column>
            </Row>
            
            <Row style={styles.highlightRow}>
              <Column style={styles.highlightIcon}>💻</Column>
              <Column style={styles.highlightContent}>
                <Text style={styles.highlightHeading}>Hands-on Practice</Text>
                <Text style={styles.highlightText}>Apply your knowledge with practical coding exercises</Text>
              </Column>
            </Row>
            
            <Row style={styles.highlightRow}>
              <Column style={styles.highlightIcon}>🧩</Column>
              <Column style={styles.highlightContent}>
                <Text style={styles.highlightHeading}>Real-world Applications</Text>
                <Text style={styles.highlightText}>See how these concepts are used in industry projects</Text>
              </Column>
            </Row>
          </Section>
          */}

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

// Styles - Light Theme with Pastel Indigo color scheme
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
    background: "linear-gradient(135deg, #D8D9F2 0%, #BFC0E6 100%)", // Updated to Pastel Indigo
    boxSizing: "border-box" as const,
    margin: "0 auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#444466", // Darker shade for contrast with Pastel Indigo
    margin: "0 0 10px",
    lineHeight: "1.3",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555577", // Darker shade for contrast with Pastel Indigo
    margin: "0",
    lineHeight: "1.5",
    fontWeight: "600",
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
  contentHtml: {
    fontSize: "16px",
    color: "#424242",
    lineHeight: "1.6",
    margin: "0 0 20px",
    textAlign: "left" as const,
  },
  moduleImage: {
    margin: "20px auto",
    borderRadius: "8px",
    maxWidth: "100%",
    height: "auto",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
  contentTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#8788BF", // Updated to match Pastel Indigo
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
    color: "#8788BF", // Updated to match Pastel Indigo
    margin: "35px 0 25px",
  },
  moduleHighlightsSection: {
    backgroundColor: "#f9f9f9",
    padding: "30px 20px",
    margin: "20px auto",
    borderRadius: "12px",
    maxWidth: "90%",
  },
  highlightsTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#8788BF", // Updated to match Pastel Indigo
    margin: "0 0 20px",
    textAlign: "center" as const,
  },
  highlightRow: {
    margin: "15px 0",
    display: "flex",
    alignItems: "center",
  },
  highlightIcon: {
    fontSize: "24px",
    width: "36px",
    height: "36px",
    textAlign: "center" as const,
    margin: "0 15px 0 0",
  },
  highlightContent: {
    flex: "1",
  },
  highlightHeading: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#424242",
    margin: "0 0 5px",
  },
  highlightText: {
    fontSize: "14px",
    color: "#616161",
    margin: "0",
  },
  button: {
    backgroundColor: "#8788BF", // Updated to match Pastel Indigo
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
    color: "#8788BF", // Updated to match Pastel Indigo
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
    color: "#8788BF", // Updated to match Pastel Indigo
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

export default ModuleReleaseTriggerEmail
