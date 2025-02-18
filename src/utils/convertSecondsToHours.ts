export function convertSecondsToHours(milliseconds: number): string {
  const seconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)

  if (seconds < 5) {
    return 'System just started'
  }

  if (seconds < 60) {
    return seconds === 1
      ? 'System running for 1 second'
      : `System running for ${seconds} seconds`
  }

  if (minutes < 60) {
    return minutes === 1
      ? 'System running for 1 minute'
      : `System running for ${minutes} minutes`
  }

  return hours === 1
    ? 'System running for 1 hour'
    : `System running for ${hours} hours`
}
