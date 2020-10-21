import { createMuiTheme } from '@material-ui/core/styles';
import { orange, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: orange,
    // secondary: orange,
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
