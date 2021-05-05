import React from 'react';
import typeColors from '../../helpers/typeColors'
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:'#D3D3D3',
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor:'#F0F0F0',
    },
  }));

export default function PokemonCard({ pokemon }) {
    const classes = useStyles();
    
    return (
        <Card className= {classes.root}>
            <CardActionArea>
                <div className="Card_img">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <CardContent>
                    <div className="Card_name">
                        {pokemon.name}
                    </div>
                    <Divider />

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div className="Card_types">
                                {
                                    pokemon.types.map(type => {
                                        return (
                                            <div className="Card_type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                                {type.type.name}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <div className="Card_data">
                                    <p className="title">Peso</p>
                                    <p className>{pokemon.weight}</p>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <div className="Card_data">
                                    <p className="title">Altura</p>
                                    <p className>{pokemon.height}</p>
                                </div>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <div className="Card_data">
                                    <p className="title">Vida</p>
                                    <p className>{pokemon.stats[0].base_stat}</p>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <div className="Card_data">
                                    <p className="title">Velocidade</p>
                                    <p className>{pokemon.stats[5].base_stat}</p>
                                </div>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <div className="Card_data">
                                    <p className="title">Ataque</p>
                                    <p className>{pokemon.stats[1].base_stat}</p>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <div className="Card_data">
                                    <p className="title">Defesa</p>
                                    <p className>{pokemon.stats[2].base_stat}</p>
                                </div>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <div className="Card_data">
                                    <p className="title">Ataque Especial</p>
                                    <p className>{pokemon.stats[3].base_stat}</p>
                                </div>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <div className="Card_data">
                                    <p className="title">Defesa Especial</p>
                                    <p className>{pokemon.stats[4].base_stat}</p>
                                </div>
                            </Paper>
                        </Grid>

                    </Grid>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}