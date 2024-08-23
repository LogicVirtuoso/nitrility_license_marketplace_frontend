const AUTH_INITIALIZATION = 'AUTH_INITIALIZATION'
const UNLINKED = 'UNLINKED'
const AUTHENTICATED = 'AUTHENTICATED'
const NOT_AUTHENTICATED = 'NOT_AUTHENTICATED'
const LOGGED_OUT = 'LOGGED_OUT'
const AUTHENTICATION_EXPIRED = 'AUTHENTICATION_EXPIRED'
const WALLETADDRESS_CHANGED = 'WALLETADDRESS_CHANGED'
const AUTHENTICATION_WALLET_CONNECTED = 'AUTHENTICATION_WALLET_CONNECTED'
const ADDRESS_CHANGED = 'ADDRESS_CHANGED'

const RECOMMENDED_INITIALIZATION = 'RECOMMENDED_INITIALIZATION'
const RECOMMENDED_LICENSE = 'RECOMMENDED_LICENSE'
const NOT_RECOMMENDED_LICENSE = 'NOT_RECOMMENDED_LICENSE'

const SET_MATIC_PRICE = 'SET_MATIC_PRICE'
const INIT_MATIC_PRICE = 'INIT_MATIC_PRICE'

export {
  AUTH_INITIALIZATION,
  UNLINKED,
  AUTHENTICATED,
  NOT_AUTHENTICATED,
  LOGGED_OUT,
  AUTHENTICATION_EXPIRED,
  WALLETADDRESS_CHANGED,
  AUTHENTICATION_WALLET_CONNECTED,
  RECOMMENDED_INITIALIZATION,
  RECOMMENDED_LICENSE,
  NOT_RECOMMENDED_LICENSE,
  SET_MATIC_PRICE,
  INIT_MATIC_PRICE,
  ADDRESS_CHANGED,
}

export enum NotificationTypes {
  None = -1,
  Offer = 0,
  PurchasingOrSale = 1,
  Recommended = 2,
  Burnt = 3,
  Changed = 4,
  Follower = 5,
  Expired = 6,
  Locked = 7,
}
