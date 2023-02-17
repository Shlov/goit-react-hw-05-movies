import { Btn, Form, Input } from "./Searchbar.styled";
import {GiBugNet} from 'react-icons/gi';

import PropTypes from 'prop-types';


export const Searchbar = ({onSubmit, onChange}) => {

  // const handleQuetyChange = (evnt) => {
  //   onChange({query: evnt.currentTarget.value})
  // }

  const handleSubmit = (evnt) => {
    evnt.preventDefault()
    // console.dir(evnt.target.input)
    // if (evnt.currentTarget.value === '') {
    //   return toast.error('Enter a search query')
    // }
    onSubmit()
  }

    return (
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={(e) => onChange(e.currentTarget.value)}
            type="text"
            // value={query}
            // autocomplete="off"
            // autofocus
            placeholder="Search movie"
          />
          <Btn type="submit">
              <GiBugNet/>
          </Btn>
        </Form>
    )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

