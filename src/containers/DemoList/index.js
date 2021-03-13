import { useEffect, useState } from 'react';
import * as endpoints from '../../api';

import './index.css';

export default function DemoList({ title = 'Trending', query }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (query === '')
      (async () => {
        const { data } = await endpoints.getByType();
        const arr = data.map((item) => item.images.preview.mp4);
        setData(arr);
      })();
    else {
      (async () => {
        const { data } = await endpoints.getBySearch(query);
        const arr = data.map((item) => item.images.preview.mp4);
        setData(arr);
      })();
    }
  }, [query]);

  return (
    <div className="demo_list-container">
      <div className="title-container">
        <p>{title}</p>
        <p
          style={{
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        ></p>
      </div>
      <div className="demo_list">
        {data.map((item, index) => (
          <div key={index} className="demo_list__img-container">
            <video src={item} className="img-responsive" autoPlay loop />
          </div>
        ))}
      </div>
    </div>
  );
}
