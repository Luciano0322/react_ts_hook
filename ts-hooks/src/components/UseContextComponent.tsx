import { useContext, useState } from 'react';
import UserContext, { UserState } from '../store';

function CounsumerComponent() {
  const user = useContext<UserState>(UserContext);
  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );
}

function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    first: "Rock",
    last: "Johnson"
  })
  return (
    <UserContext.Provider value={user}>
      <CounsumerComponent/>
      <button
        onClick={() => setUser({
          first: "John",
          last: "Cena",
        })}
      >
        change context
      </button>
    </UserContext.Provider>
  );
}

export default UseContextComponent;