import React, { useState, useFormFields } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
  DatePicker,
} from 'antd';

   const FormSizeDemo = () => {
   const [componentSize, setComponentSize] = useState('default');
  
    const onFormLayoutChange = ({ size }) => {
       setComponentSize(size);
     };
    
      
    //  const [book, setBook] = useState({
    //   name: '',
    //   autor: '',
    //   date: new Date().toISOString().substring(0, 10) });



      
       const [Name, setName] = useState('');
       const [Autor, setAutor] = useState('');
    
    
       const onsubmit = (e) => {
           e.preventDefault();   
       }
  
       const onchangeName = (e) => {
           const { value, Name } = e.target;
           setName({
               ...Name, 
               Name: value
           })
       }
       const onchangeAutor = (e) => {
         const { value, Autor } = e.target;
         setAutor({
             ...Autor,
             [Autor]: value
         })
     }
  
  
 return (
 <>     

       <div className="form">
       <Form  onSubmit={onsubmit}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
          
          <Form.Item label="Input the title of the book">
            <Input  
             name="book" 
             type="text" 
             placeholder="Name of book"
            
            value={Name} onChange={onchangeName}/>
          </Form.Item>
          <Form.Item label="Input the author's name">
            <Input 
             name="autor" 
             type="text" 
             placeholder="Name of autor" 
  
             value={Autor} onChange={onchangeAutor} />
          </Form.Item>
          
          <Form.Item label="The date of publication">
            <DatePicker 
            type="date" 
            name="date"  
            // value={form.date} onChange={onChange}
            />
          </Form.Item>
         
          <Form.Item label="Add book to the library">
            <Button>Add book</Button>
          </Form.Item>
        </Form>
    </div> 
     
 </>
     );
};
  
export default FormSizeDemo;