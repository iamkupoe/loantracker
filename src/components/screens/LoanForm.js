import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

class LoanForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: "",
      loanAmount: "",
      loanDate: "",
      repaymentAmount: "",
      repaymentDate: "",
      rate: "",
    };
    this.customerName = this.customerName.bind(this);
    this.loanAmount = this.loanAmount.bind(this);
    this.loanDate = this.loanDate.bind(this);
    this.repaymentAmount = this.repaymentAmount.bind(this);
    this.repaymentDate = this.repaymentDate.bind(this);
  }

  customerName(e) {
    this.setState({
      customerName: e.target.value,
    });
  }

  loanAmount(e) {
    this.setState({
      loanAmount: e.target.value,
    });
  }

  loanDate(e) {
    this.setState({
      loanDate: e.target.value,
    });
  }

  repaymentAmount(e) {
    this.setState({
      repaymentAmount: e.target.value,
    });
  }

  repaymentDate(e) {
    this.setState({
      repaymentDate: e.target.value,
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
    //console.log(this.props.transact);
    return (
      <ScrollView>
        <View style={styles.detailsContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Name of Customer</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Customer Name"
              value={this.state.customerName}
              onChangeText={(customerName) => {
                this.setState({ customerName });
              }}
            />
          </View>

          <View style={styles.loanContainer}>
            <Text style={styles.loanAmount}>Loan Amount GH{"\u20B5"}</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Loan Amount"
              keyboardType="numeric"
              value={this.state.loanAmount}
              onChangeText={(loanAmount) => {
                this.setState({ loanAmount });
              }}
            />
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.loanDate}>Loan Date</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Loan Date"
              value={this.state.loanDate}
              onChangeText={(loanDate) => {
                this.setState({ loanDate });
              }}
            />
          </View>

          <View style={styles.repaymentContainer}>
            <Text style={styles.repaymentAmount}>
              Repayment Amount GH{"\u20B5"}
            </Text>

            <View style={styles.currencyContainer}>
              {/*<Text style={styles.currency}></Text>*/}
              <TextInput
                style={styles.inputTest}
                placeholder="Repayment Amount"
                keyboardType="numeric"
                value={this.state.repaymentAmount}
                onChangeText={(repaymentAmount) => {
                  this.setState({ repaymentAmount });
                }}
              />
            </View>
          </View>

          <View style={styles.repaymentContainer}>
            <Text style={styles.repaymentAmount}>Repayment Date</Text>

            <View style={styles.currencyContainer}>
              {/*<Text style={styles.currency}></Text>*/}
              <TextInput
                style={styles.inputTest}
                placeholder="Repayment Date"
                keyboardType="numeric"
                value={this.state.repaymentDate}
                onChangeText={(repaymentDate) => {
                  this.setState({ repaymentDate });
                }}
              />
            </View>
          </View>

          <View style={styles.rateContainer}>
            <Text style={styles.rateText}> Loan Rate (%) </Text>

            <TextInput
              style={styles.inputTest}
              placeholder="Loan Rate"
              keyboardType="numeric"
              value={this.state.loanRate}
              onChangeText={(loanRate) => {
                this.setState({ loanRate });
              }}
            />
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

  nameContainer: {
    // marginLeft: 30,
    paddingBottom: 20,
  },

  nameText: {
    fontSize: 20,
    paddingBottom: 15,
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

  loanContainer: {
    // marginLeft: 30,
    paddingBottom: 20,
  },

  loanAmount: {
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

  loanContainer: {
    //marginLeft: 30,
    paddingBottom: 20,
  },

  repaymentAmount: {
    fontSize: 20,
    paddingBottom: 10,
  },

  rateContainer: {
    //marginLeft: 30,
    paddingBottom: 15,
  },

  rateText: {
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
    marginTop: 40,
  },

  opacity: {
    backgroundColor: "#06C8F4",
    width: 150,
    height: 50,
    borderRadius: 30,
  },

  continueText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingTop: 13,
    fontWeight: "bold",
  },
});

export default LoanForm;
