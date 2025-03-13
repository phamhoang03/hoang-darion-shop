import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

const NavigationMobie = ({ listMenu, toggleDrawer }) => {
  return (
    <div>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))} */}
          {/* <nav className="mr-28 hidden lg:block ml-auto"> */}
          {/* <ul className="flex justify-center items-center gap-10"> */}
          {listMenu.map((menu, index) => (
            <Link key={menu.id} to={menu.to}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>

                  <ListItemText primary={menu.title} />
                </ListItemButton>
              </ListItem>
            </Link>
            // <li key={menu.id} className="relative">
            //   <Link
            //     to={menu.to}
            //     className="after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px]
            //                 after:transition-all after:duration-300 after:w-full after:scale-x-0
            //                 hover:after:scale-x-100"
            //   >
            //     {menu.title}
            //   </Link>
            // </li>
          ))}
          {/* </ul> */}
          {/* </nav> */}
        </List>
      </Box>
    </div>
  );
};

export default NavigationMobie;
