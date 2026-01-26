import * as React from 'react';

export interface MenuProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Menu = React.forwardRef<SVGSVGElement, MenuProps>(
  ({ size = 24, ...props }, ref) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={size} height={size} ref={ref} {...props}><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={18} x2={21} y2={18} /></svg>
  )
);

Menu.displayName = 'Menu';

export default Menu;
