
import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./cmps/Home.jsx"
import { AnimalList } from "./cmps/AnimalList.jsx"
import { SeasonClock } from "./cmps/SeasonClock.jsx"
import { CountDown } from "./cmps/CountDown.jsx"    
import { WatcherApp } from "./cmps/WatcherApp.jsx"
import { MouseMonitor } from "./cmps/MouseMonitor.jsx"

export function RootCmp() {

    const animalInfos = [ 
        {type: 'Malayan Tiger', count: 787}, 
        {type: 'Mountain Gorilla', count: 212}, 
        {type: 'Fin Whale', count: 28}, 
    ]

    return (
        <section className="app main-layout">
            <AppHeader />
            <main>
                <Home />
                <AnimalList animalInfos={animalInfos} />
                <SeasonClock />
                <CountDown toTime={Date.now() + 100 } onDone={()=>{ console.log('Done!') }} />
                <WatcherApp />
                <MouseMonitor />
            </main>
        </section>
    )
}