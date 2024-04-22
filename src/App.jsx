
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodo} from './slice/todo';
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  
  if (state.todo.isLoading) {
    return <h1>Loading</h1>; 
  }
 
  return (
    <div className='bg-black h-screen'>
      <h1 className='text-3xl text-white'>Hello world, I'm now learning API fetching from Redux Toolkit</h1>
      <button className='text-2xl bg-green-400 text-white px-2' onClick={() => dispatch(fetchTodo())}>Fetch Todos</button>
      {
        state.todo.data &&state.todo.data.map(todo => ( // Corrected map function and added key for each list item
          <div className='text-white grid' key={todo.id}>
            <li>{todo.title}</li> {/* Displaying todo item */}
            <li>{todo.userId}</li> {/* Displaying todo item */}
          </div>
        ))
      }
    </div>
  );
}

export default App;
