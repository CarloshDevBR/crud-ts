import { Container } from './styles'

import { Item } from '../../types/item'
import { useState } from 'react'

type Props = {
    item: Item,
}

export const ListItem = ({ item }: Props) => {
    const [ checkedRef, setCheckedRef ] = useState<boolean>(item.done)

    const handleChangeTask = () => {
        item.done = checkedRef
    }

    return (
        <Container done={checkedRef}>
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
        </Container>
    )
}