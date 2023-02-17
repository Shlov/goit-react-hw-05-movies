import { useState } from "react";
import toast from 'react-hot-toast';
import { Btn, Form, Input } from "./Searchbar.styled";

import PropTypes from 'prop-types';


export const Searchbar = ({onSubmit, onChange}) => {

  // const handleQuetyChange = (evnt) => {
  //   onChange({query: evnt.currentTarget.value})
  // }

  // const handleSubmit = (evnt) => {
  //   evnt.preventDefault()
  //   if (tagImg.trim() === '') {
  //     return toast.error('Enter a search query')
  //   }
  //   onSubmit(tagImg)
  // }

    return (
        <Form >
          <Btn type="submit"onSubmit={onSubmit}/>
          <Input
            onChange={(e) => onChange(e.currentTarget.value)}
            type="text"
            // value={query}
            // autocomplete="off"
            // autofocus
            placeholder="Search movie"
          />
        </Form>
    )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

