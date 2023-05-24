import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import authStyles from "@/public/jss/next-jss-components/authStyles";
import background from "../public/images/authPageBg.jpg";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import doctorAnim from "../public/lotties/doctor-anim.json";
import doctorAnim2 from "../public/lotties/doctor-loading.json";
import Lottie from "react-lottie";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
const useStyles = makeStyles(authStyles);

const auth = () => {
  const classes = useStyles();
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState(0);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmParssword: "",
    fees: "500",
    Specialist_type: "",
    description: "",
    location: "",
  });

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: isSignUp ? doctorAnim : doctorAnim2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  async function authenticate() {
    try {
      let returnedData;
      if (role === 0) {
        returnedData = await axios.post(
          "/api/patient-auth",
          {
            ...userData,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        returnedData = await axios.post(
          "/api/doctor/doctor_create",
          { ...userData },
          { headers: { "Content-Type": "application/json" } }
        );
      }
      if (returnedData.data.flag) {
        toast.success("Registration Successfull!");
        localStorage.setItem(
          "profile",
          JSON.stringify({
            ...returnedData.data.details,
          })
        );
        setTimeout(() => router.push("/"), 1000);
      } else {
        toast.error(returnedData.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }

  async function SignIn() {
    try {
      const { data } = await axios.put(
        "/api/signin",
        {
          email: userData.email,
          password: userData.password,
          role: role,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.flag) {
        toast.success("Login Successfull!");

        localStorage.setItem(
          "profile",
          JSON.stringify({
            ...data.details,
          })
        );
        setTimeout(() => router.push("/"), 1000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <div className={classes.main}>
      <Grid container className={classes.authBoxMain}>
        <Grid item xs={12} sm={6} md={6} style={{ position: "relative" }}>
          <div className={classes.lottieHolder1}>
            <Lottie options={animationOptions} width={300} height={300} />
          </div>
        </Grid>
        <Grid className={classes.rightBox} item xs={12} sm={6} md={6}>
          <h2 className={classes.title}>
            Sign up as a{" "}
            <span style={{ color: "#537FE7" }}>
              {role === 0 ? "Patient" : "Doctor"}
            </span>
          </h2>
          <div className={classes.textFieldHolder}>
            {isSignUp && (
              <>
                <TextField
                  className={classes.textField}
                  label="First Name"
                  value={userData.firstName}
                  onChange={(e) =>
                    setUserData({ ...userData, firstName: e.target.value })
                  }
                  fullWidth
                />
                <TextField
                  className={classes.textField}
                  label="Last Name"
                  value={userData.lastName}
                  onChange={(e) =>
                    setUserData({ ...userData, lastName: e.target.value })
                  }
                  fullWidth
                />
              </>
            )}
            <TextField
              className={classes.textField}
              label="Email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              fullWidth
            />
            <TextField
              className={classes.textField}
              label="Password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              fullWidth
            />
            {isSignUp && (
              <TextField
                className={classes.textField}
                label="Confirm Password"
                value={userData.confirmParssword}
                onChange={(e) =>
                  setUserData({ ...userData, confirmParssword: e.target.value })
                }
                fullWidth
              />
            )}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                className={classes.textField}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                label="Role"
                onChange={(e) => setRole(e.target.value)}
              >
                <MenuItem value={0}>Patient</MenuItem>
                <MenuItem value={1}>Doctor</MenuItem>
              </Select>
            </FormControl>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {role === 1 && isSignUp && (
                <TextField
                  className={classes.textField}
                  label="Specialist"
                  value={userData.Specialist_type}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      Specialist_type: e.target.value,
                    })
                  }
                  fullWidth
                />
              )}
              {role === 1 && isSignUp && (
                <TextField
                  className={classes.textField}
                  label="Degrees"
                  value={userData.description}
                  onChange={(e) =>
                    setUserData({ ...userData, description: e.target.value })
                  }
                  fullWidth
                />
              )}
              {role === 1 && isSignUp && (
                <TextField
                  className={classes.textField}
                  label="fees"
                  value={userData.fees}
                  onChange={(e) =>
                    setUserData({ ...userData, fees: e.target.value })
                  }
                  fullWidth
                />
              )}
              {role === 1 && isSignUp && (
                <TextField
                  className={classes.textField}
                  label="location"
                  value={userData.location}
                  onChange={(e) =>
                    setUserData({ ...userData, location: e.target.value })
                  }
                  fullWidth
                />
              )}
            </div>

            <Button
              className={classes.mainButton}
              onClick={() => {
                if (isSignUp) authenticate();
                else SignIn();
              }}
            >
              {isSignUp ? "Sign up" : "Sign in"}
            </Button>
            {isSignUp ? (
              <p className={classes.frontierText}>
                Already have an account?{" "}
                <span
                  style={{
                    color: "#537FE7",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsSignUp(false);
                  }}
                >
                  Sign in!
                </span>
              </p>
            ) : (
              <p className={classes.frontierText}>
                Register for a new account{" "}
                <span
                  style={{
                    color: "#537FE7",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsSignUp(true);
                  }}
                >
                  Sign up!
                </span>
              </p>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default auth;
