import * as React from 'react';

export interface ChevronDownProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const ChevronDown = React.forwardRef<SVGSVGElement, ChevronDownProps>(
  ({ size = 24, ...props }, ref) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={size} height={size} ref={ref} {...props}><polyline points="6 9 12 15 18 9" /></svg>
  )
);

ChevronDown.displayName = 'ChevronDown';

export default ChevronDown;
