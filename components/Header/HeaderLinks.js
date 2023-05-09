import React from "react";
import { Avatar, Button, List, ListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HeaderStyles from "@/public/jss/next-jss-components/HeaderStyles";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Link from "next/link";
import { BiArchive } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { useSession } from "next-auth/react";

const useStyles = makeStyles(HeaderStyles);
const HeaderLinks = () => {
  const classes = useStyles();
  const { data: session, status } = useSession();
  let productList = [
    <Link href={"/diagnose"} className={classes.links}>
      <p className="hover-underline-animation">Test For Disease</p>
    </Link>,
    <Link href={"/browse-doctor"} className={classes.links}>
      <p className="hover-underline-animation">Get Your Doctor Appointment</p>
    </Link>,
  ];
  let pages = [
    <Link href={"/about-us"} className={classes.links}>
      <p className="hover-underline-animation">About us</p>
    </Link>,
    <Link href={"/our-team"} className={classes.links}>
      <p className="hover-underline-animation">Our team</p>
    </Link>,
    <Link href={"/faq"} className={classes.links}>
      <p className="hover-underline-animation">FAQ's</p>
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
        <Button className={classes.navButtons}>
          About us <RiTeamFill className={classes.navIcons} />
        </Button>
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
          <Button className={classes.signInButton}>Sign in</Button>
        )}
      </ListItem>
    </List>
  );
};

export default HeaderLinks;
