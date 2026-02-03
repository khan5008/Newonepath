import Header from "@/components/Header";

export default function MobileAccordionTest() {
  return (
    <>
      <Header />
      
      {/* Test Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Mobile Accordion Test
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 mb-8">
              Test the new mobile Services accordion with scrollable nested dropdowns
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-semibold mb-6 text-center">📱 Mobile Services Accordion</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">✅ New Features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>In-place expansion</strong> - Services expands within sidebar</li>
                    <li>• <strong>Scrollable content</strong> - Smooth scrolling for long lists</li>
                    <li>• <strong>Nested accordions</strong> - Each category has dropdowns</li>
                    <li>• <strong>Overview option</strong> - Direct link to services page</li>
                    <li>• <strong>Smooth animations</strong> - No layout shifts or flicker</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">🎯 Test Steps:</h4>
                  <ol className="space-y-2 text-sm">
                    <li>1. <strong>Tap menu button</strong> (hamburger icon)</li>
                    <li>2. <strong>Tap "Services"</strong> → Should expand in-place</li>
                    <li>3. <strong>See categories:</strong> Overview, Branding, Experience Design, Technology, Digital Marketing</li>
                    <li>4. <strong>Tap any category</strong> → Sub-services expand</li>
                    <li>5. <strong>Scroll content</strong> → Should be smooth and contained</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* White Section */}
        <section className="min-h-screen bg-white flex items-center justify-center" data-header-color="white">
          <div className="text-center px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Accordion Structure
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              The mobile Services accordion follows the exact structure from your reference screenshot.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Service Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">📋 Structure:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Overview</strong> - Direct link to /services</li>
                    <li>• <strong>Branding</strong> - 6 sub-services</li>
                    <li>• <strong>Experience Design</strong> - 5 sub-services</li>
                    <li>• <strong>Technology</strong> - 8 sub-services</li>
                    <li>• <strong>Digital Marketing</strong> - 6 sub-services</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">⚙️ Behavior:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✅ Smooth expand/collapse animations</li>
                    <li>✅ Scrollable when content overflows</li>
                    <li>✅ One category open at a time</li>
                    <li>✅ Proper state management</li>
                    <li>✅ No layout shifts or flicker</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Section */}
        <section className="min-h-screen bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center text-white">
          <div className="text-center px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              🎉 Mobile Accordion Complete!
            </h2>
            <p className="text-xl md:text-2xl font-light opacity-90 mb-8">
              Services now expands in-place with scrollable nested dropdowns, exactly matching your reference.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Implementation Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-3">🔧 Technical Features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Framer Motion</strong> for smooth animations</li>
                    <li>• <strong>AnimatePresence</strong> for enter/exit transitions</li>
                    <li>• <strong>Overflow scroll</strong> for long content</li>
                    <li>• <strong>State management</strong> for accordion behavior</li>
                    <li>• <strong>Auto-reset</strong> when menu closes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">📱 Mobile-Only Feature:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Only appears in mobile view (lg:hidden)</li>
                    <li>• Desktop keeps existing dropdown</li>
                    <li>• Responsive design maintained</li>
                    <li>• Clean separation of concerns</li>
                    <li>• Matches reference screenshot exactly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}