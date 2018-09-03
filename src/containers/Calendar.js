import React from 'react';
import dateFns from 'date-fns';
import { connect } from 'react-redux';

import AddEventModal from './AddEventModal';

const daysInWeek = 7;
const storeDayFormat = 'MM/DD/YYYY';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(),
      selectedDay: null,
      isOpenAddEventModal: false
    };

    this.handleEmptyDayClick = this.handleEmptyDayClick.bind(this);
    this.handleAddEventModalClose = this.handleAddEventModalClose.bind(this);
    this.findEvent = this.findEvent.bind(this);
  }

  handleEmptyDayClick(day) {
    const formattedDay = dateFns.format(day, storeDayFormat);

    this.setState({ selectedDay: formattedDay, isOpenAddEventModal: true });
  }

  handleAddEventModalClose() {
    this.setState({ isOpenAddEventModal: false });
  }

  findEvent(day) {
    const formattedDay = dateFns.format(day, storeDayFormat);

    return this.props.events.find(event => event.day === formattedDay);
  }

  renderDays() {
    const dateFormat = 'dddd';
    const days = [];
    let startDate = dateFns.startOfWeek(this.state.currentDate);
    for (let i = 0; i < daysInWeek; i++) {
      days.push(
        <div key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="calendar__header">{days}</div>;
  }

  renderCells() {
    const { currentDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentDate);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = 'D';
    const rows = [];

    const createOnDayClickFunc = (day, isWithEvent) => {
      if (isWithEvent) {
        return () => this.handleBusyDayClick(day);
      }

      return () => this.handleEmptyDayClick(day);
    };

    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < daysInWeek; i++) {
        const isSameMonth = dateFns.isSameMonth(day, monthStart);

        if (!isSameMonth) {
          days.push(<div className="calendar__day" key={day} />);
        } else {
          const formattedDate = dateFns.format(day, dateFormat);
          const event = this.findEvent(day);
          const className = event
            ? 'calendar__day calendar__day__event'
            : 'calendar__day';
          const onClick = createOnDayClickFunc(day, !!event);

          days.push(
            <div className={className} key={day} onClick={onClick}>
              {formattedDate}
            </div>
          );
        }

        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="calendar__week" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return rows;
  }

  render() {
    const { isOpenAddEventModal, selectedDay } = this.state;

    return (
      <div className="calendar">
        <AddEventModal
          isOpen={isOpenAddEventModal}
          day={selectedDay}
          onClose={this.handleAddEventModalClose}
        />

        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps)(Calendar);
