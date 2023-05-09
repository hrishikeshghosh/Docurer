import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Popper,
  MenuList,
  MenuItem,
  Paper,
  ClickAwayListener,
  Grow,
  Switch,
  Slide,
  Box,
} from "@mui/material";
import { BiDna } from "react-icons/bi";
import { makeStyles } from "@mui/styles";
import customDropdownStyles from "@/public/jss/next-jss-components/customDropdownStyles";

const useStyle = makeStyles(customDropdownStyles);

const CustomDropdown = ({ title, options }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const containerRef = useRef(null);
  const classes = useStyle();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Button
        className={classes.button}
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {title}
        <BiDna style={{ fontSize: "1rem", margin: "0 5px" }} />
      </Button>
      <Popper
        className={classes.popper}
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
        disablePortal
        ref={containerRef}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Slide direction="up" in={open} container={containerRef.current}>
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {options.map((option) => (
                      <MenuItem className={classes.menuItem}>{option}</MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Slide>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default CustomDropdown;
