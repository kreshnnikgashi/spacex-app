import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_PAST_LAUNCHES } from '../../GraphQL/Queries';
import './Home.css';
import SingleContent from '../../components/SingleContent/SingleContent';
import { Button, ButtonGroup } from '@mui/material';

const PAGE_SIZE = 12;

const Home = () => {
  const [page, setPage] = useState(0);
  const { data } = useQuery(LOAD_PAST_LAUNCHES, {
    variables: { limit: PAGE_SIZE, offset: page * PAGE_SIZE },
  });
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (data) {
      setContent(data.launchesPast);
    }
    window.scroll(0, 0);
  }, [data, page]);

  return (
    <div className="home">
      <h1 className="home-title">Home</h1>

      <div className="home-grid">
        {content &&
          content.map(c => (
            <SingleContent
              id={c.id}
              name={c.mission_name}
              details={c.launch_year}
              image={c.links.flickr_images[0]}
              launch_year={c.launch_year}
              article={c.links.article_link}
            />
          ))}
      </div>

      <ButtonGroup
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          marginTop: '2rem',
          paddingBottom: '2rem',
        }}
        variant="contained"
        aira-label="outlined primary button group"
      >
        <Button disabled={!page} onClick={() => setPage(prev => prev - 1)}>
          Previous
        </Button>
        <span
          style={{
            color: 'white',
            textTransform: 'uppercase',
            fontSize: '1.6rem',
            fontFamily: 'sans-serif',
          }}
        >
          Page {page + 1}
        </span>
        <Button disabled={page >= 9} onClick={() => setPage(prev => prev + 1)}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Home;
