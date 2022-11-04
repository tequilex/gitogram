import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'
import { auth } from '../pages/auth'
import { user } from '../pages/user'
import { myRepos } from '../pages/myRepos'
import { myFollowing } from '../pages/myFollowing'

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
},
{
  path: '/user',
  component: user,
  children: [{
    path: '',
    component: myRepos,
    name: 'user',
    props: {
      pageTitle: 'Repositories'
    }
  }, {
    path: 'myFollowing',
    component: myFollowing,
    name: 'myFollowing',
    props: {
      pageTitle: 'Following'
    }
  }]
}
]
