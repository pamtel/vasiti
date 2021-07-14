import footer from "../images/footer.png";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      width: "22ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <div className="bg-secondary bottom-0 px-32 mt-20 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          <div className="w-96 ">
            <img src={footer} alt="footer" style={{marginTop: "-40px"}}/>
          </div>
          <div>
            <p>
              Be a member <br /> of our community 🎉
            </p>
            <p>
              We’d make sure you’re always first to know what’s happening on
              Vasiti—thus, the world.
            </p>
            <div className={classes.search}>
              <div className="mr-20">
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="enter your email address"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
                <Button
                  variant="contained"
                  size="small"
                  className={classes.button}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 pt-10">
            <div>
                <h4>Company</h4>
                <ul>
                    <li>About us</li>
                    <li>Term of use</li>
                    <li>Privacy Policy</li>
                    <li>Press and Media</li>
                </ul>
            </div>
            <div>
                <h4>Products</h4>
                <ul>
                    <li>Marketplace</li>
                    <li>Magazine</li>
                    <li>Seller</li>
                    <li>Wholesale</li>
                    <li>Services</li>
                </ul>
            </div>
            <div>
                <h4>Careers</h4>
                <ul>
                    <li>About us</li>
                    <li>Term of use</li>
                    <li>Privacy Policy</li>
                    <li>Press and Media</li>
                </ul>
            </div>
            <div>
                <h4>Company</h4>
                <ul>
                    <li>About us</li>
                    <li>Term of use</li>
                    <li>Privacy Policy</li>
                    <li>Press and Media</li>
                </ul>
            </div>
            <div>
                <h4>Company</h4>
                <ul>
                    <li>About us</li>
                    <li>Term of use</li>
                    <li>Privacy Policy</li>
                    <li>Press and Media</li>
                </ul>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
