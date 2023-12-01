const GhostButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="transition-all font-medium duration-200 hover:bg-gray-200 hover:border-gray-300 bg-gray-100 border border-gray-200 rounded-full px-4 text-sm h-10 text-foreground-heading flex items-center justify-center">
      {children}
    </button>
  );
};
export default GhostButton;
