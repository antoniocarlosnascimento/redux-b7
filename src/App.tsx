import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./redux/hooks/useAppSelector";
import { setThemeStatus } from "./redux/reducers/themeReducer";
import { setAge, setName } from "./redux/reducers/userReducer";

const App = () => {
  const dispatch = useDispatch();
  const user = useAppSelector(state => state.user);
  const theme = useAppSelector(state => state.theme);
  

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => { dispatch( setName(e.target.value) ) };
  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => { dispatch( setAge(parseInt(e.target.value)) ) };
  const handleSwitchTheme = () => { dispatch(setThemeStatus( theme.status === 'light' ? 'dark' : 'light' )) }

  return (
    <div>
      Menu nome é: <b>{user.name}</b> e tenho <b>{user.age}</b> anos. <br />
      Teme: {theme.status}

      <hr />
      <input  type="text" value={user.name} onChange={handleNameInput} />
      <input  type="text" value={user.age} onChange={handleAgeInput} />

      <hr />
      <button onClick={handleSwitchTheme}>Switch Theme</button>

    </div>
  );
}

export default App;
