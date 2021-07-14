import React, { useContext, useState } from "react";
import clsx from "clsx";
import Headers from "../components/headers/Headers";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { deepOrange } from "@material-ui/core/colors";
import { DataContext } from "../components/DataProvider";
import validate from "../components/Validate";
import { useHistory } from "react-router";



const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    "&:hover": {
      backgroundColor: deepOrange[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
  },
}));

const initialState = {
  firstName: "",
  lastName: "",
  story: "",
  status: "",
  avatar: "",
};

const Stories = () => {
  const classes = useStyles();
  const history = useHistory();

  const [people, setPeople] = useContext(DataContext);

  const [person, setPerson] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    //  check error on submit
    const formErrors = validate(person);
    setErrorMsg(formErrors);
    if (Object.keys(formErrors).length) {
      return;
    } else {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);

      setPerson(initialState);
      setErrorMsg(initialState);
      document.getElementById("clearInput").reset();
      history.push("/thanks");
    }
  };

  // image upload
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "pcImage");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/squeakfix/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();

    setPerson({ ...person, avatar: file.secure_url });
  };
  return (
    <div>
      <Headers />
      <div className="flex justify-center py-20 bg-gray-300 px-5">
        <div className="bg-white rounded px-5 py-12">
          <p className="text-center font-bold text-xl">
            Share your amazing story!
          </p>
          <form onSubmit={handleSubmit} id="clearInput">
            <div>
              <p className="pl-2">Upload your picture</p>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
              >
                <OutlinedInput
                  className="w-full"
                  type="file"
                  accept="image/*"
                  onChange={uploadImage}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      ></IconButton>
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                />
                <input
                  type="hidden"
                  name="avatar"
                  className="input"
                  value={person.avatar}
                  onChange={(e) =>
                    setPerson({ ...person, avatar: e.target.value })
                  }
                />
              </FormControl>
            </div>
            <div className="flex gap-4">
              <div>
                <p className="pl-2">First Name</p>
                <FormControl
                name="firstName"
                onChange={(e) =>
                  setPerson({ ...person, firstName: e.target.value })
                }
                value={person.firstName}
                  className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                  />
                  <span className="block text-red-500">{errorMsg.firstName}</span>
                </FormControl>
              </div>
              <div>
                <p className="pl-2">Last Name</p>
                <FormControl
                name="lastName"
                onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
                value={person.lastName}
                  className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                >
                  <OutlinedInput aria-describedby="outlined-weight-helper-text" />
                </FormControl>
              </div>
            </div>
            <div>
              <p className="pl-2">Share your story</p>
              <FormControl
              name="story"
              onChange={(e) => setPerson({ ...person, story: e.target.value })}
              value={person.story}
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
              >
                <OutlinedInput aria-describedby="outlined-weight-helper-text" />
              </FormControl>
            </div>
            <div className="flex justify-between">
              <p className="pl-2">What did you interact with Vasiti as? </p>
              <div>
                <label htmlFor="Customer">Customer</label>
                <input
                  type="radio"
                  name="status"
                  value="Customer"
                  id="Customer"
                  className="ml-2 mt-1"
                  onChange={(e) => setPerson({ ...person, status: e.target.value })}
                />
                <label htmlFor="Vendor" className="pl-3">
                  Vendor
                </label>
                <input
                  type="radio"
                  name="status"
                  id="Vendor"
                  value="Vendor"
                  className="ml-2 mt-1"
                  onChange={(e) => setPerson({ ...person, status: e.target.value })}
                />
              </div>
            </div>
            <div className="flex justify-end pt-5">
              <ColorButton
              type="submit"
                variant="contained"
                color="primary"
                className={classes.margin}
              >
                Share your story!
              </ColorButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Stories;
