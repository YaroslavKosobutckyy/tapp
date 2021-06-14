import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {book} from './formsizidemo';

export const Book = ({book, removeBook}) => {
   
    return(
        <li>
            <div className="block block--mod">
                <h2>{book.name}</h2>
                <p>{book.author}</p>
                <p>{book.date}</p>
            </div>
            <div className="block">
                <Button type="primary" danger removeBook={removeBook}>
                    <DeleteOutlined /> Видалити
                </Button>
            </div>
        </li>
    );
};
