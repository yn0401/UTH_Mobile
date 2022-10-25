import React from "react";
import { Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Octicons";
import Ant from "react-native-vector-icons/AntDesign";
import * as eva from "@eva-design/eva";
import { Layout } from "@ui-kitten/components";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Layout style={styles.header}>
        <Layout styles={styles.infoBar}>
          <Layout style={styles.avatar}></Layout>
          <Layout style={styles.info}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.role}>Role</Text>
          </Layout>
        </Layout>
        <Layout style={styles.showWindow}>
          <Layout style={styles.window}></Layout>
          <Layout style={styles.window}></Layout>
        </Layout>
      </Layout>
      <Layout style={styles.content}></Layout>
    </Layout>
  );
}

function ExchangeScreen() {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SEARCH!</Text>
    </Layout>
  );
}

function HistoryScreen() {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ADD!</Text>
    </Layout>
  );
}

function ProfileScreen() {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>PROFILE!</Text>
    </Layout>
  );
}

const ViewAll = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#c2c2c2",
        tabBarActiveTintColor: "#fff",
        tabBarStyle: { backgroundColor: "#426ef0", borderTopWidth: "none" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Exchange"
        component={ExchangeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="gift" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ant name="idcard" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default ViewAll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 3,
    backgroundColor: "#426ef0",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  showWindow: {
    flexDirection: "row",
  },
  infoBar: {
    width: "100%",
  },
  content: {
    flex: 7,
    width: "100%",
  },
  avatar: {
    backgroundColor: "#fff",
    height: 100,
    width: 100,
    borderRadius: 100,
    marginRight: 20,
  },
  info: {
    // width: "100%",
  },
  name: {
    fontSize: 20,
    backgroundColor: "#426ef0",
    color: "#fff",
    fontWeight: "bold",
  },
  role: {
    fontSize: 15,
    backgroundColor: "#426ef0",
    color: "#fff",
  },
  window: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
});
