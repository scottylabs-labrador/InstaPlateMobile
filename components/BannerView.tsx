// components/ParallaxScrollView.tsx
import type { PropsWithChildren } from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import Animated, {
  useAnimatedRef,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import TextBanner from '@/components/TextBanner';

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  bannerText: string;
}>;

export default function BannerView({
  children,
  bannerText,
}: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  const statusBarHeight = Platform.OS === 'ios' ? 25 : StatusBar.currentHeight ?? 0;

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <View style={{ paddingTop: statusBarHeight }}>
          <TextBanner text={bannerText} />
        </View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
