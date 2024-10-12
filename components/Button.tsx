import { StyleSheet, Pressable, GestureResponderEvent } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import Ionicons from '@expo/vector-icons/Ionicons';

type OnPressHandler = (event: GestureResponderEvent) => void;

type Props = {
    icon?: "images-outline",
    label: string;
    theme?: string,
    width: number,
    height: number,
    onPress?: OnPressHandler
};

export default function Button({
    icon,
    label,
    theme,
    width, 
    height,
    onPress
}: Props) {

    if (theme === "primary") {
        return (
            <ThemedView style={[styles.buttonContainer, { borderWidth: 3, borderColor: "#ffd33d", borderRadius: 18, width: width, height: height }]}>
                <Pressable
                    style={[styles.button, { backgroundColor: "#fff" }]}
                    onPress={onPress}
                >
                    <Ionicons
                        name={icon}
                        size={18}
                        color="#25292e"
                        style={styles.buttonIcon}
                    />
                    <ThemedText style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</ThemedText>
                </Pressable>
            </ThemedView>
        );
    }

    return (
        <ThemedView style={[styles.buttonContainer, {width: width, height: height}]}>
            <Pressable style={styles.button} onPress={onPress}>
                <ThemedText style={styles.buttonLabel}>{label}</ThemedText>
            </Pressable>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 68,
        marginHorizontal: 20,
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        fontSize: 16,
    },
});
