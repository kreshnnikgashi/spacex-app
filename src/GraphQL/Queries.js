import { gql } from '@apollo/client';

export const LOAD_PAST_LAUNCHES = gql`
  query ListLaunches($limit: Int!, $offset: Int!) {
    launchesPast(limit: $limit, offset: $offset) {
      mission_name
      id
      launch_year
      links {
        flickr_images
        article_link
      }
    }
  }
`;

export const LOAD_ROCKET_DETAILS = gql`
  query SingleDetails($id: ID!) {
    launchesPast {
      mission_name
      id
      mission_id
      rocket(id: $id) {
        rocket_name
        rocket_type
      }
      details
    }
  }
`;
