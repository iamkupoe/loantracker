import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Swiper from "react-native-swiper";

class HomeScreen extends Component {
  constructor(props) {
    super();
  }
  render() {
    console.log(this.props.user);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            horizontal={false}
            height={200}
            activeDotColor="#fff"
          >
            <View style={styles.slide}>
              <Image
                source={require("../../../assets/images/business.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>

            <View style={styles.slide}>
              <Image
                source={require("../../../assets/images/finance.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>

            <View style={styles.slide}>
              <Image
                source={require("../../../assets/images/money.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>

        <View style={styles.texts}>
          <Text
            style={{
              fontWeight: "200",
              fontSize: 17,
              textAlign: "center",
              letterSpacing: 2,
              marginTop: 5,
              margin: 6,
            }}
          >
            A convenient way to keep track of customers and disburse loans
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/loan.jpg")}
          />
        </View>

        <View
          style={{
            fontWeight: "200",
            //fontSize: 20,
            textAlign: "center",
            letterSpacing: 2,
            marginTop: 25,
            margin: 10,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              marginBottom: 95,
              color: "#0017cf",
            }}
          >
            Getting loans disbursed easily
          </Text>
        </View>

        {/*<View style={styles.regBtn}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("GetStarted");
          }}
          style={styles.regButton}
        >
          <Text style={styles.regText}>Start SafePay</Text>
        </TouchableOpacity>
        </View>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    paddingTop: 10,
  },
  sliderContainer: {
    height: 200,
    width: "93%",
    marginTop: 5,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
  },

  texts: {
    marginTop: -50,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 10,
  },

  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
  },

  regButton: {
    height: 40,
    width: 120,
    backgroundColor: "#00B0FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginTop: 20,
  },
  regText: {
    color: "white",
    fontSize: 15,
  },

  imageContainer: {},

  image: {
    height: 175,
    width: "80%",
    alignSelf: "center",
    marginTop: 2,
    marginBottom: -50,
    borderRadius: 10,
  },
  regBtn: {
    marginBottom: 80,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
