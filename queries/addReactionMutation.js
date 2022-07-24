import { gql } from "@apollo/client";

export const ADD_REACTION = gql`
  mutation ($request: ReactionRequest!) {
    addReaction(request: $request)
  }
`;
