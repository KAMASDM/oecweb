import Reading from "@/components/IELTS/Reading/Reading";
import Listening from "@/components/IELTS/Listening/Listening";
import { BookOpen, Star, FilePenLine, Ear } from "lucide-react";

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
    reading: <Reading />,
    listening: <Listening />,
  },
};
