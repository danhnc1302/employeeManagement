import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo, Feather, Ionicons, Octicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
const index = () => {
    const router = useRouter()
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
                        <Pressable
                            onPress={() => router.push("/(home)/employees")}
                            style={{
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
                        <Pressable 
                            onPress={() =>  router.push("/(home)/markattendance")}
                        style={{
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
                    <View style={{
                        marginTop: 20,
                        padding: 10,
                        backgroundColor: "white",
                        borderRadius: 7
                    }}>
                        <Pressable style={{
                            backgroundColor: "#BE93C5",
                            borderRadius: 6,
                            padding: 10,
                            marginVertical: 10,
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

                        <Pressable style={{
                            backgroundColor: "#BE93C5",
                            borderRadius: 6,
                            padding: 10,
                            marginVertical: 10,
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
                                <Octicons name="repo-pull" size={24} color="black" />
                            </View>
                            <Text style={{
                                marginLeft: 10,
                                fontSize: 16,
                                fontWeight: "600",
                                flex: 1
                            }}>Summary Report</Text>
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

                        <Pressable style={{
                            backgroundColor: "#BE93C5",
                            borderRadius: 6,
                            padding: 10,
                            marginVertical: 10,
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
                                <Octicons name="report" size={24} color="black" />
                            </View>
                            <Text style={{
                                marginLeft: 10,
                                fontSize: 16,
                                fontWeight: "600",
                                flex: 1
                            }}>All Generate Report</Text>
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

                        <Pressable style={{
                            backgroundColor: "#BE93C5",
                            borderRadius: 6,
                            padding: 10,
                            marginVertical: 10,
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
                                <Ionicons name="people" size={24} color="black" />
                            </View>
                            <Text style={{
                                marginLeft: 10,
                                fontSize: 16,
                                fontWeight: "600",
                                flex: 1
                            }}>Overtime Employee</Text>
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
                    <View style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        alignItems: "center",
                        gap: 12,
                    }}>
                        <View style={{
                            backgroundColor: "#F79D00",
                            padding: 12,
                            borderRadius: 6,
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 1
                        }}>
                            <View style={{
                                width: 35,
                                height: 35,
                                borderRadius: 7,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "white",
                                marginBottom: 5
                            }}>
                                <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
                            </View>
                            <Text>
                                Attendance Criteria
                            </Text>
                        </View>

                        <View style={{
                            backgroundColor: "#ABCABA",
                            padding: 12,
                            borderRadius: 6,
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 1
                        }}>
                            <View style={{
                                width: 35,
                                height: 35,
                                borderRadius: 7,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "white",
                                marginBottom: 5
                            }}>
                                <Feather name="bar-chart" size={24} color="black" />
                            </View>
                            <Text>
                                Increased Workflow
                            </Text>
                        </View>
                    </View>

                    <View style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        alignItems: "center",
                        gap: 12,
                    }}>
                        <View style={{
                            backgroundColor: "#D3CCE3",
                            padding: 12,
                            borderRadius: 6,
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 1
                        }}>
                            <View style={{
                                width: 35,
                                height: 35,
                                borderRadius: 7,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "white",
                                marginBottom: 5
                            }}>
                                <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
                            </View>
                            <Text>
                                Cost Savings
                            </Text>
                        </View>

                        <View style={{
                            backgroundColor: "#bdc3c7",
                            padding: 12,
                            borderRadius: 6,
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 1
                        }}>
                            <View style={{
                                width: 35,
                                height: 35,
                                borderRadius: 7,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "white",
                                marginBottom: 5
                            }}>
                                <Feather name="bar-chart" size={24} color="black" />
                            </View>
                            <Text>
                                Employee Performance
                            </Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView >
    )
}

export default index

const styles = StyleSheet.create({})