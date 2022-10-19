import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'
export default [{
  path: '/',
  component: feeds
},
{
  path: '/stories/:initialSlide',
  name: 'stories',
  component: stories
}]
