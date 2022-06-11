import './SingleContent.css';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const unavailable = 'https://via.placeholder.com/300?text=Unavailable';

const SingleContent = ({ name, image, launch_year, article }) => {
  const navigate = useNavigate();

  return (
    <div className="card-grid">
      <Card sx={{ width: 300 }}>
        <CardActionArea
          onClick={() => {
            navigate('/details');
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={image ? image : unavailable}
            alt={name}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontSize: '2rem' }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ fontSize: '1.6rem' }}
            >
              Launch Year: {launch_year}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            style={{ fontSize: '1.5rem' }}
            color="primary"
            href={article}
          >
            Go to Article
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default SingleContent;
