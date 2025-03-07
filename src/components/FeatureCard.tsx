
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow group",
        className
      )}
    >
      {Icon && (
        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-sleep-100 text-sleep-500 group-hover:bg-sleep-500 group-hover:text-white transition-colors">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-sleep-700 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
