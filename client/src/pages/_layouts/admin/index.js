import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import { Wrapper } from './styles';

export default function AdminLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
