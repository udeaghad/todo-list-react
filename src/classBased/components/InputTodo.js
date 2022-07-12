import React, { PureComponent } from 'react';

class InputTodo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

 onChange = (e) => {
   const { name, value } = e.target;
   this.setState({
     [name]: value,
   });
 }

 handleSubmit = (e) => {
   const { title } = this.state;
   const { addTodoProps } = this.props;
   e.preventDefault();
   if (title.trim()) {
     addTodoProps(title);
     this.setState({
       title: '',
     });
   } else {
     alert('Please write an item');
   }
 }

 render() {
   const { title } = this.state;
   return (
     <form onSubmit={this.handleSubmit} className="form-container">
       <input
         type="text"
         placeholder="Add Todo..."
         className="input-text"
         value={title}
         onChange={this.onChange}
         name="title"
       />
       <button type="submit" className="input-submit">Submit</button>
     </form>
   );
 }
}
export default InputTodo;
