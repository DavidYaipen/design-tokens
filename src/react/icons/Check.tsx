import * as React from 'react';

export interface CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Check = React.forwardRef<SVGSVGElement, CheckProps>(
  ({ size = 24, ...props }, ref) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={size} height={size} ref={ref} {...props}><polyline points="20 6 9 17 4 12" /></svg>
  )
);

Check.displayName = 'Check';

export default Check;
