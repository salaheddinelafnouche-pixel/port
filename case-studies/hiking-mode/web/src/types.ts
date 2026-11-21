export type ScreenId =
  | 'home'
  | 'modes'
  | 'map'
  | 'corridor'
  | 'day-plan'
  | 'elevation'
  | 'offline'
  | 'safety'

export type Navigate = (screen: ScreenId) => void
