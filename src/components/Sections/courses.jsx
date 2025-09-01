import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/courses.css';
import '../styles/Global.css';
import UipathLogo from '../../assets/UiPath-Logo.png';
import PowerAutomateLogo from '../../assets/power-automate-logo-removebg-preview.png';
import customapps from '../../assets/Cutomatomationlogo.svg';
import AutomationAnywher from '../../assets/Automation-Anywhere.png';
import BluePrism from '../../assets/Blue-Prism.png';
import Clock from '../../assets/clock.svg';
import Star from '../../assets/star.svg';
import FooterSection from './FooterSection.jsx';

const CoursePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [expandedTopics, setExpandedTopics] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    goals: '',
    terms: false
  });

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const level = queryParams.get('level');
    if (level && levels.includes(level)) {
      setActiveFilter(level);
    } else {
      setActiveFilter('All');
    }
  }, [location.search]);

  const courses = [
    {
      id: 1,
      name: 'UiPath Automation',
      levels: {
        Beginner: {
          title: 'UiPath Automation – Beginner',
          imageUrl: UipathLogo,
          description: 'A beginner-friendly course to get started with UiPath. Build real-world bots, automate tasks, and understand core RPA concepts from the ground up — no prior experience needed.',
          detailedDescription: 'This foundational UiPath course is designed to introduce aspiring automation professionals to the world of Robotic Process Automation. You\'ll learn the basics of building automation workflows, using UiPath Studio, variables, activities, control flow, error handling, and more. By the end of the course, you\'ll be able to design and deploy your own bots for daily business tasks.',
          duration: '20+ hours',
          mode: 'Self-paced',
          syllabus: [
            {
              topic: 'Introduction to RPA and UiPath Studio',
              subtopics: [
                'Understanding RPA concepts',
                'UiPath ecosystem overview',
                'Installing UiPath Studio',
                'Basic UI navigation'
              ]
            },
            {
              topic: 'Designing workflows: Sequences, Flowcharts, State Machines',
              subtopics: [
                'When to use each type',
                'Creating your first sequence',
                'Flowchart decision making',
                'State machine basics'
              ]
            },
            {
              topic: 'Email, Excel, PDF & Web Automation',
              subtopics: [
                'Automating email processing',
                'Excel data manipulation',
                'PDF text extraction',
                'Web scraping techniques'
              ]
            },
            {
              topic: 'Orchestrator Basics',
              subtopics: [
                'Understanding Orchestrator',
                'Robot management',
                'Queue management',
                'Monitoring and logging'
              ]
            },
            {
              topic: 'Real-life Use Cases',
              subtopics: [
                'Data entry automation',
                'Report generation',
                'Invoice processing',
                'End-to-end case study'
              ]
            }
          ],
          projects: ['Automate Excel data processing', 'Web data scraping to a spreadsheet', 'Email inbox automation', 'Final capstone: End-to-end business process automation'],
          prerequisites: 'No prior experience needed',
          certification: 'UiPath Certified Associate',
          instructor: 'Marcelo Cruz',
          instructorBio: 'UiPath MVP with 6+ years of RPA development experience.'
        },
        Intermediate: {
          title: 'UiPath Automation – Intermediate',
          description: 'Build on your UiPath fundamentals with advanced workflow logic, arguments, exception handling and deployment practices. Ideal for professionals preparing for UiPath certifications.',
          imageUrl: UipathLogo,
          detailedDescription: 'Take your UiPath automation skills to the next level with this intermediate course focused on building robust, scalable bots. Learn how to manage workflows, use data scraping, automate in Citrix environments, and deploy bots via Orchestrator.',
          duration: '24 hours ',
          mode: 'Blended',
          syllabus: [
            {
              topic: 'UiPath Studio Advanced Activities',
              subtopics: [
                'Advanced UI automation',
                'Working with APIs',
                'Database activities',
                'Custom activities'
              ]
            },
            {
              topic: 'Workflow Layouts: Flowcharts, State Machines',
              subtopics: [
                'Complex flowchart design',
                'State machine transitions',
                'Error handling in workflows',
                'Best practices'
              ]
            },
            {
              topic: 'Data Scraping, Citrix Automation',
              subtopics: [
                'Advanced data scraping',
                'Citrix environment setup',
                'Image-based automation',
                'Text recognition'
              ]
            },
            {
              topic: 'Orchestrator Features: Robots, Queues',
              subtopics: [
                'Advanced queue management',
                'Robot scheduling',
                'Asset management',
                'Process monitoring'
              ]
            },
            {
              topic: 'Debugging and Error Handling',
              subtopics: [
                'Exception handling techniques',
                'Logging strategies',
                'Debugging tools',
                'Recovery scenarios'
              ]
            }
          ],
          projects: ['Extracting data from PDFs to Excel', 'Automating virtual desktop tasks', 'Deploying bots with Orchestrator queues'],
          prerequisites: 'UiPath Beginner course or equivalent knowledge',
          certification: 'UiPath Certified Professional',
          instructor: 'SmartFlows Corporate Trainers',
          instructorBio: 'Corporate trainers from SmartFlows with deep experience in RPA project delivery and certification preparation.'
        },
        Advanced: {
          title: 'UiPath Automation – Advanced',
          description: 'Master enterprise-grade UiPath automation with hands-on projects. Learn how to build reusable components and deploy production-ready bots.',
          imageUrl: UipathLogo,
          detailedDescription: 'This advanced UiPath course helps you move beyond basics to become an expert in building real-world bots. You\'ll use REFramework, APIs, orchestrator queues, and intelligent document processing to automate complex business workflows.',
          duration: 'Project-based (~15 hours)',
          mode: 'Self-paced',
          syllabus: [
            {
              topic: 'Advanced UiPath Activities and REFramework',
              subtopics: [
                'REFramework structure',
                'Transaction processing',
                'State machine implementation',
                'Exception handling'
              ]
            },
            {
              topic: 'API Integration & Database Automation',
              subtopics: [
                'REST API consumption',
                'SOAP services',
                'Database CRUD operations',
                'Data validation'
              ]
            },
            {
              topic: 'Intelligent Document Processing',
              subtopics: [
                'Document Understanding',
                'Machine learning models',
                'Data extraction techniques',
                'Validation workflows'
              ]
            },
            {
              topic: 'Queue Management and Logging',
              subtopics: [
                'Advanced queue operations',
                'Transaction item design',
                'Logging strategies',
                'Performance monitoring'
              ]
            },
            {
              topic: 'Real-world Bot Deployment Techniques',
              subtopics: [
                'Deployment strategies',
                'Version control',
                'CI/CD pipelines',
                'Maintenance best practices'
              ]
            }
          ],
          projects: ['Banking fixed deposit entry bot', 'Invoice processing with OCR', 'Customer creation and validation bot', 'Image-based processing bot (Citrix)'],
          prerequisites: 'UiPath Intermediate course or equivalent knowledge',
          certification: 'UiPath Certified Advanced Developer',
          instructor: 'Minal Gupta',
          instructorBio: 'RPA Solution Architect with 12+ years in automation and process consulting.'
        }
      },
      instructor: 'Sarah Johnson',
      instructorBio: 'RPA expert with 10+ years of experience in automation. Former UiPath solutions architect.',
      rating: 4.8,
      students: 1250,
      reviews: [
        { name: 'Alex M.', rating: 5, comment: 'Changed my career completely!' },
        { name: 'Priya K.', rating: 4, comment: 'Excellent content and instructor support' }
      ]
    },
    {
      id: 2,
      name: 'Power Apps',
      levels: {
        Beginner: {
          title: 'Power Automate – Beginner',
          imageUrl: PowerAutomateLogo,
          description: 'Start your journey with Microsoft Power Automate. Learn to build basic flows and automate everyday tasks using cloud and desktop flows.',
          detailedDescription: 'This beginner-friendly course introduces you to the world of Power Automate. Learn how to build automated workflows that integrate with Microsoft 365, use pre-built templates, and create triggers for tasks like sending emails or extracting data from forms.',
          duration: '15+ hours',
          mode: 'Self-paced or Instructor-led',
          syllabus: [
            {
              topic: 'Flow types: Instant, Automated, Scheduled',
              subtopics: [
                'Understanding flow types',
                'When to use each type',
                'Creating instant flows',
                'Scheduled flow configuration'
              ]
            },
            {
              topic: 'Using connectors (SharePoint, Excel, Outlook)',
              subtopics: [
                'Connector overview',
                'SharePoint integration',
                'Excel automation',
                'Outlook email flows'
              ]
            },
            {
              topic: 'Creating simple approval workflows',
              subtopics: [
                'Approval process design',
                'Approval types',
                'Conditional approvals',
                'Approval tracking'
              ]
            },
            {
              topic: 'Using Power Automate Desktop',
              subtopics: [
                'Desktop flow basics',
                'UI automation',
                'Desktop to cloud integration',
                'Recording actions'
              ]
            },
            {
              topic: 'Microsoft Forms and Teams automation',
              subtopics: [
                'Forms response processing',
                'Teams notification flows',
                'Chatbot integration',
                'Meeting automation'
              ]
            }
          ],
          projects: ['Automate employee onboarding checklist', 'Send automated reminders via Outlook', 'Collect and store Microsoft Forms responses'],
          prerequisites: 'Basic computer skills',
          certification: 'Microsoft Power Platform Fundamentals',
          instructor: 'SmartFlows Certified Instructors',
          instructorBio: 'SmartFlows certified instructors with industry experience in Power Platform solutions.'
        },
        Intermediate: {
          title: 'Power Automate – Intermediate',
          imageUrl: PowerAutomateLogo,
          description: 'Enhance your skills to build smarter flows, automate business processes, and integrate with external systems using APIs.',
          detailedDescription: 'This course expands your Power Automate skills by covering business process flows, expressions, approval automation, and integration with AI Builder and custom connectors. Includes best practices for secure flow management and error handling.',
          duration: '22+ hours',
          mode: 'Self-paced',
          syllabus: [
            {
              topic: 'Advanced expressions and conditions',
              subtopics: [
                'Expression syntax',
                'Complex conditions',
                'Data operations',
                'Formula reference'
              ]
            },
            {
              topic: 'Integrating with SharePoint, Dataverse',
              subtopics: [
                'SharePoint list operations',
                'Dataverse tables',
                'Relationship management',
                'Business rules'
              ]
            },
            {
              topic: 'Approval flows and business process flows',
              subtopics: [
                'Multi-stage approvals',
                'Parallel approvals',
                'BPF design',
                'Stage transitions'
              ]
            },
            {
              topic: 'Flow error handling and optimization',
              subtopics: [
                'Error handling patterns',
                'Retry policies',
                'Flow checker',
                'Performance optimization'
              ]
            },
            {
              topic: 'Power Automate Desktop deep dive',
              subtopics: [
                'Advanced UI automation',
                'Web automation',
                'Desktop flow variables',
                'Exception handling'
              ]
            }
          ],
          projects: ['Expense approval automation', 'Multi-stage document review process', 'AI-based sentiment analysis using AI Builder'],
          prerequisites: 'Power Automate Beginner course or equivalent knowledge',
          certification: 'Microsoft Power Platform App Maker',
          instructor: 'Henry Habib',
          instructorBio: 'Veteran Power Platform instructor with 90,000+ students.'
        },
        Advanced: {
          title: 'Power Apps – Advanced',
          imageUrl: PowerAutomateLogo,
          description: 'Implement enterprise solutions with advanced Power Platform features.',
          detailedDescription: 'Master advanced techniques including component libraries, portals, and AI Builder integration.',
          duration: '7 weeks',
          mode: 'Self-paced',
          syllabus: [
            {
              topic: 'Component Libraries',
              subtopics: [
                'Creating components',
                'Reusable controls',
                'Component properties',
                'Library management'
              ]
            },
            {
              topic: 'Portals',
              subtopics: [
                'Portal architecture',
                'Authentication setup',
                'Content management',
                'Custom forms'
              ]
            },
            {
              topic: 'AI Builder',
              subtopics: [
                'AI model types',
                'Form processing',
                'Object detection',
                'Custom models'
              ]
            },
            {
              topic: 'Solution Architecture',
              subtopics: [
                'Solution design',
                'Environment strategy',
                'ALM processes',
                'Governance'
              ]
            }
          ],
          projects: ['Customer Portal', 'AI-Powered Inspection App'],
          prerequisites: 'Power Apps Intermediate course or equivalent knowledge',
          certification: 'Microsoft Power Platform Developer',
          instructor: 'Michael Chen',
          instructorBio: 'Microsoft MVP with 8 years of experience in Power Platform solutions.'
        }
      },
      instructor: 'Michael Chen',
      instructorBio: 'Microsoft MVP with 8 years of experience in Power Platform solutions.',
      rating: 4.6,
      students: 980,
      reviews: [
        { name: 'David L.', rating: 5, comment: 'Michael explains complex concepts very clearly' },
        { name: 'Sophia G.', rating: 4, comment: 'Great real-world examples' }
      ]
    },
    {
      id: 3,
      name: 'Automation Anywhere',
      levels: {
        Beginner: {
          title: 'Automation Anywhere – Beginner',
          imageUrl: AutomationAnywher,
          description: 'Start building bots using Automation Anywhere. Learn platform essentials, bot creation, and document automation.',
          detailedDescription: 'This beginner course teaches you how to build bots with Automation Anywhere\'s Task Bots and MetaBots. Explore the Control Room, document automation, and prepare for official AA certification.',
          duration: '24h',
          mode: 'Blended',
          syllabus: [
            {
              topic: 'RPA and AA architecture',
              subtopics: [
                'Understanding RPA concepts',
                'AA architecture overview',
                'Control Room setup',
                'Bot deployment models'
              ]
            },
            {
              topic: 'Task Bots and MetaBots',
              subtopics: [
                'Creating basic Task Bots',
                'MetaBot fundamentals',
                'Reusable components',
                'Best practices'
              ]
            },
            {
              topic: 'Recorders and editors',
              subtopics: [
                'Smart recorder usage',
                'Object cloning',
                'Web recorder',
                'Manual editing'
              ]
            },
            {
              topic: 'IQ Bot (document understanding)',
              subtopics: [
                'IQ Bot setup',
                'Document classification',
                'Field extraction',
                'Validation rules'
              ]
            },
            {
              topic: 'Control Room and user roles',
              subtopics: [
                'User management',
                'Bot scheduling',
                'Audit logs',
                'Security settings'
              ]
            }
          ],
          projects: ['Form data entry bot', 'Excel file manipulation', 'PDF data extraction with IQ Bot'],
          prerequisites: 'Basic computer skills',
          certification: 'Automation Anywhere Certified Basic RPA Professional',
          instructor: 'Intellipaat Industry Experts',
          instructorBio: 'Industry experts from Intellipaat with Automation Anywhere certification.'
        },
        Intermediate: {
          title: 'Automation Anywhere – Intermediate',
          imageUrl: AutomationAnywher,
          description: 'Create metabots and handle complex automation scenarios.',
          detailedDescription: 'Develop reusable components and handle more complex automation scenarios with error handling.',
          duration: '6 weeks',
          mode: 'Self-paced',
          syllabus: [
            {
              topic: 'MetaBot Creation',
              subtopics: [
                'Advanced MetaBot design',
                'Surface automation',
                'Object cloning techniques',
                'Best practices'
              ]
            },
            {
              topic: 'Error Handling',
              subtopics: [
                'Exception handling',
                'Recovery scenarios',
                'Logging mechanisms',
                'Notification systems'
              ]
            },
            {
              topic: 'Advanced Commands',
              subtopics: [
                'String operations',
                'Excel advanced commands',
                'Database operations',
                'XML/JSON processing'
              ]
            },
            {
              topic: 'Object Cloning',
              subtopics: [
                'Dynamic object handling',
                'Application mapping',
                'Object identification',
                'Troubleshooting'
              ]
            }
          ],
          projects: ['ERP Integration', 'Multi-System Workflow'],
          prerequisites: 'Automation Anywhere Beginner course or equivalent knowledge',
          certification: 'Automation Anywhere Certified Advanced RPA Professional',
          instructor: 'David Wilson',
          instructorBio: 'RPA architect with expertise in Automation Anywhere and cognitive automation.'
        },
        Advanced: {
          title: 'Automation Anywhere – Advanced',
          imageUrl: AutomationAnywher,
          description: 'Master intelligent automation with Automation Anywhere. Includes OpenAI/GPT integration and real-world bots.',
          detailedDescription: 'This hands-on course covers advanced bot building with Automation Anywhere, error handling, deployment, and integrations with AI. Build 7 real-world bots and even integrate with OpenAI GPT to create intelligent digital workers.',
          duration: '20+ hours',
          mode: 'Self-paced',
          syllabus: [
            {
              topic: 'Advanced Bot Creator concepts',
              subtopics: [
                'Bot lifecycle management',
                'Version control',
                'Code reuse strategies',
                'Performance optimization'
              ]
            },
            {
              topic: 'Error handling and testing',
              subtopics: [
                'Comprehensive error handling',
                'Unit testing bots',
                'Integration testing',
                'Regression testing'
              ]
            },
            {
              topic: 'IQ Bot and Document AI',
              subtopics: [
                'Advanced document processing',
                'Custom classifiers',
                'Machine learning models',
                'Validation workflows'
              ]
            },
            {
              topic: 'AA + OpenAI integration',
              subtopics: [
                'GPT API integration',
                'Natural language processing',
                'Chatbot implementation',
                'Content generation'
              ]
            },
            {
              topic: 'Project deployment best practices',
              subtopics: [
                'Production deployment',
                'Change management',
                'Performance monitoring',
                'Maintenance strategies'
              ]
            }
          ],
          projects: ['Resume generator bot', 'Form autofill bot', 'AI-based chatbot for FAQs', 'Invoice processing with OpenAI'],
          prerequisites: 'Automation Anywhere Beginner course or equivalent knowledge',
          certification: 'Automation Anywhere Certified Master RPA Professional',
          instructor: 'Deepak Rai',
          instructorBio: 'RPA & AI automation expert.'
        }
      },
      instructor: 'David Wilson',
      instructorBio: 'RPA architect with expertise in Automation Anywhere and cognitive automation.',
      rating: 4.7,
      students: 870,
      reviews: [
        { name: 'Emma R.', rating: 5, comment: 'The projects were very practical' },
        { name: 'James P.', rating: 4, comment: 'Good pace and coverage of topics' }
      ]
    },
    {
      id: 4,
      name: 'Blue Prism',
      levels: {
        Beginner: {
          title: 'Blue Prism – Beginner',
          imageUrl: BluePrism,
          description: 'Learn the basics of Blue Prism, a leading enterprise RPA platform. Build your first process using its flow-charting interface.',
          detailedDescription: 'This foundational course is ideal for those new to Blue Prism. Learn how to create, manage and deploy automated processes using Blue Prism Studio, Control Room, and Object Studio. The course covers Blue Prism architecture, development stages, and exception handling.',
          duration: '20+ hours',
          mode: 'Self-paced',
          syllabus: [
            {
              topic: 'Introduction to Blue Prism',
              subtopics: [
                'RPA fundamentals',
                'Blue Prism architecture',
                'Installation and setup',
                'Navigation basics'
              ]
            },
            {
              topic: 'Process Studio and Object Studio',
              subtopics: [
                'Process flow design',
                'Object creation',
                'Application modeling',
                'Best practices'
              ]
            },
            {
              topic: 'Control Room and Session Management',
              subtopics: [
                'Control Room overview',
                'Session management',
                'Resource scheduling',
                'Monitoring tools'
              ]
            },
            {
              topic: 'Basic Stages: Inputs, Decisions, Calculations',
              subtopics: [
                'Data items',
                'Decision stages',
                'Calculation stages',
                'Looping structures'
              ]
            },
            {
              topic: 'Exception handling',
              subtopics: [
                'Exception types',
                'Recovery stages',
                'Exception logging',
                'Best practices'
              ]
            }
          ],
          projects: ['Automating login and data entry to a web form', 'Generating summary reports from Excel', 'Basic customer record automation'],
          prerequisites: 'Basic understanding of business processes',
          certification: 'Blue Prism Certified Associate Developer',
          instructor: 'Arun Nair',
          instructorBio: 'Intelligent Automation Architect with 15+ years of experience.'
        },
        Intermediate: {
          title: 'Blue Prism – Intermediate',
          imageUrl: BluePrism,
          description: 'Build complex automations with exception handling.',
          detailedDescription: 'Develop robust automations with exception handling, collections, and queue management.',
          duration: '7 weeks',
          mode: 'Self-paced',
          syllabus: [
            {
              topic: 'Exception Handling',
              subtopics: [
                'Advanced exception types',
                'Exception workflows',
                'Retry mechanisms',
                'Notification systems'
              ]
            },
            {
              topic: 'Collections',
              subtopics: [
                'Collection operations',
                'Data manipulation',
                'Sorting and filtering',
                'Performance considerations'
              ]
            },
            {
              topic: 'Work Queues',
              subtopics: [
                'Queue configuration',
                'Item processing',
                'Priority management',
                'Queue reporting'
              ]
            },
            {
              topic: 'Surface Automation',
              subtopics: [
                'Surface automation techniques',
                'Region mode',
                'Application modeling',
                'Best practices'
              ]
            }
          ],
          projects: ['Complex Data Processing', 'Multi-Step Workflow'],
          prerequisites: 'Blue Prism Beginner course or equivalent knowledge',
          certification: 'Blue Prism Certified Professional Developer',
          instructor: 'Emma Rodriguez',
          instructorBio: 'Blue Prism expert with experience in large-scale enterprise automation.'
        },
        Advanced: {
          title: 'Blue Prism – Advanced',
          imageUrl: BluePrism,
          description: 'Advance your Blue Prism expertise with real-world automation use cases and certification-aligned content.',
          detailedDescription: 'Designed for certified developers or experienced Blue Prism users, this course dives into advanced development strategies, exception handling, and enterprise features like work queues, scheduling, and multi-bot deployment.',
          duration: '25+ hours',
          mode: 'Self-paced',
          syllabus: [
            {
              topic: 'Advanced object and process design',
              subtopics: [
                'Modular design',
                'Reusable components',
                'Process optimization',
                'Code review techniques'
              ]
            },
            {
              topic: 'Work Queues and Scheduler',
              subtopics: [
                'Advanced queue management',
                'Dynamic prioritization',
                'Scheduler configuration',
                'Resource allocation'
              ]
            },
            {
              topic: 'Release Manager and Deployment',
              subtopics: [
                'Release pipelines',
                'Version control',
                'Deployment strategies',
                'Environment management'
              ]
            },
            {
              topic: 'Multi-environment configuration',
              subtopics: [
                'Dev/Test/Prod setup',
                'Environment variables',
                'Configuration management',
                'Migration strategies'
              ]
            },
            {
              topic: 'Certification (AD01, ASDEV01) prep',
              subtopics: [
                'Exam structure',
                'Key concepts review',
                'Practice tests',
                'Exam strategies'
              ]
            }
          ],
          projects: ['Invoice automation using PDF inputs', 'Lead qualification via email parsing', 'Blue Prism Release Manager automation'],
          prerequisites: 'Blue Prism Beginner course or equivalent knowledge',
          certification: 'Blue Prism Certified Solution Designer',
          instructor: 'Manish Pandey',
          instructorBio: 'RPA Trainer and certified Blue Prism professional.'
        }
      },
      instructor: 'Emma Rodriguez',
      instructorBio: 'Blue Prism expert with experience in large-scale enterprise automation.',
      rating: 4.9,
      students: 1100,
      reviews: [
        { name: 'Oliver T.', rating: 5, comment: 'Emma is an amazing instructor' },
        { name: 'Ava S.', rating: 5, comment: 'Best RPA course Ive taken' }
      ]
    },
    {
      id: 5,
      name: 'Custom Automation Apps',
      levels: {
        Beginner: {
          title: 'Power Apps – Beginner',
          imageUrl: customapps,
          description: 'Build your first custom business app without writing code. Learn to create Canvas and Model-driven apps from scratch.',
          detailedDescription: 'Learn how to use Microsoft Power Apps to rapidly build mobile-friendly, data-driven applications. This beginner course covers Canvas apps, screen design, formulas, and integrations with Excel and SharePoint.',
          duration: '20+ hours',
          mode: 'Self-paced or live',
          syllabus: [
            {
              topic: 'Power Apps UI and Canvas apps',
              subtopics: [
                'Canvas app basics',
                'Screen design',
                'Control types',
                'Layout best practices'
              ]
            },
            {
              topic: 'Controls, forms, and formulas',
              subtopics: [
                'Common controls',
                'Form design',
                'Basic formulas',
                'Data validation'
              ]
            },
            {
              topic: 'Connectors (Excel, SharePoint, SQL)',
              subtopics: [
                'Connector overview',
                'Excel integration',
                'SharePoint lists',
                'SQL connections'
              ]
            },
            {
              topic: 'Dataverse overview',
              subtopics: [
                'Dataverse basics',
                'Table creation',
                'Relationships',
                'Business rules'
              ]
            },
            {
              topic: 'Power Automate integrations',
              subtopics: [
                'Flow integration',
                'Triggering flows',
                'Passing data',
                'Error handling'
              ]
            }
          ],
          projects: ['Timesheet entry app', 'Feedback tracker with SharePoint', 'Mobile inventory app'],
          prerequisites: 'Basic computer skills',
          certification: 'Microsoft Power Platform Fundamentals',
          instructor: 'SmartFlows Trainers',
          instructorBio: 'SmartFlows trainers with Microsoft PL-400 credentials.'
        },
        Intermediate: {
          title: 'Custom Automation – Intermediate',
          imageUrl: customapps,
          description: 'Develop integrated solutions with multiple technologies.',
          detailedDescription: 'Build more complex solutions by integrating RPA tools with APIs and databases.',
          duration: '8 weeks',
          mode: 'Self-paced',
          syllabus: [
            {
              topic: 'Advanced API Integration',
              subtopics: [
                'REST API concepts',
                'Authentication methods',
                'Request/response handling',
                'Error handling'
              ]
            },
            {
              topic: 'Database Connectivity',
              subtopics: [
                'SQL queries',
                'Stored procedures',
                'ORM basics',
                'Performance optimization'
              ]
            },
            {
              topic: 'Custom Components',
              subtopics: [
                'Component design',
                'Reusable libraries',
                'Version control',
                'Documentation'
              ]
            },
            {
              topic: 'Error Handling',
              subtopics: [
                'Exception patterns',
                'Logging strategies',
                'Recovery mechanisms',
                'User notifications'
              ]
            }
          ],
          projects: ['Order Processing System', 'Data Validation Tool'],
          prerequisites: 'Custom Automation Beginner course or equivalent knowledge',
          certification: 'Custom Automation Professional Certificate',
          instructor: 'James Peterson',
          instructorBio: 'Automation architect specializing in custom enterprise solutions.'
        },
        Advanced: {
          title: 'Power Apps – Advanced',
          imageUrl: customapps,
          description: 'Create advanced business applications using Power Apps and Dataverse. Perfect for developers and tech-savvy users.',
          detailedDescription: 'Learn to build advanced Canvas and Model-driven apps, use custom connectors, and manage app lifecycle with Datverse. Covers real-world integrations and enterprise app deployment techniques.',
          duration: '7+ hours',
          mode: 'Self-paced',
          syllabus: [
            {
              topic: 'Model-driven apps and Dataverse',
              subtopics: [
                'App design principles',
                'Entity relationships',
                'Business process flows',
                'Advanced forms'
              ]
            },
            {
              topic: 'Responsive app layouts',
              subtopics: [
                'Responsive design',
                'Device-specific layouts',
                'Screen size detection',
                'Adaptive components'
              ]
            },
            {
              topic: 'Custom connectors and APIs',
              subtopics: [
                'Connector development',
                'API authentication',
                'Swagger integration',
                'Testing and deployment'
              ]
            },
            {
              topic: 'Advanced logic and formulas',
              subtopics: [
                'Complex expressions',
                'Performance optimization',
                'Debugging techniques',
                'Best practices'
              ]
            },
            {
              topic: 'Real-world enterprise app examples',
              subtopics: [
                'Case studies',
                'Architecture patterns',
                'Scalability considerations',
                'Maintenance strategies'
              ]
            }
          ],
          projects: ['Customer onboarding app', 'Project tracking dashboard', 'HR portal with form submissions'],
          prerequisites: 'Power Apps Beginner course or equivalent knowledge',
          certification: 'Microsoft Power Platform Developer',
          instructor: 'Henry Habib',
          instructorBio: 'Top-rated Microsoft Power Platform instructor.'
        }
      },
      instructor: 'James Peterson',
      instructorBio: 'Automation architect specializing in custom enterprise solutions.',
      rating: 4.5,
      students: 750,
      reviews: [    
        { name: 'Noah W.', rating: 4, comment: 'Lots of practical knowledge' },
        { name: 'Isabella M.', rating: 5, comment: 'Perfect for my needs' }
      ]
    }
  ];

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses
    .filter(course => {
      const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        Object.keys(course.levels).some(level => level.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesLevel = activeFilter === 'All' || course.levels[activeFilter] !== undefined;
      return matchesSearch && matchesLevel;
    })
    .flatMap(course =>
      Object.entries(course.levels).map(([level, levelData]) => {
        if (activeFilter === 'All' || level === activeFilter) {
          return {
            ...course,
            level: level,
            levelData: levelData,
            imageUrl: levelData.imageUrl,
            accentColor: `hsl(${Math.floor(Math.random() * 60) + 200}, 70%, 50%)`
          };
        }
        return null;
      }).filter(item => item !== null)
    );

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setExpandedTopics({});
    setShowCourseModal(true);
  };

  const toggleTopic = (topicIndex) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicIndex]: !prev[topicIndex]
    }));
  };

  const handleEnrollClick = () => {
    setShowCourseModal(false);
    setShowEnrollmentModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEnrollmentSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.terms) {
      alert('You must agree to the terms and conditions');
      return;
    }

    setIsSubmitting(true);

    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbx50H2dXLIsxnU9td91Zwz28XylXhayoehYqBv5-WaxB6lGyHgYwPg-XA0_iTTz44I/exec';

      const formDataEncoded = new URLSearchParams();
      formDataEncoded.append('firstName', formData.firstName);
      formDataEncoded.append('lastName', formData.lastName);
      formDataEncoded.append('email', formData.email);
      formDataEncoded.append('phone', formData.phone);
      formDataEncoded.append('experience', formData.experience);
      formDataEncoded.append('goals', formData.goals);
      formDataEncoded.append('courseName', selectedCourse.name);
      formDataEncoded.append('courseLevel', selectedCourse.level);
      formDataEncoded.append('status', 'new');

      let response;
      try {
        response = await fetch(scriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formDataEncoded,
          mode: 'no-cors'
        });
      } catch (error) {
        console.log('Direct request failed, trying with proxy...');
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        response = await fetch(proxyUrl + scriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Requested-With': 'XMLHttpRequest'
          },
          body: formDataEncoded
        });
      }

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        experience: '',
        goals: '',
        terms: false
      });
      
      setShowEnrollmentModal(false);
      alert(`Enrollment submitted successfully for ${selectedCourse.name}!\nWe'll contact you shortly at ${formData.email}`);

    } catch (error) {
      console.error("Error submitting form: ", error);
      alert('Failed to submit form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="course-page">
      <div className="course-hero">
        <div className="hero-content-course">
          <h1 className='Allh1 headings'>Transform Your Career with Automation</h1>
          <p className='AllP headingpara '   >Master the tools that are shaping the future of business processes</p>
        </div>
      </div>

      <div className="course-container">
        <div className="course-header">
          <h2 className='Allh1 subheadings '>Our Automation Courses</h2>
          <p className="subtitle subheadingpara ">Browse our comprehensive curriculum designed for all skill levels</p>

          <div className="controls-container">
            <div className="search-filter-container">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-button">
                  <i className="fas fa-search">Search</i>
                </button>
              </div>

              <div className="level-filters">
                {levels.map(level => (
                  <button
                    key={level}
                    className={`level-filter ${activeFilter === level ? 'active' : ''}`}
                    onClick={() => setActiveFilter(level)}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="course-grid">
          {filteredCourses.length === 0 ? (
            <div className="no-results-message">
              <div className="no-results-content">
                <i className="fas fa-search"></i>
                <h3 className='Allh1 headings'>No courses found</h3>
                <p className='AllP smallpara'>We couldn't find any courses matching "{searchTerm}" at the {activeFilter} level.</p>
                <p className='AllP smallpara'>Try adjusting your search or filter criteria.</p>
                <button
                  className="reset-search-button"
                  onClick={() => {
                    setSearchTerm('');
                    setActiveFilter('All');
                  }}
                >
                  Reset Search
                </button>
              </div>
            </div>
          ) : (
            filteredCourses.map((course, index) => (
              <div
                className="course-card"
                key={`${course.id}-${course.level}`}
                onClick={() => handleCourseClick(course)}
              >
                <div className="course-image">
                  <img src={course.levelData.imageUrl} alt={course.name} />
                  <div className="course-badge">{course.level}</div>
                </div>
                <div className="course-content">
                  <div className="course-info">
                    <h3>{course.name}</h3>
                    <div className="course-meta">
                      <span className="meta-item">
                        <img src={Clock} className="meta-icon" alt="Duration" />
                        <span className="meta-text">{course.levelData.duration}</span>
                      </span>
                      <span className="meta-item">
                        <img src={Star} className="meta-icon" alt="Rating" />
                        <span className="meta-text">{course.rating}</span>
                      </span>
                    </div>
                    <p className="course-description">{course.levelData.description}</p>
                  </div>
                  <button
                    className="enroll-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCourseClick(course);
                    }}
                  >
                    View Details <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showCourseModal && selectedCourse && (
        <div className="course-details-modal">
          <div className="modal-overlay" onClick={() => setShowCourseModal(false)}></div>
          <div className="modal-content">
            <button
              className="close-modal"
              onClick={() => setShowCourseModal(false)}
            >
              <i className="fas fa-times">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </i>
            </button>

            <div className="modal-header">
              <h3>{selectedCourse.name} - {selectedCourse.level}</h3>
              <div className="course-rating">
                <span className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${i < Math.floor(selectedCourse.rating) ? 'filled' : ''} ${i === Math.floor(selectedCourse.rating) && selectedCourse.rating % 1 >= 0.5 ? 'half-filled' : ''}`}
                    ></i>
                  ))}
                </span>
                <span>({selectedCourse.rating}/5 from {selectedCourse.students} students)</span>
              </div>
            </div>

            <div className="modal-body">
              <div className="course-overview">
                <div className="course-image-container">
                  <div className="course-image-large">
                    <img
                      src={selectedCourse.levelData.imageUrl}
                      alt={selectedCourse.name}
                      className="course-main-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/600x400?text=Course+Image';
                      }}
                    />
                    <div className="image-overlay"></div>
                  </div>
                </div>
                <div className="course-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-clock"></i>
                    <span><strong>Duration:</strong> {selectedCourse.levelData.duration}</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-user-tie"></i>
                    <span><strong>Instructor:</strong> {selectedCourse.instructor}</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-certificate"></i>
                    <span><strong>Certification:</strong> {selectedCourse.levelData.certification}</span>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-book"></i>
                    <span><strong>Prerequisites:</strong> {selectedCourse.levelData.prerequisites}</span>
                  </div>
                </div>
              </div>

              <div className="course-details-section">
                <h4>Course Description</h4>
                <p>{selectedCourse.levelData.detailedDescription}</p>
              </div>

              <div className="course-details-section">
                <h4>Syllabus</h4>
                <div className="syllabus-accordion">
                  {selectedCourse.levelData.syllabus.map((item, index) => (
                    <div key={index} className="syllabus-topic">
                      <div
                        className="topic-header"
                        onClick={() => toggleTopic(index)}
                        aria-expanded={expandedTopics[index]}
                      >
                        <div className="topic-title">
                          <span className="topic-chevron">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span>{item.topic || item}</span>
                        </div>
                        <div className="topic-toggle">
                          {expandedTopics[index] ? 'Hide details' : 'Show details'}
                        </div>
                      </div>
                      <div
                        className="topic-content-wrapper"
                        style={{
                          maxHeight: expandedTopics[index] ? '1000px' : '0',
                          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      >
                        {item.subtopics && (
                          <div className="topic-content">
                            <ul className="subtopics-list">
                              {item.subtopics.map((subtopic, subIndex) => (
                                <li key={subIndex}>
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="8" fill="currentColor" />
                                  </svg>
                                  <span>{subtopic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="course-details-section">
                <h4>Projects</h4>
                <div className="projects-grid">
                  {selectedCourse.levelData.projects.map((project, index) => (
                    <div key={index} className="project-card">
                      <div className="project-icon">
                        <i className="fas fa-project-diagram"></i>
                      </div>
                      <div className="project-content">
                        <span>{project}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="course-details-section">
                <h4>About the Instructor</h4>
                <div className="instructor-info">
                  <div className="instructor-bio">
                    <p>{selectedCourse.instructorBio}</p>
                  </div>
                </div>
              </div>

              <div className="course-details-section">
                <h4>Student Reviews</h4>
                <div className="reviews-container">
                  {selectedCourse.reviews.map((review, index) => (
                    <div key={index} className="review-card">
                      <div className="review-header">
                        <div className="reviewer">{review.name}</div>
                        <div className="review-stars">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`fas fa-star ${i < review.rating ? 'filled' : ''}`}
                            ></i>
                          ))}
                        </div>
                      </div>
                      <div className="review-comment">{review.comment}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="enroll-now-button"
                onClick={handleEnrollClick}
              >
                Enroll Now <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {showEnrollmentModal && selectedCourse && (
        <div className="enrollment-modal">
          <div className="modal-overlay" onClick={() => !isSubmitting && setShowEnrollmentModal(false)}></div>
          <div className="modal-content">
            <button
              className="close-modal"
              onClick={() => !isSubmitting && setShowEnrollmentModal(false)}
              disabled={isSubmitting}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="enrollment-header">
              <h3>Enroll in <span className="course-name">{selectedCourse.name}</span></h3>
              <p className="course-level">{selectedCourse.level} Level</p>
            </div>

            <div className="modal-body">
              <div className="course-info-banner">
                <div className="banner-content">
                  <div className="banner-left">
                    <img
                      src={selectedCourse.levelData.imageUrl}
                      alt={selectedCourse.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x225?text=Course+Image';
                      }}
                    />
                    <div className="banner-details">
                      <h4>{selectedCourse.name} - {selectedCourse.level}</h4>
                      <p><i className="fas fa-clock"></i> {selectedCourse.levelData.duration}</p>
                      <p><i className="fas fa-chalkboard-teacher"></i> {selectedCourse.instructor}</p>
                      <p><i className="fas fa-certificate"></i> {selectedCourse.levelData.certification}</p>
                    </div>
                  </div>
                  <div className="banner-right">
                    <div className="price-tag">
                      <span className="original-price"> Rs. 299</span>
                      <span className="discounted-price">Rs. 249</span>
                      <span className="discount-badge">Save Rs. 50</span>
                    </div>
                  </div>
                </div>
              </div>

              <form className="enrollment-form" onSubmit={handleEnrollmentSubmit}>
                <h4 className="form-title">Your Information</h4>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">
                      <i className="fas fa-user"></i> First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">
                      <i className="fas fa-user"></i> Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="fas fa-envelope"></i> Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      <i className="fas fa-phone"></i> Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="experience">
                    <i className="fas fa-chart-line"></i> Current Experience Level
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Select your experience</option>
                    <option value="beginner">Beginner (0-1 years)</option>
                    <option value="intermediate">Intermediate (1-3 years)</option>
                    <option value="advanced">Advanced (3+ years)</option>
                  </select>
                </div>

                <div className="form-group">
                  <textarea
                    id="goals"
                    name="goals"
                    placeholder="What do you hope to achieve with this course?"
                    rows="3"
                    value={formData.goals}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                  <label className='enroll-form-checkbox' htmlFor="terms">
                    I agree to the <a href="#">terms and conditions</a> and <a href="#">privacy policy</a>
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="submit-enrollment"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Submitting... <i className="fas fa-spinner fa-spin"></i></span>
                  ) : (
                    <span>Complete Enrollment <i className="fas fa-check"></i></span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <FooterSection />
    </div>
  );
};

export default CoursePage;