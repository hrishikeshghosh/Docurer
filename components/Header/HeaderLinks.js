import React, { useEffect, useState } from "react";
import { Avatar, Button, List, ListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HeaderStyles from "@/public/jss/next-jss-components/HeaderStyles";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Link from "next/link";
import { BiArchive } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const useStyles = makeStyles(HeaderStyles);
const HeaderLinks = () => {
  const classes = useStyles();
  const [session, setSession] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("profile"));
    if (data) {
      setSession(true);
    }
  });

  let productList = [
    <Link
      href={"/pathlab/testing-room?test=diabetes"}
      className={classes.links}
    >
      <p className="hover-underline-animation">Test For Diabetes</p>
    </Link>,
    <Link
      href={"/pathlab/testing-room?test=heart-disease"}
      className={classes.links}
    >
      <p className="hover-underline-animation">Test For Heart Failure</p>
    </Link>,
    <Link
      href={"/pathlab/testing-room?test=kidney-disease"}
      className={classes.links}
    >
      <p className="hover-underline-animation">
        Test For Chronic Kidney Disease
      </p>
    </Link>,
    <Link href={"/doctor-dictionary"} className={classes.links}>
      <p className="hover-underline-animation">Make an appointment</p>
    </Link>,
  ];

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown options={productList} title={"services"} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button className={classes.navButtons}>
          Archive <BiArchive className={classes.navIcons} />
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href={"/about-us"}>
          <Button className={classes.navButtons}>
            About us <RiTeamFill className={classes.navIcons} />
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button className={classes.navButtons}>
          Contact us <AiFillPhone className={classes.navIcons} />
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {session ? (
          <Avatar />
        ) : (
          <Button
            className={classes.signInButton}
            onClick={() => {
              router.push("/auth");
            }}
          >
            Sign in
          </Button>
        )}
      </ListItem>
    </List>
  );
};

export default HeaderLinks;
