import * as React from 'react';

export interface ArrowRightProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const ArrowRight = React.forwardRef<SVGSVGElement, ArrowRightProps>(
  ({ size = 24, ...props }, ref) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={size} height={size} ref={ref} {...props}><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
  )
);

ArrowRight.displayName = 'ArrowRight';

export default ArrowRight;
