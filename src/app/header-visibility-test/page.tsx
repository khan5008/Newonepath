import Header from "@/components/Header";

export default function HeaderVisibilityTest() {
  return (
    <>
      <Header />
      
      {/* Test Content */}
      <main className="pt-20">
        {/* Hero Section - Dark Background */}
        <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-white">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Header Visibility Test
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 mb-8">
              Test that header logo and navigation tabs remain visible when Services dropdown is open
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-semibold mb-6 text-center">✅ Fixed: Header Always Visible</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">🖥️ Desktop Test:</h4>
                  <ol className="space-y-2 text-sm">
                    <li>1. <strong>Hover over "Services"</strong> in the navigation</li>
                    <li>2. <strong>Services dropdown opens</strong> below the header</li>
                    <li>3. <strong>Header logo remains visible</strong> at the top</li>
                    <li>4. <strong>All navigation tabs visible</strong> (Services, Solutions, etc.)</li>
                    <li>5. <strong>Hover other tabs</strong> → Services dropdown closes</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">📱 Mobile Test:</h4>
                  <ol className="space-y-2 text-sm">
                    <li>1. <strong>Tap menu button</strong> (hamburger icon)</li>
                    <li>2. <strong>Mobile menu slides in</strong> from right</li>
                    <li>3. <strong>All navigation tabs visible</strong></li>
                    <li>4. <strong>Contact info at bottom</strong></li>
                    <li>5. <strong>Tap outside or X</strong> to close</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* White Section - Test Header Color Adaptation */}
        <section className="min-h-screen bg-white flex items-center justify-center" data-header-color="white">
          <div className="text-center px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              White Background Test
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Header adapts to white background. Services dropdown should still show header logo and tabs.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Z-Index Hierarchy Fixed</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Layer Order (Bottom to Top):</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Page Content:</strong> z-index default</li>
                    <li>• <strong>Services Bridge:</strong> z-[54] (hover gap)</li>
                    <li>• <strong>Services Dropdown:</strong> z-[55]</li>
                    <li>• <strong>Header:</strong> z-[60] (always on top)</li>
                    <li>• <strong>Search Overlay:</strong> z-[70]</li>
                    <li>• <strong>Mobile Menu:</strong> z-[70] & z-[80]</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Fixes Applied:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✅ Services dropdown starts below header</li>
                    <li>✅ Header has higher z-index than dropdown</li>
                    <li>✅ Logo and navigation always visible</li>
                    <li>✅ Proper layering hierarchy</li>
                    <li>✅ No more header disappearing</li>
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
              🎉 Header Visibility Fixed!
            </h2>
            <p className="text-xl md:text-2xl font-light opacity-90 mb-8">
              The header logo and navigation tabs now remain visible when the Services dropdown is open.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">What Was Fixed:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-3">❌ Before (Broken):</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Services dropdown covered entire screen</li>
                    <li>• Header logo disappeared</li>
                    <li>• Navigation tabs hidden</li>
                    <li>• Poor user experience</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">✅ After (Fixed):</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Services dropdown starts below header</li>
                    <li>• Header logo always visible</li>
                    <li>• Navigation tabs remain accessible</li>
                    <li>• Clean, professional appearance</li>
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