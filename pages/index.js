import { useQuery } from "@apollo/client";
import recommendProfilesQuery from "../queries/recommendedProfilesQuery.js";
import Profile from "../components/Profile.js";

export default function Home() {
  const { loading, error, data } = useQuery(recommendProfilesQuery);
  console.log(data);

  if (loading) return "Loading..";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data.recommendedProfiles.map((profile, index) => {
        console.log(`Profile ${index}:`, profile);
        return (
          <Profile
            key={profile.id}
            profile={profile}
            displayFullProfile={false}
          />
        );
      })}
    </div>
  );
}
