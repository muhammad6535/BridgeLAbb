import React from 'react';

// Simple artistic representations of clothing items
// These are simplified paths for an MVP demo

export const BodyShape = ({ skinTone = "#F5D0C5" }) => (
  <g id="body">
    {/* Head */}
    <circle cx="200" cy="80" r="50" fill={skinTone} />
    {/* Neck */}
    <rect x="185" y="120" width="30" height="40" fill={skinTone} />
    {/* Torso Base (behind clothes) */}
    <path d="M160,150 L240,150 L240,350 L160,350 Z" fill={skinTone} />
    {/* Arms */}
    <path d="M160,160 L120,280" stroke={skinTone} strokeWidth="30" strokeLinecap="round" />
    <path d="M240,160 L280,280" stroke={skinTone} strokeWidth="30" strokeLinecap="round" />
    {/* Legs Base */}
    <path d="M170,350 L170,550" stroke={skinTone} strokeWidth="35" strokeLinecap="round" />
    <path d="M230,350 L230,550" stroke={skinTone} strokeWidth="35" strokeLinecap="round" />
  </g>
);

export const TShirt = ({ color = "#FFFFFF" }) => (
  <path 
    d="M160,150 Q200,170 240,150 L280,180 L260,200 L240,180 L240,350 L160,350 L160,180 L140,200 L120,180 Z" 
    fill={color} 
    stroke="#000000" 
    strokeWidth="2"
  />
);

export const Hoodie = ({ color = "#9CA3AF" }) => (
  <g>
    {/* Hood back */}
    <path d="M150,140 Q200,110 250,140 L240,150 L160,150 Z" fill={color} />
    {/* Main Body */}
    <path 
      d="M155,150 L245,150 L250,360 L150,360 Z" 
      fill={color} 
      stroke="#000000" 
      strokeWidth="2"
    />
    {/* Sleeves */}
    <path d="M155,155 L110,270 L140,280 L165,180" fill={color} stroke="#000000" strokeWidth="2"/>
    <path d="M245,155 L290,270 L260,280 L235,180" fill={color} stroke="#000000" strokeWidth="2"/>
    {/* Pocket */}
    <path d="M180,280 L220,280 L210,320 L190,320 Z" fill="rgba(0,0,0,0.1)" />
  </g>
);

export const Jeans = ({ color = "#1E3A8A" }) => (
  <g>
    <path 
      d="M160,340 L240,340 L245,550 L210,550 L205,400 L195,400 L190,550 L155,550 Z" 
      fill={color} 
      stroke="#000000" 
      strokeWidth="2"
    />
  </g>
);

export const Shorts = ({ color = "#FCD34D" }) => (
  <g>
    <path 
      d="M160,340 L240,340 L245,450 L210,450 L205,400 L195,400 L190,450 L155,450 Z" 
      fill={color} 
      stroke="#000000" 
      strokeWidth="2"
    />
  </g>
);

export const Shoes = ({ color = "#FFFFFF" }) => (
  <g>
    <path d="M150,550 L190,550 L190,570 L150,570 Z" fill={color} stroke="#000000" strokeWidth="2" />
    <path d="M210,550 L250,550 L250,570 L210,570 Z" fill={color} stroke="#000000" strokeWidth="2" />
  </g>
);
