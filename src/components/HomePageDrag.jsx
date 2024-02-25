import Draggable from "react-draggable";
import {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";

const HomePageDrag = () => {
  const [overlapRunning, setOverlapRunning] = useState(false);
  const [overlapReading, setOverlapReading] = useState(false);
  const [overlapYoga, setOverlapYoga] = useState(false);
  const [overlapHiking, setOverlapHiking] = useState(false);
  const [overlapCooking, setOverlapCooking] = useState(false);
  const [overlapArts, setOverlapArts] = useState(false);
  const runningRef = useRef(null);
  const readingRef = useRef(null);
  const yogaRef = useRef(null);
  const hikingRef = useRef(null);
  const cookingRef = useRef(null);
  const artsRef = useRef(null);
  const portalRef = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/forum');
  }
  const handleDrop = () => {
    const running = runningRef.current.getBoundingClientRect();
    const reading = readingRef.current.getBoundingClientRect();
    const yoga = yogaRef.current.getBoundingClientRect();
    const hiking = hikingRef.current.getBoundingClientRect();
    const cooking = cookingRef.current.getBoundingClientRect();
    const arts = artsRef.current.getBoundingClientRect();
    const portal = portalRef.current.getBoundingClientRect();

    const runningIsFullyContained =
    running.left >= portal.left &&
    running.right <= portal.right &&
    running.top >= portal.top &&
    running.bottom <= portal.bottom;

    const readingIsFullyContained =
    reading.left >= portal.left &&
    reading.right <= portal.right &&
    reading.top >= portal.top &&
    reading.bottom <= portal.bottom;

    const yogaIsFullyContained =
    yoga.left >= portal.left &&
    yoga.right <= portal.right &&
    yoga.top >= portal.top &&
    yoga.bottom <= portal.bottom;

    const hikingIsFullyContained =
    hiking.left >= portal.left &&
    hiking.right <= portal.right &&
    hiking.top >= portal.top &&
    hiking.bottom <= portal.bottom;

    const cookingIsFullyContained =
    cooking.left >= portal.left &&
    cooking.right <= portal.right &&
    cooking.top >= portal.top &&
    cooking.bottom <= portal.bottom;

    const artsIsFullyContained =
    arts.left >= portal.left &&
    arts.right <= portal.right &&
    arts.top >= portal.top &&
    arts.bottom <= portal.bottom;

    setOverlapRunning(runningIsFullyContained);
    setOverlapReading(readingIsFullyContained);
    setOverlapYoga(yogaIsFullyContained);
    setOverlapHiking(hikingIsFullyContained);
    setOverlapCooking(cookingIsFullyContained);
    setOverlapArts(artsIsFullyContained);

    if (overlapRunning) {
        navigate("/running");
    }

    if(overlapReading) {
        navigate("/reading");
    }

    if(overlapYoga) {
        navigate("/yoga");
    }

    if(overlapHiking) {
        navigate("/hiking");
    }

    if(overlapCooking) {
        navigate("/cooking");
    }

    if(overlapArts) {
        navigate("/arts");
    }

    console.log(runningIsFullyContained);
  };

  const handleDrag = () => {
    const running = runningRef.current.getBoundingClientRect();
    const reading = readingRef.current.getBoundingClientRect();
    const yoga = yogaRef.current.getBoundingClientRect();
    const hiking = hikingRef.current.getBoundingClientRect();
    const cooking = cookingRef.current.getBoundingClientRect();
    const arts = artsRef.current.getBoundingClientRect();
    const portal = portalRef.current.getBoundingClientRect();

    const runningIsFullyContained =
    running.left >= portal.left &&
    running.right <= portal.right &&
    running.top >= portal.top &&
    running.bottom <= portal.bottom;

    const readingIsFullyContained =
    reading.left >= portal.left &&
    reading.right <= portal.right &&
    reading.top >= portal.top &&
    reading.bottom <= portal.bottom;

    const yogaIsFullyContained =
    yoga.left >= portal.left &&
    yoga.right <= portal.right &&
    yoga.top >= portal.top &&
    yoga.bottom <= portal.bottom;

    const hikingIsFullyContained =
    hiking.left >= portal.left &&
    hiking.right <= portal.right &&
    hiking.top >= portal.top &&
    hiking.bottom <= portal.bottom;

    const cookingIsFullyContained =
    cooking.left >= portal.left &&
    cooking.right <= portal.right &&
    cooking.top >= portal.top &&
    cooking.bottom <= portal.bottom;

    const artsIsFullyContained =
    arts.left >= portal.left &&
    arts.right <= portal.right &&
    arts.top >= portal.top &&
    arts.bottom <= portal.bottom;

    setOverlapRunning(runningIsFullyContained);
    setOverlapReading(readingIsFullyContained);
    setOverlapYoga(yogaIsFullyContained);
    setOverlapHiking(hikingIsFullyContained);
    setOverlapCooking(cookingIsFullyContained);
    setOverlapArts(artsIsFullyContained);
  };

  return (
    <div>
      <Draggable onDrag={handleDrag} onStop={handleDrop}>
        <div ref={runningRef} className="running"></div>
      </Draggable>
      <Draggable onDrag={handleDrag} onStop={handleDrop}>
        <div ref={readingRef} className="reading"></div>
      </Draggable>
      <Draggable onDrag={handleDrag} onStop={handleDrop}>
        <div ref={yogaRef} className="yoga"></div>
      </Draggable>
      <Draggable onDrag={handleDrag} onStop={handleDrop}>
        <div ref={hikingRef} className="hiking"></div>
      </Draggable>
      <Draggable onDrag={handleDrag} onStop={handleDrop}>
        <div ref={cookingRef} className="cooking"></div>
      </Draggable>
      <Draggable onDrag={handleDrag} onStop={handleDrop}>
        <div ref={artsRef} className="arts"></div>
      </Draggable>
      <div ref={portalRef} className={`portal ${(overlapRunning || overlapReading || overlapYoga || overlapHiking || overlapCooking || overlapArts) ? 'overlap' : ''}`}></div>
    
      <button className="feedback1">Add an event or resource</button>
      <button className="feedback2" onClick={handleButtonClick}>Get in contact</button>
    </div>
  );
};

export default HomePageDrag;
