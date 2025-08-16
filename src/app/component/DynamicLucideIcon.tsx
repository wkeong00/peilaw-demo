'use client'; // This component must be a Client Component

import React from 'react';
import * as LucideIcons from 'lucide-react'; // Import all icons for type safety

interface DynamicIconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof LucideIcons; // Enforces that 'name' must be a valid Lucide icon name
  size?: number;
  color?: string;
}

const DynamicLucideIcon: React.FC<DynamicIconProps> = ({ name, size, color, ...props }) => {
  const IconComponent = LucideIcons[name] as React.FC<any>;

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} color={color} {...props} />;
};

export default DynamicLucideIcon;
