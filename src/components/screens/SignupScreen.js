import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  StatusBar,
  ImageBackground,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eye: "eye",
      eye: "eye-Off",
      email: "",
      password: "",
      showPassword: true,
    };
  }

  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  changePasswordType = () => {
    let newState;
    if (this.state.showPassword) {
      newState = {
        eye: "show",
        showPassword: false,
        password: this.state.password,
      };
    } else {
      newState = {
        eye: "eye-Off",
        showPassword: true,
        password: this.state.password,
      };
    }
    this.setState(newState);
  };
  render() {
    const { navigation, auth } = this.props;
    return (
      <ImageBackground
        source={require("../../../assets/images/office2.jpg")}
        style={{ width: "100%", height: "100%" }}
        style={styles.Container}
      >
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.SignupCard}>
          <View style={styles.SignupHeaderContainer}>
            <Text style={styles.SignupHeaderText}>New Account</Text>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.action}>
              <Feather
                name="user"
                color="#fff"
                size={20}
                style={{ paddingTop: 14 }}
              />
              <TextInput
                placeholder="Name"
                keyboardType="text"
                value={this.state.name}
                onChangeText={(text) => {
                  this.handleUpdateState("name", text);
                }}
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.action}>
              <Feather
                name="mail"
                color="#fff"
                size={20}
                style={{ paddingTop: 14 }}
              />
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={(text) => {
                  this.handleUpdateState("email", text);
                }}
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.action}>
              <FontAwesome
                name="lock"
                color="#fff"
                size={27}
                style={{ paddingTop: 14 }}
              />
              <TextInput
                placeholder="Password"
                value={this.state.password}
                onChangeText={(text) => {
                  this.handleUpdateState("password", text);
                }}
                secureTextEntry={this.state.showPassword}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(text) => {
                  this.handleUpdateState("password", text);
                }}
              />
            </View>
            <View style={styles.action}>
              <Feather
                name="phone"
                color="#fff"
                size={20}
                style={{ paddingTop: 14 }}
              />
              <TextInput
                placeholder="Number"
                keyboardType="number-pad"
                value={this.state.number}
                onChangeText={(text) => {
                  this.handleUpdateState("number", text);
                }}
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.opacityContainer}>
            <TouchableOpacity style={styles.SignupOpacity}>
              <Text style={styles.SignupText}>Log in</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.firstTimeContainer}>
            <Text style={styles.firstTimeText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("LoginScreen");
              }}
            >
              <Text style={styles.signupText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: "#2986DD",
    justifyContent: "space-around",
    paddingLeft: 15,
  },
  SignupCard: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    width: 330,
    height: 500,
    // marginVertical: 50,
  },

  SignupHeaderContainer: {
    // flex: 0.2,
  },
  SignupHeaderText: {
    color: "#BEFBFF",
    fontSize: 35,
    paddingLeft: 30,
    paddingVertical: 15,
  },
  inputContainer: {
    alignItems: "center",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  opacityContainer: {
    // flex: 0.01,
  },
  textInput: {
    backgroundColor: "#fff",
    height: 50,
    width: 250,
    borderRadius: 8,
    fontSize: 15,
    paddingLeft: 15,
    borderColor: "black",
    borderWidth: 0.8,
  },
  SignupOpacity: {
    width: 250,
    height: 50,
    backgroundColor: "#0CF4ED",
    marginHorizontal: 15,
    borderRadius: 5,
    marginVertical: 35,
    alignSelf: "center",
  },
  SignupText: {
    color: "#141717",
    textAlign: "center",
    paddingVertical: 12,
    fontWeight: "bold",
    fontSize: 20,
  },

  firstTimeContainer: {
    // flex: 0.3,
    flexDirection: "row",
    alignSelf: "center",
  },
  firstTimeText: {
    color: "#fff",
    fontSize: 15,
  },
  signupText: {
    color: "#46EF0D",
    fontSize: 15,
    paddingLeft: 5,
  },
});
