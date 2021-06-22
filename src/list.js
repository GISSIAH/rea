import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '25%',
    height: '90vh',
    float: 'left',
    position: "absolute",
    zIndex: 6,
    overflow: 'auto'
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList(props) {
  const classes = useStyles();

  return (
    <>
    <div>
      <h2>Nearby Places</h2>
    </div>
      <List className={classes.root}>
        
        {props.data.map((ft, i) => {
          return (
            <>
              <Card onClick={()=>{
                console.log("you clicked me");
              }}>
              <ListItem alignItems="flex-start" >
                <ListItemAvatar>
                  <Avatar alt="icon" src={ft.icon} />
                </ListItemAvatar>
                <ListItemText
                  primary={ft.name}
                />
              </ListItem>
              </Card>
              <Divider variant="inset" component="li"  light='true'/>
            </>
          )
        })}
      </List>
    </>

  );

}