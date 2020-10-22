import { createMuiTheme } from '@material-ui/core/styles';
import { orange, red, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: grey,
    // error: null,
    // warning: null,
    // info: null,
    // success: null,
    // grey: null,
  },
  status: {
    danger: red,
  },
});

export default theme;
