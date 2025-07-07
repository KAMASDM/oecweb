import { BookOpen, Star, FilePenLine, Ear } from "lucide-react";

const PlaceholderComponent = ({ name }) => (
  <div className="p-8">
    <h2 className="text-2xl font-bold">{name} Component</h2>
  </div>
);

const IELTSReading = () => <PlaceholderComponent name="IELTS Reading" />;
const IELTSWriting = () => <PlaceholderComponent name="IELTS Writing" />;
const IELTSListening = () => <PlaceholderComponent name="IELTS Listening" />;

export const testConfig = {
  ielts: {
    title: "IELTS",
    icon: <Star className="h-6 w-6 text-secondary-500" />,
  },
};

export const allTestCategories = {
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
};

export const componentMap = {
  ielts: {
    reading: <IELTSReading />,
    writing: <IELTSWriting />,
    listening: <IELTSListening />,
  },
};
