import React, {useState, useEffect} from 'react'
import {getMovies} from '../functions/movies';
import {message} from 'antd'

const Movie = () => {
    const [data, setData] = useState([])
    const useGetData = async () => {
      const res = await getMovies()
      if(!res) message.error('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
        console.log(res)
        setData(res.data)
        
    }
    useEffect(useGetData, [])
  
    if(data.length > 0) {
      console.log('data',data)
    }

    return (
        <div>
          <h1>Hello</h1>
        </div>
    )
}
export default Movie