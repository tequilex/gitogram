import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'
import { auth } from '../pages/auth'

export default [{
  path: '/',
  name: 'feeds',
  component: feeds
},
{
  path: '/stories/:initialSlide',
  name: 'stories',
  component: stories
},
{
  path: '/auth',
  name: 'auth',
  component: auth
}
]
