
import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./cmps/Home.jsx"
import { AnimalList } from "./cmps/AnimalList.jsx"

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
            </main>
        </section>
    )
}