import React, { useContext } from 'react'
import { Container, ListGroup, ListGroupItem, 
        Button, Row, Col } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Context from '../utils/context';

const ShoppingList = () => {

  const context = useContext(Context)

  const { useContextItems, useContextDelete } = context
  console.log(useContextItems)
  return ( 
    <Container>
      <ListGroup mt="10">
        <TransitionGroup className={ShoppingList}>
          {useContextItems.map(({ id, item })=> (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Row >
                  <Col sm="8" xs="4">
                    <span>{item}</span>
                  </Col>
                  <Col sm="4" xs="2"> 
                    <Button
                      id={id}
                      onClick={useContextDelete.bind(this, id)}
                      color="danger"
                      style={{marginBottom: '2rem'}}
                      >Delete</Button>
                  </Col>            
                </Row>
              </ListGroupItem>    
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup> 
    </Container>
  )
}

export default ShoppingList;


{/* <Button 
onClick={onAddItem}
color="dark"
style={{marginBottom: '2rem'}}
>Add Item</Button> */}



  // const onDelete = (id) => {
  //   setState({
  //     items: state.items.filter(item=> item.id !== id)
  //   })
  // }


    // const onAddItem = () => {
  //     const name = prompt('Enter an Item')
  //     if(name){
  //       context.handleAddItem(name)
  //       // setState({
  //       //   items: [
  //       //     ...items, 
  //       //     { id: uuid(), 
  //       //       name }
  //       //   ]
  //       }
  //     }


    // console.log(context)
  // console.log(state)
  // const [ state, setState ] = useState({
  //   items: [
  //     { id: uuid(), name: 'Eggs'}, 
  //     { id: uuid(), name: 'Milk'},
  //     { id: uuid(), name: 'Steak'},
  //     { id: uuid(), name: 'Water'},
  //   ]
  // })