import React from 'react';
import { FormattedDate } from 'react-intl'

export default class MoviesList extends React.Component {

  constructor(props){
    super(props);
    this.state={
      messages: this.props.messages
    }
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">directedBy</th>
              <th scope="col">country</th>
              <th scope="col">budget</th>
              <th scope="col">views</th>
              <th scope="col">releaseDate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.messages.map((e, i) => <MovieRow key={i} offer={e} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

function MovieRow(props) {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.directedBy}</td>
      <td>{props.offer.country}</td>
      <td>{props.offer.budget}</td>
      <td>{props.offer.views}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.releaseDate)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      {/* <td>{this.props.offer.description}</td> */}
      {/* <td>{this.props.offer.cast}</td> */}
    </tr>
  )
}
