import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { EditOutlined } from '@ant-design/icons';


const ButtonBackPage = () => {
    
    const onclick = () => {
        window.location.assign('http://localhost:3000/');
      }

return (
<>
    <div>
    <Button type="primary"
        onClick={(e) => onclick(e)}
    >
     <EditOutlined />  
         Назад
     </Button>
    </div>
</>
);
}

export default ButtonBackPage;