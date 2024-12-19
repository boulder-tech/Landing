import Link from "next/link";

export const BrandButton = ({ children }: { children: React.ReactNode }) => {
    return (
      <button className="transition-all duration-500 whitespace-nowrap bg-accent hover:shadow-lg hover:shadow-blue-500/20 rounded-full px-4 text-sm h-12 font-medium text-foreground-heading flex items-center justify-center">
        {children}
      </button>
    );
  };

export const BrandLink = ({ children, href }: { children: React.ReactNode, href: string }) => {
    return (
      <Link href={href} className="transition-all duration-500 whitespace-nowrap bg-accent hover:shadow-lg hover:shadow-blue-500/20 rounded-full px-5 text-sm h-12 font-medium text-foreground-heading flex items-center justify-center">
        {children}
      </Link>
    );
  };
