import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { Button } from "@mui/material";

export default function Post(props) {
  const post = props.post;

  console.log("post fields", post);

  return (
    <div className="p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <p className="mt-2 text-xs text-slate-500 whitespace-pre-line">
              {post.metadata.content}
            </p>
            <div className="p-2">
              {post.reaction ? (
                <Button
                  onClick={props.onAddReaction}
                  startIcon={<FavoriteRoundedIcon />}
                />
              ) : (
                <Button
                  onClick={props.onAddReaction}
                  startIcon={<FavoriteBorderRoundedIcon />}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
