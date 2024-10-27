import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  SafeAreaFrameContext,
  SafeAreaView,
} from "react-native-safe-area-context";
import { BottomTabBarHeightCallbackContext } from "@react-navigation/bottom-tabs";

export default function Notifications() {
  const notifications = [
    { id: "1", date: "8 de Julho, 2024", name: "Zara Mendes" },
    { id: "2", date: "8 de Julho, 2024", name: "Zara Mendes" },
    { id: "3", date: "8 de Julho, 2024", name: "Zara Mendes" },
    { id: "4", date: "8 de Julho, 2024", name: "Zara Mendes" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Notificações</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationBox}>
            <MaterialIcons
              name="notifications"
              size={24}
              color="black"
              style={styles.icon}
            />
            <View style={styles.notificationContent}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.statusDot} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  notificationBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  notificationContent: {
    flex: 1,
  },
  date: {
    fontSize: 14,
    color: "#888",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#333",
  },
});
