import React, { useState } from "react";
import { Button, Form, FormLabel, InputGroup } from "react-bootstrap";

export const GamesForm = ({onSave}) => {

  const [fields, setFields] = useState({});



  return (
    <Form>
      <FormLabel>Description:</FormLabel>
      <Form.Control
        placeholder="UEFA CL: Play Off Man U vs Real Madrid"
        aria-label="description"
        name="description"
        value={fields.description || ''}
        onChange={( { target } ) => {
          
          const description = target.value;

          setFields(state => {
            return { ...state, description: description }
          })
        }}
      />
      <FormLabel>Home Team:</FormLabel>
      <Form.Control
        placeholder="Man U"
        aria-label="teamLocal"
        name="teamLocal"
        value={fields.teamLocal || ''}
        onChange={( { target } ) => {
          
          const teamLocal = target.value;

          setFields(state => {
            return { ...state, teamLocal: teamLocal }
          })
        }}
      />
      <FormLabel>Visit Home:</FormLabel>
      <Form.Control
        placeholder="Real Madrid"
        aria-label="teamVisit"
        name="teamVisit"
        value={fields.teamVisit || ''}
        onChange={( { target } ) => {
          
          const teamVisit = target.value;

          setFields(state => {
            return { ...state, teamVisit: teamVisit }
          })
        }}        
      />
      <br />
      <InputGroup>
        <Button 
          type="button"
          onClick={() => {
            onSave(fields);
          }}
        >
          Save
        </Button>
        <Button 
          className="btn-secondary"
          onClick={() => {

            setFields({});
          }}
        >
          Clear
        </Button>
      </InputGroup>        
    </Form>
  );
};
