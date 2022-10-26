import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { Layout } from "@ui-kitten/components";
import Icon from "react-native-vector-icons/Octicons";

const HomeScreen = ({ navigation }) => {
    const navigate = () => {
        navigation.navigate("ViewAll");
    };
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
};
export default HomeScreen;

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
