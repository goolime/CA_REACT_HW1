import { watcherService } from "../services/watcherService.js";

const { useState, useEffect } = React

function Watcher({ name, onRemove , onOpen}) {
    return (
        <div className="watcherCard">
            <img src={`https://robohash.org/${name}`} alt={name} />
            <h3>{name}</h3>
            <button onClick={onOpen}>Details</button>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
}

export function WatcherApp() {

    const [watchers, setWatchers] = useState([])
    const [selectedWatcher, setSelectedWatcher] = useState(null)

    useEffect(() => {
        watcherService.getWatchers().then(watchers => setWatchers(watchers))
    }, [])

    console.log(watchers)
    return (
        <div className="watcherApp">
            <div className="watchersContainer">
                {watchers.map(watcher => (
                    <Watcher name={watcher.fullname} key={watcher.id} 
                    onRemove={()=>{
                        watcherService.removeWatcher(watcher.id).then(() => {
                            setWatchers(watchers.filter(w => w.id !== watcher.id))
                        }).catch(err => {
                            console.error('Error removing watcher:', err)
                        })
                    }} onOpen={() => {
                        setSelectedWatcher(() => watcher)
                    }}/>
                ))}
            </div>
            <div className={`watcherDetailsModal ${selectedWatcher ? 'open' : ''}`}>
                <div className="watcherCard">
                    <h2>Watcher Details</h2>
                    <h4>Name: {selectedWatcher ? selectedWatcher.fullname : ''}</h4>
                    <img src={`https://robohash.org/${selectedWatcher ? selectedWatcher.fullname : ''}`} alt={selectedWatcher ? selectedWatcher.fullname : ''} />
                    <ul>
                        {selectedWatcher ? selectedWatcher.movies.map(movie => (
                            <li key={movie}>{movie}</li>
                        )) : null}
                    </ul>
                    <button onClick={() => {setSelectedWatcher(()=>null)}}>Close</button>
                </div>
            </div>
        </div>
    );
}