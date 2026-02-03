import Header from "@/components/Header";

export default function HeaderTest() {
  return (
    <>
      <Header />
      
      {/* Test Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-700 flex items-center justify-center text-white">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Header Hover Test
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
              Test the Services dropdown hover behavior. It should open smoothly without flickering.
            </p>
          </div>
        </section>

        {/* White Section */}
        <section className="min-h-screen bg-white flex items-center justify-center" data-header-color="white">
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              White Background Test
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The header should adapt to white background and the Services dropdown should still work smoothly.
            </p>
          </div>
        </section>

        {/* Instructions */}
        <section className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
              Testing Instructions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">✅ Expected Behavior</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hover over "Services" opens dropdown smoothly</li>
                  <li>• Dropdown stays open while cursor is over trigger or menu</li>
                  <li>• No flickering or blinking</li>
                  <li>• Smooth fade in/out animations</li>
                  <li>• Works on both dark and white backgrounds</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🚫 Fixed Issues</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• No more rapid open/close flickering</li>
                  <li>• No gaps causing mouse-leave triggers</li>
                  <li>• No layout shifts during hover</li>
                  <li>• Proper debouncing prevents re-trigger loops</li>
                  <li>• Escape key properly clears hover state</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}