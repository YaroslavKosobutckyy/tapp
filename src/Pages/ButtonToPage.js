import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { EditOutlined } from '@ant-design/icons';


const ButtonToPage = () => {
    
    const  onclick =  () => {
        window.location.assign('http://localhost:3000/second/');
      }

return (
<>
    <div>
    <Button type="primary"
        onClick={(e) => onclick(e)}
    >
     <EditOutlined />  
         Редагувати
     </Button>
    </div>
</>
);
}

export default ButtonToPage;