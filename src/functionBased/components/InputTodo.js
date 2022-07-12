import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const { addTodoProps } = props;

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button type="button" className="input-submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
};
// For different input fields
// const InputTodo = props => {
//   const [inputText, setInputText] = useState({
//     fName: "",
//     lastName: "",
//   })

//   const onChange = e => {
//     setInputText(prevState => {
//       return {
//         ...prevState,
//       //...inputText,
//       [e.target.name]: e.target.value,
//       }
//     })
//   }

//   const handleSubmit = e => {
//     e.preventDefault()
//     console.log("submitted")
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit} className="form-container">
//         <input
//           type="text"
//           className="input-text"
//           placeholder="Add first name"
//           value={inputText.fName}
//           name="fName"
//           onChange={onChange}
//         />
//         <input
//           type="text"
//           className="input-text"
//           placeholder="Add last name"
//           value={inputText.lastName}
//           name="lastName"
//           onChange={onChange}
//         />

//         <button className="input-submit">Submit</button>
//       </form>
//       <h2>{inputText.fName}</h2>
//       <h2>{inputText.lastName}</h2>
//     </>
//   )
// }

// Using class component
// class InputTodo extends Component {
//  state = {
//     title: ""
//  }

//  onChange = e => {
//   this.setState({
//     [e.target.name]: e.target.value
//   })
//  }

//  handleSubmit = e => {
//     e.preventDefault();
//     if(this.state.title.trim()){
//     this.props.addTodoProps(this.state.title)
//     this.setState({
//         title: ''
//     })
// }else {
//     alert('Please write an item')
// }

//  }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className="form-container">
//         <input type="text"
//         placeholder="Add Todo..."
//         className="input-text"
//         value={this.state.title}
//         onChange={this.onChange}
//         name='title'
//         />
//         <button className="input-submit">Submit</button>
//       </form>
//     )
//   }
// }
export default InputTodo;
