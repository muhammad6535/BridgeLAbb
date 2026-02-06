import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Avatar from './components/Avatar';
import { Sparkles, ShoppingCart, RefreshCw, Share2 } from 'lucide-react';
import { products as productsData } from './data/products';

function App() {
  const [outfit, setOutfit] = useState({
    top: { style: 'tshirt_basic', color: '#FFFFFF' },
    bottom: { style: 'pants_jeans', color: '#1E3A8A' },
    shoes: { style: 'shoes_running', color: '#FFFFFF' }
  });

  const [activeCategory, setActiveCategory] = useState('tops');

  const handleProductSelect = (product) => {
    // If product has colors, default to the first one if not already selected
    const defaultColor = product.colors[0];
    
    if (product.category === 'tops') {
      setOutfit(prev => ({
        ...prev,
        top: { style: product.style, color: defaultColor }
      }));
    } else if (product.category === 'bottoms') {
      setOutfit(prev => ({
        ...prev,
        bottom: { style: product.style, color: defaultColor }
      }));
    } else if (product.category === 'shoes') {
      setOutfit(prev => ({
        ...prev,
        shoes: { style: product.style, color: defaultColor }
      }));
    }
  };

  const handleColorChange = (category, color) => {
    if (category === 'tops') {
      setOutfit(prev => ({ ...prev, top: { ...prev.top, color } }));
    } else if (category === 'bottoms') {
      setOutfit(prev => ({ ...prev, bottom: { ...prev.bottom, color } }));
    } else if (category === 'shoes') {
      setOutfit(prev => ({ ...prev, shoes: { ...prev.shoes, color } }));
    }
  };

  const categories = [
    { id: 'tops', label: 'Tops' },
    { id: 'bottoms', label: 'Bottoms' },
    { id: 'shoes', label: 'Shoes' },
  ];

  // Filter products by active category
  const filteredProducts = productsData.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Virtual <span className="text-indigo-600">Fitting Room</span>
          </h1>
          <p className="mt-2 text-lg text-gray-500">
            Try on looks before you buy. Mix, match, and find your perfect style.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-200px)] min-h-[600px]">
          
          {/* Left Column: Avatar Display */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex-grow flex items-center justify-center relative overflow-hidden">
               {/* Background Pattern */}
               <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4F46E5_1px,transparent_1px)] [background-size:16px_16px]"></div>
               
               <Avatar 
                 topStyle={outfit.top.style} 
                 topColor={outfit.top.color}
                 bottomStyle={outfit.bottom.style}
                 bottomColor={outfit.bottom.color}
                 shoeColor={outfit.shoes.color}
               />

               {/* Action Buttons */}
               <div className="absolute bottom-6 right-6 flex flex-col gap-3">
                 <button className="bg-white p-3 rounded-full shadow-md hover:bg-gray-50 text-gray-600 transition-colors" title="Randomize">
                    <RefreshCw size={20} />
                 </button>
                 <button className="bg-indigo-600 p-3 rounded-full shadow-md hover:bg-indigo-700 text-white transition-colors" title="Share Look">
                    <Share2 size={20} />
                 </button>
               </div>
            </div>
          </div>

          {/* Right Column: Controls & Products */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            
            {/* Category Tabs */}
            <div className="flex border-b border-gray-100 overflow-x-auto">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-1 py-4 px-6 text-sm font-medium text-center whitespace-nowrap transition-colors
                    ${activeCategory === cat.id 
                      ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' 
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Current Selection & Color Picker */}
            <div className="p-6 border-b border-gray-100 bg-gray-50/30">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                Current {categories.find(c => c.id === activeCategory)?.label.slice(0, -1)} Color
              </h3>
              <div className="flex gap-3">
                {/* We show colors based on the currently selected product type in this category, 
                    OR generic colors if we want to be freer. 
                    Let's show a palette based on the current outfit item for this category.
                */}
                {(() => {
                  let currentItem = outfit.top;
                  if (activeCategory === 'bottoms') currentItem = outfit.bottom;
                  if (activeCategory === 'shoes') currentItem = outfit.shoes;
                  
                  // Find the product that matches the current style to get available colors
                  const currentProduct = productsData.find(p => p.style === currentItem.style);
                  const colors = currentProduct ? currentProduct.colors : ['#FFFFFF', '#000000'];

                  return colors.map(color => (
                    <button
                      key={color}
                      onClick={() => handleColorChange(activeCategory, color)}
                      className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                        ${currentItem.color === color ? 'border-gray-900 ring-1 ring-gray-900' : 'border-gray-200'}
                      `}
                      style={{ backgroundColor: color }}
                      aria-label={`Select color ${color}`}
                    />
                  ));
                })()}
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-grow overflow-y-auto p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div 
                    key={product.id}
                    onClick={() => handleProductSelect(product)}
                    className="group cursor-pointer rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200 overflow-hidden bg-white"
                  >
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 h-48 relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity"
                      />
                      {/* Active Indicator */}
                      {((activeCategory === 'tops' && outfit.top.style === product.style) ||
                        (activeCategory === 'bottoms' && outfit.bottom.style === product.style) ||
                        (activeCategory === 'shoes' && outfit.shoes.style === product.style)) && (
                        <div className="absolute top-2 right-2 bg-indigo-600 text-white p-1 rounded-full shadow-sm">
                          <Sparkles size={16} fill="currentColor" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-gray-900 truncate">{product.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">${product.price}</p>
                      <button className="mt-3 w-full flex items-center justify-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                        <ShoppingCart size={16} />
                        Try On
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
