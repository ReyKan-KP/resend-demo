"use client"

import { useEffect, useState } from "react"
import { render } from "@react-email/render"
import * as EmailTemplatesImport from "../../emails"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ReactElement } from "react"

// Type assertion to allow indexing with strings
const EmailTemplates: Record<string, (props?: any) => ReactElement> = EmailTemplatesImport as any;

// Template prop types interface
interface TemplateProps {
  [key: string]: any;
}

// Define default props for templates that accept props
const defaultTemplateProps: Record<string, TemplateProps> = {
  MeetingReminderEmail: {
    name: "there",
    meetingTitle: "LIVE Doubt Solving Session",
    meetingDate: "Today",
    meetingTime: "8:30 PM IST",
    meetingLink: "https://us06web.zoom.us/j/89237838331?pwd=jEHclKpo6pxjmbgaCickaaCIeB6XmX.1",
    meetingAgenda: [
      "Get your questions answered live by our expert mentor Satvik",
      "Receive real-time feedback on your projects",
      "Learn from challenges and solutions shared by other participants"
    ]
  },
  CapstoneCheckpoint3Email: {
    name: "there",
    deadline: "11:59 PM tonight"
  },
  CapstoneCheckpoint4Email: {
    name: "there",
    deadline: "tomorrow",
    demoDay: "next Friday"
  },
  CapstoneDelayUserEmail: {
    name: "there",
    newDeadline: "Friday, June 14th"
  },
  CapstoneDemoDayPrepEmail: {
    name: "there",
    demoDate: "Friday, June 21st"
  },
  CapstoneMeetingReminderEmail: {
    name: "there",
    meetingDate: "Tomorrow",
    meetingTime: "10:00 AM",
    meetingLink: "https://us06web.zoom.us/j/89237838331"
  },
  CapstoneMotivationEmail: {
    name: "there"
  },
  CapstoneNotStartedEmail: {
    name: "there",
    deadline: "June 7th"
  },
  CapstoneReleaseEmail: {
    name: "there",
    releaseDate: "today"
  },
  CapstoneWeek2StartEmail: {
    name: "there"
  },
  ConsecutiveMissedSessionEmail: {
    name: "there",
    sessionsMissed: 2,
    recordingLinks: ["https://www.youtube.com/watch?v=example1", "https://www.youtube.com/watch?v=example2"],
    nextSessionDate: "next week"
  },
  EscalationEmail: {
    name: "there",
    moduleTitle: "Building AI Chatbots",
    moduleNumber: 2,
    daysInactive: 7
  },
  InactivityNudgeEmail: {
    name: "there",
    moduleTitle: "Introduction to AI",
    moduleLink: "https://www.buildfastwithai.com/module/1",
    daysInactive: 3,
    moduleId: 1
  },
  InactivityNudge2Email: {
    name: "there",
    moduleTitle: "Building AI Chatbots",
    moduleLink: "https://www.buildfastwithai.com/module/2",
    daysInactive: 5,
    moduleId: 2
  },
  LiveSessionAttendeesEmail: {
    name: "there",
    sessionDate: "yesterday",
    sessionTitle: "Introduction to AI Development",
    actionItems: [
      "Complete Module 1 exercises",
      "Join the Discord community",
      "Prepare questions for next week's session"
    ],
    nextSessionDate: "next Wednesday"
  },
  MissedLiveSessionTriggerEmail: {
    name: "there",
    eventTitle: "Introduction to AI Development",
    recordingLink: "https://www.youtube.com/watch?v=example",
    eventDate: "May 15, 2023"
  },
  ModuleReleaseTriggerEmail: {
    name: "there",
    moduleNumber: 2,
    moduleTitle: "Building AI Chatbots",
    releaseDate: "Today"
  },
  OnboardingTriggerEmail: {
    name: "there",
    courseStartDate: "Monday, June 3rd"
  },
  ScatterPatternUsersEmail: {
    name: "there",
    lastActivity: "3 days ago",
    moduleTitle: "Building AI Chatbots"
  },
  SoftExitEmail: {
    name: "there",
    courseTitle: "Gen AI Launch Pad"
  },
  TheorySkippedEmail: {
    name: "there",
    moduleTitle: "AI Systems Design",
    conceptsMissed: ["Prompt Engineering", "Vector Databases", "RAG Architecture"]
  },
  WeekendLearnersEmail: {
    name: "there",
    lastLoginDay: "Saturday"
  }
}

// Get template metadata to determine what props it accepts
const getTemplateMetadata = (templateName: string) => {
  // Map template names to their prop types
  const propsMap: Record<string, Record<string, { type: string, isArray?: boolean }>> = {
    MeetingReminderEmail: {
      name: { type: 'string' },
      meetingTitle: { type: 'string' },
      meetingDate: { type: 'string' },
      meetingTime: { type: 'string' },
      meetingLink: { type: 'string' },
      meetingAgenda: { type: 'string', isArray: true }
    },
    CapstoneCheckpoint3Email: {
      name: { type: 'string' },
      deadline: { type: 'string' }
    },
    CapstoneCheckpoint4Email: {
      name: { type: 'string' },
      deadline: { type: 'string' },
      demoDay: { type: 'string' }
    },
    CapstoneDelayUserEmail: {
      name: { type: 'string' },
      newDeadline: { type: 'string' }
    },
    CapstoneDemoDayPrepEmail: {
      name: { type: 'string' },
      demoDate: { type: 'string' }
    },
    CapstoneMeetingReminderEmail: {
      name: { type: 'string' },
      meetingDate: { type: 'string' },
      meetingTime: { type: 'string' },
      meetingLink: { type: 'string' }
    },
    CapstoneMotivationEmail: {
      name: { type: 'string' }
    },
    CapstoneNotStartedEmail: {
      name: { type: 'string' },
      deadline: { type: 'string' }
    },
    CapstoneReleaseEmail: {
      name: { type: 'string' },
      releaseDate: { type: 'string' }
    },
    CapstoneWeek2StartEmail: {
      name: { type: 'string' }
    },
    ConsecutiveMissedSessionEmail: {
      name: { type: 'string' },
      sessionsMissed: { type: 'number' },
      recordingLinks: { type: 'string', isArray: true },
      nextSessionDate: { type: 'string' }
    },
    EscalationEmail: {
      name: { type: 'string' },
      moduleTitle: { type: 'string' },
      moduleNumber: { type: 'number' },
      daysInactive: { type: 'number' }
    },
    InactivityNudgeEmail: {
      name: { type: 'string' },
      moduleTitle: { type: 'string' },
      moduleLink: { type: 'string' },
      daysInactive: { type: 'number' },
      moduleId: { type: 'number' }
    },
    InactivityNudge2Email: {
      name: { type: 'string' },
      moduleTitle: { type: 'string' },
      moduleLink: { type: 'string' },
      daysInactive: { type: 'number' },
      moduleId: { type: 'number' }
    },
    LiveSessionAttendeesEmail: {
      name: { type: 'string' },
      sessionDate: { type: 'string' },
      sessionTitle: { type: 'string' },
      actionItems: { type: 'string', isArray: true },
      nextSessionDate: { type: 'string' }
    },
    MissedLiveSessionTriggerEmail: {
      name: { type: 'string' },
      eventTitle: { type: 'string' },
      recordingLink: { type: 'string' },
      eventDate: { type: 'string' }
    },
    ModuleReleaseTriggerEmail: {
      name: { type: 'string' },
      moduleNumber: { type: 'number' },
      moduleTitle: { type: 'string' },
      releaseDate: { type: 'string' }
    },
    OnboardingTriggerEmail: {
      name: { type: 'string' },
      courseStartDate: { type: 'string' }
    },
    ScatterPatternUsersEmail: {
      name: { type: 'string' },
      lastActivity: { type: 'string' },
      moduleTitle: { type: 'string' }
    },
    SoftExitEmail: {
      name: { type: 'string' },
      courseTitle: { type: 'string' }
    },
    TheorySkippedEmail: {
      name: { type: 'string' },
      moduleTitle: { type: 'string' },
      conceptsMissed: { type: 'string', isArray: true }
    },
    WeekendLearnersEmail: {
      name: { type: 'string' },
      lastLoginDay: { type: 'string' }
    }
  }
  
  return propsMap[templateName] || {}
}

export default function PreviewPage() {
  // Get all available email templates
  const emailTemplates = Object.keys(EmailTemplates)
  
  const [selectedTemplate, setSelectedTemplate] = useState(emailTemplates[0] || "DailyGenAIQuiz")
  const [templateProps, setTemplateProps] = useState<TemplateProps>(defaultTemplateProps[selectedTemplate] || {})
  const [emailHtml, setEmailHtml] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  // Render email when template or props change
  useEffect(() => {
    const renderEmail = async () => {
      setIsLoading(true)
      try {
        if (!EmailTemplates[selectedTemplate]) return

        // Get template component
        const EmailComponent = EmailTemplates[selectedTemplate]
        
        // Render with props if component accepts them
        let html
        if (defaultTemplateProps[selectedTemplate]) {
          html = await render(EmailComponent(templateProps))
        } else {
          html = await render(EmailComponent())
        }
        
        setEmailHtml(html)
      } catch (error) {
        console.error("Error rendering email:", error)
      } finally {
        setIsLoading(false)
      }
    }

    renderEmail()
  }, [selectedTemplate, templateProps])

  // Handle prop change
  const handlePropChange = (propName: string, value: any) => {
    setTemplateProps(prev => ({
      ...prev,
      [propName]: value
    }))
  }

  // Handle array prop change
  const handleArrayPropChange = (propName: string, index: number, value: any) => {
    setTemplateProps(prev => {
      const array = [...(prev[propName] || [])]
      array[index] = value
      return {
        ...prev,
        [propName]: array
      }
    })
  }

  // Handle number prop change
  const handleNumberPropChange = (propName: string, value: string) => {
    const numValue = value === '' ? 0 : Number(value)
    if (!isNaN(numValue)) {
      setTemplateProps(prev => ({
        ...prev,
        [propName]: numValue
      }))
    }
  }

  // Generate form controls for template props
  const renderPropControls = () => {
    const propsMetadata = getTemplateMetadata(selectedTemplate)
    if (!propsMetadata || Object.keys(propsMetadata).length === 0) {
      return <p className="text-sm text-gray-500">This template has no customizable properties.</p>
    }

    return Object.entries(propsMetadata).map(([propName, propConfig]) => {
      if (propConfig.isArray) {
        return (
          <div key={propName} className="mb-4">
            <label className="block text-sm font-medium mb-1">{propName}:</label>
            {(templateProps[propName] || []).map((item: any, index: number) => (
              <div key={`${propName}-${index}`} className="mb-2 flex">
                <Input
                  value={item}
                  onChange={(e) => handleArrayPropChange(propName, index, e.target.value)}
                  className="w-full"
                />
                <Button 
                  variant="outline" 
                  size="icon"
                  className="ml-2"
                  onClick={() => {
                    const array = [...(templateProps[propName] || [])]
                    array.splice(index, 1)
                    handlePropChange(propName, array)
                  }}
                >
                  X
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const array = [...(templateProps[propName] || []), ""]
                handlePropChange(propName, array)
              }}
              className="mt-1"
            >
              Add Item
            </Button>
          </div>
        )
      } else if (propConfig.type === 'number') {
        return (
          <div key={propName} className="mb-4">
            <label className="block text-sm font-medium mb-1">{propName}:</label>
            <Input
              type="number"
              value={templateProps[propName] || 0}
              onChange={(e) => handleNumberPropChange(propName, e.target.value)}
              className="w-full"
            />
          </div>
        )
      } else {
        return (
          <div key={propName} className="mb-4">
            <label className="block text-sm font-medium mb-1">{propName}:</label>
            <Input
              value={templateProps[propName] || ""}
              onChange={(e) => handlePropChange(propName, e.target.value)}
              className="w-full"
            />
          </div>
        )
      }
    })
  }

  return (
    <div className="flex h-full">
      {/* Sidebar with template list */}
      <div className="w-64 border-r p-4 overflow-auto h-screen">
        <h2 className="text-lg font-bold mb-4">Email Templates</h2>
        <div className="space-y-1">
          {emailTemplates.map((template) => (
            <Button
              key={template}
              variant={selectedTemplate === template ? "default" : "ghost"}
              className="w-full justify-start text-xs"
              onClick={() => {
                setSelectedTemplate(template)
                setTemplateProps(defaultTemplateProps[template] || {})
              }}
            >
              {template.replace(/([A-Z])/g, ' $1').trim()}
            </Button>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-4 overflow-auto h-[100vh]">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">{selectedTemplate.replace(/([A-Z])/g, ' $1').trim()}</h1>
          <p className="text-gray-500">Email preview with customizable properties</p>
        </div>

        {/* Form controls and preview layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form controls for props */}
          <Card className="p-4 lg:col-span-1">
            <h2 className="font-semibold mb-4">Template Properties</h2>
            <div className="space-y-4">
              {renderPropControls()}
            </div>
          </Card>

          {/* Email preview */}
          <Card className="p-4 lg:col-span-2 h-[100vh]">
            <h2 className="font-semibold mb-4">Email Preview</h2>
            {isLoading ? (
              <div className="flex justify-center items-center h-[600px]">
                <p>Loading preview...</p>
              </div>
            ) : (
              <div className="border rounded-lg bg-white">
                <iframe 
                  srcDoc={emailHtml} 
                  className="w-full h-[90vh] border-0" 
                  title="Email Preview" 
                />
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}

