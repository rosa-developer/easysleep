
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  image?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  image,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      <div className="mb-4 text-sleep-500">
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>
      </div>
      <p className="text-slate-700 mb-4 leading-relaxed">{quote}</p>
      <div className="flex items-center">
        {image && (
          <img
            src={image}
            alt={author}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
        )}
        <div>
          <h4 className="font-semibold text-slate-800">{author}</h4>
          {role && <p className="text-slate-500 text-sm">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
