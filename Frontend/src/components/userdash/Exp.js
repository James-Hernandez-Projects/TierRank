/* 
this is the componen that will pop up for the user to input the experience
here it will import the user data from the experience array and will input them into the properplace onthe
table according to the experience id.
*/
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { delMyExp } from '../../actions/profile'
const Exp = ({ exp,delMyExp }) => {
  const exps = exp.map(expr => (
    <tr key={expr._id}>
      <td>{expr.company}</td>
      <td> {expr.title} </td>
      <td>
        <Moment format="YYYY/MM/DD">{expr.from}</Moment> -{" "}
        {expr.to === null ? (
          "Curently Working"
        ) : (
          <Moment format="YYYY/MM/DD">{expr.to}</Moment>
        )}
      </td>
      <td>
        <button onClick={()=>delMyExp(expr._id)} className="button button-stop">Delete</button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className="margin_2">This is My Exp</h2>
      <h3 className="margin_2">Maybe this will help in validating my lists!</h3>
      <table className="data">
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Years</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{exps}</tbody>
      </table>
    </Fragment>
  );
};

Exp.propTypes = {
  exp: PropTypes.array.isRequired,
  delMyExp: PropTypes.func.isRequired
};

export default connect(null,{ delMyExp })(Exp);
