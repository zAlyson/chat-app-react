import { LoginForm } from '../components/forms/LoginForm';
import { Page } from '../styles';

export const LoginPage = () => {
  return (
    <Page display="flex" justifyContent="center" alignItems="center">
      <LoginForm />
    </Page>
  );
};
