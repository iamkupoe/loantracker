import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Button,
  Image,
} from "react-native";

class NewCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
      placeOfWork: "",
      houseNumber: "",
      img: "",
    };
    this.itemName = this.itemName.bind(this);
    this.itemPrice = this.itemPrice.bind(this);
    this.sellerPhone = this.sellerPhone.bind(this);
    this.itemDescription = this.itemDescription.bind(this);
  }

  companyName(e) {
    this.setState({
      companyName: e.target.value,
    });
  }

  sellerPhone(e) {
    this.setState({
      sellerPhone: e.target.value,
    });
  }

  itemName(e) {
    this.setState({
      itemName: e.target.value,
    });
  }

  itemPrice(e) {
    this.setState({
      itemPrice: e.target.value,
    });
  }

  itemDescription(e) {
    this.setState({
      itemDescription: e.target.value,
    });
  }

  componentDidUpdate() {
    // console.log(this.state);
  }

  handleOnSubmit = () => {
    const data = this.state;

    this.props.transactions(data);

    //this.props.addTransaction(data);

    this.props.navigation.navigate("Summary");
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.detailsContainer}>
          <View style={styles.buyingContainer}>
            <Text style={styles.buyingText}>Full Name</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Full Name"
              value={this.state.companyName}
              onChangeText={(companyName) => {
                this.setState({ companyName });
              }}
            />
          </View>

          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>Phone number</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Phone Number"
              keyboardType="numeric"
              value={this.state.sellerPhone}
              onChangeText={(sellerNumber) => {
                this.setState({ sellerNumber });
              }}
            />
          </View>

          <View style={styles.buyingContainer}>
            <Text style={styles.buyingText}>Date of Birth</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Date of Birth"
              value={this.state.itemName}
              onChangeText={(itemName) => {
                this.setState({ itemName });
              }}
            />
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Place of Work</Text>

            <View style={styles.currencyContainer}>
              {/*<Text style={styles.currency}></Text>*/}
              <TextInput
                style={styles.inputTest}
                placeholder="Place of Work"
                keyboardType="text"
                value={this.state.itemPrice}
                onChangeText={(itemPrice) => {
                  this.setState({ itemPrice });
                }}
              />
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>House Number</Text>

            <TextInput
              style={styles.inputTest}
              placeholder="House Number"
              keyboardType="text"
              value={this.state.itemPrice}
              onChangeText={(itemPrice) => {
                this.setState({ itemPrice });
              }}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/images/profile.png")}
              style={{
                width: 50,
                height: 50,
                marginLeft: 50,
              }}
            />
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.3}>
              <Text style={styles.buttonTextStyle}>Upload File</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.opacityContainer}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => {
                this.handleOnSubmit();
              }}
            >
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    //justifyContent: "center",
    padding: 15,
    backgroundColor: "#fff",
  },

  buyingContainer: {
    // marginLeft: 30,
    paddingBottom: 10,
  },

  buyingText: {
    fontSize: 20,
    paddingBottom: 10,
  },

  inputText: {
    backgroundColor: "#fff",
    height: 50,
    width: 330,
    borderRadius: 20,
    fontSize: 15,
    paddingLeft: 10,
    borderColor: "black",
    borderWidth: 0.8,
    //elevation: 10,
  },

  priceContainer: {
    // marginLeft: 30,
    paddingBottom: 20,
  },

  priceText: {
    fontSize: 20,
    paddingBottom: 15,
  },

  currencyContainer: {
    flexDirection: "row",
  },

  currency: {
    fontSize: 18,
    paddingTop: 8,
  },

  inputTest: {
    backgroundColor: "#fff",
    height: 50,
    width: 330,
    borderRadius: 20,
    flexDirection: "row",
    paddingLeft: 10,
    borderColor: "black",
    borderWidth: 0.8,
    //elevation: 10,
  },

  numberContainer: {
    //marginLeft: 30,
    paddingBottom: 20,
  },

  numberText: {
    fontSize: 20,
    paddingBottom: 10,
  },

  descriptionContainer: {
    //marginLeft: 30,
    paddingBottom: 15,
  },

  descriptionText: {
    fontSize: 20,
    paddingBottom: 10,
  },

  inputTxt: {
    backgroundColor: "#fff",
    height: 80,
    width: 330,
    borderRadius: 20,
    textAlignVertical: "top",
    paddingTop: 10,
    fontSize: 15,
    paddingLeft: 10,
    borderColor: "black",
    borderWidth: 0.8,
    //elevation: 10,
  },

  opacityContainer: {
    alignSelf: "center",
    marginTop: 30,
  },

  opacity: {
    backgroundColor: "#06C8F4",
    width: 150,
    height: 50,
    borderRadius: 30,
  },

  buttonTextStyle: {
    color: "blue",
    fontSize: 15,
  },

  continueText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingTop: 13,
    fontWeight: "bold",
  },
});

export default NewCustomer;
