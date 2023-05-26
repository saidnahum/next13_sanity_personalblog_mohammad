type Props = {
  params: {
    slug: String;
  }
};

const PostPage = ({ params: { slug } }: Props) => {
  return (
    <div>
      Post: {slug}
    </div>
  )
}

export default PostPage