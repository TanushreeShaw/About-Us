import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

    media: {
      height: 140,
    },
  });

const MediaCard = props => {
    const classes = useStyles();
    const {image, title, description} = props;
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title={title}
            description={description}
            

          />
          <CardContent>
            <Typography gutterBottom variant="h" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        
      </Card>
    );
  }


  export default MediaCard; 