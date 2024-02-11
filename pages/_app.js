import { useEffect, useState, Fragment } from 'react';
import Head from 'next/head';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import '../styles/global.css';

const data = [
  {
    id: 0,
    title: 'Heading 1',
    contents: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    ],
    image: 'https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg',
  },
  {
    id: 1,
    title: 'Heading 2',
    contents: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    ],
    image: 'https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg',
  },
  {
    id: 2,
    title: 'Heading 3',
    contents: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
    ],
    image: 'https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg',
  }
];


export default function App({Component, pageProps}) {
  const [selectedCardId, setSelectedCardId] = useState(0); // set second card as the default selected

  useEffect(() => {
    setSelectedCardId(1);
  }, []);

  return (
    <Fragment>
       <Head>
          <title>G Automotive</title>
          <link rel="icon" href="/g-automotive-icon.png" />
        </Head>
        <Fragment>
          <div className='ctr-page-banner'>
            <img src='https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/ford-ranger_rd5m4t.jpg' alt='Ford Ranger' className='img-page-banner' />
            <div className='ctr-page-banner-overlay'>
              <div className='txt-page-banner-overlay-title'>Welcome to G Automotive</div>
              <div className='txt-page-banner-overlay-sub-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
              <div className='ctr-page-banner-footer'>
                <Button
                  variant='contained'
                  color='primary'
                  className='btn-page-banner-footer'
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          <div className={'ctr-main-page'}>
            <div className='ctr-cards'>
                {data.map((d, i) => {
                  return (
                    <div className={'ctr-card-item'} key={`${d.id}-${d.title}-${i}`}>
                      <Card className={`${selectedCardId === d.id ? 'card-active-selected' : ''}`} sx={{borderRadius: '16px', boxShadow: 'none'}}>
                        <CardMedia
                          component='img'
                          alt='green iguana'
                          height='140'
                          image={d.image}
                          className='card-media'
                        />
                        <CardContent className='card-content'>
                          <Typography gutterBottom variant='h5' component='div' className='card-content-title'>
                            {`Heading ${d.id+1}`}
                          </Typography>
                          {d.contents.map((paragraph, index) => {
                            return (
                              <Typography
                                variant='body2'
                                color='text.secondary'
                                sx={{marginBottom: '16px'}}
                                className='card-content-decsription'
                                key={index}
                              >{paragraph}</Typography>
                            );
                          })}
                        </CardContent>
                        <CardActions className='ctr-card-action'>
                          <Button
                          variant='contained'
                          color='primary'
                          fullWidth
                          className='btn-card-action'
                          onClick={() => setSelectedCardId(d.id)}
                          >{`Button ${d.id+1}`}</Button>
                        </CardActions>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
        </Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}