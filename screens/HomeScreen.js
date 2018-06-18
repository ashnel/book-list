import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { List, ListItem, Header } from "react-native-elements";

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Header
          placement="left"
          centerComponent={{ text: "Saved Books", style: { color: "#fff" } }}
        />
        <ScrollView>
          <List>
            <ListItem
              title={<Text style={styles.title}>Eloquent JavaScript</Text>}
              subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.ratingText}>Marijn Haverbeke</Text>
                </View>
              }
            />

            <ListItem
              title={<Text style={styles.title}>Head First Java</Text>}
              subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.ratingText}>
                    Kathy Sierra & Bert Bates
                  </Text>
                </View>
              }
            />

            <ListItem
              title={
                <Text style={styles.title}>
                  Programming: Principles and Practice Using C++
                </Text>
              }
              subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.ratingText}>Bjarne Stroustrup</Text>
                </View>
              }
            />

            <ListItem
              title={
                <Text style={styles.title}>Cracking the Coding Interview</Text>
              }
              subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.ratingText}>Gayle Laakmann McDowell</Text>
                </View>
              }
            />

            <ListItem
              title={
                <Text style={styles.title}>
                  Clean Code: A Handbook of Agile Software Craftsmanship
                </Text>
              }
              subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.ratingText}>Robert C. Martin</Text>
                </View>
              }
            />

            <ListItem
              title={
                <Text style={styles.title}>JavaScript: The Good Parts</Text>
              }
              subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.ratingText}>Douglas Crockford</Text>
                </View>
              }
            />

            <ListItem
              title={<Text style={styles.title}>The Society of Mind</Text>}
              subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.ratingText}>Marvin Minsky</Text>
                </View>
              }
            />

            <ListItem
              title={
                <Text style={styles.title}>
                  Head First Design Patterns: A Brain-Friendly Guide
                </Text>
              }
              subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.ratingText}>Eric Freeman</Text>
                </View>
              }
            />

            <ListItem
              title={
                <Text style={styles.title}>
                  Effective Java: Programming Language Guide
                </Text>
              }
              subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.ratingText}>Joshua Bloch</Text>
                </View>
              }
            />

            <ListItem
              title={
                <Text style={styles.title}>The Well-Grounded Rubyist</Text>
              }
              subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.ratingText}>David A. Black</Text>
                </View>
              }
            />
          </List>
        </ScrollView>
      </View>
    );
  }
  // Comment the above render and uncomment the below render to view example page of reviews
  // render()
  // {
  //   return (
  //     <WebView
  //     source={Widget} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
  //   )
  // }
}

styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    paddingLeft: 10
  },
  subtitleView: {
    flexDirection: "row",
    paddingTop: 5
  },
  ratingText: {
    paddingLeft: 10,
    color: "grey"
  }
});

export default HomeScreen;
