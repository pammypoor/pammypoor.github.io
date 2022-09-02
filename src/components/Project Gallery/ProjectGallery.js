import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import tresearch from "../../assets/tresearch.png";
import dispatch from "../../assets/dispatch.png";
import portfolio from "../../assets/portfolio.png";

import "./ProjectGallery.css";
class ProjectGallery extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className = "project-gallery-container">
                <div className="project">
                    <Grid container  spacing={2}>
                        <Grid item xs={6} md={4}>
                            <Card style={{ height: '100%', textAlign: 'left' }}>
                                <CardMedia component="img" height="150" image = {tresearch} alt = "tresearch homepage"/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Tresearch
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Full stack web application to create an interactive mind mapping tool documenting a user's learning journey
                                        using treee structures. RESTful web API backend with responsive front end built with react.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick = {() => {window.open("https://github.com/pammypoor/Tresearch", "_blank")}}>Github</Button>
                                    <Button size="small"  onClick={() => {window.open("https://trialbyfiretresearch.azurewebsites.net/", "_blank")}}>View Site</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        
                        <Grid item xs={6} md={4}>
                            <Card style={{ height: '100%', textAlign: 'left' }}>
                                <CardMedia component="img" height="150" image = {portfolio} alt = "portfolio about page"/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Portfolio
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Portfolio website hosted on Github Pages using HTML/CSS/Javascript and React.js.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick = {() => {window.open("https://github.com/pammypoor/pammypoor.github.io", "_blank")}}>Github</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default ProjectGallery;