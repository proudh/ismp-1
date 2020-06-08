import Section from '../../layout/Section';
import React from 'react';
import { Button, Container, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ApplicationFormSuccess = () => {
  return (
    <Container>
      <Section>
        <Icon name="check circle" size="massive" color="green" />
        <h3>Your application has been received!</h3>
        <p>
          You will receive a confirmation email shortly with more details and
          next steps. Look forward to meeting you!
        </p>
        <Button.Group>
          <Button as={Link} to="/program">
            See Programs
          </Button>
          <Button as={Link} to="/blog">
            View Blog
          </Button>
        </Button.Group>
      </Section>
    </Container>
  );
};

export default ApplicationFormSuccess;
