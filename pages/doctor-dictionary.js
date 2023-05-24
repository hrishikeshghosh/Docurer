import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import doctorDictStyles from "@/public/jss/next-jss-components/doctorDictStyles";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { GrLocation } from "react-icons/gr";
import { BiPlusMedical } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import DoctorCard from "@/components/DoctorCards/DoctorCard";
import axios from "axios";
import { toast } from "react-hot-toast";

const useStyles = makeStyles(doctorDictStyles);

const doctorDictionary = () => {
  const classes = useStyles();
  const [doctorData, setDoctorData] = useState([]);
  const [filters, setFilters] = useState({
    price: null,
    location: "",
    type: "",
    ratings: null,
  });

  async function filterAndFetchData() {
    console.log(filters);
    try {
      const { data } = await axios.post(
        "api/doctor/getMany",
        { ...filters },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      if (data.flag) setDoctorData(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/doctor/getAll");
        if (data.flag) setDoctorData(data.data);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong!");
      }
    })();
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.filterBox}>
        <div className={classes.topinteractivePortal}>
          <h1 className={classes.title}>Search Doctor, Make an Appointment</h1>
          <h3 className={classes.subtitle}>
            Discover the best doctors, clinic & hospital the city nearest to
            you.
          </h3>
          <div className={classes.filterFieldHolder}>
            <TextField
              label="Search location"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GrLocation />
                  </InputAdornment>
                ),
              }}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
            />
            <FormControl style={{ width: "300px" }}>
              <InputLabel id="demo-simple-select-label2">
                Filter by specialists
              </InputLabel>
              <Select
                labelId="demo-simple-select-label2"
                label="Filter by specialists"
                onChange={(e) =>
                  setFilters({ ...filters, type: e.target.value })
                }
              >
                <MenuItem value={"cardiologist"}>Cardiologist</MenuItem>
                <MenuItem value={"diabetologist"}>Diabetologist</MenuItem>
                <MenuItem value={"nephrologist"}>Nephrologist</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ width: "300px" }}>
              <InputLabel id="demo-simple-select-label1">
                Filter by price
              </InputLabel>
              <Select
                labelId="demo-simple-select-label1"
                label="Filter by price"
                onChange={(e) =>
                  setFilters({ ...filters, price: e.target.value })
                }
              >
                <MenuItem value={3}>Rs.1200 to Rs.1500</MenuItem>
                <MenuItem value={2}>Rs.800 to Rs.1200</MenuItem>
                <MenuItem value={1}>Rs.500 to Rs.800</MenuItem>
              </Select>
            </FormControl>

            <FormControl style={{ width: "300px" }}>
              <InputLabel id="demo-simple-select-label2">
                Filter by ratings
              </InputLabel>
              <Select
                labelId="demo-simple-select-label2"
                label="Filter by ratings"
                onChange={(e) =>
                  setFilters({ ...filters, ratings: e.target.value })
                }
              >
                <MenuItem value={5}>5 stars</MenuItem>
                <MenuItem value={4}>4 stars</MenuItem>
                <MenuItem value={3}>3 stars</MenuItem>
                <MenuItem value={2}>2 stars</MenuItem>
                <MenuItem value={1}>1 stars</MenuItem>
              </Select>
            </FormControl>
            <IconButton
              className={classes.docSearchButton}
              onClick={filterAndFetchData}
            >
              <BsSearch />
            </IconButton>
          </div>
        </div>

        <img
          className={classes.coverImgHolder}
          src="https://doccure.dreamguystech.com/angular/template/search-bg.7b635a021f31511e.png"
        />
      </div>
      <div className={classes.container}>
        <h2 className={classes.h2Title}>Browse your doctors here</h2>
        <div className={classes.cardHolder}>
          {doctorData.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default doctorDictionary;
