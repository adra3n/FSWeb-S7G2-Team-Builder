import './App.css';
import TeamForm from './components/TeamForm';
import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

function App() {

  const list = [
    {
      name: "Sertac",
      email: "sertac@sertac.com",
      role: "Project Manager",
    },
    {
      name: "Ahmet",
      email: "ahmet@sertac.com",
      role: "Developer",
    },
    {
      name: "Mehmet",
      email: "nassa@sertac.com",
      role: "Designer",
    },
    {
      name: "Seda",
      email: "sads@sertac.com",
      role: "Developer",
    },
  ];

  const [teamList, setTeamList] = useState(list);
  // const [duzenlenecekUye, setDuzenlenecekUye] = useState([]);

  const addMember = (e) => {
    setTeamList([...teamList, e]);
  };

  // const editMember = (e) => {
  //   setDuzenlenecekUye([...duzenlenecekUye, e]);
  // };

  // useEffect(() => {
  //   console.log(duzenlenecekUye);
  // }, [duzenlenecekUye]);

  return (
    <div className="App" style={{ textAlign: 'center', background: "#3A98B9", padding: "30px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} >
      <TeamForm addMember={addMember} />
      <div className="memberCard" style={{ padding: "30px" }}>
        {teamList.map((e, i) => {
          return <div style={{ textAlign: 'center', background: "#EEEEEE", padding: "30px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} key={i} className='m-5'>

            <h2 className="m-10">{e.name}</h2>
            <p>E-mail: {e.email}</p>
            <p>Role: {e.role}</p>
            <Button size="sm" variant="primary" style={{ background: "#3A98B9", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} type='submit' onClick={editMember}>Edit Member</Button>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;

