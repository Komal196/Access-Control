// // import * as React from "react";
// // import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// // // import AppBar from '@mui/material/AppBar';
// // // import Box from '@mui/material/Box';
// // import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
// // import { Link } from "@mui/material";
// // // import Toolbar from '@mui/material/Toolbar';
// // // import IconButton from '@mui/material/IconButton';

// // // import MenuIcon from '@mui/icons-material/Menu';

// // export default function Sidebar() {
// //   const [isOpen, setIsOpen] = React.useState(false);

// //   const handleClick = () => {
// //     setIsOpen(true);
// //   };
// //   return (
// //     <Box>
// //       <IconButton size="large" variant="contained" onClick={handleClick}>
// //         <ArrowForwardIosIcon />
// //       </IconButton>
// //       <Drawer
// //         aria-label="muiDrawer"
// //         anchor="left"
// //         open={isOpen}
// //         onClose={() => setIsOpen(false)}
// //       >
// //         <Stack width={200} spacing={2} m={2}>
// //           <Typography
// //             variant="h6"
// //             sx={{ color: "black", fontSize: "1rem", padding: "20px" }}
// //           >
// //             Access Control
// //           </Typography>
// //           <Link
// //             href="/home"
// //             underline="none" // Remove the default underline
// //           >
// //             Home
// //           </Link>
// //           <Link href="/admin" underline="none" >
// //             Admin
// //           </Link>
// //           <Link href="/accessControl" underline="none">
// //             Access Control
// //           </Link>
// //         </Stack>
// //       </Drawer>
// //     </Box>
// //   );
// // }


// import * as React from "react";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import HomeIcon from "@mui/icons-material/Home";
// import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
// import SecurityIcon from "@mui/icons-material/Security";
// import { Box, Drawer, IconButton, Stack, Typography, Link } from "@mui/material";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const handleClick = () => {
//     setIsOpen(!isOpen); // Toggle the drawer open/close state
//   };

//   return (
//     <Box>
//       <IconButton size="large" onClick={handleClick}>
//         <ArrowForwardIosIcon />
//       </IconButton>

//       <Drawer
//         aria-label="muiDrawer"
//         anchor="left"
//         open={isOpen}
//         onClose={() => setIsOpen(false)}
//       >
//         <Stack
//           width={240}
//           height="100vh" // Full height
//           sx={{ backgroundColor: "blue", color: "white", padding: "20px" }} // Blue background with padding
//         >
//           <Typography
//             variant="h6"
//             sx={{ marginBottom: "20px", fontWeight: 'bold' }}
//           >
//             Access Control
//           </Typography>
//           <Link href="/home" underline="none" sx={{ color: "white" }}>
//             <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: "15px" }}>
//               <HomeIcon sx={{ color: "white" }} /> {/* Home Icon */}
//               <Typography>Home</Typography>
//             </Stack>
//           </Link>
//           <Link href="/admin" underline="none" sx={{ color: "white" }}>
//             <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: "15px" }}>
//               <AdminPanelSettingsIcon sx={{ color: "white" }} /> {/* Admin Icon */}
//               <Typography>Admin</Typography>
//             </Stack>
//           </Link>
//           <Link href="/accessControl" underline="none" sx={{ color: "white" }}>
//             <Stack direction="row" spacing={2} alignItems="center">
//               <SecurityIcon sx={{ color: "white" }} /> {/* Access Control Icon */}
//               <Typography>Access Control</Typography>
//             </Stack>
//           </Link>
//         </Stack>
//       </Drawer>

//       {/* Compact view when the drawer is closed */}
//       {!isOpen && (
//         <Stack
//           direction="column"
//           spacing={2}
//           sx={{ position: "fixed", top: "20%", left: 10 }}
//         >
//           <Link href="/home" underline="none" color="black">
//             <HomeIcon />
//           </Link>
//           <Link href="/admin" underline="none" color="black">
//             <AdminPanelSettingsIcon />
//           </Link>
//           <Link href="/accessControl" underline="none" color="black">
//             <SecurityIcon />
//           </Link>
//         </Stack>
//       )}
//     </Box>
//   );
// }


import * as React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HomeIcon from "@mui/icons-material/Home";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SecurityIcon from "@mui/icons-material/Security";
import { Box, Drawer, IconButton, Stack, Typography, Link } from "@mui/material";

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen); // Toggle the drawer open/close state
  };

  return (
    <Box>
      {/* IconButton to toggle Drawer */}
      <IconButton size="large" onClick={handleClick}>
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Drawer Component */}
      <Drawer
        aria-label="muiDrawer"
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Stack
          width={240}
          height="100vh" // Full height
          sx={{ backgroundColor: "blue", color: "white", padding: "20px" }} // Blue background with padding
        >
          <Typography
            variant="h6"
            sx={{ marginBottom: "20px", fontWeight: 'bold' }}
          >
            Access Control
          </Typography>
          <Link href="/home" underline="none" sx={{ color: "white" }}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: "15px" }}>
              <HomeIcon sx={{ color: "white" }} /> {/* Home Icon */}
              <Typography>Home</Typography>
            </Stack>
          </Link>
          <Link href="/admin" underline="none" sx={{ color: "white" }}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: "15px" }}>
              <AdminPanelSettingsIcon sx={{ color: "white" }} /> {/* Admin Icon */}
              <Typography>Admin</Typography>
            </Stack>
          </Link>
          <Link href="/accessControl" underline="none" sx={{ color: "white" }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <SecurityIcon sx={{ color: "white" }} /> {/* Access Control Icon */}
              <Typography>Access Control</Typography>
            </Stack>
          </Link>
        </Stack>
      </Drawer>

      {/* Compact view when the drawer is closed */}
      {!isOpen && (
        <Box
          direction="column"
          spacing={2}
          sx={{
            position: "fixed",
            top: "20%", // Adjust as needed
            left: 10,
            height: "100vh",
            backgroundColor: "blue", // Blue background
            padding: "10px", // Padding for aesthetics
            borderRadius: "5px", // Optional: rounded corners
          }}
        >
          <Link href="/home" underline="none" sx={{ color: "white", display: "flex", alignItems: "center", padding: "5px" }}>
            <HomeIcon sx={{ color: "white", marginRight: 1 }} />
          </Link>
          <Link href="/admin" underline="none" sx={{ color: "white", display: "flex", alignItems: "center", padding: "5px" }}>
            <AdminPanelSettingsIcon sx={{ color: "white", marginRight: 1 }} />
          </Link>
          <Link href="/accessControl" underline="none" sx={{ color: "white", display: "flex", alignItems: "center", padding: "5px" }}>
            <SecurityIcon sx={{ color: "white", marginRight: 1 }} />
          </Link>
        </Box>
      )}
    </Box>
  );
}
