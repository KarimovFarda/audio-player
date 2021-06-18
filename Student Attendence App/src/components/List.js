import React from 'react';
import { useSelector } from 'react-redux';
import { AddItem } from '../redux/action';
import Listİtems from './Listİtems'
import Header from '../components/header'
const List = () => {
    let items = useSelector(state => state)
    return (
        <div className="container">
            <Header />
          {items.map(item => {
              return <Listİtems key={item.id} todo={item} />
          })}
                </div>
    );
}

export default List;
