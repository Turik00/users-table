import UsersTable from '../UsersTable/UsersTable';
import UserDataForm from '../UserDataForm/UserDataForm';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

function App() {
  return (
    <>
      <Container>
        <UserDataForm style={{'background-color': 'green'}}></UserDataForm>
        <UsersTable></UsersTable>
      </Container>
      <ToastContainer position="bottom-right" />
    </>
  );
}

const Container = styled.div`
  width: 33vw;
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default App;
