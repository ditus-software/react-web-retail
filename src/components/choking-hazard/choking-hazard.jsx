//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@mui/material';
import { ChildCare } from '@mui/icons-material';
import { useTranslationProps } from '@ditus/react-translation';

/**
 * Represents a component that displays a warning that a product represents a
 * choking hazard to younger children.ChildCare
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function ChokingHazard(props) {
  const {
    hidden,
    message,
    title,
  } = useTranslationProps({ name: 'ChokingHazard', props });

  if (hidden) {
    return null;
  }

  return (
    <Alert
      severity="warning"
      variant="outlined"
      iconMapping={{ warning: <ChildCare /> }}
      className="mt-4 mb-3"
    >
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
}

export default ChokingHazard;

ChokingHazard.propTypes = {
  /**
   * Specifies whether the component is hidden (true) or not (false).
   */
  hidden: PropTypes.bool,

  /**
   * Specifies the message that appears.
   */
  message: PropTypes.string,

  /**
   * Specifies the title that appears.
   */
  title: PropTypes.string,
};

ChokingHazard.defaultProps = {
  hidden: true,
  message: 'This product contains small parts and is not suitable for children under 3 years old.',
  title: 'WARNING: CHOKING HAZARD',
};
