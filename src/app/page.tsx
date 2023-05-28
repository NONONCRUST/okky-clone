import PostListHeader from "@/components/home/PostListHeader"
import PostListItem from "@/components/home/PostListItem"

const Home = async () => {
  return (
    <main className="mx-auto mt-2 w-full max-w-7xl px-4 lg:mt-[18px] lg:px-0">
      <div className="flex gap-10">
        <div className="hidden w-[180px] shrink-0 lg:flex">
          <div className="w-full h-64 bg-gray-500" />
        </div>
        <div className="w-full min-w-0 lg:max-h-full">
          <div className="grid grid-cols-1 gap-10 mt-8 md:grid-cols-2">
            <section>
              <PostListHeader title="Q&A" />
              <ul className="divide-y divider-gray-500/30 dark:divide-gray-500/70">
                <PostListItem />
                <PostListItem />
                <PostListItem />
                <PostListItem />
                <PostListItem />
              </ul>
            </section>
            <section>
              <PostListHeader title="커뮤니티" />
              <ul className="divide-y divider-gray-500/30 dark:divide-gray-500/70">
                <PostListItem />
                <PostListItem />
                <PostListItem />
                <PostListItem />
                <PostListItem />
              </ul>
            </section>
            <section>
              <PostListHeader title="WEEKLY-BEST" />
              <ul className="divide-y divider-gray-500/30 dark:divide-gray-500/70">
                <PostListItem />
                <PostListItem />
                <PostListItem />
                <PostListItem />
                <PostListItem />
              </ul>
            </section>
            <section>
              <PostListHeader title="EDITOR'S CHOICE" />
              <ul className="divide-y divider-gray-500/30 dark:divide-gray-500/70">
                <PostListItem />
                <PostListItem />
                <PostListItem />
                <PostListItem />
                <PostListItem />
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
