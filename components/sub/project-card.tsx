import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_2px_12px_rgba(255,255,255,0.05)] hover:border-indigo-400/30 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(99,102,241,0.05),inset_0_2px_16px_rgba(255,255,255,0.1)] transition-all duration-500 ease-out"
    >
      {/* Visual Header / Image Mask Area */}
      <div className="relative w-full overflow-hidden bg-zinc-950/40 border-b border-white/[0.04]">
        {/* Subtle inner gloss overlay over the image */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020205]/40 via-transparent to-white/[0.02] pointer-events-none" />
        
        <Image
          src={src}
          alt={title}
          width={1000}
          height={600} // Tailored height ratio for card-style layouts
          className="w-full h-auto object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out brightness-[0.9] group-hover:brightness-100"
        />
      </div>

      {/* Dynamic Content Panel */}
      <div className="relative p-6 flex flex-col flex-grow">
        {/* Liquid highlight line separating title on hover */}
        <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/0 to-transparent group-hover:via-indigo-400/30 transition-all duration-700" />

        <h3 className="text-xl font-bold text-white tracking-tight mb-2 bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text group-hover:text-transparent group-hover:from-white group-hover:to-indigo-200 transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-sm text-zinc-400 font-light leading-relaxed flex-grow">
          {description}
        </p>

        {/* Action Link Indicator */}
        <div className="flex items-center gap-2 mt-5 text-[11px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-indigo-400 transition-colors duration-300">
          <span>Explore Pipeline</span>
          <svg
            className="w-3 h-3 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};