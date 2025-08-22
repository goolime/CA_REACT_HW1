
const { useState, useEffect } = React

export function MouseMonitor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isTracking, setIsTracking] = useState(true);
    const [handleMouseMove, setHandleMouseMove] = useState(() => (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
    });

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
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
                    window.removeEventListener("mousemove", handleMouseMove);
                } else {
                    window.addEventListener("mousemove", handleMouseMove);
                }
                setIsTracking((prev) => !prev);
                setMousePos({ x: '-', y: '-' });
            }}>{isTracking ? 'Stop Tracking' : 'Start Tracking'}</button>
        </div>
    );
}