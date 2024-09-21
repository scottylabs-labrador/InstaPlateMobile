import { Photo } from "./utils/types";
import { Image, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";


interface PostProps {
    item: Photo,
}

const Post = ({ item }: PostProps) => {
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
        borderColor: 'gray',
        paddingBottom: 20,
    },
    imageContainer: {
        height: 400,
        justifyContent: 'center',
    },
    postHeaderContainer: {
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