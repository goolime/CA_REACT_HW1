const { useState, useEffect } = React

export function SeasonClock() {
    const [currentTime, setCurrentTime] = useState(Date.now());
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(() => Date.now());

        }, 1000); // Update every second
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`seasonClockContainer ${isDark ? 'seasonClockContainerDark' : ''}`}
            onClick={() => setIsDark(() => !isDark)}
        >
            <img src={`./assets/img/seasons/${getCurrentSeason(currentTime)}.png`} alt={getCurrentSeason(currentTime)} />
            <h3>{`${getCurrentDay(currentTime)}!`}</h3>
            <h4>{`${new Date(currentTime).toLocaleTimeString()}`}</h4>
        </div>
    );
}

function getCurrentSeason(timestamp) {
    const month = new Date(timestamp).getMonth();
    if (month < 2 || month === 11) return "winter";
    if (month < 5) return "spring";
    if (month < 8) return "summer";
    return "autumn";
}
function getCurrentDay(timestamp) {
    const day = new Date(timestamp).getDay();
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day];
}
