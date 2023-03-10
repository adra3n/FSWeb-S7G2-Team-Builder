import React from 'react'
import { useState, useEffect } from 'react'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';


const TeamForm = ({ addMember }) => {

    const [teamMember, setTeamMember] = useState({
        name: "",
        email: "",
        role: "",
    });

    const changeHandler = (e) => {
        setTeamMember({ ...teamMember, editMember });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        addMember(teamMember);
    };

    return (
        <div style={{ textAlign: 'center', background: "#E8D5C9", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} >
            <h1 style={{ paddingTop: "20px" }}>Team List</h1>

            <Form style={{ textAlign: 'center' }} onSubmit={submitHandler}>
                <FormGroup className='p-3 pt-0'>
                    <Label size="lg" for='name'>Name</Label>
                    <Input type='text' name='name' id='name' placeholder='Name' onChange={changeHandler} value={teamMember.name} />
                </FormGroup>
                <FormGroup className='p-3 pt-0'>
                    <Label size="lg" for='email'>Email</Label>
                    <Input type='email' name='email' id='email' placeholder='Email' onChange={changeHandler} value={teamMember.email} />
                </FormGroup>
                <FormGroup className='p-3 pt-0'>
                    <Label size="lg" for="role">Role</Label>
                    <Input className='p-3 pt-0' type="select" name="role" id="role" onChange={changeHandler} value={teamMember.role}>
                        <option value="1">Project Manager</option>
                        <option value="2">Developer</option>
                        <option value="3">Designer</option>
                    </Input>
                </FormGroup>
                <Button size="lg" variant="primary" style={{ background: "#3A98B9", width: "30%", margin: "30px 10px 40px 10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} type='submit'>Save Member</Button>
            </Form>


        </div >
    )
}

export default TeamForm