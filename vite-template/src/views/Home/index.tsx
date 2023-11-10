import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Upload } from 'antd';
import axios from 'axios';
const Home = () => {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  // console.log(import.meta.env);
  const handleOnclick = () => {
    console.log(selectedFile);

    const formData = new FormData();
    formData.append('userId', '2222');
    formData.append('file', selectedFile);
    axios
      .post('http://127.0.0.1:3000/upload', formData, {
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // },
      })
      .then((res) => {
        console.log(res);
      });
  };

  // const handlePictureChange = (e: any) => {
  //   setSelectedFile(e.target.files[0]);
  // };
  // const uploadChangeHandler = (e: any) => {
  //   console.log(e);
  // };
  return (
    <>
      Home
      <Upload
        name='file'
        customRequest={handleOnclick}
        beforeUpload={(e: any) => {
          setSelectedFile(e);
        }}>
        <Button>Click to Upload</Button>
      </Upload>
      {/* <input type='file' onChange={handlePictureChange} /> */}
      <Button onClick={handleOnclick}>测试后台</Button>
      <progress value='22' max='100'></progress>
      <Outlet />
    </>
  );
};

export default Home;
