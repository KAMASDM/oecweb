import {
  BookOpen,
  Star,
  BrainCircuit,
  Globe,
  FilePenLine,
  Ear,
  Calculator,
  SpellCheck,
  FileSignature,
  Puzzle,
} from "lucide-react";

const PlaceholderComponent = ({ name }) => (
  <div className="p-8">
    <h2 className="text-2xl font-bold">{name} Component</h2>
  </div>
);
const GeneralVerbalAbility = () => (
  <PlaceholderComponent name="General Verbal Ability" />
);
const GeneralQuantitative = () => (
  <PlaceholderComponent name="General Quantitative Aptitude" />
);
const GeneralReasoning = () => (
  <PlaceholderComponent name="General Logical Reasoning" />
);
const GeneralKnowledge = () => (
  <PlaceholderComponent name="General Knowledge" />
);
const IELTSReading = () => <PlaceholderComponent name="IELTS Reading" />;
const IELTSWriting = () => <PlaceholderComponent name="IELTS Writing" />;
const IELTSListening = () => <PlaceholderComponent name="IELTS Listening" />;
const TOEFLReading = () => <PlaceholderComponent name="TOEFL Reading" />;
const TOEFLWriting = () => <PlaceholderComponent name="TOEFL Writing" />;
const TOEFLListening = () => <PlaceholderComponent name="TOEFL Listening" />;
const SATReading = () => <PlaceholderComponent name="SAT Reading" />;
const SATWriting = () => <PlaceholderComponent name="SAT Writing & Language" />;
const SATMath = () => <PlaceholderComponent name="SAT Math" />;
const GREVerbal = () => <PlaceholderComponent name="GRE Verbal Reasoning" />;
const GREQuantitative = () => (
  <PlaceholderComponent name="GRE Quantitative Reasoning" />
);
const GREAnalytical = () => <PlaceholderComponent name="GRE Analytical Writing" />;
const GMATQuantitative = () => (
  <PlaceholderComponent name="GMAT Quantitative Reasoning" />
);
const GMATVerbal = () => <PlaceholderComponent name="GMAT Verbal Reasoning" />;
const GMATReasoning = () => (
  <PlaceholderComponent name="GMAT Integrated Reasoning" />
);
const GMATAnalytical = () => (
  <PlaceholderComponent name="GMAT Analytical Writing" />
);

export const testConfig = {
  general: {
    title: "General",
    icon: <Globe className="h-6 w-6 text-secondary-500" />,
  },
  ielts: {
    title: "IELTS",
    icon: <Star className="h-6 w-6 text-secondary-500" />,
  },
  toefl: {
    title: "TOEFL",
    icon: <BookOpen className="h-6 w-6 text-secondary-500" />,
  },
  sat: {
    title: "SAT",
    icon: <BrainCircuit className="h-6 w-6 text-secondary-500" />,
  },
  gre: { title: "GRE", icon: <Star className="h-6 w-6 text-secondary-500" /> },
  gmat: {
    title: "GMAT",
    icon: <BrainCircuit className="h-6 w-6 text-secondary-500" />,
  },
};

export const allTestCategories = {
  general: {
    verbal: {
      title: "Verbal Ability",
      slug: "verbal-ability",
      description: "Test your vocabulary, grammar, and comprehension.",
      icon: <SpellCheck className="h-10 w-10 text-primary-800" />,
    },
    quantitative: {
      title: "Quantitative Aptitude",
      slug: "quantitative-aptitude",
      description: "Challenge your numerical and problem-solving skills.",
      icon: <Calculator className="h-10 w-10 text-primary-800" />,
    },
    reasoning: {
      title: "Logical Reasoning",
      slug: "logical-reasoning",
      description: "Assess your ability to think logically and analytically.",
      icon: <BrainCircuit className="h-10 w-10 text-primary-800" />,
    },
    knowledge: {
      title: "General Knowledge",
      slug: "general-knowledge",
      description: "Check your awareness of current and past events.",
      icon: <Globe className="h-10 w-10 text-primary-800" />,
    },
  },
  ielts: {
    reading: {
      title: "Reading",
      slug: "reading",
      description: "Assess your reading comprehension skills.",
      icon: <BookOpen className="h-10 w-10 text-primary-800" />,
    },
    writing: {
      title: "Writing",
      slug: "writing",
      description: "Practice writing tasks and improve your structure.",
      icon: <FilePenLine className="h-10 w-10 text-primary-800" />,
    },
    listening: {
      title: "Listening",
      slug: "listening",
      description: "Sharpen your listening skills with audio exercises.",
      icon: <Ear className="h-10 w-10 text-primary-800" />,
    },
  },
  toefl: {
    reading: {
      title: "Reading",
      slug: "reading",
      description: "Assess your reading comprehension skills.",
      icon: <BookOpen className="h-10 w-10 text-primary-800" />,
    },
    writing: {
      title: "Writing",
      slug: "writing",
      description: "Practice writing tasks and improve your structure.",
      icon: <FilePenLine className="h-10 w-10 text-primary-800" />,
    },
    listening: {
      title: "Listening",
      slug: "listening",
      description: "Sharpen your listening skills with audio exercises.",
      icon: <Ear className="h-10 w-10 text-primary-800" />,
    },
  },
  sat: {
    reading: {
      title: "Reading",
      slug: "reading",
      description: "Analyze passages and answer evidence-based questions.",
      icon: <BookOpen className="h-10 w-10 text-primary-800" />,
    },
    writing: {
      title: "Writing & Language",
      slug: "writing-language",
      description: "Improve grammar, expression, and editing skills.",
      icon: <FilePenLine className="h-10 w-10 text-primary-800" />,
    },
    math: {
      title: "Math",
      slug: "math",
      description: "Solve problems in algebra, data analysis, and more.",
      icon: <Calculator className="h-10 w-10 text-primary-800" />,
    },
  },
  gre: {
    analytical: {
      title: "Analytical Writing",
      slug: "analytical-writing",
      description: "Articulate and support complex ideas in writing.",
      icon: <FileSignature className="h-10 w-10 text-primary-800" />,
    },
    verbal: {
      title: "Verbal Reasoning",
      slug: "verbal-reasoning",
      description: "Analyze text, evaluate arguments, and synthesize info.",
      icon: <SpellCheck className="h-10 w-10 text-primary-800" />,
    },
    quantitative: {
      title: "Quantitative Reasoning",
      slug: "quantitative-reasoning",
      description: "Interpret data and solve mathematical problems.",
      icon: <Calculator className="h-10 w-10 text-primary-800" />,
    },
  },
  gmat: {
    analytical: {
      title: "Analytical Writing Assessment",
      slug: "analytical-writing-assessment",
      description: "Analyze an argument and critique its reasoning.",
      icon: <FileSignature className="h-10 w-10 text-primary-800" />,
    },
    reasoning: {
      title: "Integrated Reasoning",
      slug: "integrated-reasoning",
      description: "Evaluate information presented in multiple formats.",
      icon: <Puzzle className="h-10 w-10 text-primary-800" />,
    },
    quantitative: {
      title: "Quantitative",
      slug: "quantitative",
      description: "Interpret data and solve mathematical problems.",
      icon: <Calculator className="h-10 w-10 text-primary-800" />,
    },
    verbal: {
      title: "Verbal",
      slug: "verbal",
      description: "Analyze text, evaluate arguments, and synthesize info.",
      icon: <SpellCheck className="h-10 w-10 text-primary-800" />,
    },
  },
};

export const componentMap = {
  general: {
    verbal: <GeneralVerbalAbility />,
    quantitative: <GeneralQuantitative />,
    reasoning: <GeneralReasoning />,
    knowledge: <GeneralKnowledge />,
  },
  ielts: {
    reading: <IELTSReading />,
    writing: <IELTSWriting />,
    listening: <IELTSListening />,
  },
  toefl: {
    reading: <TOEFLReading />,
    writing: <TOEFLWriting />,
    listening: <TOEFLListening />,
  },
  sat: {
    reading: <SATReading />,
    writing: <SATWriting />,
    math: <SATMath />,
  },
  gre: {
    analytical: <GREAnalytical />,
    verbal: <GREVerbal />,
    quantitative: <GREQuantitative />,
  },
  gmat: {
    analytical: <GMATAnalytical />,
    reasoning: <GMATReasoning />,
    quantitative: <GMATQuantitative />,
    verbal: <GMATVerbal />,
  },
};
