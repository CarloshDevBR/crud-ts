import { useState } from 'react'

import { Container, Area, Header } from './App.styles'

import { Item } from './types/item'

import { ListItem } from './components/ListItem'
import { AddTask } from './components/AddTask'

function App() {
  const [ list, setList ] = useState<Item[]>([
    {
      id: 1,
      task: 'comprar 51',
      done: false
    },
    {
      id: 2,
      task: 'comprar café',
      done: true
    }
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [ ...list ]
    
    newList.push({
      id: list.length + 1,
      task: taskName,
      done: false
    })

    setList(newList)
  }

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>

        <AddTask onEnter={handleAddTask} />

        {
          list.map((item, index) => (
            <ListItem
              key={index}
              item={item}
            />
          ))
        }

      </Area>
    </Container>
  )
}

export default App
