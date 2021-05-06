import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import "./card.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 0,
    paddingTop: "67.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const STYLES = ["btn--primary--solid"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="card-container">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          Share url copied to clipboard!
        </Alert>
      </Snackbar>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://res.cloudinary.com/dt7hy0a3q/image/upload/v1620291345/healthy-food-illustration1_j5ieky.jpg"
        />
        {props.data.map((item, indx) => {
          return (
            <CardContent>
              <div className="card-title">
                <Typography variant="h5">{item.name}</Typography>
              </div>
              <Typography variant="body1" component="p">
                <div className="card-body">
                  All the below values are for a 100gm serving size.
                </div>
              </Typography>
              <CardActions disableSpacing>
                <Typography variant="body1" component="p">
                  <p>Caloric Density (kcal) : {item.cal}</p>
                </Typography>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse
                style={{ paddingBottom: "1rem" }}
                in={expanded}
                timeout="auto"
                unmountOnExit
              >
                <Typography variant="body1">
                  <ul>
                    <li>Fat:{item.fat}g</li>
                    <li>Sodium:{item.sod}mg</li>
                    <li>Carbohydrates:{item.carbo}g</li>
                    <li>Fiber:{item.fibre}g</li>
                    <li>Protien:{item.prot}g</li>
                  </ul>
                </Typography>
              </Collapse>
              <div className="btn">
                {props.addItem && (
                  <Button
                    onClick={() => {
                      console.log("You clicked!");
                    }}
                    type="button"
                    buttonStyle="btn--primary--solid"
                    buttonSize="btn--medium"
                  >
                    Add Item
                  </Button>
                )}
                <Button
                  onClick={() => {
                    const dummy = document.createElement("input"),
                      text = `https://foodpedia.vercel.app/foodItem/${item.name}`;

                    document.body.appendChild(dummy);
                    dummy.value = text;
                    dummy.select();
                    document.execCommand("copy");
                    document.body.removeChild(dummy);
                    handleClick();
                  }}
                  type="button"
                  buttonStyle="btn--primary--solid"
                  buttonSize="btn--medium"
                >
                  Share
                </Button>
              </div>
            </CardContent>
          );
        })}
        {/* <CardContent>
          <div className="card-title">
            <Typography variant="h5">{props.data[0].name}</Typography>
          </div>
          <Typography variant="body1" component="p">
            <div className="card-body">
              {" "}
              Paella is a Spanish rice dish originally from Valencia. Paella is
              one of the best-known dishes in Spanish cuisine. For this reason,
              many non-Spaniards view it as Spain's national dish, but Spaniards
              almost unanimously consider it to be a dish from the Valencian
              region.{" "}
            </div>
          </Typography>
          <CardActions disableSpacing>
            <Typography variant="body1" component="p">
              <p>Caloric Density (kcal) : data.cal</p>
            </Typography>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography variant="body1">
              <ul>
                <li>Fat:10.4g</li>
                <li>Sodium:640mg</li>
                <li>Carbohydrates:35.7g</li>
                <li>Fiber:2.5g</li>
                <li>Protien:12.2g</li>
              </ul>
            </Typography>
          </Collapse>
          <div className="btn">
            <Button
              onClick={() => {
                console.log("You clicked!");
              }}
              type="button"
              buttonStyle="btn--primary--solid"
              buttonSize="btn--medium"
            >
              Add Item
            </Button>
            <Button
              onClick={() => {
                console.log("You clicked!");
              }}
              type="button"
              buttonStyle="btn--primary--solid"
              buttonSize="btn--medium"
            >
              Share
            </Button>
          </div>
        </CardContent> */}
      </Card>
    </div>
  );
}
