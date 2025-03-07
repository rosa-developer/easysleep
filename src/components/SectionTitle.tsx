
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  pretitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({
  pretitle,
  title,
  description,
  centered = false,
  className,
}: SectionTitleProps) => {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12",
        centered && "mx-auto text-center",
        className
      )}
    >
      {pretitle && (
        <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-sleep-700 uppercase bg-sleep-100 rounded-full">
          {pretitle}
        </div>
      )}
      <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-600 text-lg max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
