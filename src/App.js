import { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import './App.scss';
import ColorBox from './components/ColorBox/ColorBox';
import FormSubmit from './components/FormSubmit/FormSubmit';
import PostList from './components/PostList/PostList';
import TodoList from './components/TodoList/TodoList';
import Pagination from './components/Pagination/Pagination';
import PostFilterForm from './components/PostFilterForm/PostFilterForm';
import Clock from './components/Clock/Clock';
import MagicBox from './components/MagicBox/MagicBox';

function App() {
  // ColorBox
  const [colors, setColors] = useState(() => {
    const data = JSON.parse(localStorage.getItem('colorList'));
    return data || ['deeppink', 'green'];
  });

  // TodoList
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend.' },
    { id: 2, title: 'We love Easy Frontend.' },
    { id: 3, title: 'They love Easy Frontend.' },
  ]);
  const handleTodoClick = (todo) => {
    const newTodoList = todoList.filter((item) => item !== todo);
    setTodoList(newTodoList);
  };
  const handleFormSubmit = (input) => {
    const lastId = todoList[todoList.length - 1].id;
    const newTodo = { id: lastId + 1, title: input };
    setTodoList([...todoList, newTodo]);
  };
  // Pagination
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 5,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 5,
    _page: 1,
    title_like: '',
  });
  // PostList
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    async function fetchPostList() {
      try {
        // _limit=10&_page=1
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const res = await axios.get(requestUrl);
        const data = res.data.data;
        setPostList(data);
        const pagination = res.data.pagination;
        setPagination(pagination);
      } catch (err) {
        console.log('Failed to fetch post list', err.message);
      }
    }
    fetchPostList();
  }, [filters]);

  const handlePageChange = (newPage) => {
    setFilters({ ...filters, _page: newPage });
  };
  const handleFilterFormSubmit = (input) => {
    const newFilters = { ...filters, _page: 1, title_like: input };
    setFilters(newFilters);
  };

  return (
    <div className="app">
      <h1>Learn React Hook</h1>
      <div className="container">
        {colors.map((color, index) => (
          <ColorBox key={`colorBox--${index}`} color={color} index={index} colors={colors} setColors={setColors} />
        ))}
      </div>
      <h1>Todo List</h1>
      <FormSubmit handleFormSubmit={handleFormSubmit} />
      <TodoList todoList={todoList} handleTodoClick={handleTodoClick} />
      <h1>Post List</h1>
      <PostFilterForm onSubmit={handleFilterFormSubmit} />
      <PostList postList={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      <h1>Clock</h1>
      <Clock />
      <h1>Magic Box</h1>
      <MagicBox />
    </div>
  );
}

export default App;
