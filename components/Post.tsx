import React, { useState } from "react";
import { Photo } from "./utils/types";
import { Image, View, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";


interface PostProps {
    item: Photo,
}

// 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'

const Post = ({ item }: PostProps) => {
    // Get the timestamp and put in desired format
    // const [timestamp, setTimestamp] = useState("");
    // if (item.uploadTime) {
    //     setTimestamp(item.uploadTime.toDate().toDateString().split(" ")[1] + " " + item.uploadTime.toDate().toDateString().split(" ")[2])
    // }


    return (
        <ThemedView style={styles.postContainer}>
            <ThemedView style={styles.postHeaderContainer}>
                <ThemedText style={styles.usernameText}>{item.userId}</ThemedText>
                <ThemedText style={styles.dateText}>{item.uploadTime.toDate().toDateString().split(" ")[1] + " " + item.uploadTime.toDate().toDateString().split(" ")[2]}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: item.reference }}
                    resizeMode="contain"
                />
            </ThemedView>

        </ThemedView>
    )
}

export default Post;

const styles = StyleSheet.create({
    image: {
        height: 400,
    },
    postContainer: {
        // backgroundColor: 'gray',
        borderColor: 'gray',
        // borderWidth: 1,
        paddingBottom: 20,
    },
    imageContainer: {
        // backgroundColor: '#c2c2c2',
        height: 400,
        justifyContent: 'center',
    },
    postHeaderContainer: {
        // backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 15,
        paddingHorizontal: 6,
    },
    dateText: {
        // textAlign: 'right'
    },
    usernameText: {
        fontWeight: 'bold',
    }
})