import { useState, KeyboardEvent } from 'react'

import { Container } from './styles'

import addIcon from '../../assets/add.svg'

type Props = {
    onEnter: (taskName: string) => void
}
export const AddTask = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('')

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.code === 'Enter' && inputText) {
            onEnter(inputText)
            setInputText('')
        }
    }

    return (
        <Container>
            <img alt='add' src={addIcon} />

            <input 
                type='text'
                placeholder='Adicione uma tarefa'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </Container>
    )
}