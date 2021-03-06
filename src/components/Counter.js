import classes from './Counter.module.css';
import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {counterAction} from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter);
  const show = useSelector(state => state.showCounter)



  const incrementHandler = () =>{
    dispatch(counterAction.increment())
  }

  const decrementHandler = () =>{
    dispatch(counterAction.decrement());
  }

  const increaseHandler = () => {
    dispatch(counterAction.increase(10))
  }

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  return (   

    
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
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
