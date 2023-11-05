import React from 'react';
import Search from './Search';
import UserListTable from './UserListTable';

function UserList() {
  return (
      <section className="card users-container">
        <Search/>
        <UserListTable/>
      </section>
  )
}

export default UserList