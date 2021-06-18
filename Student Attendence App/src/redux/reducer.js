import {ADD_LISTITEM,DELETE_LISTITEM,UPDATE_LISTITEM} from './action'
import {items} from './states'

// import {AddItem,DeleteItem,UpdateItem} from './action'
export let reducer = (state = items,action) => {
    let newToDo;
    switch(action.type){
        case ADD_LISTITEM :
            newToDo = [...state];
            newToDo.push(action.payload);
            return newToDo;
        break;
        case DELETE_LISTITEM :
         newToDo = [...state];
        newToDo = newToDo.filter(todo => todo.id != action.payload)
        return newToDo;
        case UPDATE_LISTITEM :
            newToDo = [...state];
            
           let index = -1;
           for(let i = 0; i < newToDo.length;i++){
                               index++;

               if(newToDo[i].id === action.payload.id){break}
           }
           if(index != -1){
               newToDo[index] = action.payload;
               return newToDo;
           }




           // newToDo.map((item,index) => {console.log(action.payload[index])})
        break;
        default:
            return state
    }
}