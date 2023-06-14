import React, { useState } from 'react';

const HistoryItem = () => {
    const [dummyData, setDummyData] = useState([
    {
      id: 1,
      title: "2023-06-08 [12:10:23]",
      editor: "이운린",
    },
    {
      id: 2,
      title: "2023-06-07 [12:10:23]",
      editor: "한준",
    },
    {
      id: 3,
      title: "2023-06-06 [12:10:23]",
      editor: "이아론",
    },
    {
      id: 4,
      title: "2023-06-05 [12:10:23]",
      editor: "이힝힝",
    },
    {
      id: 5,
      title: "2023-06-04 [12:10:23]",
      editor: "이왕린",
    },
    {
      id: 6,
      title: "2023-06-03 [12:10:23]",
      editor: "윙운린",
    },
    {
      id: 7,
      title: "2023-06-02 [12:10:23]",
      editor: "이운왕",
    },
    {
      id: 8,
      title: "2023-06-01 [12:10:23]",
      editor: "한운린",
    },
    {
      id: 9,
      title: "2023-06-00 [12:10:23]",
      editor: "이아린",
    },
    {
      id: 10,
      title: "2023-06-10 [12:10:23]",
      editor: "이아론",
    },
  ]);

    return (
        <>
        {dummyData.map(item => (
            <React.Fragment key={item.id}>
              {item.title}
              {item.editor}
            </React.Fragment>
          ))}
          </>
    );
};

export default HistoryItem;