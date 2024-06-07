import './App.css';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { deletion, save, Updation } from './dataManagement/action';
import { useRef, useState } from 'react';

function App({}) {
  const [taxtValue, setTextValue] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const mockData = useSelector(state => state.mockData);
  const onDeleteHandler = (elemId) => {
    dispatch(deletion(elemId));
  }

  const onUpdateHandler = (element) => {
    setTextValue(element.name);
    dispatch(Updation(element, 'editableFieldTrue'));
    setTimeout(() => {
      if (inputRef?.current) {
        inputRef.current.focus();
      }
    }) 
  }

  const onSaveHandler = (element) => {
    dispatch(save(element, taxtValue));
  }

  const onTextChange = (value) => {
    setTextValue(value);
  }

  return (<div>
  <div className='title'>Electronics Details</div>
  <div className='mainContainer'>
  {mockData.length>0 && mockData.map((element, index) => {
    return (<div key={index} className='electronicsDeviceBlock' id={element?.id}>
      {element?.flag?.includes('editableFieldTrue') ? <input ref={inputRef} type='text' value={taxtValue} onChange={(e) => onTextChange(e.target.value)} /> : <p className='paragraph'>{element.name}</p>}
      {element?.data?.length > 0 && element?.data.map((element, index) => {
        return (<div key={index}>
          <p>{element.capacity}</p>
          <p>{element.color}</p>
        </div>)
      })}
      <div className='btn'>
      <button className='button' onClick={() => onDeleteHandler(element.id)}>Delete</button>
      {!(element?.flag?.includes('editableFieldTrue')) ? 
        <button className='button' onClick={() => onUpdateHandler(element)}>Update</button> :
      <button className='button' onClick={() => onSaveHandler(element)}>Save</button>}
      </div>
    </div>)
  })}
  </div>
  </div>);
}

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = {
  deletion,
  Updation,
  save
};  
export default connect(mapStateToProps, mapDispatchToProps)(App);
