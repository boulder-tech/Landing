const BrandButton = ({ children }: { children: React.ReactNode }) => {
    return (
      <button className="transition-all duration-500 whitespace-nowrap bg-accent hover:shadow-lg hover:shadow-blue-500/20 rounded-full px-4 text-sm h-12 font-medium text-foreground-heading flex items-center justify-center">
        {children}
      </button>
    );
  };
  export default BrandButton;
  