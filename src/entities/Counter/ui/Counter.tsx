import { type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button'
import { counterActions } from '../modal/slice/counterSlice';
export const Loader: FC = ({}) => {
    const dispatch = useDispatch();
    const counterValue = useSelector(state=> state.counter)
    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())

    }
  return (
    <div>
        <h1>{value}</h1>
        <Button onClick={increment}>inc</Button>
        <Button onClick={decrement}>dec</Button>

    </div>
  )
}
