import React, { useState, useEffect } from "react";
import { getMovies } from "../functions/movies";
import { BackTop, message } from "antd";
import { List } from 'antd'
import MovieCard from "../components/cards/MovieCard";
import {UpCircleOutlined} from "@ant-design/icons";
const Movie = () => {
  const [data, setData] = useState([]);

  const useGetData = async () => {
    const res = await getMovies();
    if (!res) message.error("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
    console.log(res.data);
    setData(res.data.results);
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGetData();
  }, []);

  if (data.length > 0) {
    console.log("data", data);
  }

  const style = {
    height: 40,
    width: 150,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  }

  return (
    <div
    className="container-fluid"
    style={{ paddingLeft: "8.0555555556%", paddingRight: "8.0555555556%" }}
  >
      <h4 className="text-center" style={{ paddingTop: "4rem" }}>
        MOVIES
      </h4>{" "}
      <hr />
      <List
        grid={{ gutter: 16, column: 4 }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 8,
        }}
        footer={
          <div>
            <b>Movie hits by Tanawat</b>
          </div>
        }
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <MovieCard product={item} />
          </List.Item>
        )}
      />
      <BackTop> 
          <div style={style}><UpCircleOutlined style={{fontSize: '14px'}} /> BACK TO TOP</div>
      </BackTop>
    </div>
  );
};
export default Movie;
