import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Banknote,
  ClipboardCheck,
  Droplets,
  LineChart,
  PieChart,
  ScrollText,
  ShieldCheck,
  ShoppingBasket,
  Target,
  TrendingUp,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  process: { title: string; description: string }[];
  Icon: LucideIcon;
};

export type Product = {
  slug: string;
  name: string;
  description: string;
  tag?: string;
  highlights: string[];
  suitability: string[];
  steps: { title: string; description: string }[];
  Icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "investment-portfolio",
    title: "Investment Portfolio",
    description:
      "Strategically diversified portfolios built around your risk profile, time horizon, and life goals. We manage equity, debt, hybrid, and alternative assets under one coordinated strategy.",
    benefits: ["Risk-adjusted portfolio construction", "Quarterly rebalancing", "Direct & regular plan advisory"],
    deliverables: ["Risk profiling & asset allocation", "Model portfolio + custom overlays", "Periodic review & rebalancing notes"],
    process: [
      { title: "Discovery", description: "Understand objectives, cash flows, and constraints." },
      { title: "Portfolio Design", description: "Create allocation and product mix aligned to risk and horizon." },
      { title: "Implementation", description: "Execute with clean documentation and tracking." },
      { title: "Monitoring", description: "Rebalance and refine as markets and goals change." },
    ],
    Icon: LineChart,
  },
  {
    slug: "insurance-policies",
    title: "Insurance Policies",
    description:
      "Comprehensive life, health, term, and asset protection plans to secure your family's financial future against unforeseen events.",
    benefits: ["Term, ULIP & endowment plans", "Health & critical illness cover", "Business keyman insurance"],
    deliverables: ["Needs analysis & gap report", "Policy comparison & recommendations", "Claims & renewal support guidance"],
    process: [
      { title: "Needs Assessment", description: "Map protection needs to income, liabilities, and dependents." },
      { title: "Plan Selection", description: "Shortlist suitable covers with transparent comparisons." },
      { title: "Onboarding", description: "Documentation support and policy issuance follow-up." },
      { title: "Review", description: "Periodic cover review as life circumstances evolve." },
    ],
    Icon: ShieldCheck,
  },
  {
    slug: "wealth-basket",
    title: "Wealth Basket",
    description:
      "Curated, theme-based investment baskets built around high-conviction sectors — technology, consumption, ESG, and more — for focused, transparent investing.",
    benefits: ["Sector-focused model portfolios", "Transparent holdings", "Quarterly basket reviews"],
    deliverables: ["Theme thesis & allocation note", "Holdings list + rationale", "Review notes & re-optimisation updates"],
    process: [
      { title: "Theme Thesis", description: "Define sector drivers, catalysts, and risk factors." },
      { title: "Basket Construction", description: "Select instruments with diversification and quality filters." },
      { title: "Execution", description: "Implement with cost-awareness and clean tracking." },
      { title: "Review", description: "Quarterly refresh based on fundamentals and risk." },
    ],
    Icon: ShoppingBasket,
  },
  {
    slug: "targeted-investment",
    title: "Targeted Investment",
    description:
      "Goal-oriented financial planning for specific life milestones — children's education, retirement, home purchase, or business succession.",
    benefits: ["Goal-linked asset allocation", "Timeline-based strategy", "Regular progress reviews"],
    deliverables: ["Goal plan with milestones", "Savings/investment roadmap", "Progress check-ins & adjustments"],
    process: [
      { title: "Goal Mapping", description: "Define targets, timelines, and required corpus." },
      { title: "Strategy", description: "Build a goal-linked allocation and contribution plan." },
      { title: "Execution", description: "Implement in phases with discipline." },
      { title: "Tracking", description: "Measure progress and course-correct when needed." },
    ],
    Icon: Target,
  },
  {
    slug: "tax-optimisation",
    title: "Tax Optimisation",
    description:
      "Expert CA-led tax structuring and planning to minimise liability, maximise post-tax returns, and ensure full regulatory compliance across direct and indirect taxes.",
    benefits: ["ITR filing & planning", "HUF & trust structuring", "Capital gains optimisation"],
    deliverables: ["Tax plan & action checklist", "Capital gains strategy notes", "Filing support guidance (docs & timelines)"],
    process: [
      { title: "Review", description: "Assess income sources, deductions, and exposures." },
      { title: "Structuring", description: "Optimise across regimes, instruments, and holding periods." },
      { title: "Execution", description: "Coordinate investments and documentation." },
      { title: "Compliance", description: "Support filings and ongoing reporting readiness." },
    ],
    Icon: ClipboardCheck,
  },
];

export const products: Product[] = [
  {
    slug: "mutual-fund",
    name: "Mutual Fund",
    description:
      "Access to 40+ fund houses and 1000+ schemes. SIP, SWP, lumpsum, and STP — all through a single advisory relationship.",
    tag: "Most Popular",
    highlights: ["Goal-based fund selection", "SIP/SWP/STP planning", "Periodic reviews and rebalancing discipline"],
    suitability: ["Long-term wealth creation", "Tax-efficient investing", "Disciplined monthly investing via SIP"],
    steps: [
      { title: "Profile", description: "Set horizon, risk appetite, and goals." },
      { title: "Select", description: "Shortlist schemes aligned to the plan." },
      { title: "Invest", description: "Start SIP or deploy lumpsum with a deployment plan." },
      { title: "Review", description: "Quarterly tracking and course corrections." },
    ],
    Icon: PieChart,
  },
  {
    slug: "insurance",
    name: "Insurance",
    description:
      "Life, term, health, critical illness, and ULIP plans from leading insurers. Needs-based, not commission-driven recommendations.",
    highlights: ["Protection-first planning", "Transparent comparisons", "Renewal and documentation support"],
    suitability: ["Income protection", "Family security", "Medical risk coverage"],
    steps: [
      { title: "Assess", description: "Understand protection needs and gaps." },
      { title: "Compare", description: "Evaluate options on cover, exclusions, and costs." },
      { title: "Issue", description: "Support documentation and policy issuance." },
      { title: "Maintain", description: "Track renewals and periodic review." },
    ],
    Icon: ShieldCheck,
  },
  {
    slug: "pms",
    name: "PMS",
    description:
      "Portfolio Management Services — professionally managed equity portfolios for investors with ₹50L+ investable surplus.",
    tag: "Managed",
    highlights: ["Professional equity portfolio management", "Concentrated high-conviction strategies", "Regular performance reporting"],
    suitability: ["Investors seeking managed equity exposure", "Long-term equity allocation", "Higher risk-tolerance profiles"],
    steps: [
      { title: "Fitment", description: "Confirm suitability, horizon, and expectations." },
      { title: "Onboard", description: "Complete documentation and account setup." },
      { title: "Deploy", description: "Phased deployment based on market conditions." },
      { title: "Report", description: "Periodic updates and review conversations." },
    ],
    Icon: BarChart3,
  },
  {
    slug: "direct-equity",
    name: "Direct Equity",
    description:
      "Research-backed stock recommendations and portfolio construction using fundamental and macro analysis across NSE/BSE.",
    highlights: ["Fundamental research", "Portfolio construction guidance", "Risk-aware allocation"],
    suitability: ["Investors comfortable with equity volatility", "Long-term compounding focus", "Hands-on investors seeking guidance"],
    steps: [
      { title: "Universe", description: "Identify quality businesses and themes." },
      { title: "Construct", description: "Build a diversified equity basket." },
      { title: "Execute", description: "Enter with a disciplined plan." },
      { title: "Monitor", description: "Track fundamentals and rebalance as needed." },
    ],
    Icon: TrendingUp,
  },
  {
    slug: "fixed-deposit",
    name: "Fixed Deposit",
    description:
      "Bank and corporate FDs with competitive rates. Regular income, capital safety, and flexible tenure options.",
    highlights: ["Stable returns", "Tenure matching", "Issuer quality screening"],
    suitability: ["Capital preservation", "Predictable income needs", "Short/medium-term goals"],
    steps: [
      { title: "Match", description: "Map goal timelines to tenures." },
      { title: "Select", description: "Choose issuers based on safety and rate." },
      { title: "Invest", description: "Execute with proper documentation." },
      { title: "Track", description: "Manage renewals and maturity planning." },
    ],
    Icon: Banknote,
  },
  {
    slug: "bonds",
    name: "Bonds",
    description:
      "Government securities, PSU bonds, and corporate bonds. Fixed income with predictable returns for capital preservation.",
    highlights: ["Fixed income allocation planning", "Issuer and duration screening", "Yield and risk trade-off clarity"],
    suitability: ["Income-focused portfolios", "Lower volatility allocation", "Rate-cycle aware investors"],
    steps: [
      { title: "Define", description: "Set duration and income objectives." },
      { title: "Screen", description: "Select bonds based on quality and structure." },
      { title: "Execute", description: "Purchase with clear settlement and holding plan." },
      { title: "Review", description: "Track credit events and rate environment." },
    ],
    Icon: ScrollText,
  },
  {
    slug: "smallcase",
    name: "Smallcase",
    description:
      "Invest in curated model portfolios on Smallcase — sector themes, market-cap strategies, and factor-based approaches.",
    tag: "New",
    highlights: ["Theme-based model portfolios", "Transparent holdings", "Periodic rebalances"],
    suitability: ["Investors seeking thematic exposure", "Disciplined strategy followers", "Goal-based satellite allocations"],
    steps: [
      { title: "Choose", description: "Select a basket aligned to theme and risk." },
      { title: "Allocate", description: "Decide allocation size within the portfolio." },
      { title: "Execute", description: "Invest and track holdings cleanly." },
      { title: "Rebalance", description: "Follow periodic rebalances for discipline." },
    ],
    Icon: ShoppingBasket,
  },
  {
    slug: "liquiloans",
    name: "LiquiLoans",
    description:
      "P2P lending through LiquiLoans for investors seeking higher yield fixed-income instruments beyond traditional FDs.",
    highlights: ["Higher-yield fixed income alternative", "Diversification across borrowers", "Risk-aware allocation sizing"],
    suitability: ["Yield-seeking investors", "Diversified fixed-income allocation", "Investors comfortable with platform risk"],
    steps: [
      { title: "Assess", description: "Evaluate suitability and allocation sizing." },
      { title: "Diversify", description: "Spread exposure across multiple loans." },
      { title: "Monitor", description: "Track repayments and portfolio health." },
      { title: "Adjust", description: "Reallocate based on performance and risk." },
    ],
    Icon: Droplets,
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

