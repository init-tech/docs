import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useValidatedEmail, useValidatedPassword } from './sign-up-utils';

export const SignIn = ({ title }) => {
  const [email, setEmail, isInvalidEmail] = useValidatedEmail();
  const [password, setPassword, isInvalidPassword] = useValidatedPassword();
  const [remember, setRemember] = useState(false);

  return (
    <Container>
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={isInvalidEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            error={isInvalidPassword}
            helperText={isInvalidPassword ? 'Password length should be greater than 8' : ''}
          />
          <FormControlLabel
            control={<Checkbox
              value="remember"
              color="primary"
              checked={remember}
              onChange={e => setRemember(!remember)}
            />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

SignIn.propTypes = {
  title: PropTypes.string,
}

SignIn.defaultProps = {
  title: 'Sign In'
}

