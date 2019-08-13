import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import './ScrapHeader.css'

function ScrapHeader({ handle }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {

    setAnchorEl(null);
  }
  function handleLogout() {
    setAnchorEl(null);
    handle()
  }

  function handleProfile(event) {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  }
  return (
    <div justify="space-between" className="ScrapBookHeading"  >
      <label > SCRAPBOOK </label>
      <Button variant="contained" color="primary" onClick={handleClick}>
        HOME
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
   
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>SignOut</MenuItem>
      </Menu>
    </div>
  );
}

ScrapHeader.propTypes = {
  handle: PropTypes.func,
}
export default ScrapHeader;