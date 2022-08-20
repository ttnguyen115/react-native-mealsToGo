import React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import Spacer from "../../components/Spacer";
import Typography from "../../components/Typography";
import { AuthenticationContext } from "../../services/authentication/context";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../Account/style";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { onLogin, error, loading } = React.useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
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
            autoCapitalize="none"
            onChangeText={(u) => setPassword(u)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Typography variant="error">{error}</Typography>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {loading ? (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          ) : (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};

export default LoginScreen;
