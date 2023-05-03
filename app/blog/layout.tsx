interface Props {
  children: React.ReactNode;
  postList: React.ReactNode;
  currentPost: React.ReactNode;
}

const Page = ({ children, postList, currentPost }: Props) => {
  return (
    <>
      <h1>Blog</h1>
      <div
        style={{
          minHeight: '1em',
          backgroundColor: 'lightgreen',
          padding: '1em',
          width: '100%'
        }}
      >
        {children}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          minHeight: '1em',
          backgroundColor: 'lightblue',
          padding: '1em',
          width: '100%'
        }}
      >
        <div
          style={{
            flexBasis: '33%',
            minHeight: '1em',
            backgroundColor: 'yellow'
          }}
        >
          {postList}
        </div>
        <div
          style={{
            flexBasis: '67%',
            paddingLeft: '1em',
            minHeight: '1em',
            backgroundColor: 'orange'
          }}
        >
          {currentPost}
        </div>
      </div>
    </>
  );
};

export default Page;
