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

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatedPassword, setRepeatedPassword] = React.useState("");
  const { onRegister, error, loading } = React.useContext(
    AuthenticationContext
  );

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
        <Spacer size="large">
          <AuthInput
            label="Confirm Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(u) => setRepeatedPassword(u)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Typography variant="error">{error}</Typography>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {loading ? (
            <ActivityIndicator animating color={Colors.blue300} />
          ) : (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
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

export default RegisterScreen;
