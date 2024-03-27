import React, { forwardRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Child component that needs to be forwarded
const ChildComponent = forwardRef((props, ref) => {
  return <div ref={ref}>Child Component</div>;
});

// Parent component
function ParentComponent() {
  const childRef = React.createRef();

  const handleClick = () => {
    // Access the DOM element or component instance using the ref
    if (childRef.current) {
      childRef.current.style.color = 'red';
    }
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Define a route with a child component */}
      <Router>
        <Route path="/">
          {/* Pass the ref to the child component */}
          <ChildComponent ref={childRef} />
        </Route>
      </Router>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default ParentComponent;
