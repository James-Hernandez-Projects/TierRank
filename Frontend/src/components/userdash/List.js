/* 
this is the componet the web app will be using to be loading what the list will look like
--however this is the list for the user dashboard not a list that will be placed in different component
--havent implemented that part yet.
*/
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import Moment from "react-moment";
import { delMyList } from "../../actions/profile";
const List = ({ list, delMyList }) => {
  const lists = list.map(listss => (
    <tr key={listss._id}>
      <td>{listss.title}</td>
      <td>{listss.item1} </td>
      <td>{listss.item2}</td>
      <td>{listss.item3}</td>
      <td>{listss.item4}</td>
      <td>{listss.item5}</td>
      <td>
        <button
          onClick={() => delMyList(listss._id)}
          className="button button-stop"
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className="margin_2">Your Profile Lists</h2>
      <table className="data">
        <thead>
          <tr>
            <th>Title</th>
            <th>1st Item</th>
            <th>2nd Item</th>
            <th>3rd Item</th>
            <th>4th Item</th>
            <th>5th Item</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{lists}</tbody>
      </table>
    </Fragment>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  delMyList: PropTypes.func.isRequired
};

export default connect(null, { delMyList })(List);
