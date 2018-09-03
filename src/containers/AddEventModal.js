import React from 'react';
import { connect } from 'react-redux';

import Modal from '../components/Modal';

import { addEvent } from '../actions/events';

class AddEventModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { day } = this.props;
    const { name } = this.state;

    this.props.addEvent(day, name);
    this.setState({ name: '' });
    this.props.onClose();
  }

  render() {
    const { day, ...rest } = this.props;

    return (
      <Modal {...rest} title={`Add event ${day}`}>
        <form onSubmit={this.handleSubmit}>
          <div className="modal-body">
            <label htmlFor="eventName">Event name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </Modal>
    );
  }
}

const actions = {
  addEvent
};

export default connect(
  null,
  actions
)(AddEventModal);
