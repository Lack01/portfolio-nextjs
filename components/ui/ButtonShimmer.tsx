export const ButtonShimmer = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    // Button code
    <button
      className={`file:inline-flex h-12 animate-shimmer items-center 
        justify-center rounded-xl border border-slate-800
        bg-[linear-gradient(210deg,#000103,45%,#1e2631,55%,#000103)]
        bg-[length:200%_100%] px-7 font-medium text-slate-300
        transition-colors focus:outline-none focus:ring-2
      focus:ring-slate-400 focus:ring-offset-3 cursor-pointer inline-flex 
        gap-2 focus:ring-offset-slate-50 ${otherClasses}` } onClick={handleClick}>
      {position === "right" && icon}
      {title}
      {position === "left" && icon}
    </button>
  );
};



       
      