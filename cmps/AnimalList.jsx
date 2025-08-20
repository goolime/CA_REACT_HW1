export function AnimalList({ animalInfos }) {
    return (
        <div className="rareAnimalContainer">
            <h2>Rare Animals</h2>
            <table className="animal-list">
                <tbody>
                    {animalInfos.map(animal => (
                        <tr key={animal.type}>
                            <td>{animal.type}</td>
                            <td>{animal.count}</td>
                            <td><a href={`https://www.google.com/search?q=${animal.type}`}>Search</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
