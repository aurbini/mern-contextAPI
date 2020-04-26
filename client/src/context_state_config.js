import React, { useReducer } from 'react';
import Context from './utils/context';
import * as ACTIONS from './store/actions/actions';

import * as FormReducer from './store/reducers/formReducer';
import Routes from './routes';


const ContextState = () => {

    const [stateFormReducer, dispatchFormReducer] = useReducer(FormReducer.FormReducer,
                                                               FormReducer.initialState)

    const handleFormChange = (event) => {
      dispatchFormReducer(ACTIONS.user_input_change(event.target.value))
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      event.persist();
      dispatchFormReducer(ACTIONS.user_input_submit(event.target.useContext.value))
    };

    const handleDeleteItem = (id) => {
      console.log(id)
      dispatchFormReducer(ACTIONS.user_delete_item(id))
    }


    return(
      <div>
      <Context.Provider
          value={{
          
            useContextChangeState: stateFormReducer.user_textChange,
            useContextSubmitState: stateFormReducer.user_textSubmit,
            useContextItems: stateFormReducer.items,
            useContextDelete: (id) => handleDeleteItem(id),
            useContextSubmit: (event) => handleFormSubmit(event),
            useContextChange: (event) => handleFormChange(event),
            
          }}>
          <Routes />
      </Context.Provider>
      </div>
    )
}


export default ContextState;
