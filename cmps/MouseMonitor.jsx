
const { useState, useEffect , useRef } = React

export function MouseMonitor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isTracking, setIsTracking] = useState(true);
    const handleMouseMove = useRef();

    useEffect(() => {
        handleMouseMove.current = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };
        
        window.addEventListener("mousemove", handleMouseMove.current);
        
        return () => {
            window.removeEventListener("mousemove", handleMouseMove.current);
        };
    }, []);

    return (
        <div className="mouse-monitor">
            <div className={`mouse-coordinates ${isTracking ? '' : 'not-tracking'}`}>
            <p>X: {mousePos.x}</p>
            <p>Y: {mousePos.y}</p>
            </div>
            <button onClick={() => {
                if (isTracking) {
                    window.removeEventListener("mousemove", handleMouseMove.current);
                } else {
                    window.addEventListener("mousemove", handleMouseMove.current);
                }
                setIsTracking((prev) => !prev);
                setMousePos(() => ({ x: '-', y: '-' }));
            }}>{isTracking ? 'Stop Tracking' : 'Start Tracking'}</button>
        </div>
    );
}