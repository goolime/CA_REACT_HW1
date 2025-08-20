const { useState, useEffect } = React

export function CountDown( { startFrom, toTime , onDone }) {
    const [count, setCount] = useState(toTime ? new Date(toTime) - Date.now() : (startFrom ? startFrom : undefined)); // Default to 1000ms (1 second)

    if (count === undefined) {
        throw new Error('CountDown requires a positive startFrom value or a valid toTime');
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount <= 0) {
                    clearInterval(interval);
                    if (onDone) onDone();
                    return 0;
                }
                return prevCount - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    var seconds = count%60;
    var minutes = Math.floor((count / 60)%60);
    var hours = Math.floor(count / (60 * 60));

    return (
        <div className={`countDownContainer 
        ${count < 10 && count > 0 ? 'countDownContainerLow' : ''} 
        ${count <= 0 ? 'countDownContainerDone' : ''}`}>
            <h2>{count > 0 ? `${hours<10 ? '0': ''}${hours}:${minutes<10 ? '0' : ''}${minutes}:${seconds<10 ? '0' : ''}${seconds}` : "Time's up!"}</h2>
        </div>
    );
}