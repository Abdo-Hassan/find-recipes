import React from 'react';

const Form = ({ getSearch, search, updateSearch }) => {
  return (
    <form className='search-form' onSubmit={getSearch}>
      <div className='form-group'>
        <input
          type='text'
          className='form-control search-input'
          value={search}
          onChange={updateSearch}
          placeholder='Search for any food ingredient'
          required
        />
        <button type='submit' className='search-button'>
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
