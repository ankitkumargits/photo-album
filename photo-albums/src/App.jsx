import './App.css'
import { Typography, AppBar, Button, CssBaseline, Toolbar, Container, Grid, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { createTheme } from '@mui/material/styles'
import { PhotoCamera} from '@mui/icons-material';
import { ThemeProvider } from '@emotion/react';

function App() {

// const theme = createMuiTheme();
const theme = createTheme();


  const ContainerStyles = {
    // bgcolor: 'background.paper'
    bgcolor: '#f8f8f8',
    padding: '40px',
  }

  const IconStyle = {
    marginRight: '20px',

  }

  const ButtonStyle = {
    marginTop: '40px',
  }

  const CardGrid = {
    padding: "20px 0",
  }

  const CardStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }

    
  const CardMediaStyle = {
    paddingTop: '56.25%',
  }

  const CardContents = {
    flexGrow: 1,
  }

  const footerStyle = {
    bgcolor: '#f8f8f8',
    padding: "50px 0",
  }

  return (
    <>
      <CssBaseline/>
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera  sx={IconStyle}/>
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm' sx={ContainerStyles}>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Photo Album</Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Hello everyone This is a photo Album and Im trying to make this sentence as long as possible so we can see how does it look like on the screen.
            </Typography>
            <ThemeProvider theme={theme}>
            <div style={ButtonStyle}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See My Photos
                  </Button>
                </Grid>
                <Grid item>
                <Button variant='outlined' color='primary'>
                    Secondary Actions
                  </Button>
                </Grid>
              </Grid>
            </div>
            </ThemeProvider>
          </Container>
        </div>
        <Container maxWidth="md" sx={{CardGrid}}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{CardStyle}}>
                <CardMedia
                image="https://source.unsplash.com/random?wallpapers"
                title="Image title"
                sx={{pt: '56.25%'}}
                />
                <CardContent sx={{CardContents}}>
                  <Typography gutterBottom variant='h5'>
                    Heading
                  </Typography>
                  <Typography>
                    This is a media Card You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color='primary' size='small'>View</Button>
                  <Button color='primary' size='small'>Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      <footer style={footerStyle}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer 
        </Typography>
        <Typography align='center' variant='subtitle1' color="textSecondary">
          something here to give the footer for a purpose.
        </Typography>
      </footer>
    </>
  )
}

export default App
