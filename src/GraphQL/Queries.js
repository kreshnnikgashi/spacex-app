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

export const LOAD_MISSION_DETAILS = 'queries here';
