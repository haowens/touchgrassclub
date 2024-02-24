import React, { useRef, useState, useEffect } from 'react';

const OverlappingDetector = () => {
  const [overlap, setOverlap] = useState(false);
  const element1Ref = useRef(null);
  const element2Ref = useRef(null);

  useEffect(() => {
    const checkOverlap = () => {
      const rect1 = element1Ref.current.getBoundingClientRect();
      const rect2 = element2Ref.current.getBoundingClientRect();

      const overlapDetected =
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y;

      setOverlap(overlapDetected);
    };

    checkOverlap();

    // Add event listeners or any other setup if needed

    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <div>
      <div
        ref={element1Ref}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: overlap ? 'red' : 'green',
          position: 'absolute',
          top: '50px',
          left: '50px',
        }}
      >
        Element 1
      </div>
      <div
        ref={element2Ref}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: overlap ? 'red' : 'blue',
          position: 'absolute',
          top: '200px',
          left: '200px',
        }}
      >
        Element 2
      </div>
      {overlap && <p>Elements are overlapping!</p>}
    </div>
  );
};

export default OverlappingDetector;
