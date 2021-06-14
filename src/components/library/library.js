import React, { useEffect, useState } from 'react';
import {Book} from '../book';
import { BookOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { PlusOutlined } from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {loadBooksData, deleteBooksData} from '../../redux/action/booksAction';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ButtonToPage from '../../Pages/ButtonToPage';
import ButtonBackPage from '../../Pages/ButtonBackPage';

import FormSizeDemo from '../formsizidemo';


export const Library = (props) => {
    const dispatch = useDispatch();
    const booksData = useSelector(state => state.books.books); 
    const data = [
    {
        id: 0,
        name: 'Джейн Ейр (Мара)',
        author: 'Олексій Щербак',
        date: '10/06/21'
    },
    {
        id: 1,
        name: 'Суджені. The One',
        author: 'Джон Маррс',
        date: '04/04/21'
    },
    {
        id: 2,
        name: 'Художниця тіла',
        author: 'Дон Делілло',
        date: '12/02/21'
    }
];
    useEffect(() => {
    const checkBooksDate = localStorage.getItem('books');
            if(!checkBooksDate){
            dispatch(loadBooksData(data));
            localStorage.setItem('books', JSON.stringify(data));
                                }
        },[]);
        
    const PAGE_ADD = 'books';
    const [page, setPage] = useState(); 
    const navigateTo = (nextPage) => {
      setPage(nextPage);
    };
  
    //  const removeBook = (bookToRemove) => {
    //           setbooksData(
    //           booksData.filter((book)=> book !== bookToRemove));
    //           dispatch(deleteBooksData(data));
    //   };
return (
<>
        <div className="container">
            <div className="title">
                <h1><BookOutlined /> Develop a book library</h1>
                <div className='btn'>
                 <div className="btn__1">
                        <Button type="primary" onClick={() => navigateTo(PAGE_ADD)}>
                        <PlusOutlined />  
                            Додоти книгу
                        </Button>
                        { page === PAGE_ADD && (
                            <FormSizeDemo />
                        )}
                </div>
                <div className="btn__2">
                        <Router>
                        <Route path="/" exact exact component={ButtonToPage}/>
                        <Route path="/second" exact component={ButtonBackPage}/>
                        </Router>
                </div>   
                </div>
            </div>
            <div className="content">
                <ul>
                    {
                        booksData?.map(book => <Book key={book.id} book={book} />)
                    }
                </ul>
               
            </div>
        </div>
</>
    )
}

