import React from 'react';

export default ({ data }) => {
  const dataList = data.map((d) => <li>{JSON.stringify(d)}</li>)
  console.log(data);
  return (
    <div>
      <h3>Messages</h3>
      <ul>
        {dataList}
      </ul>
    </div>
  )
}