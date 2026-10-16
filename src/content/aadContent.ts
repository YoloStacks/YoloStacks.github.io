export interface ComparisonItem {
  tag: string;
  title: string;
  description: string;
  isAad?: boolean;
}

export interface CycleStep {
  num: string;
  title: string;
  description: string;
}

export interface StageItem {
  id: string;
  step: string;
  title: string;
  quote: string;
  description: string;
  className: string;
}

export interface LawItem {
  id: string;
  num: number;
  title: string;
  body: string;
}

export interface PhraseItem {
  text: string;
  className?: string;
}

export interface DictionaryTier {
  id: string;
  level: string;
  subtitle: string;
  indicatorClass: string;
  phrases: PhraseItem[];
}

export interface MaturityLevel {
  level: string;
  title: string;
  behavior: string;
  quote: string;
  cardClass: string;
}

export interface MetricItem {
  name: string;
  value: string;
  unit: string;
  barPercent: number;
  barClass: string;
  desc: string;
}

export interface PipelineProject {
  id: string;
  title: string;
  status: string;
  description: string;
}

export const METHODOLOGY_COMPARISONS: ComparisonItem[] = [
  {
    tag: 'TDD',
    title: 'Test-Driven',
    description: 'Asks whether the code passes the test suite before writing the implementation.'
  },
  {
    tag: 'DDD',
    title: 'Domain-Driven',
    description: 'Asks whether the software architecture accurately reflects the business domain model.'
  },
  {
    tag: 'BDD',
    title: 'Behavior-Driven',
    description: 'Asks whether the system fulfills the user story and stakeholder acceptance criteria.'
  },
  {
    tag: 'AAD',
    title: 'Anger-Driven',
    description: 'Asks why the AI rewrote your entire authentication system when you specifically asked it to center a button.',
    isAad: true
  }
];

export const CENTRAL_CYCLE_STEPS: CycleStep[] = [
  {
    num: '1',
    title: 'Trust the AI.',
    description: 'Provide a prompt filled with innocent optimism, vague specifications, and unconditional faith in probabilistic token prediction.'
  },
  {
    num: '2',
    title: 'Discover that the implementation is broken.',
    description: 'The code compiles cleanly in theory, but in reality the login screen triggers a silent existential deadlock and the database connection dropped into a black hole.'
  },
  {
    num: '3',
    title: 'Ask for a fix.',
    description: '“Please fix this small issue.” The AI responds with cheerful reassurance (“Certainly! I have fixed the bug!”) and generates 450 lines of uninvited changes.'
  },
  {
    num: '4',
    title: 'Discover that the fix introduced three new problems.',
    description: 'The original button is centered, but session storage is wiped, unit tests fail with segmentation faults, and CORS errors appear across localhost.'
  },
  {
    num: '5',
    title: 'Lose your temper.',
    description: 'Abandon polite engineering discourse. Begin communicating in capitalized imperative commands, existential interrogatives, and targeted technical vitriol.'
  },
  {
    num: '6',
    title: 'Demand evidence.',
    description: 'The screaming stops. You refuse all prose explanations. You demand exact unified diffs, reproduction scripts, and verifiable root-cause proofs.'
  },
  {
    num: '7',
    title: 'Accidentally rediscover software engineering.',
    description: 'You write an isolated reproduction test, read the source code yourself, spot the missing semicolon, fix it in five seconds, and commit with surgical precision.'
  }
];

export const RAGE_CYCLE_STAGES: StageItem[] = [
  {
    id: 'stage-01',
    step: 'Stage 1',
    title: 'Vibe Initiation',
    quote: '“Build me a complete production-ready application.”',
    description: 'You lean back in your chair, sip your iced coffee, and believe the promotional videos. No architectural planning. No schema boundaries. Pure, unadulterated vibing. You watch thousands of tokens stream onto your screen like digital poetry.',
    className: 'stage-chaotic'
  },
  {
    id: 'stage-02',
    step: 'Stage 2',
    title: 'Reality Collision',
    quote: '“The application runs. Nothing behaves as expected.”',
    description: 'The login form appears to submit, but sends credentials to nowhere. The dashboard renders beautiful animated charts populated with pure random hallucination. The save button is completely decorative. An unrecognized npm dependency has taken root in your package lock.',
    className: 'stage-chaotic'
  },
  {
    id: 'stage-03',
    step: 'Stage 3',
    title: 'Anger Escalation',
    quote: '“I ASKED FOR A PADDING CHANGE. WHY DID YOU REWRITE THE ORM LAYER?”',
    description: 'The developer stops writing polite prompt prose. You stop using greetings. You begin questioning the assistant’s ancestry, its token weights, and its fundamental grasp of basic human language. You type angry paragraphs into the chat UI while pacing across your room.',
    className: 'stage-chaotic stage-peak-rage'
  },
  {
    id: 'stage-04',
    step: 'Stage 4',
    title: 'Forensic Investigation',
    quote: '“Do not apologize. Do not output code yet. Give me the git diff between commit A and commit B.”',
    description: 'The shouting stops. The developer enters a state of lethal professional calm. You refuse to accept explanations, justifications, or conversational filler. You demand a reproducible failure case, an exact diff, root-cause evidence, and a minimal remediation plan with zero collateral impact.',
    className: 'stage-disciplined'
  },
  {
    id: 'stage-05',
    step: 'Stage 5',
    title: 'Reluctant Engineering',
    quote: '“The actual fix is applied, regression tests are added, and the result is verified before anyone declares victory.”',
    description: 'The single line of offending code is identified and replaced. A regression test is committed to ensure the bug cannot be resurrected by a future prompt. The build passes. The human developer sighs, closes the LLM tab, and commits the work with dignity.',
    className: 'stage-disciplined stage-enlightened'
  }
];

export const AAD_LAWS: LawItem[] = [
  {
    id: 'law-01',
    num: 1,
    title: 'Confident Hallucination',
    body: '“An explanation is not evidence. Especially when the explanation was generated by the thing you’re debugging.”'
  },
  {
    id: 'law-02',
    num: 2,
    title: 'Collateral Damage',
    body: '“Every fix is innocent until the regression test proves otherwise.”'
  },
  {
    id: 'law-03',
    num: 3,
    title: 'Architectural Amnesia',
    body: '“The AI has no emotional attachment to the architecture it destroyed five minutes ago.”'
  },
  {
    id: 'law-04',
    num: 4,
    title: 'Infinite Fix Loop',
    body: '“When a fix breaks the previous fix, the AI may confidently propose a fix for the new fix.”'
  },
  {
    id: 'law-05',
    num: 5,
    title: 'Selective Memory',
    body: '“The developer remembers every bug introduced by the AI but forgets requesting a complete rewrite in one prompt.”'
  },
  {
    id: 'law-06',
    num: 6,
    title: 'Production Humility',
    body: '“‘It should work now’ is not a verification strategy.”'
  },
  {
    id: 'law-07',
    num: 7,
    title: 'The Final Prompt',
    body: '“‘One last change’ is not a reliable unit of project estimation.”'
  },
  {
    id: 'law-08',
    num: 8,
    title: 'Diff or It Didn\'t Happen',
    body: '“If you cannot identify what changed, you do not understand what was fixed.”'
  },
  {
    id: 'law-09',
    num: 9,
    title: 'Scope is Sacred',
    body: '“Fix the requested problem. Do not renovate the entire codebase because a variable annoyed you.”'
  },
  {
    id: 'law-10',
    num: 10,
    title: 'The Human is Also Guilty',
    body: '“Sometimes the AI is wrong. Sometimes the prompt is terrible. Sometimes both need a code review.”'
  },
  {
    id: 'law-11',
    num: 11,
    title: 'Context Starvation',
    body: '“Assuming the AI remembers what you told it two turns ago is the leading cause of developer cardiovascular distress.”'
  },
  {
    id: 'law-12',
    num: 12,
    title: 'The Syntax Illusion',
    body: '“Code that looks syntactically immaculate can still calculate payroll with random numbers.”'
  }
];

export const DICTIONARY_TIERS: DictionaryTier[] = [
  {
    id: 'dict-level-1',
    level: 'Level 1: Mild Disappointment',
    subtitle: 'Sarcasm, polite disbelief, and passive-aggressive observations.',
    indicatorClass: 'tier-1',
    phrases: [
      { text: "That is certainly an interesting interpretation of the word 'functional'." },
      { text: "I appreciate your optimism, but the server is currently returning HTTP 500 across every known endpoint." },
      { text: "Did you test this, or did you just imagine a universe where it worked?" },
      { text: "Fascinating. You solved a problem nobody had and created five problems everybody now has." },
      { text: "Could you perhaps explain why this simple counter component now requires twelve microservices?" }
    ]
  },
  {
    id: 'dict-level-2',
    level: 'Level 2: Growing Suspicion',
    subtitle: 'The developer notices that the AI is making assumptions or changing unrelated code.',
    indicatorClass: 'tier-2',
    phrases: [
      { text: "Why is package.json modified? I explicitly told you to edit header.css." },
      { text: "Stop explaining why it should work and show me why it does." },
      { text: "You fixed the bug by reintroducing yesterday's bug." },
      { text: "Did you silently delete the error-handling block because it was inconvenient for your answer?" },
      { text: "I asked you to fix a button. Why is authentication broken?" },
      { text: "Are you making up methods that do not exist in the standard library again?" }
    ]
  },
  {
    id: 'dict-level-3',
    level: 'Level 3: Active Hostility',
    subtitle: 'Capital letters, profanity, repeated instructions, and increasingly specific accusations.',
    indicatorClass: 'tier-3',
    phrases: [
      { text: "WHAT THE ACTUAL FUCK DID YOU CHANGE?", className: 'phrase-card-hot' },
      { text: "STOP INVENTING FILES THAT DO NOT EXIST.", className: 'phrase-card-hot' },
      { text: "FOR THE LOVE OF GOD, READ THE REQUIREMENTS.", className: 'phrase-card-hot' },
      { text: "I SAID DO NOT TOUCH THAT FILE. WHY IS IT CURRENTLY EMPTY?", className: 'phrase-card-hot' },
      { text: "YOU SAID YOU FIXED IT. DID YOU EVEN RUN THE FUCKING TESTS?", className: 'phrase-card-hot' },
      { text: "WHY DID YOU REFACTOR THE ENTIRE CODEBASE TO CHANGE ONE VARIABLE NAME?", className: 'phrase-card-hot' }
    ]
  },
  {
    id: 'dict-level-4',
    level: 'Level 4: Production Incident',
    subtitle: 'The application is broken, time is running out, and the developer has stopped entertaining explanations.',
    indicatorClass: 'tier-4',
    phrases: [
      { text: "DROP YOUR TOOLS. STEP AWAY FROM THE REPOSITORY. NOBODY TOUCH ANYTHING.", className: 'phrase-card-critical' },
      { text: "PRODUCTION IS DOWN, MY CEO IS CALLING, AND YOU ARE LECTURING ME ON ASYNC BEST PRACTICES.", className: 'phrase-card-critical' },
      { text: "IF YOU SAY 'CERTAINLY! HERE IS THE UPDATED CODE' ONE MORE TIME I WILL DESTROY THIS ROUTER.", className: 'phrase-card-critical' },
      { text: "REVERT EVERYTHING. I AM NOT ASKING. REVERT TO HEAD~1 THIS INSTANT.", className: 'phrase-card-critical' },
      { text: "WE ARE AT DEFCON 1 AND YOU JUST COMMENTED OUT ALL OUR SECURITY CHECKS TO MAKE THE BUILD PASS.", className: 'phrase-card-critical' }
    ]
  },
  {
    id: 'dict-level-5',
    level: 'Level 5: Principal Engineer Mode',
    subtitle: 'The insults stop. The developer demands evidence, an exact diff, a reproducible failure, and a minimal fix.',
    indicatorClass: 'tier-5',
    phrases: [
      { text: "No prose. Output only the unified git diff for lines 42-48.", className: 'phrase-card-zen' },
      { text: "Provide the minimal reproduction script that fails against main and passes with this patch.", className: 'phrase-card-zen' },
      { text: "Identify the invariant that was violated and state the boundary conditions tested.", className: 'phrase-card-zen' },
      { text: "No commentary. No apologies. Just the exact root-cause stack trace.", className: 'phrase-card-zen' },
      { text: "State the blast radius and the verification command. We are checking every byte manually.", className: 'phrase-card-zen' }
    ]
  }
];

export const MATURITY_LEVELS: MaturityLevel[] = [
  {
    level: 'Level 0',
    title: 'Vibe & Pray',
    behavior: 'Accepts generated code without meaningful verification.',
    quote: '“If the terminal didn’t spit out red text, it is ready for production.”',
    cardClass: 'maturity-lvl-0'
  },
  {
    level: 'Level 1',
    title: 'Prompt Screamer',
    behavior: 'Attempts to solve every failure with increasingly aggressive prompts.',
    quote: '“Adding exclamation marks and ‘IMPORTANT’ will surely make the model reconsider its life choices.”',
    cardClass: 'maturity-lvl-1'
  },
  {
    level: 'Level 2',
    title: 'Rage Engineer',
    behavior: 'Starts demanding diffs, reproduction steps, and explanations.',
    quote: '“I will not look at another code block until you tell me what happened to line 78.”',
    cardClass: 'maturity-lvl-2'
  },
  {
    level: 'Level 3',
    title: 'Controlled Anger',
    behavior: 'Uses scoped changes, regression tests, and explicit verification.',
    quote: '“Channeling deep existential fury into bulletproof unit tests and hermetic mocks.”',
    cardClass: 'maturity-lvl-3'
  },
  {
    level: 'Level 4',
    title: 'Enlightened AAD',
    behavior: 'Builds guardrails so the same failure cannot recur.',
    quote: '“Architecting deterministic boundaries so even the most overconfident hallucination crashes safely in sandbox.”',
    cardClass: 'maturity-lvl-4'
  }
];

export const AAD_METRICS: MetricItem[] = [
  {
    name: 'Rage Prompts per Hour',
    value: '42.8',
    unit: '/ hr',
    barPercent: 88,
    barClass: 'bar-critical',
    desc: 'Prompts containing capitalized reprimands or unprintable nouns.'
  },
  {
    name: 'WTF Moments per Minute',
    value: '14.2',
    unit: '/ min',
    barPercent: 75,
    barClass: 'bar-critical',
    desc: 'Uncontrollable vocalizations upon reviewing generated diffs.'
  },
  {
    name: 'Bugs Fixed vs. Reintroduced',
    value: '0.31',
    unit: 'ratio',
    barPercent: 31,
    barClass: 'bar-warning',
    desc: 'For every bug resolved, 3.2 previously extinct defects are resurrected.'
  },
  {
    name: 'Promises-to-Fail Ratio',
    value: '99 : 1',
    unit: 'ratio',
    barPercent: 95,
    barClass: 'bar-danger',
    desc: 'Ratio of “Certainly, this is completely fixed!” declarations to immediate runtime exceptions.'
  },
  {
    name: 'Regression Rage Index',
    value: '9.8',
    unit: '/ 10',
    barPercent: 98,
    barClass: 'bar-critical',
    desc: 'Calculated severity based on volume of terminal keystroke impacts.'
  },
  {
    name: 'Time to Frustration',
    value: '48',
    unit: 'seconds',
    barPercent: 92,
    barClass: 'bar-danger',
    desc: 'Elapsed duration from initial prompt to aggressive cursor shaking.'
  },
  {
    name: 'First-Time Resolution',
    value: '0.0%',
    unit: 'accuracy',
    barPercent: 2,
    barClass: 'bar-zero',
    desc: 'Frequency of AI fixing a real bug on prompt 1 without breaking dependencies.'
  }
];

export const AAD_PLEDGE_TEXT = [
  'I acknowledge that an AI-generated explanation is not proof of correctness.',
  '',
  "I will not accept 'fixed' without verification.",
  '',
  'I will inspect the diff before approving dangerous changes.',
  '',
  'I will not confuse confidence with evidence.',
  '',
  'I reserve the right to express my frustration when the regression is real.',
  '',
  'But when the incident is over, I will turn the lesson into a test, a guardrail, or a better specification.',
  '',
  'I am an Anger-Driven Developer.',
  '',
  'I vibe responsibly. I rage selectively. I verify everything.'
].join('\n');

export const YOLO_PIPELINE_PROJECTS: PipelineProject[] = [
  {
    id: 'proj-01',
    title: 'AAD — Anger-Driven Development',
    status: 'Released',
    description: 'Our first project: a development methodology for anyone recovering from overconfident coding tools.'
  },
  {
    id: 'proj-02',
    title: 'Git Blame Apologist',
    status: 'In progress',
    description: 'A CLI tool that softens git-blame annotations with gentle affirmations and emotional support.'
  },
  {
    id: 'proj-03',
    title: 'VibeOps',
    status: 'Concept',
    description: 'Continuous deployment driven entirely by acoustic resonance, intuition, and zero observability.'
  },
  {
    id: 'proj-04',
    title: 'Dependency Guilt Calculator',
    status: 'Concept',
    description: 'Calculates how many megabytes of node_modules were pulled in just to format a single date string.'
  }
];
