import { usePostsBy } from '../hooks/use-posts.ts'
import ErrorMessage from './ErrorMessage.tsx'
import LoadingIndicator from './LoadingIndicator.tsx'
import MaxiPostListView from './MaxiPostListView.tsx'
import { API_HOST } from '../env.ts'

interface Props {
  username: string
}

export default function PostsBy({ username }: Props) {
  const posts = usePostsBy(username)
  if (posts.isLoading) {
    return <LoadingIndicator />
  }

  if (posts.isError || !posts.data) {
    return <ErrorMessage error={posts.error} />
  }
  const nextUrl = posts.data.next && new URL(posts.data.next, API_HOST).search

  return <MaxiPostListView posts={posts.data.items} />
}
