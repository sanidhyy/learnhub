import { Loader2Icon } from "lucide-react";
import React, { forwardRef, useEffect, useRef } from "react";

// Polyfill for findDOMNode to support React 19
if (typeof window !== "undefined") {
  const ReactDOM = require("react-dom");
  if (!ReactDOM.findDOMNode) {
    ReactDOM.findDOMNode = (component: any) => {
      if (component && component.nodeType === 1) {
        return component;
      }
      if (component && component.current && component.current.nodeType === 1) {
        return component.current;
      }
      if (component && component._reactInternalFiber) {
        return component._reactInternalFiber.child.stateNode;
      }
      if (component && component.querySelector) {
        return component.querySelector(".quill");
      }
      return null;
    };
  }
}

// Import Quill types
type QuillOptions = {
  theme?: string;
  value?: string;
  onChange?: (value: string) => void;
  modules?: any;
  formats?: string[];
  placeholder?: string;
  readOnly?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

// Create a wrapper component
const ReactQuillWrapper = forwardRef<any, QuillOptions>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [QuillComponent, setQuillComponent] = React.useState<any>(null);

  useEffect(() => {
    // Dynamically import react-quill only on client side
    if (typeof window !== "undefined") {
      import("react-quill").then((module) => {
        setQuillComponent(() => module.default);
      });
    }
  }, []);

  if (!QuillComponent) {
    return (
      <div ref={containerRef} className="quill-loading">
        <Loader2Icon className="size-6" />
      </div>
    );
  }

  return <QuillComponent {...props} ref={ref} />;
});

ReactQuillWrapper.displayName = "ReactQuillWrapper";

export default ReactQuillWrapper;
