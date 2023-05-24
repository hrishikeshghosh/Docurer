import React from "react";
import { makeStyles } from "@mui/styles";
import bookSLotStyles from "@/public/jss/next-jss-components/bookSlotStyles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import loadingAnimationData from "public/lotties/doctor-search";
import Lottie from "react-lottie";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Divider,
  Grid,
  RadioGroup,
  Rating,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { BiExpandAlt } from "react-icons/bi";
import moment from "moment-timezone";
import dayjs from "dayjs";
import { toast } from "react-hot-toast";

const useStyles = makeStyles(bookSLotStyles);

const book = () => {
  const classes = useStyles();
  const router = useRouter();
  const { docId } = router.query;
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [appointmentData, setAppointmentData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    doctorsId: parseInt(docId),
    paymentType: "CASH",
    amount: 0,
  });
  const [cardDetails, setCardDetails] = useState({
    cardNum: "",
    expiryYear: "",
    expiryMonth: "",
    cvv: "",
  });

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (docId) {
      async function callDoctor() {
        setLoading(true);
        try {
          const { data } = await axios.get(`/api/doctor/get?id=${docId}`);
          setAppointmentData({
            ...appointmentData,
            amount: data.data.fees + 100,
          });
          setDoctorDetails(data.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }

      callDoctor();
    }
  }, [docId]);

  async function makeAppointment() {
    try {
      let details = {
        ...appointmentData,
        ...cardDetails,
        bookingDate: selectedDateTime,
      };
      const { data } = await axios.post(
        "/api/appointment/make-appointment",
        { ...details },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.flag) {
        toast.success("Appointment was successfully made!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }

  function saveCardNum(num) {}

  return (
    <div className={classes.main}>
      {!doctorDetails ? (
        <Lottie options={animationOptions} width={400} height={400} />
      ) : (
        <>
          <div className={classes.pageTitle}>
            <h1>Appointment checkout</h1>
          </div>
          <Grid container className={classes.gridContainer} spacing={5}>
            <Grid item xs={12} sm={8} md={8}>
              <div className={classes.InfoContainer}>
                <h3 className={classes.staticTitles}>Personal Information</h3>
                <div className={classes.inputContainer}>
                  <TextField
                    className={classes.personaltextFields}
                    label="First Name"
                    onChange={(e) =>
                      setAppointmentData({
                        ...appointmentData,
                        firstName: e.target.value,
                      })
                    }
                  />
                  <TextField
                    className={classes.personaltextFields}
                    label="Last Name"
                    onChange={(e) =>
                      setAppointmentData({
                        ...appointmentData,
                        lastName: e.target.value,
                      })
                    }
                  />
                  <TextField
                    className={classes.personaltextFields}
                    label="Email"
                    type="email"
                    onChange={(e) =>
                      setAppointmentData({
                        ...appointmentData,
                        email: e.target.value,
                      })
                    }
                  />
                  <TextField
                    className={classes.personaltextFields}
                    label="Phone"
                    type="tel"
                    onChange={(e) =>
                      setAppointmentData({
                        ...appointmentData,
                        phone: e.target.value,
                      })
                    }
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      className={classes.personaltextFields}
                      label="select booking date"
                      onChange={(newValue) =>
                        setSelectedDateTime(dayjs(newValue.$d))
                      }
                    />
                  </LocalizationProvider>
                </div>
                <Divider
                  orientation="horizontal"
                  style={{ margin: "4% 0", width: "90%" }}
                />
                <div className={classes.paymentInfoContainer}>
                  <h3 className={classes.staticTitles}>Payment Information</h3>
                  <Accordion className={classes.Accord}>
                    <AccordionSummary
                      expandIcon={<BiExpandAlt />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <p className={classes.AccordSummary}>
                        Pay with Debit card
                      </p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className={classes.InfoContainer}>
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "2%",
                          }}
                        >
                          <TextField
                            className={classes.card_upper}
                            label="Name on the card"
                            placeholder="eg. John Doe"
                          />
                          <TextField
                            className={classes.card_upper}
                            label="Card number"
                            type="number"
                            placeholder="eg. 1234 5678 9123 4569"
                            inputProps={{ maxLength: 16 }}
                            onChange={(e) =>
                              setCardDetails({
                                ...cardDetails,
                                cardNum: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "2%",
                          }}
                        >
                          <TextField
                            className={classes.card_lower}
                            label="Expiry month"
                            placeholder="MM"
                            inputProps={{ maxLength: 2 }}
                            type="number"
                            onChange={(e) =>
                              setCardDetails({
                                ...cardDetails,
                                expiryMonth: e.target.value,
                              })
                            }
                          />
                          <TextField
                            className={classes.card_lower}
                            label="Expiry year"
                            placeholder="YY"
                            inputProps={{ maxLength: 2 }}
                            type="number"
                            onChange={(e) =>
                              setCardDetails({
                                ...cardDetails,
                                expiryYear: e.target.value,
                              })
                            }
                          />
                          <TextField
                            className={classes.card_lower}
                            label="CVV"
                            placeholder="eg. 123"
                            type="number"
                            inputProps={{ maxLength: 3 }}
                            onChange={(e) =>
                              setCardDetails({
                                ...cardDetails,
                                CVV: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={classes.Accord}>
                    <AccordionSummary
                      expandIcon={<BiExpandAlt />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <p className={classes.AccordSummary}>Pay with Cash</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p
                        className={classes.AccordSummary}
                        style={{ fontSize: "1rem" }}
                      >
                        Pay with cash at the reception desk when you pay a visit
                        to your appointed doctor
                      </p>
                    </AccordionDetails>
                  </Accordion>
                  <div className={classes.termList}>
                    <Checkbox />
                    <p className={classes.termP}>
                      I have read and accepted{" "}
                      <span className={classes.termS}>Terms & Conditions</span>
                    </p>
                  </div>
                  <Button
                    className={classes.CheckoutButton}
                    onClick={makeAppointment}
                  >
                    Confirm & Pay
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <div className={classes.checkoutDetails}>
                <div className={classes.doctorDetailsContainer}>
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                    className={classes.doctorImage}
                  />
                  <div>
                    <p className={classes.doctorName}>
                      {doctorDetails?.firstName} {doctorDetails?.lastName}
                    </p>
                    <p className={classes.doctorstatic}>
                      {doctorDetails?.description}
                    </p>
                    <p className={classes.doctorstatic}>
                      {doctorDetails?.Specialist_type}
                    </p>
                    <Rating value={doctorDetails?.rating} precision={0.5} />
                  </div>
                </div>
                <div className={classes.bookingDetailsBox}>
                  <p className={classes.detailStaticText}>Date</p>
                  <p className={classes.detailStaticText}>
                    {moment(selectedDateTime).format("MMM Do, YYYY")}
                  </p>
                </div>
                <div className={classes.bookingDetailsBox}>
                  <p className={classes.detailStaticText}>Slot</p>
                  <p className={classes.detailStaticText}>
                    {moment(selectedDateTime).format("LT")}
                  </p>
                </div>
                <div className={classes.bookingDetailsBox}>
                  <p className={classes.detailStaticText}>Consulting Fee</p>
                  <p className={classes.detailStaticText}>
                    {doctorDetails?.fees}
                  </p>
                </div>
                <div className={classes.bookingDetailsBox}>
                  <p className={classes.detailStaticText}>
                    Conventional Charges
                  </p>
                  <p className={classes.detailStaticText}>&#8377; 100</p>
                </div>
                <Divider style={{ width: "80%", margin: "2% auto" }} />
                <div className={classes.bookingDetailsBox}>
                  <p className={classes.totaltext}>Total</p>
                  <p className={classes.totalPrice}>
                    &#8377; {doctorDetails?.fees + 100}
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default book;
