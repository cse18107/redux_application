import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';


const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter);

  const incrementHandler = () =>{
    dispatch({type:"increment"})
  }


  const decrementHandler = () =>{
    dispatch({type:"decrement"});
  }

  const increaseHandler = () => {
    dispatch({type:"increase",amount:5})
  }

  const toggleCounterHandler = () => {
    dispatch({type:"toggle"})
  };

  return (   

    
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={increaseHandler}>INCREASE BY 5</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>TOGGLE COUNTER</button>
    </main>
  );
};

export default Counter;
