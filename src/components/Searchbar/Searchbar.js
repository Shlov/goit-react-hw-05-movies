import { useState } from "react";
import toast from 'react-hot-toast';
import { Btn, Form, Input } from "./Searchbar.styled";

import PropTypes from 'prop-types';


export const Searchbar = ({onSubmit}) => {

  const [tagImg, setTagImg] = useState('');

  const handleTagChange = (evnt) => {
    setTagImg(evnt.currentTarget.value.toLowerCase())
  }

  const handleSubmit = (evnt) => {
    evnt.preventDefault()
    if (tagImg.trim() === '') {
      return toast.error('Enter a search query')
    }
    onSubmit(tagImg)
  }

    return (
        <Form onSubmit={handleSubmit}>
          <Btn type="submit"/>
          <Input
            onChange={handleTagChange}
            type="text"
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

