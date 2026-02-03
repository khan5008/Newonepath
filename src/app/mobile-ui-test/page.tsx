import Header from "@/components/Header";
import HeroScreen from "@/components/HeroScreen";

export default function MobileUITest() {
  return (
    <>
      <Header />
      <HeroScreen />
      
      {/* Test Content */}
      <section className="min-h-screen bg-white flex items-center justify-center" data-header-color="white">
        <div className="text-center px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Mobile UI Improvements
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Test all the mobile header improvements and modern search UI.
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">✅ Mobile Improvements Applied</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">📱 Mobile Header:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✅ <strong>Bigger logo</strong> - Increased from h-8 to h-12 in mobile</li>
                  <li>✅ <strong>Icons moved left</strong> - Reduced gap from gap-3 to gap-2</li>
                  <li>✅ <strong>Phone dropdown</strong> - Now works in mobile view</li>
                  <li>✅ <strong>Modern search UI</strong> - Full overlay with suggestions</li>
                  <li>✅ <strong>Better spacing</strong> - Optimized for mobile interaction</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🎯 Test Instructions:</h4>
                <ol className="space-y-2 text-gray-700 text-sm">
                  <li>1. <strong>Check logo size</strong> - Should be bigger on mobile</li>
                  <li>2. <strong>Tap phone icon</strong> - Should show contact dropdown</li>
                  <li>3. <strong>Tap search icon</strong> - Modern overlay should appear</li>
                  <li>4. <strong>Check "Up Next"</strong> - Hidden on mobile, visible on desktop</li>
                  <li>5. <strong>Test all interactions</strong> - Should feel modern and smooth</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-white">
        <div className="text-center px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Modern Search Experience
          </h2>
          <p className="text-xl md:text-2xl font-light opacity-90 mb-8">
            The new search overlay provides a modern, intuitive search experience.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">🔍 Search Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-3">✨ Modern Design:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Full overlay</strong> with backdrop blur</li>
                  <li>• <strong>Centered modal</strong> with smooth animations</li>
                  <li>• <strong>Popular suggestions</strong> with service links</li>
                  <li>• <strong>Clean typography</strong> and proper spacing</li>
                  <li>• <strong>Keyboard shortcuts</strong> (ESC to close)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">🎯 User Experience:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Auto-focus</strong> on search input</li>
                  <li>• <strong>Click outside</strong> to close</li>
                  <li>• <strong>Service shortcuts</strong> for quick navigation</li>
                  <li>• <strong>Responsive design</strong> for all screen sizes</li>
                  <li>• <strong>Smooth transitions</strong> with Framer Motion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}