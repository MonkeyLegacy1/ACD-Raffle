import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  background: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#1F0800',
    backgroundImage: 'url(https://cdn.discordapp.com/attachments/935584281718292511/1013558729217671168/acdBackground.jpg)',
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'auto',
    backgroundPosition: 'left',
    position: 'fixed',
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));
