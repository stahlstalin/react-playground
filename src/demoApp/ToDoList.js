import React from 'react';

const ToDoList = (poop) => <ul>
    {poop.data.map((item) => <li key={Math.random()}>{item}</li> )}
</ul>;

export default ToDoList;
