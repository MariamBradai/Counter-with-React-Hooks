const Counter = () => {
    const [count, setCount] = React.useState(0)
    const [totalTaps, setTotalTaps] = React.useState(0)


    function handleIncrement() {
        setCount(prevCount => {
            return prevCount + 1
        })
        setTotalTaps(prevTotalTaps => {
            return prevTotalTaps + 1
        })
    }
    const handleDecrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1)
            setTotalTaps(prevTotalTaps => prevTotalTaps + 1)
        } else {
            setTotalTaps(prevTotalTaps => prevTotalTaps + 1)
        }

    }
    function handleReset() {
        setCount(0)
    }
    function handleResetAll() {
        setCount(0)
        setTotalTaps(0)
    }
    return (
        <div className="counter">
            <h1> Counter </h1>
            <h1 className="count"> {count} </h1>
            <h1 className="taps"> Total taps :{totalTaps}</h1>
            <div >
                <button onClick={handleIncrement}>Increment + </button>
                <button onClick={handleDecrement}>Decrement - </button>
            </div>
            <div >
                <button className="reset-count" onClick={handleReset}>Reset</button>
                <button className="reset-all" onClick={handleResetAll}>Reset All</button>
            </div>
        </div>
    )
}
const App = (props) => {
    const [counterIsShown, setCounterIsShown] = React.useState(true)
    const toggleCounter = () => {
        setCounterIsShown(prevCounterIsShown => {
            setCounterIsShown(!prevCounterIsShown)
        })
    }
    return (
        <div>
            <h1>Counter with React Hooks</h1>
            <button className="hideCounter" onClick={toggleCounter}>Hide Counter</button>
            {counterIsShown && <Counter />}
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))
