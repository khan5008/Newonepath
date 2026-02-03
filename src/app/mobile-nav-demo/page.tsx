import ResponsiveNavigation from "@/components/ResponsiveNavigation";

export default function MobileNavDemo() {
  return (
    <>
      <ResponsiveNavigation />
      
      {/* Demo Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Mobile Navigation Demo
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
              Experience our premium mobile-first navigation system designed for service-based companies
            </p>
          </div>
        </section>

        {/* White Section */}
        <section className="min-h-screen bg-white flex items-center justify-center" data-header-color="white">
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              White Background Section
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Notice how the header adapts to different background colors for optimal visibility and user experience.
            </p>
          </div>
        </section>

        {/* Dark Section */}
        <section className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Dark Background Section
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The navigation system automatically adjusts colors and maintains accessibility across all sections.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}