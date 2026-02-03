import Header from "@/components/Header";

export default function MobileLayoutTest() {
  return (
    <>
      <Header />
      
      {/* Test Content */}
      <main className="pt-20">
        {/* Hero Section - Dark Background */}
        <section className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center text-white">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Mobile Header Layout Test
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 mb-8">
              Testing the improved mobile header layout with proper spacing and positioning
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-semibold mb-6 text-center">📱 Mobile Layout Improvements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">✅ Layout Fixed:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Logo bigger</strong> - h-14 in mobile (was h-12)</li>
                    <li>• <strong>Proper spacing</strong> - justify-between layout</li>
                    <li>• <strong>Icons on right</strong> - Nicely positioned</li>
                    <li>• <strong>Tighter gaps</strong> - gap-1 on mobile (was gap-2)</li>
                    <li>• <strong>Smaller padding</strong> - p-1.5 on mobile icons</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">🎯 Mobile Header Structure:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Left:</strong> Bigger logo with proper spacing</li>
                    <li>• <strong>Center:</strong> Empty space (desktop nav hidden)</li>
                    <li>• <strong>Right:</strong> Phone | Search | Save | Menu</li>
                    <li>• <strong>Spacing:</strong> Optimized for mobile touch</li>
                    <li>• <strong>Layout:</strong> justify-between for proper distribution</li>
                  </ul>
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
              Header should adapt to white background with proper mobile layout maintained.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mobile Header Layout</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Before (Issues):</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>❌ Logo too small on mobile</li>
                    <li>❌ Icons cramped together</li>
                    <li>❌ Poor spacing distribution</li>
                    <li>❌ No clear left-right separation</li>
                    <li>❌ Inconsistent touch targets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">After (Fixed):</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✅ Bigger, prominent logo</li>
                    <li>✅ Icons properly spaced on right</li>
                    <li>✅ justify-between layout</li>
                    <li>✅ Clear left-right separation</li>
                    <li>✅ Optimized touch targets</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details Section */}
        <section className="min-h-screen bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center text-white">
          <div className="text-center px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              🔧 Technical Implementation
            </h2>
            <p className="text-xl md:text-2xl font-light opacity-90 mb-8">
              The mobile header layout has been optimized for better user experience.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Implementation Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-3">📐 Layout Changes:</h4>
                  <ul className="space-y-2 text-sm font-mono">
                    <li>• <strong>Header:</strong> justify-between (was items-center)</li>
                    <li>• <strong>Logo:</strong> h-14 mobile (was h-12)</li>
                    <li>• <strong>Icons gap:</strong> gap-1 mobile (was gap-2)</li>
                    <li>• <strong>Icon padding:</strong> p-1.5 mobile (was p-2)</li>
                    <li>• <strong>Desktop nav:</strong> absolute centered</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">🎨 Visual Improvements:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Better proportions</strong> - Logo stands out</li>
                    <li>• <strong>Cleaner spacing</strong> - Icons not cramped</li>
                    <li>• <strong>Touch-friendly</strong> - Proper tap targets</li>
                    <li>• <strong>Professional look</strong> - Balanced layout</li>
                    <li>• <strong>Responsive design</strong> - Works all screen sizes</li>
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