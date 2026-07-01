// Career Planner — Archetype & Course Data
// Design: "The Signal" — dark navy, data-forward, precision-engineered

export type CourseCategory = "mandatory" | "technical" | "elective" | "short";
export type Semester = "fall" | "spring";

export interface Course {
  id: string;
  code: string;
  title: string;
  school: "SEAS" | "HBS";
  credits: number;
  category: CourseCategory;
  semester: Semester;
  time?: string;
  days?: string;
  isDropCandidate: boolean;
  dropReason?: string;
  rationale: string;
}

export interface Archetype {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  personality: [string, string, string];
  targetCompanies: string[];
  color: string; // tailwind color class for accent
  icon: string; // emoji or symbol
  focus: string;
  fallCredits: number;
  springCredits: number;
  courses: Course[];
  fallDropTarget: number;
  springDropTarget: number;
  fallDropNote: string;
  springDropNote: string;
}

export const CREDIT_MAX = 16.5;
export const CREDIT_MIN = 15.0;

const archetypes: Archetype[] = [
  {
    id: "ai-eng-manager",
    title: "AI/AV Engineering Manager",
    subtitle: "Anthropic · Waymo · Scale AI",
    tagline: "Build the systems that make machines see and decide.",
    personality: ["Technical", "Rigorous", "Visionary"],
    targetCompanies: ["Anthropic", "Waymo", "Scale AI", "OpenAI", "Cohere"],
    color: "cyan",
    icon: "⚡",
    focus: "Deep technical infrastructure, perception systems, and AI venture management.",
    fallCredits: 25.5,
    springCredits: 25.0,
    fallDropTarget: 9.0,
    springDropTarget: 8.5,
    fallDropNote: "Drop Strategy: Drop Strategy and Technology (−3.0) and Launching Tech Ventures (−3.0) if SEAS courses are too heavy. Drop all three short courses (−3.0) if you prefer deep semester-long focus.",
    springDropNote: "Drop Strategy: Drop Reinforcement Learning (−4.0) if the math is too theoretical. Drop Strategy for Entrepreneurs (−3.0) and Energy (−1.5).",
    courses: [
      {
        id: "ai1", code: "ENG-SCI 280", title: "Designing Tech Ventures", school: "SEAS", credits: 4.0,
        category: "mandatory", semester: "fall", time: "3:50pm–5:10pm", days: "Mon/Wed",
        isDropCandidate: false, rationale: "Mandatory MS/MBA core. Non-negotiable."
      },
      {
        id: "ai2", code: "COMPSCI 2831", title: "Advanced Computer Vision", school: "SEAS", credits: 4.0,
        category: "technical", semester: "fall", time: "12:45pm–2:00pm", days: "Tue/Thu",
        isDropCandidate: false, rationale: "Core technical pillar. Directly relevant to AV perception systems at Waymo."
      },
      {
        id: "ai3", code: "COMPSCI 2242", title: "Probabilistic Analysis and Algorithms", school: "SEAS", credits: 4.0,
        category: "technical", semester: "fall", time: "9:45am–11:00am", days: "Tue/Thu",
        isDropCandidate: false, rationale: "Essential algorithmic foundation for AI/ML infrastructure roles."
      },
      {
        id: "ai4", code: "HBSMBA 1613", title: "Building an AI Venture", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "3:10pm–5:10pm", days: "Tue",
        isDropCandidate: false, rationale: "Bridges technical AI skills with product strategy. Highly relevant."
      },
      {
        id: "ai5", code: "HBSMBA 1286", title: "Strategy and Technology", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "11:50am–1:10pm", days: "Mon/Tue/Wed",
        isDropCandidate: true, dropReason: "Drop if SEAS load is too heavy — least technical of the HBS options.",
        rationale: "Competitive dynamics in tech industries. Good but droppable."
      },
      {
        id: "ai6", code: "HBSMBA 1757", title: "Launching Tech Ventures", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "11:50am–1:10pm", days: "Mon/Tue/Wed",
        isDropCandidate: true, dropReason: "Drop if SEAS load is too heavy — overlaps thematically with ENG-SCI 280.",
        rationale: "GTM and early-stage product scaling."
      },
      {
        id: "ai7", code: "HBSMBA 1676", title: "The Founder Mindset", school: "HBS", credits: 1.5,
        category: "short", semester: "fall", time: "11:50am–1:10pm", days: "Thu/Fri",
        isDropCandidate: true, dropReason: "Short course — easy drop if semester is overwhelming.",
        rationale: "Early-stage ownership mindset. Low time commitment."
      },
      {
        id: "ai8", code: "HBSMBA 1655", title: "Entrepreneurial Sales 101", school: "HBS", credits: 1.5,
        category: "short", semester: "fall", time: "1:30pm–2:50pm", days: "Thu/Fri",
        isDropCandidate: true, dropReason: "Short course — easy drop if semester is overwhelming.",
        rationale: "Founder-led selling skills."
      },
      {
        id: "ai9", code: "HBSMBA 1921", title: "AI-Driven Marketing", school: "HBS", credits: 1.5,
        category: "short", semester: "fall", time: "1:30pm–2:50pm", days: "Thu/Fri",
        isDropCandidate: true, dropReason: "Short course — easy drop if semester is overwhelming.",
        rationale: "Modern GTM techniques for AI products."
      },
      // Spring
      {
        id: "ai10", code: "ENG-SCI 292A/B", title: "Launch Lab / Capstone", school: "SEAS", credits: 4.0,
        category: "mandatory", semester: "spring", time: "4:00pm–6:00pm", days: "Wed",
        isDropCandidate: false, rationale: "Mandatory MS/MBA core. Non-negotiable."
      },
      {
        id: "ai11", code: "COMPSCI 2411", title: "Advanced Computer Architecture", school: "SEAS", credits: 4.0,
        category: "technical", semester: "spring", time: "9:00am–11:45am", days: "Fri",
        isDropCandidate: false, rationale: "Critical for AI hardware/software co-design understanding."
      },
      {
        id: "ai12", code: "COMPSCI 2824", title: "Foundations of Reinforcement Learning", school: "SEAS", credits: 4.0,
        category: "technical", semester: "spring", time: "9:45am–11:00am", days: "Tue/Thu",
        isDropCandidate: true, dropReason: "Drop if the math is too theoretical — most demanding SEAS course.",
        rationale: "Highly relevant for robotics and AV planning systems."
      },
      {
        id: "ai13", code: "HBSMBA 1788", title: "Scaling Technology Ventures", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "10:10am–11:30am", days: "Mon/Tue/Wed",
        isDropCandidate: false, rationale: "GTM and product scaling — directly applicable to EM track."
      },
      {
        id: "ai14", code: "HBSMBA 1608", title: "AI Systems & Bayesian Strategy", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "3:10pm–4:30pm", days: "Full Term",
        isDropCandidate: false, rationale: "Unique HBS course on AI decision-making frameworks."
      },
      {
        id: "ai15", code: "HBSMBA 1257", title: "Strategy for Entrepreneurs", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "8:30am–9:50am", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop if spring is heavy — good but not essential for EM track.",
        rationale: "Competitive strategy for new products."
      },
      {
        id: "ai16", code: "HBSMBA 1695", title: "Entrepreneurial Sales 102", school: "HBS", credits: 1.5,
        category: "short", semester: "spring", time: "1:30pm–2:50pm", days: "Spring 2",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "Building the first sales team."
      },
      {
        id: "ai17", code: "HBSMBA 1425", title: "Investment Strategies", school: "HBS", credits: 1.5,
        category: "short", semester: "spring", time: "1:30pm–2:50pm", days: "Spring 2",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "Financial literacy for tech leaders."
      },
      {
        id: "ai18", code: "HBSMBA 1105", title: "Energy", school: "HBS", credits: 1.5,
        category: "short", semester: "spring", time: "1:30pm–2:50pm", days: "Spring 2",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "Relevant for AV/EV infrastructure context."
      },
    ],
  },
  {
    id: "deep-tech-leader",
    title: "Deep Tech Business Leader",
    subtitle: "SpaceX · Amazon Robotics · Applied Intuition",
    tagline: "Lead the teams that build the hardware that changes the world.",
    personality: ["Strategic", "Decisive", "Operator"],
    targetCompanies: ["SpaceX", "Amazon Robotics", "Applied Intuition", "Boston Dynamics", "Nuro"],
    color: "orange",
    icon: "🚀",
    focus: "Hardware/software co-design, advanced negotiation, and corporate strategy.",
    fallCredits: 25.0,
    springCredits: 25.5,
    fallDropTarget: 8.5,
    springDropTarget: 9.0,
    fallDropNote: "Drop Strategy: Drop Private Equity Finance (−3.0) if you don't want financial modeling. Drop Building and Sustaining a Successful Enterprise (−3.0) and Modern Corporate Strategy (−1.5).",
    springDropNote: "Drop Strategy: Drop Corporate Restructuring (−3.0) and Creating the Modern Financial System (−3.0). Drop Consulting Skills (−1.5).",
    courses: [
      {
        id: "dtl1", code: "ENG-SCI 280", title: "Designing Tech Ventures", school: "SEAS", credits: 4.0,
        category: "mandatory", semester: "fall", time: "3:50pm–5:10pm", days: "Mon/Wed",
        isDropCandidate: false, rationale: "Mandatory MS/MBA core. Non-negotiable."
      },
      {
        id: "dtl2", code: "COMPSCI 2430", title: "Advanced Computer Networks", school: "SEAS", credits: 4.0,
        category: "technical", semester: "fall", time: "11:15am–12:30pm", days: "Tue/Thu",
        isDropCandidate: false, rationale: "Maintains deep tech credibility. Pairs well with Amazon background."
      },
      {
        id: "dtl3", code: "HBSMBA 2240", title: "Negotiation", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "10:10am–11:30am", days: "Mon/Tue/Wed",
        isDropCandidate: false, rationale: "Critical for biz-ops, partnerships, and leadership programs."
      },
      {
        id: "dtl4", code: "HBSMBA 1286", title: "Strategy and Technology", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "11:50am–1:10pm", days: "Mon/Tue/Wed",
        isDropCandidate: false, rationale: "Competitive dynamics in tech industries. Core for this path."
      },
      {
        id: "dtl5", code: "HBSMBA 1440", title: "Private Equity Finance", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "11:50am–1:10pm", days: "Mon/Tue/Wed",
        isDropCandidate: true, dropReason: "Drop if you don't want financial modeling depth.",
        rationale: "Financial modeling for deal evaluation."
      },
      {
        id: "dtl6", code: "HBSMBA 1504", title: "Building and Sustaining a Successful Enterprise", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "8:30am–9:50am", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop to reduce HBS load — good but not essential.",
        rationale: "Long-term enterprise strategy."
      },
      {
        id: "dtl7", code: "HBSMBA 2265", title: "Deals", school: "HBS", credits: 1.5,
        category: "short", semester: "fall", time: "1:30pm–3:30pm", days: "Fall 2",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "M&A and partnership structuring."
      },
      {
        id: "dtl8", code: "HBSMBA 1185", title: "Innovating at Scale", school: "HBS", credits: 1.5,
        category: "short", semester: "fall", time: "1:30pm–2:50pm", days: "Fall 1",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "Innovation at large organizations."
      },
      {
        id: "dtl9", code: "HBSMBA 1231", title: "Modern Corporate Strategy", school: "HBS", credits: 1.5,
        category: "short", semester: "fall", time: "1:30pm–2:50pm", days: "Fall 1",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "Revitalizing corporate strategy."
      },
      // Spring
      {
        id: "dtl10", code: "ENG-SCI 292A/B", title: "Launch Lab / Capstone", school: "SEAS", credits: 4.0,
        category: "mandatory", semester: "spring", time: "4:00pm–6:00pm", days: "Wed",
        isDropCandidate: false, rationale: "Mandatory MS/MBA core. Non-negotiable."
      },
      {
        id: "dtl11", code: "ENG-SCI 259", title: "Advanced Introduction to Robotics", school: "SEAS", credits: 4.0,
        category: "technical", semester: "spring",
        isDropCandidate: false, rationale: "Directly relevant for Amazon Robotics and Boston Dynamics."
      },
      {
        id: "dtl12", code: "HBSMBA 2261", title: "Advanced Negotiation", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "8:30am–9:50am", days: "Full Term",
        isDropCandidate: false, rationale: "Advanced dealmaking — essential for leadership track."
      },
      {
        id: "dtl13", code: "HBSMBA 2010", title: "Corporate Governance", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "10:10am–11:30am", days: "Full Term",
        isDropCandidate: false, rationale: "Board-level strategic perspective."
      },
      {
        id: "dtl14", code: "HBSMBA 1160", title: "Creating the Modern Financial System", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "3:10pm–5:10pm", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop to reduce spring load — macro-level but not essential.",
        rationale: "Macro-level business and financial acumen."
      },
      {
        id: "dtl15", code: "HBSMBA 2267", title: "Deals (Full Term)", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "1:30pm–3:30pm", days: "Full Term",
        isDropCandidate: false, rationale: "Practical M&A and partnership structuring."
      },
      {
        id: "dtl16", code: "HBSMBA 1420", title: "Creating Value Through Corporate Restructuring", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "10:10am–11:30am", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop to reduce spring load — less relevant for early-career.",
        rationale: "Corporate restructuring and value creation."
      },
      {
        id: "dtl17", code: "HBSMBA 2043", title: "Mastering Consulting and Advisory Skills", school: "HBS", credits: 1.5,
        category: "short", semester: "spring",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "Advisory and consulting skills."
      },
      {
        id: "dtl18", code: "HBSMBA 1155", title: "Business and Geopolitics", school: "HBS", credits: 1.5,
        category: "short", semester: "spring", time: "8:30am–9:50am", days: "Spring 1",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "Geopolitical context for global tech companies."
      },
    ],
  },
  {
    id: "deep-tech-vc",
    title: "Deep Tech VC / Investor",
    subtitle: "Lux Capital · Founders Fund · a16z",
    tagline: "Write the checks that fund the future of hard tech.",
    personality: ["Analytical", "Networked", "Contrarian"],
    targetCompanies: ["Lux Capital", "Founders Fund", "a16z", "Breakthrough Energy", "Khosla Ventures"],
    color: "violet",
    icon: "💎",
    focus: "Venture capital mechanics, evaluating hard tech, and financial modeling.",
    fallCredits: 25.5,
    springCredits: 25.0,
    fallDropTarget: 9.0,
    springDropTarget: 8.5,
    fallDropNote: "Drop Strategy: Drop Investing for Impact (−3.0) and Investment Management (−3.0) to focus purely on VC. Drop Innovating at Scale (−1.5).",
    springDropNote: "Drop Strategy: Drop Real Estate Private Equity (−3.0) and Public Markets Investing (−3.0) to focus on early-stage tech. Drop Investment Strategies (−1.5).",
    courses: [
      {
        id: "vc1", code: "ENG-SCI 280", title: "Designing Tech Ventures", school: "SEAS", credits: 4.0,
        category: "mandatory", semester: "fall", time: "3:50pm–5:10pm", days: "Mon/Wed",
        isDropCandidate: false, rationale: "Mandatory MS/MBA core. Non-negotiable."
      },
      {
        id: "vc2", code: "APCOMP 209A", title: "Data Science 1", school: "SEAS", credits: 4.0,
        category: "technical", semester: "fall",
        isDropCandidate: false, rationale: "Critical for evaluating AI/ML startups with quantitative rigor."
      },
      {
        id: "vc3", code: "HBSMBA 1428", title: "Venture Capital and Private Equity", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "11:50am–1:10pm", days: "Mon/Tue/Wed",
        isDropCandidate: false, rationale: "Core VC mechanics — the most important course for this path."
      },
      {
        id: "vc4", code: "HBSMBA 6728", title: "Field Course: Venture Capital Journey", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "3:10pm–5:10pm", days: "Full Term",
        isDropCandidate: false, rationale: "Hands-on VC field course — real deal evaluation experience."
      },
      {
        id: "vc5", code: "HBSMBA 1452", title: "Financial Management of Smaller Firms", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "8:30am–9:50am", days: "Full Term",
        isDropCandidate: false, rationale: "Financial modeling for early-stage companies."
      },
      {
        id: "vc6", code: "HBSMBA 1446", title: "Investment Management and Capital Markets", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "8:30am–9:50am", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop to focus purely on VC — more relevant to public markets.",
        rationale: "Capital markets and portfolio management."
      },
      {
        id: "vc7", code: "HBSMBA 6604", title: "Field Course: Investing for Impact", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "1:30pm–2:50pm", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop to focus purely on VC — more relevant to impact investing.",
        rationale: "Impact investing frameworks."
      },
      {
        id: "vc8", code: "HBSMBA 1655", title: "Entrepreneurial Sales 101", school: "HBS", credits: 1.5,
        category: "short", semester: "fall", time: "1:30pm–2:50pm", days: "Fall 2",
        isDropCandidate: false, rationale: "Understanding founder selling — essential for VC due diligence."
      },
      {
        id: "vc9", code: "HBSMBA 1185", title: "Innovating at Scale", school: "HBS", credits: 1.5,
        category: "short", semester: "fall", time: "1:30pm–2:50pm", days: "Fall 1",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "Innovation at large organizations."
      },
      // Spring
      {
        id: "vc10", code: "ENG-SCI 292A/B", title: "Launch Lab / Capstone", school: "SEAS", credits: 4.0,
        category: "mandatory", semester: "spring", time: "4:00pm–6:00pm", days: "Wed",
        isDropCandidate: false, rationale: "Mandatory MS/MBA core. Non-negotiable."
      },
      {
        id: "vc11", code: "HBSMBA 1727", title: "Tough Tech Ventures", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring",
        isDropCandidate: false, rationale: "Evaluating deep tech startups — the most relevant spring course."
      },
      {
        id: "vc12", code: "HBSMBA 1484", title: "Real Estate Private Equity", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "8:30am–9:50am", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop to focus on tech VC — not directly relevant.",
        rationale: "Real estate PE — tangential to tech VC."
      },
      {
        id: "vc13", code: "HBSMBA 6440", title: "Field Course: Private Equity Projects", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "3:10pm–5:10pm", days: "Full Term",
        isDropCandidate: false, rationale: "Hands-on PE deal work — builds real portfolio experience."
      },
      {
        id: "vc14", code: "HBSMBA 6454", title: "Field Course: Public Markets Investing", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "3:10pm–5:10pm", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop to focus on early-stage tech — more relevant to public markets.",
        rationale: "Public markets investing seminar."
      },
      {
        id: "vc15", code: "HBSMBA 1257", title: "Strategy for Entrepreneurs", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "8:30am–9:50am", days: "Full Term",
        isDropCandidate: false, rationale: "Understanding founder strategy — critical for VC evaluation."
      },
      {
        id: "vc16", code: "HBSMBA 1306", title: "Business Analysis and Valuation", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring",
        isDropCandidate: false, rationale: "Financial valuation — essential for VC term sheets."
      },
      {
        id: "vc17", code: "HBSMBA 1625", title: "Entrepreneurial Finance", school: "HBS", credits: 1.5,
        category: "short", semester: "spring",
        isDropCandidate: false, rationale: "Cap table mechanics, term sheets, and dilution."
      },
      {
        id: "vc18", code: "HBSMBA 1425", title: "Investment Strategies", school: "HBS", credits: 1.5,
        category: "short", semester: "spring", time: "1:30pm–2:50pm", days: "Spring 2",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "Portfolio construction strategies."
      },
    ],
  },
  {
    id: "av-fleet-owner",
    title: "AV Fleet Operator / Search Fund",
    subtitle: "Robotaxi Operator · ETA Entrepreneur",
    tagline: "Own the fleet. Own the route. Own the future of mobility.",
    personality: ["Entrepreneurial", "Operational", "Tenacious"],
    targetCompanies: ["Waymo One", "Cruise", "Zoox", "ETA Search Fund", "Autonomous Logistics"],
    color: "emerald",
    icon: "🚗",
    focus: "Entrepreneurship through acquisition, fleet operations, and physical asset management.",
    fallCredits: 25.0,
    springCredits: 25.5,
    fallDropTarget: 8.5,
    springDropTarget: 9.0,
    fallDropNote: "Drop Strategy: Drop Public Entrepreneurship (−3.0) and Real Property (−3.0) if not dealing with physical depots/cities yet. Drop Building Trusted Organizations (−1.5).",
    springDropNote: "Drop Strategy: Drop Law, Management and Entrepreneurship (−3.0) and Turnarounds (−3.0). Drop Leading a Family Business (−1.5) and Energy (−1.5).",
    courses: [
      {
        id: "av1", code: "ENG-SCI 280", title: "Designing Tech Ventures", school: "SEAS", credits: 4.0,
        category: "mandatory", semester: "fall", time: "3:50pm–5:10pm", days: "Mon/Wed",
        isDropCandidate: false, rationale: "Mandatory MS/MBA core. Non-negotiable."
      },
      {
        id: "av2", code: "ENG-SCI 215", title: "Physical Operations of Sustainable Energy Systems", school: "SEAS", credits: 4.0,
        category: "technical", semester: "fall",
        isDropCandidate: false, rationale: "Crucial for EV/AV fleet economics and energy cost modeling."
      },
      {
        id: "av3", code: "HBSMBA 2120", title: "Managing Service Operations", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "8:30am–9:50am", days: "Full Term",
        isDropCandidate: false, rationale: "Fleet dispatch, routing, and service level management."
      },
      {
        id: "av4", code: "HBSMBA 1623", title: "Public Entrepreneurship", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "11:50am–1:10pm", days: "Mon/Tue/Wed",
        isDropCandidate: true, dropReason: "Drop if not pursuing municipal AV fleet contracts.",
        rationale: "Municipal contracts and government partnerships for AV fleets."
      },
      {
        id: "av5", code: "HBSMBA 1684", title: "Real Property", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "8:30am–9:50am", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop if not managing physical depots or charging infrastructure.",
        rationale: "Depot management and real estate for fleet operations."
      },
      {
        id: "av6", code: "HBSMBA 1452", title: "Financial Management of Smaller Firms", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "8:30am–9:50am", days: "Full Term",
        isDropCandidate: false, rationale: "Financial modeling for small fleet operations."
      },
      {
        id: "av7", code: "HBSMBA 1676", title: "The Founder Mindset", school: "HBS", credits: 1.5,
        category: "short", semester: "fall", time: "11:50am–1:10pm", days: "Thu/Fri",
        isDropCandidate: false, rationale: "Ownership mindset — essential for search fund operators."
      },
      {
        id: "av8", code: "HBSMBA 1655", title: "Entrepreneurial Sales 101", school: "HBS", credits: 1.5,
        category: "short", semester: "fall", time: "1:30pm–2:50pm", days: "Fall 2",
        isDropCandidate: false, rationale: "Selling fleet services to enterprise clients."
      },
      {
        id: "av9", code: "HBSMBA 1825", title: "Building Trusted Organizations", school: "HBS", credits: 1.5,
        category: "short", semester: "fall", time: "1:30pm–2:50pm", days: "Fall 2",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "Trust and safety culture for autonomous vehicle operations."
      },
      // Spring
      {
        id: "av10", code: "ENG-SCI 292A/B", title: "Launch Lab / Capstone", school: "SEAS", credits: 4.0,
        category: "mandatory", semester: "spring", time: "4:00pm–6:00pm", days: "Wed",
        isDropCandidate: false, rationale: "Mandatory MS/MBA core. Non-negotiable."
      },
      {
        id: "av11", code: "HBSMBA 6452", title: "Field Course: Entrepreneurship through Acquisition", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "3:10pm–5:10pm", days: "Full Term",
        isDropCandidate: false, rationale: "The core ETA course — how to find, buy, and operate a business."
      },
      {
        id: "av12", code: "HBSMBA 2108", title: "Supply Chain Management", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring",
        isDropCandidate: false, rationale: "Parts procurement, maintenance scheduling, and fleet logistics."
      },
      {
        id: "av13", code: "HBSMBA 1636", title: "Turnarounds and Transformation", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "3:10pm–5:10pm", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop to reduce spring load — relevant only if acquiring distressed assets.",
        rationale: "Relevant if acquiring a distressed fleet or operator."
      },
      {
        id: "av14", code: "HBSMBA 1540", title: "Law, Management and Entrepreneurship", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "8:30am–9:50am", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop to reduce spring load — useful but can learn on the job.",
        rationale: "Legal frameworks for small business ownership."
      },
      {
        id: "av15", code: "HBSMBA 6453", title: "Field Course: Value Creation in Small/Medium Firms", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "3:10pm–5:10pm", days: "Full Term",
        isDropCandidate: false, rationale: "Hands-on value creation in small businesses."
      },
      {
        id: "av16", code: "HBSMBA 2113", title: "Digital Operations", school: "HBS", credits: 1.5,
        category: "short", semester: "spring", time: "1:30pm–2:50pm", days: "Spring 2",
        isDropCandidate: false, rationale: "Digital tools for fleet management and operations."
      },
      {
        id: "av17", code: "HBSMBA 1895", title: "Leading a Family Business", school: "HBS", credits: 1.5,
        category: "short", semester: "spring", time: "1:30pm–2:50pm", days: "Spring 2",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "Relevant if acquiring a family-owned fleet operator."
      },
      {
        id: "av18", code: "HBSMBA 1235", title: "OWN: The Power of Company Ownership", school: "HBS", credits: 1.5,
        category: "short", semester: "spring", time: "1:30pm–2:50pm", days: "Spring 1",
        isDropCandidate: false, rationale: "Equity ownership mechanics — essential for ETA operators."
      },
      {
        id: "av19", code: "HBSMBA 1105", title: "Energy", school: "HBS", credits: 1.5,
        category: "short", semester: "spring", time: "1:30pm–2:50pm", days: "Spring 2",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "EV charging infrastructure and energy economics."
      },
    ],
  },
  {
    id: "technical-pm",
    title: "Zero-to-One Technical PM",
    subtitle: "Figma · Notion · Linear · Early-Stage Startups",
    tagline: "Define the product. Own the roadmap. Ship what matters.",
    personality: ["Creative", "Empathetic", "Systematic"],
    targetCompanies: ["Figma", "Notion", "Linear", "Vercel", "Loom"],
    color: "pink",
    icon: "🎯",
    focus: "Product vision, human-computer interaction, and go-to-market strategy.",
    fallCredits: 25.0,
    springCredits: 25.5,
    fallDropTarget: 8.5,
    springDropTarget: 9.0,
    fallDropNote: "Drop Strategy: Drop Business of Entertainment (−3.0) if not building consumer apps. Drop Ideation and Prototyping (−3.0) and Business of Ideas (−1.5).",
    springDropNote: "Drop Strategy: Drop Systems for Scaling Ventures (−3.0) and Field Y (−3.0). Drop Leadership and Happiness (−1.5) and Innovation and Renovation (−1.5).",
    courses: [
      {
        id: "pm1", code: "ENG-SCI 280", title: "Designing Tech Ventures", school: "SEAS", credits: 4.0,
        category: "mandatory", semester: "fall", time: "3:50pm–5:10pm", days: "Mon/Wed",
        isDropCandidate: false, rationale: "Mandatory MS/MBA core. Non-negotiable."
      },
      {
        id: "pm2", code: "COMPSCI 2790R", title: "Research Topics in Human-Computer Interaction", school: "SEAS", credits: 4.0,
        category: "technical", semester: "fall",
        isDropCandidate: false, rationale: "Core HCI foundation — essential for product design credibility."
      },
      {
        id: "pm3", code: "HBSMBA 1765", title: "Product Management", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall",
        isDropCandidate: false, rationale: "Core PM frameworks — the most important course for this path."
      },
      {
        id: "pm4", code: "HBSMBA 1757", title: "Launching Tech Ventures", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "11:50am–1:10pm", days: "Mon/Tue/Wed",
        isDropCandidate: false, rationale: "GTM and early-stage product scaling."
      },
      {
        id: "pm5", code: "HBSMBA 1914", title: "The Business of Entertainment, Media, and Sports", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "11:50am–1:10pm", days: "Mon/Tue/Wed",
        isDropCandidate: true, dropReason: "Drop if not building consumer apps — more relevant to media products.",
        rationale: "Consumer product focus and audience building."
      },
      {
        id: "pm6", code: "HBSMBA 1612", title: "Field Course: Ideation and Prototyping", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "3:10pm–5:10pm", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop if HCI course covers similar ground.",
        rationale: "Hands-on product prototyping and design thinking."
      },
      {
        id: "pm7", code: "HBSMBA 1965", title: "Managing Customers for Growth", school: "HBS", credits: 1.5,
        category: "short", semester: "fall", time: "1:30pm–2:50pm", days: "Fall 2",
        isDropCandidate: false, rationale: "Customer retention and growth loops — critical for PM."
      },
      {
        id: "pm8", code: "HBSMBA 1161", title: "Business of Ideas", school: "HBS", credits: 1.5,
        category: "short", semester: "fall", time: "1:30pm–2:50pm", days: "Fall 2",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "Intellectual property and idea commercialization."
      },
      {
        id: "pm9", code: "HBSMBA 1655", title: "Entrepreneurial Sales 101", school: "HBS", credits: 1.5,
        category: "short", semester: "fall", time: "1:30pm–2:50pm", days: "Fall 2",
        isDropCandidate: false, rationale: "Founder-led selling — PMs need to sell internally and externally."
      },
      // Spring
      {
        id: "pm10", code: "ENG-SCI 292A/B", title: "Launch Lab / Capstone", school: "SEAS", credits: 4.0,
        category: "mandatory", semester: "spring", time: "4:00pm–6:00pm", days: "Wed",
        isDropCandidate: false, rationale: "Mandatory MS/MBA core. Non-negotiable."
      },
      {
        id: "pm11", code: "COMPSCI 2780", title: "Usable Novel Interactive Systems", school: "SEAS", credits: 4.0,
        category: "technical", semester: "spring",
        isDropCandidate: false, rationale: "Advanced HCI and product design — directly applicable to PM role."
      },
      {
        id: "pm12", code: "HBSMBA 1788", title: "Scaling Technology Ventures", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "10:10am–11:30am", days: "Full Term",
        isDropCandidate: false, rationale: "Product scaling and GTM — core for this path."
      },
      {
        id: "pm13", code: "HBSMBA 1789", title: "Systems for Scaling Ventures", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "3:10pm–5:10pm", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop to reduce spring load — overlaps with Scaling Tech Ventures.",
        rationale: "Organizational systems for scaling."
      },
      {
        id: "pm14", code: "HBSMBA 1257", title: "Strategy for Entrepreneurs", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "8:30am–9:50am", days: "Full Term",
        isDropCandidate: false, rationale: "Competitive strategy for new products."
      },
      {
        id: "pm15", code: "HBSMBA 6334", title: "Field Y: Projects in Business Management", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "3:10pm–5:10pm", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop to reduce spring load — good but time-intensive.",
        rationale: "Hands-on product management consulting."
      },
      {
        id: "pm16", code: "HBSMBA 1921", title: "AI-Driven Marketing", school: "HBS", credits: 1.5,
        category: "short", semester: "spring",
        isDropCandidate: false, rationale: "Modern GTM techniques for AI-powered products."
      },
      {
        id: "pm17", code: "HBSMBA 1955", title: "Innovation and Renovation", school: "HBS", credits: 1.5,
        category: "short", semester: "spring", time: "1:30pm–2:50pm", days: "Spring 2",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "Renewing market relevance."
      },
      {
        id: "pm18", code: "HBSMBA 1695", title: "Entrepreneurial Sales 102", school: "HBS", credits: 1.5,
        category: "short", semester: "spring", time: "1:30pm–2:50pm", days: "Spring 2",
        isDropCandidate: false, rationale: "Building the first sales team."
      },
      {
        id: "pm19", code: "HBSMBA 1885", title: "Leadership and Happiness", school: "HBS", credits: 1.5,
        category: "short", semester: "spring", time: "8:30am–9:50am", days: "Spring 1",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "Leadership and wellbeing for founders."
      },
    ],
  },
  {
    id: "defense-tech",
    title: "Defense Tech Innovator",
    subtitle: "Anduril · Palantir · Shield AI",
    tagline: "Build the systems that protect the systems that matter.",
    personality: ["Principled", "Analytical", "Mission-Driven"],
    targetCompanies: ["Anduril", "Palantir", "Shield AI", "L3Harris", "Rebellion Defense"],
    color: "red",
    icon: "🛡️",
    focus: "Government contracts, geopolitics, and applied physics for defense applications.",
    fallCredits: 25.0,
    springCredits: 25.0,
    fallDropTarget: 8.5,
    springDropTarget: 8.5,
    fallDropNote: "Drop Strategy: Drop Managing International Trade (−3.0) and Capitalism and the State (−3.0). Drop Deals (−1.5).",
    springDropNote: "Drop Strategy: Drop Doing Business with China (−3.0) and Creating the Modern Financial System (−3.0). Drop RoGME (−1.5).",
    courses: [
      {
        id: "dt1", code: "ENG-SCI 280", title: "Designing Tech Ventures", school: "SEAS", credits: 4.0,
        category: "mandatory", semester: "fall", time: "3:50pm–5:10pm", days: "Mon/Wed",
        isDropCandidate: false, rationale: "Mandatory MS/MBA core. Non-negotiable."
      },
      {
        id: "dt2", code: "ENG-SCI 200", title: "Advanced Engineering Quantum Mechanics", school: "SEAS", credits: 4.0,
        category: "technical", semester: "fall",
        isDropCandidate: false, rationale: "Foundation for quantum sensing and next-gen defense systems."
      },
      {
        id: "dt3", code: "HBSMBA 1120", title: "Capitalism and the State", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "3:10pm–5:10pm", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop to reduce load — interesting but not essential.",
        rationale: "Government-industry dynamics for defense contractors."
      },
      {
        id: "dt4", code: "HBSMBA 2292", title: "War & Peace: Lessons of History", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "3:10pm–5:10pm", days: "Full Term",
        isDropCandidate: false, rationale: "Strategic and historical context for defense technology."
      },
      {
        id: "dt5", code: "HBSMBA 5230", title: "Creating Value in Business and Government", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "4:30pm–6:30pm", days: "Full Term",
        isDropCandidate: false, rationale: "Government procurement and public-private partnerships."
      },
      {
        id: "dt6", code: "HBSMBA 1166", title: "Managing International Trade and Investment", school: "HBS", credits: 3.0,
        category: "elective", semester: "fall", time: "1:30pm–2:50pm", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop to reduce load — relevant but not core.",
        rationale: "Export controls and international defense trade."
      },
      {
        id: "dt7", code: "HBSMBA 2265", title: "Deals", school: "HBS", credits: 1.5,
        category: "short", semester: "fall", time: "1:30pm–3:30pm", days: "Fall 2",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "Government contract structuring."
      },
      {
        id: "dt8", code: "HBSMBA 1655", title: "Entrepreneurial Sales 101", school: "HBS", credits: 1.5,
        category: "short", semester: "fall", time: "1:30pm–2:50pm", days: "Fall 2",
        isDropCandidate: false, rationale: "Selling to government and defense primes."
      },
      {
        id: "dt9", code: "HBSMBA 1185", title: "Innovating at Scale", school: "HBS", credits: 1.5,
        category: "short", semester: "fall", time: "1:30pm–2:50pm", days: "Fall 1",
        isDropCandidate: false, rationale: "Innovation within large defense organizations."
      },
      // Spring
      {
        id: "dt10", code: "ENG-SCI 292A/B", title: "Launch Lab / Capstone", school: "SEAS", credits: 4.0,
        category: "mandatory", semester: "spring", time: "4:00pm–6:00pm", days: "Wed",
        isDropCandidate: false, rationale: "Mandatory MS/MBA core. Non-negotiable."
      },
      {
        id: "dt11", code: "COMPSCI 2860", title: "Multi-Robot Systems: Control, Communication, Security", school: "SEAS", credits: 4.0,
        category: "technical", semester: "spring",
        isDropCandidate: false, rationale: "Drone swarms and autonomous systems — directly applicable to Anduril."
      },
      {
        id: "dt12", code: "HBSMBA 1727", title: "Tough Tech Ventures", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring",
        isDropCandidate: false, rationale: "Commercializing deep tech — essential for defense startups."
      },
      {
        id: "dt13", code: "HBSMBA 2218", title: "Negotiation and Diplomacy", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring",
        isDropCandidate: false, rationale: "Government negotiation and diplomatic frameworks."
      },
      {
        id: "dt14", code: "HBSMBA 1576", title: "Doing Business with China 2035", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "3:10pm–5:10pm", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop to reduce load — relevant for geopolitical context but not core.",
        rationale: "Geopolitical context for US-China tech competition."
      },
      {
        id: "dt15", code: "HBSMBA 1160", title: "Creating the Modern Financial System", school: "HBS", credits: 3.0,
        category: "elective", semester: "spring", time: "3:10pm–5:10pm", days: "Full Term",
        isDropCandidate: true, dropReason: "Drop to reduce load — macro-level and not directly relevant.",
        rationale: "Macro-level financial context."
      },
      {
        id: "dt16", code: "HBSMBA 1155", title: "Business and Geopolitics", school: "HBS", credits: 1.5,
        category: "short", semester: "spring", time: "8:30am–9:50am", days: "Spring 1",
        isDropCandidate: false, rationale: "Geopolitical risk for defense tech companies."
      },
      {
        id: "dt17", code: "HBSMBA 1175", title: "SPACE: Space, Public and Commercial Economics", school: "HBS", credits: 1.5,
        category: "short", semester: "spring", time: "1:30pm–2:50pm", days: "Spring 1",
        isDropCandidate: false, rationale: "Space defense and commercial space economics."
      },
      {
        id: "dt18", code: "HBSMBA 1195", title: "RoGME: Role of Government in Market Economies", school: "HBS", credits: 1.5,
        category: "short", semester: "spring", time: "1:30pm–2:50pm", days: "Spring 2",
        isDropCandidate: true, dropReason: "Short course — easy drop.",
        rationale: "Government market intervention and defense procurement."
      },
    ],
  },
];

export default archetypes;
