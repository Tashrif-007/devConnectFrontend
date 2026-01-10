/**
 * Timing Constants
 * Time-related constants used throughout the application
 */

export const TIMING = {
  // Milliseconds
  MS: {
    ONE_MINUTE: 60 * 1000,
    TWO_MINUTES: 2 * 60 * 1000,
    FIVE_MINUTES: 5 * 60 * 1000,
    TEN_MINUTES: 10 * 60 * 1000,
    FIFTEEN_MINUTES: 15 * 60 * 1000,
  },

  // Seconds
  SECONDS: {
    ONE: 1,
    TWO: 2,
    FIVE: 5,
    TEN: 10,
    THIRTY: 30,
  },

  // Specific use cases
  DEBOUNCE_DELAY: 300, // ms
  TOAST_DURATION: 3000, // ms
  MODAL_TRANSITION_DURATION: 300, // ms
} as const;
