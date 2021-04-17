import React from "react"

const Table = (props) => {

  return props.characters.map((character) => {

  return (
    <div id="table" className="container">
      <table className="table table-sm table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Homeworld</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          <tr key={character.id}>
            <td>{character.name}</td>
            <td>{character.birth_year}</td>
            <td>{character.height}</td>
            <td>{character.mass}</td>
            <td>{character.homeworld}</td>
            <td>{character.species}</td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  })
}

export default Table