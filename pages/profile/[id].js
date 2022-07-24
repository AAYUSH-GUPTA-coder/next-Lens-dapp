import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import fetchProfileQuery from "../../queries/fetchProfileQuery.js";
import { ADD_REACTION } from "../../queries/addReactionMutation.js";
import Profile from "../../components/Profile.js";
import Post from "../../components/Post.js";

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;

  console.log("fetching profile for", id);
  const { loading, error, data } = useQuery(fetchProfileQuery, {
    variables: {
      request: { profileId: id },
      publicationsRequest: {
        profileId: id,
        publicationTypes: ["POST"],
      },
      reactionRequest: {
        profileId: id,
      },
    },
  });

  const [addReaction] = useMutation(ADD_REACTION);

  if (loading) return "Loading..";
  if (error) return `Error! ${error.message}`;

  console.log("on profile page data: ", data);
  const reactionRequestParams = {
    profileId: "0x01", // TODO: swap this out for session id of user
    reaction: "UPVOTE",
    publicationId: "0x43-0x02",
  };
  return (
    <div className="flex flex-col p-8 items-center">
      <Profile profile={data.profile} displayFullProfile={true} />
      {data.publications.items.map((post, idx) => {
        return (
          <Post
            key={idx}
            post={post}
            onAddReaction={() =>
              addReaction({ variables: reactionRequestParams })
            }
          />
        );
      })}
    </div>
  );
}
