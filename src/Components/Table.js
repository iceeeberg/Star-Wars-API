import React from "react"

function Table () {

  return character.map(i => {

  return (
    <div>
      <table>
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
          <tr key={i}>
            <td>{character.id}</td>
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