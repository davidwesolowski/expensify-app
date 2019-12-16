import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilters, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpensesListFilter extends React.Component
{
    state =
    {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) =>
    {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) =>
    {
        this.setState(() => ({ calendarFocused }));
    }

    onTextChange = (e) =>
    {
        this.props.setTextFilters(e.target.value);
    }

    onSortChange = (e) =>
    {
        const propertySort = e.target.value;
        if (propertySort === 'date')
        {
            this.props.sortByDate();
        }
        else
        {
            this.props.sortByAmount();
        }
    };

    render()
    {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input type="text" className="text-input" value={this.props.filters.text} onChange={this.onTextChange} />
                    </div>
                    <div className="input-group__item">
                        <select className="select"value={this.props.filters.sortBy} onChange={this.onSortChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker 
                            startDate={this.props.filters.startDate}
                            startDateId="my_unique_start_date_id"
                            endDate={this.props.filters.endDate}
                            endDateId="my_unique_end_date_id"
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                            startDatePlaceholderText="Start date"
                            endDatePlaceholderText="End date"
                        />
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) =>
{
    return { filters: state.filters };
};

const mapDispatchToProps = (dispatch) =>
{
    return {
        setTextFilters: (text) => dispatch(setTextFilters(text)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
    };
;}

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesListFilter);