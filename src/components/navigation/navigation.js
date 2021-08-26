import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

import StartScreen from "../../components/screens/StartScreen";
import LogInScreen from "../../components/screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SignupScreen from "./../screens/SignupScreen";
import TabScreen from "./../screens/TabScreen";
import HomeScreen from "./../screens/HomeScreen";
import LoanForm from "./../screens/LoanForm";
import NewCustomer from "./../screens/NewCustomer";
import CalendarScreen from "./../screens/CalendarScreen";
import ClientList from "./../screens/ClientList";

const Stack = createStackNavigator();

function AppContainer({ auth }) {
  return (
    <NavigationContainer>
      {auth.login ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="HomeScreen"
            component={Tabs}
          />

          <Stack.Screen
            options={{
              headerTitle: "Profile",
              headerStyle: {
                backgroundColor: "#4470da",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
            }}
            name="EditProfileScreen"
            component={ProfileScreen}
          />

          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="HistoryScreen"
            component={HistoryScreen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="StartScreen">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="SignupScreen"
            component={SignupScreen}
          />

          <Stack.Screen
            options={{
              headerShown: true,
              title: "New Loan",
              headerStyle: {},
              headerTintColor: "#00ABFE",
            }}
            name="LoanForm"
            component={LoanForm}
          />

          <Stack.Screen
            options={{
              headerShown: true,
              title: "New Customer",
              headerStyle: {},
              headerTintColor: "#00ABFE",
            }}
            name="NewCustomer"
            component={NewCustomer}
          />

          <Stack.Screen
            options={{
              headerShown: true,
              title: "Calendar",
              headerStyle: {},
              headerTintColor: "#00ABFE",
            }}
            name="CalendarScreen"
            component={CalendarScreen}
          />

          <Stack.Screen
            options={{
              headerShown: true,
              title: "Client List",
              headerStyle: {},
              headerTintColor: "#00ABFE",
            }}
            name="ClientList"
            component={ClientList}
          />

          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="LoginScreen"
            component={LogInScreen}
          />

          {/*<Stack.Screen
            options={{
              headerShown: false,
            }}
            name="SignupScreen"
            component={SignupScreen}
          />*/}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state,
  };
};

export default connect(mapStateToProps)(AppContainer);
