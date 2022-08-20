import React from "react";
import Spacer from "../../components/Spacer";
import Typography from "../../components/Typography";
import { AuthenticationContext } from "../../services/authentication/context";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
} from "../Account/style";

const LoginScreen = () => {
  const initialState = { email: "", password: "" };
  const [loginUser, setLoginUser] = React.useState(initialState);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { onLogin, error } = React.useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            secure
            autoCapitalize="none"
            onChangeText={(u) => setPassword(u)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <Typography variant="error">{error}</Typography>
          </Spacer>
        )}
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          />
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};

export default LoginScreen;
