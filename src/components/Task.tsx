import { Typography } from '@mui/material'
import styled from 'styled-components'
import Todos from '../store/Todos'

interface TaskType {
    title: string,
    status: string,
    id: number
}

const themeButton = {
    completed: { color: '#767676', paddingLeft: '5px', textDecoration: 'line-through' },
    active: { color: '#262626', paddingLeft: '5px' }
}

const Task = ({ title, status, id }: TaskType) => {
    return (
        <>
            <Container onClick={() => Todos.changeStatusOfTodo(id)}>
                <Checkbox type="checkbox" checked={status === 'completed' ? true : false} />
                <Typography variant='subtitle1' style={status === 'completed' ? themeButton.completed : themeButton.active}>
                    {title}
                </Typography>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
    margin-top: 10px;
    width: 90%;
    height: 50px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #C4C4C4;
    cursor: pointer;


`
const Checkbox = styled.input`
    width: 16px;
    height: 16px;
    border-radius: 100%;
    margin-left: 10px;
`

export default Task

