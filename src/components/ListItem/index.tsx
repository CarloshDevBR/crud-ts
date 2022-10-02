import { Container, ContainerTask, ContainerImage } from './styles'

import { Item } from '../../types/item'
import { useState } from 'react'

import trash from '../../assets/trash.png'

type Props = {
    item: Item,
    handleDeleteTask: (id: number) => void
}

export const ListItem = ({ item, handleDeleteTask }: Props) => {
    const [ checkedRef, setCheckedRef ] = useState<boolean>(item.done)

    const handleChangeTask = () => {
        item.done = checkedRef
    }

    return (
        <Container>
            <ContainerTask done={checkedRef}>
                <input
                    type='checkbox'
                    placeholder='digite a task'
                    onChange={(e) => {
                        setCheckedRef(e.target.checked)
                        handleChangeTask()
                    }}
                    checked={checkedRef}
                />

                <label>{item.task}</label>
            </ContainerTask>

            <ContainerImage>
                <img src={trash} alt="trash" onClick={() => handleDeleteTask(item.id)} />
            </ContainerImage>
        </Container>
    )
}