import { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BackButton, BookButton } from '@/src/components';
import { colors, spacing } from '@/src/core';
import { HERO_IMAGE_ASPECT, windowWidth } from '@/src/utils';

const SKELETON_BG = colors.border;

export function VillaDetailSkeleton() {
  const insets = useSafeAreaInsets();
  const opacity = useSharedValue(0.5);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(1, { duration: 800 }), -1, true);
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value
  }));

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.heroWrapper}>
          <Animated.View style={[styles.heroImage, animatedStyle]} />
          <View style={[styles.backButtonOverlay, { top: insets.top + spacing.sm }]}>
            <BackButton />
          </View>
        </View>
        <View style={styles.details}>
          <Animated.View style={[styles.line, styles.nameLine, animatedStyle]} />
          <Animated.View style={[styles.line, styles.locationLine, animatedStyle]} />
          <Animated.View style={[styles.line, styles.ratingLine, animatedStyle]} />
          <View style={styles.specsGrid}>
            {[1, 2, 3, 4].map((i) => (
              <Animated.View key={i} style={[styles.specItem, animatedStyle]} />
            ))}
          </View>
          <Animated.View style={[styles.priceCard, animatedStyle]} />
          <View style={styles.otherSection}>
            <Animated.View style={[styles.line, styles.sectionTitle, animatedStyle]} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3].map((i) => (
                <Animated.View key={i} style={[styles.previewCard, animatedStyle]} />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <BookButton bottomInset={insets.bottom} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface
  },
  content: {
    paddingBottom: 100
  },
  heroWrapper: {
    position: 'relative'
  },
  heroImage: {
    width: windowWidth,
    height: windowWidth * HERO_IMAGE_ASPECT,
    backgroundColor: SKELETON_BG
  },
  backButtonOverlay: {
    position: 'absolute',
    left: spacing.md,
    zIndex: 10
  },
  details: {
    padding: spacing.lg
  },
  line: {
    backgroundColor: SKELETON_BG,
    borderRadius: 4
  },
  nameLine: {
    width: '80%',
    height: 28,
    marginBottom: spacing.sm
  },
  locationLine: {
    width: '50%',
    height: 16,
    marginBottom: spacing.sm
  },
  ratingLine: {
    width: 60,
    height: 16,
    marginBottom: spacing.lg
  },
  specsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginBottom: spacing.lg,
    paddingVertical: spacing.lg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border
  },
  specItem: {
    flex: 1,
    minWidth: 70,
    height: 60,
    backgroundColor: SKELETON_BG,
    borderRadius: 8
  },
  priceCard: {
    height: 100,
    backgroundColor: SKELETON_BG,
    borderRadius: 12,
    marginBottom: spacing.xl
  },
  otherSection: {
    marginTop: spacing.lg
  },
  sectionTitle: {
    width: '60%',
    height: 24,
    marginBottom: spacing.md
  },
  previewCard: {
    width: windowWidth * 0.72,
    height: 180,
    backgroundColor: SKELETON_BG,
    borderRadius: 16,
    marginRight: spacing.md
  }
});
