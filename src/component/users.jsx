import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../store/actions/usersActions";

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props.users;
    console.log(users);
    return (
      <div>
        <h1>hello world</h1>
        {users.map((user) => (
          <React.Fragment key={user.id}>
            <h6>{user.name}</h6>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.users });

export default connect(mapStateToProps, { getUsers })(Users);
