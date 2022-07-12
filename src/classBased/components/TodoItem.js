import React from 'react';
import styles from './TodoItem.module.css';

// const TodoItem = (props) => {
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  componentWillUnmount() {
    console.log('Cleaning up...');
  }

      handleEditing = () => {
        this.setState({
          editing: true,
        });
      }

      handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
          this.setState({
            editing: false,
          });
        }
      }

      render() {
        const completedStyle = {
          fontStyle: 'italic',
          color: '#595959',
          opacity: 0.4,
          textDecoration: 'line-through',
        };

        const viewMode = {};
        const editMode = {};

        //
        const { editing } = this.state;
        if (editing) {
          viewMode.display = 'none';
        } else {
          editMode.display = 'none';
        }

        const { completed, title, id } = this.todo;

        const { handleChangeProps, deleteTodoProps, setUpdate } = this.props;

        return (

          <li className={styles.item}>
            <div onDoubleClick={this.handleEditing} style={viewMode}>
              <input
                type="checkbox"
                checked={completed}
                className={styles.checkbox}
                onChange={() => handleChangeProps(id)}
              />

              <button
                onClick={() => deleteTodoProps(id)}
                type="button"
              >
                Delete
              </button>

              <span style={completed ? completedStyle : null}>
                {title}
              </span>

            </div>

            <input
              type="text"
              style={editMode}
              className={styles.textInput}
              value={title}
              onChange={(e) => {
                setUpdate(e.target.value, id);
              }}
              onKeyDown={this.handleUpdatedDone}
            />

          </li>

        );
      }
}

export default TodoItem;
