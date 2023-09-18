function LayoutContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full md:max-w-[70%] mx-auto pb-12">
      <div className="bulb fixed top-0 left-0" />
      <div className="bulb fixed top-0 right-0" />
      { children }
    </main>
  );
}

export default LayoutContainer;
