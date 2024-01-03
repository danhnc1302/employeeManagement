import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'

const index = () => {
    return (
        <ScrollView>
            <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
                <View style={{ padding: 12 }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <Feather name="bar-chart" size={24} color="black" />
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "600"
                        }}>Employee Management</Text>
                        <Entypo name="lock" size={24} color="black" />
                    </View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 20,
                        gap: 20
                    }}>
                        <Pressable style={{
                            backgroundColor: "#D3CCE3",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 12,
                            borderRadius: 6,
                            flex: 1
                        }}>
                            <View style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                backgroundColor: "white",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Ionicons name="ios-people-sharp" size={24} color="black" />
                            </View>
                            <Text style={{
                                marginTop: 7,
                                fontWeight: "600"
                            }}>Employee List</Text>
                        </Pressable>
                        <Pressable style={{
                            backgroundColor: "#D3CCE3",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 12,
                            borderRadius: 6,
                            flex: 1
                        }}>
                            <View style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                backgroundColor: "white",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Ionicons name="ios-people-sharp" size={24} color="black" />
                            </View>
                            <Text style={{
                                marginTop: 7,
                                fontWeight: "600"
                            }}>Mark Attendance</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Pressable style={{
                            backgroundColor: "#BE93C5",
                            borderRadius: 6,
                            padding: 10,
                            marginTop: 10,
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <View style={{
                                padding: 7,
                                width: 45,
                                height: 45,
                                borderRadius: 7,
                                backgroundColor: "white",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Ionicons name="newspaper-outline" size={24} color="black" />
                            </View>
                            <Text style={{
                                marginLeft: 10,
                                fontSize: 16,
                                fontWeight: "600",
                                flex: 1
                            }}>Attendance Report</Text>
                            <View style={{
                                padding: 7,
                                width: 35,
                                height: 35,
                                borderRadius: 5,
                                backgroundColor: "white",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Entypo name="chevron-right" size={24} color="black" />
                            </View>
                        </Pressable>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView >
    )
}

export default index

const styles = StyleSheet.create({})