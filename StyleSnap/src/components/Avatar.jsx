import React from 'react';
import { BodyShape, TShirt, Hoodie, Jeans, Shorts, Shoes } from './AvatarAssets';

const Avatar = ({ 
  topStyle = 'tshirt_basic', 
  topColor, 
  bottomStyle = 'pants_jeans', 
  bottomColor, 
  shoeColor,
  skinTone = "#F5D0C5"
}) => {
  
  const renderTop = () => {
    switch(topStyle) {
      case 'hoodie_basic': return <Hoodie color={topColor} />;
      case 'tshirt_basic':
      default: return <TShirt color={topColor} />;
    }
  };

  const renderBottom = () => {
    switch(bottomStyle) {
      case 'shorts_basic': return <Shorts color={bottomColor} />;
      case 'pants_jeans':
      default: return <Jeans color={bottomColor} />;
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden shadow-inner">
      <svg 
        viewBox="0 0 400 600" 
        className="w-full h-full max-h-[80vh]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
            <feOffset dx="2" dy="5" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Shadow for depth */}
        <ellipse cx="200" cy="580" rx="100" ry="10" fill="rgba(0,0,0,0.1)" />

        <BodyShape skinTone={skinTone} />
        
        <g filter="url(#shadow)">
           {renderBottom()}
        </g>
        
        <g filter="url(#shadow)">
           {renderTop()}
        </g>
        
        <Shoes color={shoeColor || '#FFFFFF'} />
      </svg>
    </div>
  );
};

export default Avatar;
