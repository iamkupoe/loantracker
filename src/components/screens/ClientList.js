import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import NewCustomer from "./NewCustomer";

class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          fullName: "Kwame Asare",
          phoneNumber: "0246727849",
          dateOfBirth: "26/10/1980",
          typeOfWork: "Taxi Driver",
          houseNumber: "A40 Trom",
        },
        {
          fullName: "Diana Asamoah",
          phoneNumber: "0502583132",
          dateOfBirth: "15/07/1989",
          typeOfWork: "Trader",
          houseNumber: "W40 Two Streams",
        },
      ],
    };
  }

  addNewClient = (newClient) => {
    this.setState({
      clients: [...this.state.clients, newClient],
    });
  };

  render() {
    return (
      <View>
        <View>
          {this.state.clients.map((item) => {
            return (
              <View>
                <Text>Full Name: {item.fullName}</Text>
                <Text>Phone Number: {item.phoneNumber}</Text>
                <Text>Date of Birth: {item.dateOfBirth}</Text>
                <Text>Type of Work: {item.typeOfWork}</Text>
                <Text>House Number: {item.houseNumber}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export default ClientList;
