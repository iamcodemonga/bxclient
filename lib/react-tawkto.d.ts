// tawk-messenger-react.d.ts

declare module '@tawk.to/tawk-messenger-react' {
    // Add your type definitions here based on the package's exports
    // For example:
    export interface TawkToProps {
        propertyId: string;
        widgetId: string;
    }
  
    const TawkTo: React.ComponentType<TawkToProps>;
    export default TawkTo
  
    // Add other exported components, functions, or types
  }