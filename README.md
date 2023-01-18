
# 21e8 - Enterprise Software Platform

## Arcade

```
import { arcade } from '21e8'

import { connect, authenticate } from '@21e8/arcade'

const { token } = await authenticate({
  provider: 'haste',
  token: '/* Haste Arcade Token */'
})

const { log, events } = await connect({ token })

log('key.pressed', { key: 'up' })

log('key.pressed', { key: 'down' })

log('hotel.purchase.intent', { area: 'ordino', type: 'airbnb', maxPrice: 2100 })

events.on('guest.arrived', event => {

  // play door bell sound

})

```
